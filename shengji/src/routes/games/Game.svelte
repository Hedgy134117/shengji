<script lang="ts">
	import { Game } from '$lib/Game';
	import { scoreToString } from '$lib/util';

	export let game: Game;

	let previousGame = [] as [number, boolean][];
	for (let player of game.players) {
		previousGame.push(game.getPlayerPreviousScoreStage(player));
	}

	let scoreDiff = game.getScoreDifference();
</script>

<div class="game">
	<div class="equal-fill players">
		{#each game.players as player, i}
			<p class="player-name win-{scoreDiff[i]}">{player.name}</p>
		{/each}
	</div>
	<div class="equal-fill prev-scores">
		{#each previousGame as previousScoreStage}
			<p class:staged={previousScoreStage[1]}>
				{scoreToString(previousScoreStage[0])}
			</p>
		{/each}
	</div>
	<div class="equal-fill post-scores">
		{#each game.players as player, i}
			<p class:staged={game.staged[i]}>{scoreToString(game.scores[i])}</p>
		{/each}
	</div>
	<p class="date">{game.date.toDateString()}</p>
</div>

<style>
	.game {
		border-bottom: 1px solid gray;
		overflow: auto;
	}

	.equal-fill {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: minmax(5em, 1fr);
	}

	.equal-fill > * {
		text-align: center;
	}

	.staged {
		text-decoration: underline;
	}

	.player-name {
		font-weight: bold;
		padding: 1em;
	}

	.win-0 {
		color: gray;
	}

	.win-1 {
		color: var(--accent-color-1);
	}

	.win-2,
	.win-3 {
		color: var(--accent-color);
	}

	.win-3 {
		font-style: italic;
	}

	.date {
		text-align: right;
		padding: 2em 1em 1em 1em;
		font-size: 0.8em;
	}
</style>
