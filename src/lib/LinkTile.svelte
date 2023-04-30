<script lang="ts">
	export let data: Link;
</script>

<a href={data.url}>
	<div>
		<img src={data.icon} alt="icon" />
	</div>
	<p>{data.title}</p>
</a>

<style>
	a {
		color: inherit;

		width: 100px;
		margin: 15px;

		display: flex;
		flex-direction: column;
		align-items: center;

		cursor: pointer;
		transition: transform 0.1s ease-out;
	}

	a:active {
		transform: scale(0.9);
	}

	a p {
		margin-bottom: 0;
		text-align: center;
	}

	a div {
		background-color: var(--dark-bg);
		transition: background-color 0.35s;
		width: 80px;
		height: 80px;
		border-radius: 20px;
		padding: 20px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	a:hover div {
		background-color: var(--dark-bg-hover);
	}

	a div img {
		width: 100%;
		opacity: 67.4509804%;
	}
</style>
