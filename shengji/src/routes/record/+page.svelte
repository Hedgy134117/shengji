<script lang="ts">
	import { GameList } from '$lib/GameList';
	import type { Player } from '$lib/Player';
	import { PlayerList } from '$lib/PlayerList';
	import { recordGame, recordPlayer } from '$lib/forms';
	import { scoreToString } from '$lib/util';
	import { onMount } from 'svelte';

	async function initialize() {
		await PlayerList.initialize();
		return GameList.initialize();
	}

	let playersPlaying = [] as Player[];
	let scores = [] as number[];

	function addPlayerPlaying(event: Event) {
		const player = PlayerList.getPlayerById((event.target as HTMLElement).id);
		if (player === null) {
			return;
		}

		// Remove player from playing if they are in
		if (playersPlaying.indexOf(player) >= 0) {
			const index = playersPlaying.indexOf(player);
			playersPlaying.splice(index, 1);
			playersPlaying = playersPlaying; // update DOM

			scores.splice(index, 1);
			scores = scores;
			return;
		}

		// Add player if they aren't already in
		playersPlaying = [...playersPlaying, player]; // update DOM (instead of .push)
		scores = [...scores, player.getScore()];
	}

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
			<ul id="playerList" class="wrap-list">
				{#await initialize() then}
					{#each PlayerList.players as player}
						<li>
							<input
								type="checkbox"
								id={player.id}
								name={player.name}
								on:change={addPlayerPlaying}
							/>
							<label for={player.id} class="clickable-label">
								<span>{player.name}</span>
							</label>
						</li>
					{/each}
				{/await}
			</ul>
		</fieldset>

		<fieldset>
			<legend>Scores</legend>
			<ul id="scoreList" class="wrap-list wrap-list--center">
				{#each playersPlaying as player, i}
					<li>
						<!-- TODO: could probably simplify this by using bind -->
						<input
							type="checkbox"
							id="{player.id}-stage"
							name="{player.name}-stage"
							checked={player.isStaged()}
						/>
						<label for="{player.id}-stage" class="clickable-label">
							<span>{player.name}</span>
						</label>
						<input
							type="number"
							id="{player.id}-score"
							name="{player.name}-score"
							value={scores[i]}
							on:change={changeScore}
							required
						/>
						<p class="score-value">{scoreToString(scores[i])}</p>
					</li>
				{/each}
			</ul>
		</fieldset>

		<p><button type="submit">record</button></p>
	</form>
</main>

<style>
	ul {
		padding: 0;
	}

	li {
		list-style-type: none;
		margin: 0.5em;
	}

	input {
		margin-top: 1em;
		padding: 1em;
	}

	input[type='checkbox'] {
		display: none;
	}

	input[type='checkbox']:checked + .clickable-label {
		border: 1px solid var(--accent-color);
	}

	.clickable-label {
		display: block;
		padding: 1em;
		border-radius: 12px;
		border: 1px solid gray;
	}

	.clickable-label:hover {
		cursor: pointer;
	}

	.wrap-list {
		display: flex;
		flex-wrap: wrap;
	}

	.wrap-list--center {
		justify-content: center;
	}

	.score-value {
		margin-top: 1em;
	}

	#scoreList li {
		display: flex;
		flex-direction: column;
		text-align: center;
	}
</style>
