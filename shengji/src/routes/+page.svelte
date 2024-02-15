<script lang="ts">
	import { PlayerList } from '$lib/PlayerList';
	import { GameList } from '$lib/GameList';
	import { Game } from '$lib/Game';

	async function initialize() {
		await PlayerList.initialize();
		test();
		return GameList.initialize();
	}

	function test() {
		let player = PlayerList.addPlayer('abc', 'TestPlayer', 2, 0);
		for (let i = 2; i <= 13; i++) {
			let game = new Game(new Date(), [player], [i], [true]);
			player.addGame(game);
		}
		player.addGame(new Game(new Date(), [player], [2], [true]));
	}
</script>

{#await initialize()}
	<p>Loading Players</p>
{:then}
	<table>
		<tr>
			<th>Name</th>
			<th>Progress</th>
			<th>Games</th>
		</tr>
		{#each PlayerList.players as player}
			<tr>
				<td>{player.name}</td>
				<td>{Math.round(player.getProgress() * 100)}%</td>
				<td>
					{#each player.getScoresWithStaged() as scoreAndStage}
						<span><span class={scoreAndStage[1] ? 'staged' : ''}>{scoreAndStage[0]}</span>, </span>
					{/each}
				</td>
			</tr>
		{/each}
	</table>
{/await}

<style>
	.staged {
		text-decoration: underline;
	}
</style>
