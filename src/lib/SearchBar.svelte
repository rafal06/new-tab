<script lang="ts">
	let searchQuery = '';

	function search() {
		if (searchQuery === '') return;
		window.open(`https://duckduckgo.com/?q=${searchQuery}`, '_self');
		searchQuery = '';
	}
</script>

<div>
	<input
		type="search"
		placeholder="Search..."
		bind:value={searchQuery}
		on:keydown={(key) => {
			key.code == 'Enter' ? search() : '';
		}}
	/>
	<button on:click={search}>
		<img src="./icons/search.svg" alt="search" />
	</button>
</div>

<style>
	div {
		background-color: var(--dark-bg);
		border-radius: 1000000px;
		width: 480px;
		margin: 8px;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	div input {
		background-color: #00000000;

		width: 100%;
		height: 100%;
		margin: 10px 0 10px 15px;

		border: none;
		outline: none;

		color: white;
		font-family: 'OpenSans', sans-serif;
		font-weight: 350;
		letter-spacing: 0.02em;
		font-size: 14px;
	}

	button {
		background-color: #00000000;
		border: none;

		display: flex;
		align-items: center;
		justify-content: center;

		padding: 10px 12px;
		border-radius: 0 1000000px 1000000px 0;
		transition-duration: 0.5s;
	}

	button:hover {
		background-color: var(--accent);
		cursor: pointer;
	}
</style>
