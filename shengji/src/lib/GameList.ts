import { collection, getDocs, orderBy, query } from 'firebase/firestore';
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
				// Create new game object
				let gameData = doc.data();
				for (let i = 0; i < gameData.players.length; i++) {
					gameData.players[i] = PlayerList.getPlayerById(gameData.players[i].id);
				}
				let game = new Game(
					gameData.date.toDate(),
					gameData.players,
					gameData.scores,
					gameData.staged
				);
				this.games.push(game);

				// Add the game to each player involved
				const players = game.players;
				for (let i = 0; i < players.length; i++) {
					players[i].addGame(game);
				}
			});
		});
	}
}
