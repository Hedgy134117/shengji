import { GameList } from "./GameList.js";
import { PlayerList } from "./PlayerList.js";

export function loadPlayers() {
    let playerList = document.querySelector(".players");
    playerList.querySelectorAll(".player").forEach(player => player.remove());
    playerList = playerList.querySelector(".dates");

    PlayerList.getPlayerList().forEach(player => {
        const name = player.name;
        const HTML = `<div class="player" data-name=${name}><p class="player-name">${name}</p></div>`;
        playerList.insertAdjacentHTML("afterend", HTML);
    })
}

export function loadGames() {
    document.querySelectorAll(".game").forEach(el => el.remove());
    document.querySelectorAll(".date").forEach(el => el.remove());
    GameList.getGameList().forEach(game => loadGame(game));
}

function loadGame(game) {
    let gameDate = new Date(game.date.toDate().toLocaleString("en-US", { timeZone: "America/New_York" }));

    let dateHTML = `<div class="date" data-time=${gameDate.toISOString()}><p>${gameDate.getMonth() + 1}/${gameDate.getDate()}/${gameDate.getFullYear()}</p></div>`;
    document.querySelector(".dates").insertAdjacentHTML("beforeend", dateHTML);

    for (let player of PlayerList.getPlayerList()) {
        let gamePlayerFound = game.players.find(_player => player.name == _player.name);
        if (gamePlayerFound !== undefined) {
            let i = game.players.indexOf(gamePlayerFound);
            const HTML = `<div class="game ${game.staged[i] ? 'staged' : ''}" data-time=${gameDate.toISOString()}><p>${scoreValueToString(game.scores[i])}</p></div>`;
            document.querySelector(`[data-name=${player.name}]`).insertAdjacentHTML("beforeend", HTML);
        } else {
            const HTML = `<div class="game empty" data-time=${gameDate.toISOString()}><p>x</p></div>`;
            document.querySelector(`[data-name=${player.name}]`).insertAdjacentHTML("beforeend", HTML);
        }
    }
}

function scoreValueToString(val) {
    if (val <= 10) {
        return val;
    }
    return { 11: "J", 12: "Q", 13: "K" }[val];
}

export function sortGames() {
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