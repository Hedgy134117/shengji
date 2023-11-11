import { collection, getDoc, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
import { db } from "./firebase.js";

let allPlayerNames = [];
export async function loadPlayers() {
    let playerList = document.querySelector(".players");
    playerList.querySelectorAll(".player").forEach(player => player.remove());
    playerList = playerList.querySelector(".dates");

    const querySnapshot = await getDocs(query(collection(db, "players"), orderBy("name", "desc")));
    querySnapshot.forEach((doc) => {
        const player = doc.data();
        const name = player.name;

        const HTML = `<div class="player" data-name=${name}><p class="player-name">${name}</p></div>`;
        playerList.insertAdjacentHTML("afterend", HTML);

        if (!allPlayerNames.includes(name)) {
            allPlayerNames.push(name);
        }
    });
}

export async function loadGames() {
    document.querySelectorAll(".game").forEach(el => el.remove());
    document.querySelectorAll(".date").forEach(el => el.remove());
    const querySnapshot = await getDocs(query(collection(db, "games"), orderBy("date", "desc")));
    querySnapshot.forEach(async (doc) => {
        const game = doc.data();
        await loadGame(game);
    });
}

async function loadGame(game) {
    let gamePlayers = await playerRefsToArray(game.players);
    let gameDate = new Date(game.date.toDate().toLocaleString("en-US", { timeZone: "America/New_York" }));

    let dateHTML = `<div class="date" data-time=${gameDate.toISOString()}><p>${gameDate.getMonth() + 1}/${gameDate.getDate()}/${gameDate.getFullYear()}</p></div>`;
    document.querySelector(".dates").insertAdjacentHTML("beforeend", dateHTML);

    for (let playerName of allPlayerNames) {
        let gamePlayerFound = gamePlayers.find(player => player.name == playerName);
        if (gamePlayerFound !== undefined) {
            let i = gamePlayers.indexOf(gamePlayerFound);
            const HTML = `<div class="game ${game.staged[i] ? 'staged' : ''}" data-time=${gameDate.toISOString()}><p>${scoreValueToString(game.scores[i])}</p></div>`;
            document.querySelector(`[data-name=${playerName}]`).insertAdjacentHTML("beforeend", HTML);
        } else {
            const HTML = `<div class="game empty" data-time=${gameDate.toISOString()}><p>x</p></div>`;
            document.querySelector(`[data-name=${playerName}]`).insertAdjacentHTML("beforeend", HTML);
        }
    }
}

function scoreValueToString(val) {
    if (val <= 10) {
        return val;
    }
    return { 11: "J", 12: "Q", 13: "K" }[val];
}

async function playerRefsToArray(players) {
    let arr = [];
    for (let i = 0; i < players.length; i++) {
        let player = await getDoc(players[i]);
        arr.push(player.data());
    }
    return arr;
}

export async function sortGames() {
    for (let playerContainer of document.querySelectorAll(".player, .dates")) {
        // https://stackoverflow.com/a/51422477
        let sorted = Array.from(playerContainer.querySelectorAll(".game, .date")).sort((a, b) => {
            return new Date(a.dataset.time).getTime() - new Date(b.dataset.time).getTime();
        });
        for (let game of playerContainer.querySelectorAll(".game")) {
            game.remove();
        }
        sorted.forEach(obj => playerContainer.appendChild(obj))
    }
}