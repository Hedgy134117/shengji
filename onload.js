import { createPlayer, populatePlayersField, recordGame, setDateToNow } from "./forms.js";
import { loadGames, loadPlayers, sortGames } from "./games.js";

async function reload() {
    await loadPlayers();
    await loadGames();
    // i hate async
    setTimeout(() => {
        sortGames();
    }, 2000);
}

async function reloadAndPopulate() {
    reload();
    populatePlayersField();
}

window.onload = async () => {
    await reloadAndPopulate();

    const addPlayerForm = document.querySelector("#addPlayer");
    addPlayerForm.addEventListener("submit", event => {
        event.preventDefault();
        createPlayer(new FormData(event.target)).then(reloadAndPopulate);
    });

    const recordGameForm = document.querySelector("#recordGame");
    recordGameForm.addEventListener("submit", event => {
        event.preventDefault();
        recordGame(new FormData(event.target)).then(reload);
    })

    const setToNowButton = document.querySelector("#setToNow");
    setToNowButton.addEventListener("click", setDateToNow);

    setDateToNow();
}