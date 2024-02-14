import { getDocs, query, collection, orderBy } from 'firebase/firestore';
import { db } from './firebase';
import { Player } from './Player';

export class PlayerList {
	static players: Player[] = [];

	// Get all players from 'db' and put them in 'players'
	static async initialize() {
		this.players = [] as Player[];
		return getDocs(query(collection(db, 'players'), orderBy('name', 'asc'))).then(
			(querySnapshot) => {
				querySnapshot.forEach((doc) => {
					const data = doc.data();
					this.players.push(new Player(doc.id, data['name'], data['level'], data['prestige']));
				});
			}
		);
	}

	static getPlayerById(id: string): Player | null {
		for (let player of this.players) {
			if (player.id === id) {
				return player;
			}
		}
		return null;
	}
}
