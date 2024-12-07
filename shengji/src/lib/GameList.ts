import { collection, getDocs, orderBy, query, type DocumentData } from 'firebase/firestore';
import { PlayerList } from './PlayerList';
import { Game } from './Game';
import { db } from './firebase';

export class GameList {
	static games: Game[] = [];

	// Get all games from 'db' and put them in 'games'
	// Also add each game to each player involved
	static async initialize() {
		this.games = [] as Game[];
		return getDocs(query(collection(db, 'games'), orderBy('date', 'asc'))).then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				this.addGame(doc.data());
			});
		});
	}

	static addGame(gameData: DocumentData) {
		// Create new game object
		for (let i = 0; i < gameData.players.length; i++) {
			gameData.players[i] = PlayerList.getPlayerById(gameData.players[i].id);
		}
		let game = new Game(
			gameData.date.toDate(),
			gameData.players,
			gameData.scores.map((score: string) => parseInt(score)),
			gameData.staged
		);
		this.games.push(game);

		// Add the game to each player involved
		const players = game.players;
		for (let i = 0; i < players.length; i++) {
			players[i].addGame(game);
		}
	}
}
