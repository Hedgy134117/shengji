<script lang="ts">
    import type { PlayerState, ShengjiSession } from "$lib/types";
    import { rankToString } from "$lib/utils/rankCalculation";

    let {
        playerId,
        sessions,
    }: { playerId: string; sessions: ShengjiSession[] } = $props();

    const states: PlayerState[] = $derived.by(() => [
        ...sessions
            .toSorted((a, b) => b.date.getTime() - a.date.getTime()) // Sort sessions by newest to oldest
            .flatMap((session) =>
                session.games
                    .toSorted((a, b) => b.gameNum - a.gameNum) // Sort games by newest to oldest
                    .map((game) => game.stateAfter[playerId])
            ),
        { rank: 2, onStage: true, prestige: 0 } as PlayerState,
    ]);
</script>

<div class="relative flex items-center p-4 h-32 overflow-auto">
    {#each states as state, i}
        <div
            class="absolute w-16 h-24 flex flex-col items-center justify-center rounded-lg border border-zinc-50 bg-zinc-800"
            style="left: {i * 48}px; z-index: {i};"
        >
            <div
                class="text-3xl {state.onStage ? 'underline text-red-500' : ''}"
            >
                {state.rank}
            </div>
        </div>
    {/each}
</div>
