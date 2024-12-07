<!-- This is arguably super messy, but it does the work. -->

<script lang="ts">
	import type { Player } from '$lib/Player';
	import { PlayerList } from '$lib/PlayerList';
	import { recordGame } from '$lib/forms';
	import { scoreToString } from '$lib/util';
	import { onMount } from 'svelte';

	export let players: Player[];

	let playersPlaying: Player[] = [];
	function addOrRemovePlayer(player: Player) {
		if (playersPlaying.includes(player)) {
			playersPlaying = playersPlaying.filter((p) => p.id !== player.id);
		} else {
			playersPlaying = [...playersPlaying, player];
		}
	}

	let results: { [id: string]: [number, boolean] } = {};
	let changes: { [id: string]: number } = {};
	function changeResults(player: Player, change: number) {
		changes[player.id] = change;
		results[player.id] = [0, false];
		results[player.id][0] = player.getScore();
		results[player.id][1] = player.isStaged();

		// Loss -> lose stage
		if (change === 0) {
			results[player.id][1] = false;
		}
		// Win -> if staged, directly apply change (win-1 = 1 = +1 rank, etc.)
		else if (results[player.id][1]) {
			results[player.id][0] += change;
		}
		// Win -> if not staged, get on staged then apply change - 1
		else {
			results[player.id][1] = true;
			results[player.id][0] += change - 1;
		}

		// Wrap around
		if (results[player.id][0] > 13) {
			results[player.id][0] -= 12;
		}
	}

	function resultToHTML(result: [number, boolean]) {
		let score = scoreToString(result[0]);
		if (result[1]) {
			return `<u>${score}</u>`;
		} else {
			return score;
		}
	}

	let date: any = new Date();
	onMount(() => {
		document.querySelector('#recordGame')?.addEventListener('submit', async (e) => {
			e.preventDefault();
			let response = await recordGame(new Date(date), playersPlaying, results);

			if (typeof response === 'string') {
				alert(response);
			} else {
				alert('Game Recorded!');
			}

			// Update Scores
			playersPlaying = [...playersPlaying];
			for (let id in changes) {
				// @ts-ignore
				changeResults(PlayerList.getPlayerById(id), changes[id]);
			}
		});
	});
</script>

<form method="POST" id="recordGame">
	<h1>record game</h1>
	<h2>when?</h2>
	<label for="date">Date:</label>
	<input type="datetime-local" name="date" id="date" bind:value={date} />

	<h2>who played?</h2>
	<fieldset>
		<ul id="playerList" class="wrap-list">
			{#each players as player}
				<li>
					<input
						type="checkbox"
						id={player.id}
						name={player.name}
						on:change={() => addOrRemovePlayer(player)}
					/>
					<label for={player.id} class="clickable-label">
						<span>{player.name}</span>
					</label>
				</li>
			{/each}
		</ul>
	</fieldset>

	<h2>what were the results?</h2>
	<fieldset>
		<ul id="scoreList" class="">
			{#each playersPlaying as player}
				<li class="score">
					<label for="{player.id}-stage" class="name unclickable-label">
						<span>{player.name}</span>
					</label>

					<input
						name="{player.id}-result"
						value="{player.id}-loss"
						id="{player.id}-loss"
						type="radio"
						on:change={() => changeResults(player, 0)}
					/>
					<label for="{player.id}-loss" class="result-choice clickable-label">L</label>
					<input
						name="{player.id}-result"
						value="{player.id}-win-1"
						id="{player.id}-win-1"
						type="radio"
						on:change={() => changeResults(player, 1)}
					/>
					<label for="{player.id}-win-1" class="result-choice clickable-label">W</label>
					<input
						name="{player.id}-result"
						value="{player.id}-win-2"
						id="{player.id}-win-2"
						type="radio"
						on:change={() => changeResults(player, 2)}
					/>
					<label for="{player.id}-win-2" class="result-choice clickable-label">WW</label>
					<input
						name="{player.id}-result"
						value="{player.id}-win-3"
						id="{player.id}-win-3"
						type="radio"
						on:change={() => changeResults(player, 3)}
					/>
					<label for="{player.id}-win-3" class="result-choice clickable-label">WWW</label>

					<p class="unclickable-label result">
						{#if results[player.id] !== undefined}
							{@html resultToHTML([player.getScore(), player.isStaged()])} →
							{@html resultToHTML(results[player.id])}
						{:else}
							{@html resultToHTML([player.getScore(), player.isStaged()])}
						{/if}
					</p>
				</li>
			{/each}
		</ul>
	</fieldset>

	<p><button type="submit">record</button></p>
</form>

<style>
	form {
		padding: 1em;
	}

	ul {
		padding: 0;
	}

	li {
		list-style-type: none;
		margin: 0.5em;
	}

	input[type='checkbox'],
	input[type='radio'] {
		display: none;
	}

	input[type='checkbox']:checked + .clickable-label,
	input[type='radio']:checked + .clickable-label {
		border: 1px solid var(--accent-color);
	}

	.unclickable-label {
		display: block;
		padding: 1em;
		border-radius: 12px;
		border: 1px solid #3d3d3d;
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

	.result-choice {
		text-align: center;
	}

	.result {
		text-align: right;
	}

	.wrap-list {
		display: flex;
		flex-wrap: wrap;
	}

	.score {
		display: grid;
		grid-template-columns: minmax(0%, 26%) 12% 12% 12% 12% minmax(0, 26%);
		align-items: center;
	}

	@media (max-width: 650px) {
		.score {
			grid-template-columns: repeat(4, 1fr);
		}

		.name {
			text-align: center;
			grid-column: 1 / span 5;
		}

		.result {
			text-align: center;
			grid-column: 1 / span 5;
		}
	}
</style>
