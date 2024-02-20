import { Timestamp, addDoc, collection, doc } from 'firebase/firestore';
import { PlayerList } from './PlayerList';
import { GameList } from './GameList';
import { db } from './firebase';

export async function recordPlayer(form: FormData) {
	let data = JSON.parse(JSON.stringify(Object.fromEntries(form))); // https://javascript.plainenglish.io/how-to-convert-javascript-formdata-to-object-to-json-67541fafb7a6

	return addDoc(collection(db, 'players'), {
		name: data['name'],
		level: data['level'],
		prestige: data['prestige']
	});
}

export function recordGame(form: FormData) {}
