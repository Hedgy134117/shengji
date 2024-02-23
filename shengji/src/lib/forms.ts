import { Timestamp, addDoc, collection, doc } from 'firebase/firestore';
import { PlayerList } from './PlayerList';
import { GameList } from './GameList';
import { db } from './firebase';

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

export function recordGame(form: FormData) {
	let data = formDataToObject(form);

	let date = data['date'];
	delete data['date'];

	let players = [];
	let scores = [];
	let stages = [];
	for (let key of Object.keys(data)) {
		if (!(key.endsWith('-score') || key.endsWith('-stage'))) {
			players.push(doc(db, `players/${PlayerList.getPlayerByName(key)?.id}`));
			// If the stage for the player isn't checked, 'data' doesn't know
			// so we need to do it ourselves
			if (Object.keys(data).indexOf(`${key}-stage`) == -1) {
				stages.push(false);
			} else {
				stages.push(true);
			}

			scores.push(data[`${key}-score`]);
		}
	}

	return addDoc(collection(db, 'games'), {
		date: Timestamp.fromDate(new Date(date)),
		players: players,
		scores: scores,
		staged: stages
	});
}
