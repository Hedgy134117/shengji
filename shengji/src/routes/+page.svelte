<script lang="ts">
	import { PlayerList } from '$lib/PlayerList';
	import { GameList } from '$lib/GameList';

	async function initialize() {
		await PlayerList.initialize();
		console.log(PlayerList.players);
		await GameList.initialize();
		console.log(GameList.games);
	}

	initialize();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
