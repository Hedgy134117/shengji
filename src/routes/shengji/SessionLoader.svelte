<script lang="ts">
    import type { Player, ShengjiGame, ShengjiSession } from "$lib/types";

    interface Props {
        sessions: ShengjiSession[];
        sessionId: string;
        games: ShengjiGame[];
        playerMap: Record<string, Player>;
    }

    let { sessions, sessionId, games, playerMap }: Props = $props();
</script>

<label for="session">Select a session: </label>
<select name="session" bind:value={sessionId}>
    {#each sessions as session (session.id)}
        <option value={session.id}>{session.date}</option>
    {/each}
</select>

{#if sessionId !== null && games !== undefined}
    {#each games as game (game.gameNum)}
        <div>
            <h3>Game {game.gameNum}</h3>
            <div>
                {#each game.winningTeam as winner}
                    <p>{playerMap[winner].name}</p>
                {/each}
                <p>VS.</p>
                {#each game.losingTeam as loser}
                    <p>{playerMap[loser].name}</p>
                {/each}
            </div>
        </div>
    {/each}
{/if}
