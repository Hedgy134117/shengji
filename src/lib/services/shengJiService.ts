import { db } from "$lib/firebase/client";
import type { Player, PlayerState, ShengjiGame, ShengjiSession } from "$lib/types";
import { advanceRank } from "$lib/utils/rankCalculation";
import { addDoc, collection, getDocs, limit, orderBy, query, Timestamp, where } from "firebase/firestore";

const COLLECTION = "shengji-sessions";

function cloneStateMap(state: Record<string, PlayerState>): Record<string, PlayerState> {
    const newState: Record<string, PlayerState> = {};
    for (let playerId in state) {
        newState[playerId] = {
            rank: state[playerId].rank,
            onStage: state[playerId].onStage,
            prestige: state[playerId].prestige
        };
    }
    return newState;
}

export function calculateNewState(
    currentState: Record<string, PlayerState>,
    winningTeam: string[],
    losingTeam: string[],
    winTier: 1 | 2 | 3
): Record<string, PlayerState> {
    const newState = cloneStateMap(currentState);
    const rankGain = { 1: 1, 2: 2, 3: 3 }[winTier];
    const offStageGain = { 1: 0, 2: 1, 3: 2 }[winTier];

    for (const playerId of winningTeam) {
        const player = newState[playerId];
        const advanced = advanceRank(player.rank, player.onStage ? rankGain : offStageGain);
        player.onStage = true;
        player.rank = advanced.rank;
        player.prestige = advanced.prestige;
    }

    for (const playerId of losingTeam) {
        const player = newState[playerId];
        player.onStage = false;
    }

    return newState;
}

export async function getAllSessions(): Promise<ShengjiSession[]> {
    const docRef = await getDocs(collection(db, COLLECTION));
    const sessions: ShengjiSession[] = [];
    for (const doc of docRef.docs) {
        const data = doc.data();
        sessions.push({
            ...data,
            id: doc.id,
            date: (data.date as Timestamp).toDate()
        } as ShengjiSession);
    }

    return sessions
}

function getNewPlayerState(): PlayerState {
    return {
        rank: 2,
        onStage: true,
        prestige: 0
    } as PlayerState;
}

export async function getAllPlayerStates(playerMap: Record<string, Player>): Promise<Record<string, PlayerState>> {
    const docRef = await getDocs(query(
        collection(db, COLLECTION),
        orderBy("date", "desc"),
    ));

    const states: Record<string, PlayerState> = {};
    for (const doc of docRef.docs) {
        const session = doc.data() as ShengjiSession;
        const mostRecentGame = getMostRecentGame(session);

        for (let playerId in mostRecentGame.stateAfter) {
            if (!(playerId in states)) {
                states[playerId] = mostRecentGame.stateAfter[playerId];
            }
        }
    }

    for (const playerId in playerMap) {
        if (!(playerId in states)) {
            states[playerId] = getNewPlayerState();
        }
    }

    return states;
}

export async function getPlayerState(playerId: string): Promise<PlayerState> {
    const docRef = await getDocs(query(
        collection(db, COLLECTION),
        where("players", "array-contains", playerId),
        orderBy("date", "desc"),
        limit(1)
    ));

    if (docRef.empty) {
        return { rank: 2, onStage: true, prestige: 0 };
    }

    const session = docRef.docs[0].data() as ShengjiSession;
    const mostRecentGame = getMostRecentGame(session);

    return mostRecentGame.stateAfter[playerId];
}

function getMostRecentGame(session: ShengjiSession): ShengjiGame {
    return session.games.sort((a, b) => b.gameNum - a.gameNum)[0];
}

export async function createSession(session: Omit<ShengjiSession, "id">) {
    const docRef = await addDoc(collection(db, COLLECTION), session);
    return docRef.id;
}