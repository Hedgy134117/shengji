import { Timestamp, addDoc, collection, doc, getDoc } from 'firebase/firestore';
import { PlayerList } from './PlayerList';
import { GameList } from './GameList';
import { db } from './firebase';
import type { Player } from './Player';
import { Game } from './Game';

function formDataToObject(form: FormData): any {
	return JSON.parse(JSON.stringify(Object.fromEntries(form))); // https://javascript.plainenglish.io/how-to-convert-javascript-formdata-to-object-to-json-67541fafb7a6
}

export async function recordPlayer(form: FormData) {
	let data = formDataToObject(form);

	return addDoc(collection(db, 'players'), {
		name: data['name'],
		level: data['level'],
		prestige: data['prestige']
	});
}

export async function recordGame(
	date: Date,
	players: Player[],
	results: { [id: string]: [number, boolean] }
) {
	if (players.length < 4) {
		return 'Missing players';
	}
	for (let game of GameList.games) {
		if (game.date.getTime() == date.getTime()) {
			return 'Game already exists at this time';
		}
	}

	let playerDocs = players.map((player) => doc(db, `players/${player.id}`));

	let scores = [];
	let stages = [];
	for (let id of Object.keys(results)) {
		scores.push(results[id][0]);
		stages.push(results[id][1]);
	}

	if (players.length !== scores.length || players.length !== stages.length) {
		return 'Missing scores';
	}

	const post = await addDoc(collection(db, 'games'), {
		date: Timestamp.fromDate(new Date(date)),
		players: playerDocs,
		scores: scores,
		staged: stages
	});

	console.log(post);
	const newGame = await getDoc(doc(db, 'games', post.id));
	if (newGame.data() !== undefined) {
		// @ts-ignore
		GameList.addGame(newGame.data());
	}

	return post;
}
