import { db } from "$lib/firebase/client";
import type { Player } from "$lib/types";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export async function getPlayerMap(): Promise<Record<string, Player>> {
    const docRef = await getDocs(query(
        collection(db, "players"),
        orderBy("name")
    ));
    const playerMap: Record<string, Player> = {};
    for (let doc of docRef.docs) {
        playerMap[doc.id] = doc.data() as Player;
    }

    return playerMap
}