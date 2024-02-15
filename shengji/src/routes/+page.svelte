<script lang="ts">
	import { PlayerList } from '$lib/PlayerList';
	import { GameList } from '$lib/GameList';

	async function initialize() {
		await PlayerList.initialize();
		return GameList.initialize();
	}
</script>

{#await initialize()}
	<p>Loading Players</p>
{:then}
	<table>
		<tr>
			<th>Name</th>
			<th>Games</th>
		</tr>
		{#each PlayerList.players as player}
			<tr>
				<td>{player.name}</td>
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
