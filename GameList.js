import { collection, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
import { PlayerList } from "./PlayerList.js";
import { db } from "./firebase.js";

export class GameList {
    static games = [];

    static async initializeGameList() {
        return getDocs(query(collection(db, "games"), orderBy("date", "desc"))).then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const game = doc.data();
                for (let i = 0; i < game.players.length; i++) {
                    const id = game.players[i].id;
                    game.players[i] = PlayerList.getPlayerById(id);
                    PlayerList.addGameToPlayer(game, id);
                }
                GameList.games.push(game);
            });
        })
    }

    static getGameList() {
        return GameList.games;
    }
}