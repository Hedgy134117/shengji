import { createPlayer, populatePlayersField, recordGame, setDateToNow } from "./forms.js";
import { loadGames, loadPlayers, sortGames } from "./games.js";

window.onload = async () => {
    await loadPlayers();
    await loadGames();
    // i hate async
    setTimeout(() => {
        sortGames();
    }, 2000);

    populatePlayersField();
    console.log("hello");

    const addPlayerForm = document.querySelector("#addPlayer");
    addPlayerForm.addEventListener("submit", event => {
        event.preventDefault();
        createPlayer(new FormData(event.target));
    });

    const recordGameForm = document.querySelector("#recordGame");
    recordGameForm.addEventListener("submit", event => {
        event.preventDefault();
        recordGame(new FormData(event.target));
    })

    setDateToNow();
}