import { collection, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
import { db } from "./firebase.js";
import { GameList } from "./GameList.js";
import { Player } from "./Player.js";

export class PlayerList {
    static players = [];

    static async initializePlayerList() {
        return getDocs(query(collection(db, "players"), orderBy("name", "desc"))).then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = doc.data();
                this.players.push(new Player(data["name"], data["level"], data["prestige"]))
            })
        })
    }

    static getPlayerById(id) {
        for (let player of this.players) {
            console.log(player + " " + id)
            if (player.id === id) {
                return player;
            }
        }
        return null;
    }

    static addGameToPlayer(game, playerId) {
        this.getPlayerById(playerId).addGame(game);
    }

    static getPlayerIdByName(name) {
        for (const player of this.players) {
            if (player.name === name) {
                return id;
            }
        }
        return null;
    }

    static getPlayerList() {
        return PlayerList.players;
    }
}