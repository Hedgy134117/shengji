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
					this.addPlayer(doc.id, data['name'], data['level']);
				});
			}
		);
	}

	static addPlayer(id: string, name: string, start: number): Player {
		const player = new Player(id, name, start);
		if (!this.players.includes(player)) {
			this.players.push(player);
		}
		return player;
	}

	static getPlayerById(id: string): Player | null {
		for (let player of this.players) {
			if (player.id === id) {
				return player;
			}
		}
		return null;
	}

	static getPlayerByName(name: string): Player | null {
		for (let player of this.players) {
			if (player.name === name) {
				return player;
			}
		}
		return null;
	}
}
