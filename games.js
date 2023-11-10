import { collection, getDoc, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
import { db } from "./firebase.js";

async function loadPlayers() {
    const playerList = document.querySelector(".players");

    const querySnapshot = await getDocs(query(collection(db, "players"), orderBy("name", "desc")));
    querySnapshot.forEach((doc) => {
        const player = doc.data();
        const name = player.name;

        const HTML = `<div class="player" data-name=${name}><p class="player-name">${name}</p></div>`;
        playerList.insertAdjacentHTML("afterbegin", HTML);
    });
}

async function loadGames() {
    const querySnapshot = await getDocs(query(collection(db, "games"), orderBy("date", "desc")));
    querySnapshot.forEach(async (doc) => {
        const game = doc.data();
        await loadGame(game);
    });
}

async function loadGame(game) {
    for (let i = 0; i < game.players.length; i++) {
        getDoc(game.players[i]).then(data => data.data()).then(player => {
            const HTML = `<div class="game ${game.staged[i] ? 'staged' : ''}"><p>${game.scores[i]}</p></div>`;
            document.querySelector(`[data-name=${player.name}]`).querySelector(".player-name").insertAdjacentHTML("afterend", HTML);
        });
    }
}

window.onload = async () => {
    await loadPlayers();
    await loadGames();
}