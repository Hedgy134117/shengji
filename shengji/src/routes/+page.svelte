<script lang="ts">
	import { PlayerList } from '$lib/PlayerList';
	import PlayerBox from './PlayerBox.svelte';
	import { GameList } from '$lib/GameList';
	import { Game } from '$lib/Game';
	import { downloadFile } from '$lib/util';

	async function initialize() {
		await PlayerList.initialize();
		return GameList.initialize();
	}

	function exportData() {
		let data: { [id: string]: [number, boolean][] } = {};
		for (let player of PlayerList.players) {
			data[player.name] = player.getScoresWithStaged();
		}

		downloadFile(data, 'players');
	}
</script>

<svelte:head>
	<title>shengji players</title>
</svelte:head>

<main>
	{#await initialize()}
		<p>Loading Data</p>
	{:then}
		<div class="player-box-list">
			{#each PlayerList.players as player}
				<PlayerBox {player} />
			{/each}
		</div>
		<button on:click={exportData}>Export to JSON</button>
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
