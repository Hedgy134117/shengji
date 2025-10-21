<script lang="ts">
    import GameTable from "./GameTable.svelte";

    import { createSession } from "$lib/services/shengJiService";
    import type {
        Player,
        PlayerState,
        ShengjiGame,
        ShengjiSession,
    } from "$lib/types";

    interface Props {
        playerMap: Record<string, Player>;
        playerStateMap: Record<string, PlayerState>;
    }

    let { playerMap, playerStateMap }: Props = $props();

    let playing: string[] = $state([]);
    let games: ShengjiGame[] = $state([]);
    let date: Date = $state(new Date());
    let dateString = $state("");
    let session: Omit<ShengjiSession, "id"> = $derived({
        seasonId: "bmkOnqItvr9dSgbyubFX",
        date: date,
        players: playing,
        games: games,
    });

    // Convert input string back to Date object
    $effect(() => {
        if (dateString) {
            date = new Date(dateString);
        }
    });
</script>

<div class="p-2">
    <h1 class="text-2xl">Create a Session</h1>
    <input type="datetime-local" name="" id="" bind:value={dateString} />
    {date.toString()}

    <h2 class="text-xl">Who played?</h2>
    <div class="flex flex-wrap space-x-1 space-y-1">
        {#each Object.values(playerMap) as player (player.id)}
            <div class="h-full">
                <input
                    type="checkbox"
                    name={player.id}
                    id={player.id}
                    bind:group={playing}
                    value={player.id}
                    disabled={games.length > 0}
                />
                <label for={player.id}>{player.name}</label>
            </div>
        {/each}
    </div>

    <GameTable {playing} {playerMap} {playerStateMap} {games} />

    <button
        type="submit"
        onclick={() => (games.length > 0 ? createSession(session) : null)}
        >SUBMIT!</button
    >
</div>
