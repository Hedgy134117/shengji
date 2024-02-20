<script lang="ts">
	import { recordGame, recordPlayer } from '$lib/forms';
	import { onMount } from 'svelte';

	onMount(() => {
		document.querySelector('#recordPlayer')?.addEventListener('submit', (e) => {
			e.preventDefault();
			recordPlayer(new FormData(e.target as HTMLFormElement));
		});

		document.querySelector('#recordGame')?.addEventListener('submit', (e) => {
			e.preventDefault();
			recordGame(new FormData(e.target as HTMLFormElement));
		});
	});
</script>

<svelte:head>
	<title>shengji record</title>
</svelte:head>

<main>
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

	<form method="POST" id="recordGame">
		<h1>record game</h1>

		<label for="date">Date:</label>
		<input type="datetime-local" name="date" id="date" />

		<fieldset>
			<legend>Players</legend>
			<ul id="playerList"></ul>
		</fieldset>

		<fieldset>
			<legend>Scores</legend>
			<ul id="scoreList"></ul>
		</fieldset>

		<fieldset>
			<legend>Staged</legend>
			<ul id="stageList"></ul>
		</fieldset>

		<p><button type="submit">record</button></p>
	</form>
</main>

<style>
</style>
