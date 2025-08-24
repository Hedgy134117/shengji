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
		let data: any = {};
		for (let player of PlayerList.players) {
			data[player.name] = {};
			data[player.name]['history'] = player.getScoresWithStaged();
			data[player.name]['prestige'] = player.getPrestige();
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
