<script lang="ts">
    import type { PlayerState } from "$lib/types";
    import { rankToString } from "$lib/utils/rankCalculation";

    let { name, state }: { name: string; state: PlayerState } = $props();
</script>

<div
    class="flex flex-col border border-black p-2 rounded-md h-full
    {state.onStage ? 'text-primary' : ''}"
>
    <p class="text-l">{name}</p>
    <p
        class="font-macondo text-8xl p-6 self-center
        {state.onStage ? 'underline' : ''}"
    >
        {rankToString(state.rank)}
    </p>
    <p class="text-l self-end rotate-180">{name}</p>
</div>
