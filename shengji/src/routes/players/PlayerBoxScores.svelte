<script lang="ts">
	import { scoreToString } from '$lib/util';

	export let isStaged: boolean;
	export let start: number;
	export let score: number;
	export let scoresAndStaged: [number, boolean][];
</script>

<div class="scores">
	<p class="score score__curent" class:score__staged={isStaged}>
		{scoreToString(score)}
	</p>
	<div class="score-list">
		{#each scoresAndStaged.reverse() as scoresWithStaged}
			<p class="score" class:score__staged={scoresWithStaged[1]}>
				{scoreToString(scoresWithStaged[0])}
			</p>
		{/each}
	</div>
	<p class="score score__start">
		{scoreToString(start)}
	</p>
</div>

<style>
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
</style>
