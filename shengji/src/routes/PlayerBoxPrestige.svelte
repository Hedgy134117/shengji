<script lang="ts">
	export let progress: number;
	export let prestige: number;

	let prestigeBars: string[] | null = null;
	if (prestige > 0) {
		prestigeBars = Array.from(' '.repeat(prestige));
	}
</script>

<p class="prestige">{Math.round(progress * 100)}% to P{prestige + 1}</p>
<div class="prestige-bars">
	{#if prestigeBars !== null}
		{#each prestigeBars as _, i}
			<progress value="1" max="1"></progress>
		{/each}
	{/if}
	<progress value={progress} max="1"></progress>
</div>

<style>
	.prestige {
		font-style: italic;
	}

	progress {
		width: 100%;
		accent-color: var(--accent-color);
	}
</style>
