<script lang="ts">
	import { PlayerList } from '$lib/PlayerList';
	import PlayerBox from './PlayerBox.svelte';
	import { GameList } from '$lib/GameList';
	import { Game } from '$lib/Game';

	async function initialize() {
		await PlayerList.initialize();
		console.log(PlayerList.players);
		// test();
		return GameList.initialize();
	}

	function test() {
		let player = PlayerList.addPlayer('abc', 'TestPlayer', 8);
		for (let i = 6; i <= 6 + 12 * 2; i++) {
			let game = new Game(new Date(), [player], [(i % 12) + 2], [true]);
			player.addGame(game);
		}
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
	}

	:global(body) {
		font-family: 'Noto Sans', sans-serif;
		/* font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif; */
		background-color: #121212;
		color: #ffffff;
		box-sizing: border-box;
		margin: 0;
	}

	:global(p) {
		margin: 0;
	}

	main {
		margin: 0 auto;
		width: 70%;
		background-color: var(--bg-color-1);
	}

	.player-box-list {
	}
</style>
