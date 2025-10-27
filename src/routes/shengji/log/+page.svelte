<script lang="ts">
    import { onMount } from "svelte";
    import SessionCreator from "./SessionCreator.svelte";
    import type { Player } from "$lib/types";
    import type { PlayerState } from "$lib/types";
    import { getPlayerMap } from "$lib/services/playerService";
    import { getAllPlayerStates } from "$lib/services/shengJiService";

    let playerMap: Record<string, Player> = $state({});
    let playerStateMap: Record<string, PlayerState> = $state({});
    let loading = $state(true);

    onMount(async () => {
        playerMap = await getPlayerMap();
        playerStateMap = await getAllPlayerStates(playerMap);
        loading = false;
    });
</script>

{#if loading}
    <p>Loading...</p>
{:else}
    <SessionCreator {playerMap} {playerStateMap} />
{/if}
