import type { Game } from './Game';

export class Player {
	private _id: string;
	private _name: string;
	private _level: number;
	private _prestige: number;
	private _games: Game[];

	constructor(id: string, name: string, level: number, prestige: number) {
		this._id = id;
		this._name = name;
		this._level = level;
		this._prestige = prestige;
		this._games = [];
	}

	public addGame(game: Game) {
		this._games.push(game);
	}

	public get id() {
		return this._id;
	}
}
