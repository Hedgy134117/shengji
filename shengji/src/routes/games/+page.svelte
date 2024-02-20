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

<svelte:head>
	<title>shengji games</title>
</svelte:head>

<main>
	{#await initialize()}
		<p>Loading Data</p>
	{:then}
		<div class="game-list">
			<!-- <Game game={firstGame} /> -->
			<!-- TODO: if a bunch of games fall on the same date, 
                they should probably be put together into 
                some sort of "GameBlock" with a "Date" header -->
			{#each GameList.games.reverse() as game}
				<Game {game} />
			{/each}
		</div>
	{/await}
</main>

<style>
</style>
