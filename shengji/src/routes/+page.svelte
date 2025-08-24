<script lang="ts">
	function getNextFridayFormatted(): string {
		const today: Date = new Date();
		const dayOfWeek: number = today.getDay(); // 0 = Sunday, ..., 5 = Friday

		const daysUntilFriday: number = (5 - dayOfWeek + 7) % 7 || 7;
		const nextFriday: Date = new Date(today);
		nextFriday.setDate(today.getDate() + daysUntilFriday);

		// Format as MM/DD/YYYY
		const month: string = String(nextFriday.getMonth() + 1).padStart(2, '0');
		const day: string = String(nextFriday.getDate()).padStart(2, '0');
		const year: number = nextFriday.getFullYear();

		return `${month}/${day}/${year}`;
	}
</script>

<svelte:head>
	<title>about</title>
</svelte:head>

<main>
	<p>Hello! Welcome to the Chinese Card Games Club official website!</p>
	<p>
		The website is currently under construction but we plan to host game instructions here as well
		as scoreboards and upcoming events!
	</p>
	<p>We meet every Friday at 8pm in the WPU Food Court</p>
	<p>
		The next meeting is: <span style="color: var(--accent-color)">{getNextFridayFormatted()}</span>
	</p>
	<p>
		Join our GroupMe <a href="https://groupme.com/join_group/69688448/oK3bBR2T" target="_blank"
			>here</a
		>
		or contact <a href="mailto:gcs28@pitt.edu">Graham Smith (gcs28@pitt.edu)</a> for more information
	</p>
	<p>We hope to see you there! :)</p>
</main>

<style>
	:global(:root) {
		--bg-color: #121212;
		--bg-color-1: #181818;
		--bg-color-2: #1e1e1e;
		--accent-color: #dd2e44;
		--accent-color-1: #dd5567;
		--accent-color-2: #e08d98;
	}

	:global(body) {
		font-family: 'Noto Sans', sans-serif;
		/* font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', sans-serif; */
		background-color: #121212;
		color: #ffffff;
		box-sizing: border-box;
		margin: 1em 0;
	}

	:global(p) {
		margin: 0;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(main) {
		margin: auto;
		width: 70%;
		background-color: var(--bg-color-1);
	}

	@media (max-width: 900px) {
		:global(main) {
			width: 100%;
		}
	}

	p {
		padding: 1em;
	}

	a {
		color: var(--accent-color);
		text-decoration: underline;
	}
</style>
