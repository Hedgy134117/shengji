<script lang="ts">
	import { PlayerList } from '$lib/PlayerList';
	import PlayerBox from '$lib/components/PlayerBox.svelte';
	import { GameList } from '$lib/GameList';
	import { Game } from '$lib/Game';

	async function initialize() {
		await PlayerList.initialize();
		return GameList.initialize();
	}
</script>

<main>
	{#await initialize()}
		<p>Loading Data</p>
	{:then}
		<div class="player-box-list">
			{#each PlayerList.players as player}
				<PlayerBox {player} />
			{/each}
		</div>
	{/await}
</main>

<style>
	:global(:root) {
		--bg-color: #121212;
		--bg-color-1: #181818;
		--bg-color-2: #1e1e1e;
		--accent-color: #dd2e44;
		--accent-color-1: #dd5567;
		--accent-color-2: #e08d98;
	}

	:global(body) {
		font-family: 'Noto Sans', sans-serif;
		/* font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif; */
		background-color: #121212;
		color: #ffffff;
		box-sizing: border-box;
		margin: 1em 0;
	}

	:global(p) {
		margin: 0;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(main) {
		margin: auto;
		width: 70%;
		background-color: var(--bg-color-1);
	}

	@media (max-width: 900px) {
		:global(main) {
			width: 100%;
		}
	}
</style>
