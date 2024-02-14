import type { Player } from './Player';

export class Game {
	private _date: Date;
	private _players: Player[];
	private _scores: number[];
	private _staged: boolean[];

	constructor(date: Date, players: Player[], scores: number[], staged: boolean[]) {
		this._date = date;
		this._players = players;
		this._scores = scores;
		this._staged = staged;
	}

	public get players() {
		return this._players;
	}
}
