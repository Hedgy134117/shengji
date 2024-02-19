<script>
</script>

<nav>
	<ul>
		<a href="/"><li>Players</li></a>
		<a href="/games"><li>Games</li></a>
		<a href="/record"><li>Record</li></a>
	</ul>
</nav>

<style>
	nav {
		margin: 0 auto;
		width: 70%;
		background-color: var(--bg-color-1);
	}

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		width: 100%;
		list-style-type: none;
	}

	ul > a {
		flex-grow: 1;
		text-align: center;
		padding: 1em;
		border-bottom: 1px solid gray;
	}

	ul > a:not(:last-child) {
		border-right: 1px solid gray;
	}
</style>
