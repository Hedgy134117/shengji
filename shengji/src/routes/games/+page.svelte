<script lang="ts">
	import Game from '$lib/components/Game.svelte';
	import { Game as GameType } from '$lib/Game';
	import { GameList } from '$lib/GameList';
	import { PlayerList } from '$lib/PlayerList';

	async function initialize() {
		await PlayerList.initialize();
		return GameList.initialize().then(() => (firstGame = GameList.games[1]));
	}

	let firstGame: GameType;
</script>

<main>
	{#await initialize()}
		<p>Loading Data</p>
	{:then}
		<div class="game-list">
			<!-- <Game game={firstGame} /> -->
			{#each GameList.games as game}
				<Game {game} />
			{/each}
		</div>
	{/await}
</main>

<style>
</style>
