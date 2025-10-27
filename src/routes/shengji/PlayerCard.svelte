<script lang="ts">
    import type { PlayerState } from "$lib/types";
    import { rankToString } from "$lib/utils/rankCalculation";
    import type { MouseEventHandler } from "svelte/elements";

    interface Props {
        name: string;
        state: PlayerState;
        selected: boolean;
        onclick?: MouseEventHandler<HTMLDivElement>;
        small?: boolean;
    }

    let { name, state, selected, onclick, small }: Props = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
    class="flex flex-col border border-zinc-50 bg-zinc-800 p-2 rounded-md h-full cursor-pointer transition duration-75
    {state.onStage ? 'text-red-500' : ''}
    {selected ? '-translate-y-2' : 'hover:-translate-y-1'}"
    {onclick}
    role="button"
    tabindex="0"
>
    <p class="text-l">{name}</p>
    <p
        class="font-macondo p-6 self-center
        {state.onStage ? 'underline' : ''}
        {small ? 'text-4xl' : 'text-8xl'}"
    >
        {rankToString(state.rank)}
    </p>
    <p class="text-l self-end rotate-180">{name}</p>
</div>
