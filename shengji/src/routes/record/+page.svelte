<script lang="ts">
	import { GameList } from '$lib/GameList';
	import type { Player } from '$lib/Player';
	import { PlayerList } from '$lib/PlayerList';
	import { recordGame, recordPlayer } from '$lib/forms';
	import { scoreToString } from '$lib/util';
	import { onMount } from 'svelte';
	import RecordGameForm from './RecordGameForm.svelte';

	async function initialize() {
		await PlayerList.initialize();
		return GameList.initialize();
	}

	let playersPlaying = [] as Player[];
	let scores = [] as number[];

	function changeScore(event: Event) {
		const player = PlayerList.getPlayerById((event.target as HTMLElement).id.replace('-score', ''));
		if (player === null) {
			return;
		}

		const index = playersPlaying.indexOf(player);
		scores[index] = parseInt((event.target as HTMLInputElement).value);
	}

	onMount(() => {
		document.querySelector('#recordPlayer')?.addEventListener('submit', (e) => {
			e.preventDefault();
			recordPlayer(new FormData(e.target as HTMLFormElement));
		});
	});
</script>

<svelte:head>
	<title>shengji record</title>
</svelte:head>

<main>
	<!-- TODO: separate these into components -->
	<form method="POST" id="recordPlayer">
		<h1>add player</h1>
		<p>
			<label for="name">
				<span>Name:</span>
			</label>
			<input type="text" name="name" id="name" required />
		</p>
		<p>
			<label for="level">
				<span>Level:</span>
			</label>
			<input type="number" name="level" id="level" value="2" required />
		</p>
		<p>
			<label for="prestige">
				<span>Prestige:</span>
			</label>
			<input type="number" name="prestige" id="prestige" value="0" required />
		</p>

		<p><button type="submit">add</button></p>
	</form>

	<!-- TODO:
			This form is still bothersome to use:
			- easy to mess up time
			- need a small/big/massive win button with overflow
			- no feedback on hitting record
	-->
	{#await initialize()}
		<p>Loading Players</p>
	{:then}
		<RecordGameForm players={PlayerList.players} />
	{/await}
</main>

<style>
	input {
		margin-top: 1em;
		padding: 1em;
	}
</style>
