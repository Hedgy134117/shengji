<script lang="ts">
	import Game from './Game.svelte';
	import { Game as GameType } from '$lib/Game';
	import { GameList } from '$lib/GameList';
	import { PlayerList } from '$lib/PlayerList';
	import { downloadFile } from '$lib/util';

	async function initialize() {
		await PlayerList.initialize();
		return GameList.initialize().then(() => (firstGame = GameList.games[1]));
	}

	function exportData() {
		let data = [];
		for (let i = 0; i < GameList.games.length; i++) {
			let game = GameList.games[i];
			data.push({
				date: game.date,
				players: game.players.map((player) => player.name),
				scores: game.scores,
				staged: game.staged
			});
		}

		downloadFile(data, 'games');
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
			<button on:click={exportData}>Export to JSON</button>
		</div>
	{/await}
</main>

<style>
</style>
