<script lang="ts">
	import { Player } from '$lib/Player';
	import PlayerBoxScores from './PlayerBoxScores.svelte';
	import PlayerBoxPrestige from './PlayerBoxPrestige.svelte';

	export let player: Player;
</script>

<div class="player-box">
	<p class="player-name" style="border: {player.getPrestige()}px solid var(--accent-color)">
		{player.name}
	</p>
	<PlayerBoxScores
		isStaged={player.isStaged()}
		start={player.start}
		score={player.getScore()}
		scoresAndStaged={player.getScoresWithStaged()}
	/>
	<PlayerBoxPrestige progress={player.getProgress()} prestige={player.getPrestige()} />
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

	@media (max-width: 500px) {
		.player-box {
			grid-template-columns: 40% 60%;
			padding: 1em 2em;
		}
	}
</style>
