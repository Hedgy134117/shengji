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

	public get date() {
		return this._date;
	}

	public get players() {
		return this._players;
	}

	public get scores() {
		return this._scores;
	}

	public get staged() {
		return this._staged;
	}

	public getScoresWithStaged(): [number, boolean][] {
		let scoresWithStaged = [] as [number, boolean][];

		for (let i = 0; i < this.scores.length; i++) {
			scoresWithStaged.push([this.scores[i], this.staged[i]]);
		}

		return scoresWithStaged;
	}

	public getPlayerPreviousScoreStage(player: Player): [number, boolean] {
		let thisGameIndex = player.games.indexOf(this);
		let previousGameIndex = thisGameIndex - 1;
		let previousGame = player.games[previousGameIndex];

		// If this game is their first one, their previous score is their start
		if (previousGameIndex < 0) {
			return [player.start, false];
		}

		let playerIndex = previousGame.players.indexOf(player);
		return [previousGame.scores[playerIndex], previousGame.staged[playerIndex]];
	}

	public getSingleScoreDifference(
		prevScoreStaged: [number, boolean],
		scoreStaged: [number, boolean]
	): number {
		let noStageChange = prevScoreStaged[1] == scoreStaged[1];
		let loseStaged = prevScoreStaged[1] == true && scoreStaged[1] == false;
		let gainStaged = prevScoreStaged[1] == false && scoreStaged[1] == true;

		let rankChange = Math.abs(scoreStaged[0] - prevScoreStaged[0]);
		let noRankChange = rankChange == 0;
		let gainOneRank = rankChange == 1 || rankChange == 11;
		let gainTwoRank = rankChange == 2 || rankChange == 10;
		let gainThreeRank = rankChange == 3 || rankChange == 9;

		// Loss or No difference: -> 0
		// [2, true] -> [2, false] (lost staged)
		// [2, false] -> [2, false] (no rank change and no stage change)
		if (loseStaged || (noRankChange && noStageChange)) {
			return 0;
		}

		// Single win: (80/100) -> 1
		// [2, false] -> [2, true] (gained staged, no rank change)
		// [2, true] -> [3, true] (gained 1 rank, no stage change)
		if ((gainStaged && noRankChange) || (gainOneRank && noStageChange)) {
			return 1;
		}

		// Double win: (120/150) -> 2
		// [2, false] -> [3, true] (gained rank + staged)
		// [13, false] -> [2, true] (gained rank + staged)
		// [2, true] -> [4, true] (gained 2 rank)
		if ((gainOneRank && gainStaged) || (gainTwoRank && noStageChange)) {
			return 2;
		}

		// Triple Win: (160/200) -> 3
		// [2, false] -> [4, true] (gained 2 rank + staged)
		// [12, false] -> [2, true] (gained 2 rank + staged)
		// [2, true] -> [5, true] (gained 3 rank)
		if ((gainTwoRank && gainStaged) || gainThreeRank) {
			return 3;
		}

		// Something's wrong with the data if we get here
		return -1;
	}

	public getScoreDifference(): number[] {
		let scoresStaged = this.getScoresWithStaged();
		let previousScoresStaged = [];
		for (let player of this.players) {
			previousScoresStaged.push(this.getPlayerPreviousScoreStage(player));
		}

		let scoreDifferences = [];
		for (let i = 0; i < scoresStaged.length; i++) {
			const scoreStaged = scoresStaged[i];
			const prevScoreStaged = previousScoresStaged[i];
			scoreDifferences.push(this.getSingleScoreDifference(prevScoreStaged, scoreStaged));
		}

		return scoreDifferences;
	}
}
