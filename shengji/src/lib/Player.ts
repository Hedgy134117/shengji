import type { Game } from './Game';

export class Player {
	private _id: string;
	private _name: string;
	private _games: Game[];
	private _start: number;

	constructor(id: string, name: string, start: number) {
		this._id = id;
		this._name = name;
		this._start = start;
		this._games = [];
	}

	public get id() {
		return this._id;
	}

	public get name() {
		return this._name;
	}

	public get games() {
		return this._games;
	}

	// Start: The player's starting value
	public get start() {
		return this._start;
	}

	public addGame(game: Game) {
		this._games.push(game);
	}

	// Score: The player's current value
	public getScore(): number {
		if (this._games.length == 0) {
			return this._start;
		}

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

	// Staged: Whether or not the player can host
	public isStaged(): boolean {
		if (this._games.length == 0) {
			return false;
		}

		const mostRecentGame = this._games[this._games.length - 1];
		const index = mostRecentGame.players.indexOf(this);
		return mostRecentGame.staged[index];
	}

	// Prestige: How many times the player has passed their start
	public getPrestige(): number {
		let prestige = 0;
		const start = this.start;
		const scores = this.getScores();

		for (let i = 1; i < scores.length; i++) {
			let diff = Math.abs(scores[i] - scores[i - 1]);

			// If the player has gone through every other card and then reached their start again
			if (scores[i] == start && scores[i - 1] != scores[i]) {
				prestige++;
			}
			// If the player has gone through every other card and jumped over their start
			else if (scores[i] > start && scores[i - 1] < start) {
				prestige++;
			}
			// See table below
			else if (diff == 9 || diff == 10) {
				prestige++;
			}

			/*
			2 start:
			- K 3 (2) = 13 - 3 = 10
			- K 4 (3) = 13 - 4 = 9
			- Q 3 (3) = 12 - 3 = 9

			3 start:
			- K 4 (3) = 13 - 4 = 9
			
			Q start:
			- J 2 (3) = 11 - 2 = 9

			K start:
			- Q 2 (2) = 12 - 2 = 10
			- Q 3 (3) = 12 - 3 = 9
			*/
		}
		return prestige;
	}

	// Progress: A scale (0-1) of how close the player is to reaching a new prestige
	public getProgress(): number {
		const score = this.getScore();
		let start = this.start;
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
