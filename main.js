import { addDoc, collection, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
import { db } from "./firebase.js";

async function createPlayer(formData) {
    let staged = formData.get("staged");
    if (staged === null) {
        staged = false;
    } else {
        staged = true;
    }

    await addDoc(collection(db, "players"), {
        name: formData.get("name"),
        level: parseInt(formData.get("level")),
        staged: staged,
        prestige: parseInt(formData.get("prestige"))
    });
}

async function populatePlayersField() {
    const playerList = document.querySelector("#playerList");

    const querySnapshot = await getDocs(query(collection(db, "players"), orderBy("name", "desc")));
    querySnapshot.forEach((doc) => {
        const player = doc.data();
        const name = player.name;
        const HTML = `<li>
                <label for="${name}">
                    <span>${name}</span>
                </label>
                <input type="checkbox" id="${name}" name="${name}" value="${name}" />
            </li>`;
        playerList.insertAdjacentHTML("afterbegin", HTML);
    });
}



window.onload = async () => {
    populatePlayersField();

    const addPlayerForm = document.querySelector("#addPlayer");
    addPlayerForm.addEventListener("submit", event => {
        event.preventDefault();
        createPlayer(new FormData(event.target));
    })
}