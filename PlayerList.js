import { collection, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
import { db } from "./firebase.js";

export class PlayerList {
    static players = {};

    static async initializePlayerList() {
        return getDocs(query(collection(db, "players"), orderBy("name", "desc"))).then(querySnapshot => {
            querySnapshot.forEach(doc => {
                PlayerList.players[doc.id] = doc.data();
            })
        })
    }

    static getPlayerById(id) {
        if (id in PlayerList.players) {
            return PlayerList.players[id];
        }
        return null;
    }

    static getPlayerList() {
        return Object.values(PlayerList.players);
    }
}