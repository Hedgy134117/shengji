import { Timestamp, addDoc, collection, doc, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
import { db } from "./firebase.js";

export async function createPlayer(formData) {
    let staged = formData.get("staged");
    if (staged === null) {
        staged = false;
    } else {
        staged = true;
    }

    return addDoc(collection(db, "players"), {
        name: formData.get("name"),
        level: parseInt(formData.get("level")),
        staged: staged,
        prestige: parseInt(formData.get("prestige"))
    });
}

export async function recordGame(formData) {
    let currentPlayers = [];
    let playerRefs = [];
    for (let name of Array.from(formData.keys())) {
        if (name.includes("-") || name.includes("date")) {
            continue;
        }

        currentPlayers.push(name);
        playerRefs.push(doc(db, `players/${players[name]}`));
    }


    let playerScores = [];
    for (let name of currentPlayers) {
        playerScores.push(parseInt(formData.get(`${name}-score`)));
    }

    let playerStaged = [];
    for (let name of currentPlayers) {
        if (formData.get(`${name}-stage`) !== null) {
            playerStaged.push(true);
        } else {
            playerStaged.push(false);
        }
    }

    console.log({
        date: Timestamp.fromDate(new Date(formData.get("date"))),
        players: playerRefs,
        scores: playerScores,
        staged: playerStaged
    });

    return addDoc(collection(db, "games"), {
        date: Timestamp.fromDate(new Date(formData.get("date"))),
        players: playerRefs,
        scores: playerScores,
        staged: playerStaged
    });
}

let players = {};
export async function populatePlayersField() {
    const playerList = document.querySelector("#playerList");
    playerList.innerHTML = "";

    const querySnapshot = await getDocs(query(collection(db, "players"), orderBy("name", "desc")));
    querySnapshot.forEach((doc) => {
        const player = doc.data();
        const name = player.name;

        players[name] = doc.id;

        const HTML = `<li>
                <label for="${name}">
                    <span>${name}</span>
                </label>
                <input type="checkbox" id="${name}" name="${name}" />
            </li>`;
        playerList.insertAdjacentHTML("afterbegin", HTML);

        const checkbox = playerList.querySelector(`#${name}`);
        checkbox.addEventListener("change", event => addOrRemoveScoreInput(event.target))
        checkbox.addEventListener("change", event => addOrRemoveStageInput(event.target))
    });
}

function addOrRemoveScoreInput(checkbox) {
    const scoreList = document.querySelector("#scoreList");

    // Remove the score input
    if (!checkbox.checked) {
        scoreList.querySelector(`#${checkbox.name}-score`).parentElement.remove();
        return;
    }

    // Add the score input
    // TODO: make the default value whatever they currently have
    const HTML = `<li>
                <label for="${checkbox.name}-score">
                    <span>${checkbox.name}</span>
                </label>
                <input type="number" id="${checkbox.name}-score" name="${checkbox.name}-score" value="2" required />
            </li>`;
    scoreList.insertAdjacentHTML("beforeend", HTML);
}

function addOrRemoveStageInput(checkbox) {
    const stageList = document.querySelector("#stageList");

    // Remove the score input
    if (!checkbox.checked) {
        stageList.querySelector(`#${checkbox.name}-stage`).parentElement.remove();
        return;
    }

    // Add the score input
    const HTML = `<li>
                <label for="${checkbox.name}-stage">
                    <span>${checkbox.name}</span>
                </label>
                <input type="checkbox" id="${checkbox.name}-stage" name="${checkbox.name}-stage" />
            </li>`;
    stageList.insertAdjacentHTML("beforeend", HTML);
}

export function setDateToNow() {
    // https://stackoverflow.com/a/60884408
    let now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());

    now.setSeconds(null)
    now.setMilliseconds(null);

    document.getElementById('date').value = now.toISOString().slice(0, -1);
}