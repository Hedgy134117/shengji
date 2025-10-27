/*  Unused currently, might be implemented in the future prevent constant refetching.
    But right now, not worth the hastle
*/
import { collection, onSnapshot, type DocumentData } from "firebase/firestore";
import { db } from "$lib/firebase/client";
import type { Player } from "$lib/types";

class PlayerMapStore {
    playerMap: Record<string, Player> = $state({});

    // Use a private static property to hold the single instance
    private static instance: PlayerMapStore;

    // Make the constructor private to prevent direct instantiation
    private constructor() {
        const playersCollection = collection(db, "players");

        // Connect to Firestore and listen for real-time changes
        $effect(() => {
            const unsubscribe = onSnapshot(playersCollection, (snapshot) => {
                const newPlayerMap: Record<string, Player> = {};
                snapshot.forEach((doc) => {
                    newPlayerMap[doc.id] = {
                        id: doc.id,
                        ...doc.data(),
                    } as Player;
                });
                this.playerMap = newPlayerMap;
            });
            return unsubscribe;
        });
    }

    // Create a static method to get the single instance
    public static getInstance(): PlayerMapStore {
        if (!PlayerMapStore.instance) {
            PlayerMapStore.instance = new PlayerMapStore();
        }
        return PlayerMapStore.instance;
    }
}

export const playerMapStore = PlayerMapStore.getInstance();
