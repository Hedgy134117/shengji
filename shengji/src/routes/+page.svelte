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
		let player = PlayerList.addPlayer('abc', 'TestPlayer');
		for (let i = 6; i <= 6 + 12 * 2; i++) {
			let game = new Game(new Date(), [player], [(i % 12) + 2], [true]);
			player.addGame(game);
		}
	}

	function scoreToString(val: number): string | null | undefined {
		if (val <= 10) {
			return val.toString();
		}
		if (val <= 13) {
			return { 11: 'J', 12: 'Q', 13: 'K' }[val];
		}
		return null;
	}
</script>

{#await initialize()}
	<p>Loading Players</p>
{:then}
	<table>
		<tr>
			<th>Name</th>
			<th>Prestige</th>
			<th>Progress</th>
			<th>Games</th>
		</tr>
		{#each PlayerList.players as player}
			<tr>
				<td>{player.name}</td>
				<td>{player.getPrestige()}</td>
				<td>{Math.round(player.getProgress() * 100)}%</td>
				<td>
					{#each player.getScoresWithStaged() as scoreAndStage}
						<span
							><span class={scoreAndStage[1] ? 'staged' : ''}
								>{scoreToString(scoreAndStage[0])}</span
							>,
						</span>
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
