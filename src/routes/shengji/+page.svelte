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
    import SessionCreator from "./SessionCreator.svelte";

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
        playerStateMap = await getAllPlayerStates(playerMap);
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
    <SessionCreator {playerMap} {playerStateMap} />
{/if}
