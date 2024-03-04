<script lang="ts">
	import { Player } from '$lib/Player';
	import { scoreToString } from '$lib/util';

	export let player: Player;
</script>

<div class="player-box">
	<p class="player-name" style="border: {player.getPrestige()}px solid var(--accent-color)">
		{player.name}
	</p>
	<!-- TODO: make this its own component -->
	<div class="scores">
		<p class="score score__curent" class:score__staged={player.isStaged()}>
			{scoreToString(player.getScore())}
		</p>
		<div class="score-list">
			{#each player.getScoresWithStaged().reverse() as scoresWithStaged}
				<p class="score" class:score__staged={scoresWithStaged[1]}>
					{scoreToString(scoresWithStaged[0])}
				</p>
			{/each}
		</div>
		<p class="score score__start">
			{scoreToString(player.start)}
		</p>
	</div>
	<p class="prestige">{Math.round(player.getProgress() * 100)}% to P{player.getPrestige() + 1}</p>
	<progress value={player.getProgress()} max="1"></progress>
</div>

<style>
	.player-box {
		padding: 2em;
		text-align: center;
		display: grid;
		grid-template-columns: 20% 80%;
		align-items: center;
	}

	p {
		padding: 0.5em;
	}

	.score-list {
		flex-grow: 1;
		display: flex;
		overflow: auto;
	}

	.scores {
		padding: 1em;
		background-color: var(--bg-color-2);

		display: flex;
	}

	.score__staged {
		text-decoration: underline;
	}

	.score__curent,
	.score__start {
		color: var(--accent-color);
		font-weight: bold;
	}

	.prestige {
		font-style: italic;
	}

	progress {
		width: 100%;
		accent-color: var(--accent-color);
	}

	@media (max-width: 500px) {
		.player-box {
			grid-template-columns: 40% 60%;
			padding: 1em 2em;
		}
	}
</style>
