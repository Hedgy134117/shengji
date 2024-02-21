<script lang="ts">
	import { GameList } from '$lib/GameList';
	import type { Player } from '$lib/Player';
	import { PlayerList } from '$lib/PlayerList';
	import { recordGame, recordPlayer } from '$lib/forms';
	import { onMount } from 'svelte';

	async function initialize() {
		await PlayerList.initialize();
		return GameList.initialize();
	}

	let playersPlaying = [] as Player[];

	function addPlayerPlaying(event: Event) {
		const player = PlayerList.getPlayerById((event.target as HTMLElement).id);
		if (player === null) {
			return;
		}

		// Remove player from playing if they are in
		if (playersPlaying.indexOf(player) >= 0) {
			playersPlaying.splice(playersPlaying.indexOf(player), 1);
			playersPlaying = playersPlaying; // update DOM
			return;
		}

		// Add player if they aren't already in
		playersPlaying = [...playersPlaying, player]; // update DOM (instead of .push)
	}

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

	<form method="POST" id="recordGame">
		<h1>record game</h1>

		<label for="date">Date:</label>
		<input type="datetime-local" name="date" id="date" />

		<fieldset>
			<legend>Players</legend>
			<ul id="playerList">
				{#await initialize() then}
					{#each PlayerList.players as player}
						<li>
							<label for={player.id}>
								<span>{player.name}</span>
							</label>
							<input
								type="checkbox"
								id={player.id}
								name={player.name}
								on:change={addPlayerPlaying}
							/>
						</li>
					{/each}
				{/await}
			</ul>
		</fieldset>

		<fieldset>
			<legend>Scores</legend>
			<ul id="scoreList">
				{#each playersPlaying as player}
					<li>
						<label for="{player.id}-score">
							<span>{player.name}</span>
						</label>
						<input
							type="number"
							id="{player.id}-score"
							name="{player.name}-score"
							value={player.getScore()}
							required
						/>
					</li>
				{/each}
			</ul>
		</fieldset>

		<fieldset>
			<legend>Staged</legend>
			<ul id="stageList">
				{#each playersPlaying as player}
					<li>
						<label for="{player.id}-stage">
							<span>{player.name}</span>
						</label>
						<input
							type="checkbox"
							id="{player.id}-stage"
							name="{player.name}-stage"
							checked={player.isStaged()}
						/>
					</li>
				{/each}
			</ul>
		</fieldset>

		<p><button type="submit">record</button></p>
	</form>
</main>

<style>
</style>
