import type { Game } from './Game';

export class Player {
	private _id: string;
	private _name: string;
	private _games: Game[];

	constructor(id: string, name: string) {
		this._id = id;
		this._name = name;
		this._games = [];
	}

	public get id() {
		return this._id;
	}

	public get name() {
		return this._name;
	}

	public addGame(game: Game) {
		this._games.push(game);
	}

	// Score: The player's current value
	public getScore(): number {
		const mostRecentGame = this._games[this._games.length - 1];
		const index = mostRecentGame.players.indexOf(this);
		return mostRecentGame.scores[index];
	}

	public getScores(): number[] {
		let scores = [] as number[];

		for (let game of this._games) {
			const index = game.players.indexOf(this);
			scores.push(game.scores[index]);
		}

		return scores;
	}

	public getScoresWithStaged(): [number, boolean][] {
		let scoresWithStaged = [] as [number, boolean][];

		for (let game of this._games) {
			const index = game.players.indexOf(this);
			scoresWithStaged.push([game.scores[index], game.staged[index]]);
		}

		return scoresWithStaged;
	}

	// Start: The player's starting value
	public getStart(): number {
		const firstGame = this._games[0];
		const index = firstGame.players.indexOf(this);
		return firstGame.scores[index];
	}

	// Staged: Whether or not the player can host
	public isStaged(): boolean {
		const mostRecentGame = this._games[this._games.length - 1];
		const index = mostRecentGame.players.indexOf(this);
		return mostRecentGame.staged[index];
	}

	// Prestige: How many times the player has passed their start
	public getPrestige(): number {
		let prestige = 0;
		const start = this.getStart();
		const scores = this.getScores();
		for (let i = 1; i < scores.length; i++) {
			// If the player has gone through every other card and then reached their card again, +1 prestige
			if (scores[i] == start && scores[i - 1] != scores[i]) {
				prestige++;
			}
		}
		return prestige;
	}

	// Progress: A scale (0-1) of how close the player is to reaching a new prestige
	public getProgress(): number {
		const score = this.getScore();
		let start = this.getStart();
		let progress = 0;
		while (start != score) {
			start++;
			progress++;

			if (start > 13) {
				start = 2;
			}
		}
		return progress / 12;
	}
}
