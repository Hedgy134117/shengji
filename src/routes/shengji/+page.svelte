<script lang="ts">
    import { getPlayerMap } from "$lib/services/playerService";
    import {
        getAllPlayerStates,
        getAllSessions,
    } from "$lib/services/shengJiService";
    import type {
        Player,
        PlayerState,
        ShengjiGame,
        ShengjiSession,
    } from "$lib/types";
    import { onMount } from "svelte";
    import PlayerCard from "./PlayerCard.svelte";

    let playerMap: Record<string, Player> = $state({});
    let playerStateMap: Record<string, PlayerState> = $state({});
    let playerIds = $derived(Object.keys(playerMap));

    let sessionId: string | null = $state(null);
    let sessions: ShengjiSession[] = $state([]);
    let games: ShengjiGame[] | undefined = $derived(
        sessions.find((session) => session.id === sessionId)?.games,
    );
    let loading = $state(true);

    onMount(async () => {
        sessions = await getAllSessions();
        playerMap = await getPlayerMap();
        playerStateMap = await getAllPlayerStates();
        loading = false;
    });
</script>

{#if loading}
    <p>Loading...</p>
{:else if sessions.length === 0}
    <p>No games &rpar;&colon;</p>
{:else}
    <div class="flex p-2 space-x-2 space-y-2 flex-wrap">
        {#each playerIds as playerId}
            <PlayerCard
                name={playerMap[playerId].name}
                state={playerStateMap[playerId]}
            />
        {/each}
    </div>

    <label for="session">Select a session: </label>
    <select name="session" bind:value={sessionId}>
        {#each sessions as session (session.id)}
            <option value={session.id}>{session.date}</option>
        {/each}
    </select>
{/if}

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
