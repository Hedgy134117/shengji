<script lang="ts">
    import { getPlayerMap } from "$lib/services/playerService";
    import {
        getAllPlayerStates,
        getAllSessions,
        getPlayerSessions,
    } from "$lib/services/shengJiService";
    import type { Player, PlayerState, ShengjiSession } from "$lib/types";
    import { onMount } from "svelte";
    import PlayerCard from "./PlayerCard.svelte";
    import PlayerHistory from "./PlayerHistory.svelte";

    let playerMap: Record<string, Player> = $state({});
    let playerStateMap: Record<string, PlayerState> = $state({});
    let playerIds = $derived(Object.keys(playerMap));
    let sessions: ShengjiSession[] = $state([]);
    let selectedPlayer = $state("");
    let loading = $state(true);

    onMount(async () => {
        playerMap = await getPlayerMap();
        playerStateMap = await getAllPlayerStates(playerMap);
        sessions = await getAllSessions();
        loading = false;
    });
</script>

{#if loading}
    <p>Loading...</p>
{:else}
    <div class="flex p-4 space-x-2 space-y-2 flex-wrap">
        {#each playerIds as playerId}
            <PlayerCard
                name={playerMap[playerId].name}
                state={playerStateMap[playerId]}
                selected={selectedPlayer == playerId}
                onclick={() => (selectedPlayer = playerId)}
            />
        {/each}
    </div>

    <div class="p-4">
        {#if selectedPlayer}
            <PlayerHistory
                playerId={selectedPlayer}
                sessions={getPlayerSessions(selectedPlayer, sessions)}
            />
        {/if}
    </div>
{/if}
