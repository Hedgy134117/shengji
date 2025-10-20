import { db } from "$lib/firebase/client";
import type { Player } from "$lib/types";
import { collection, getDocs } from "firebase/firestore";

export async function getPlayerMap(): Promise<Record<string, Player>> {
    const docRef = await getDocs(collection(db, "players"));
    const playerMap: Record<string, Player> = {};
    for (let doc of docRef.docs) {
        playerMap[doc.id] = doc.data() as Player;
    }

    return playerMap
}

// export async function getPlayer(id: string): Promise<Player | null> {
//     const docRef = doc(db, "players", id);
//     const docSnap = await getDoc(docRef);

//     if (!docSnap.exists()) {
//         return null;
//     }

//     return {
//         id: id,
//         ...docSnap.data()
//     } as Player;
// }