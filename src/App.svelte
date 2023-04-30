<script lang="ts">
  import type { Link } from './lib/types';
	import LinkTile from './lib/LinkTile.svelte';
	import SearchBar from './lib/SearchBar.svelte';

	let links: Link[] = [
		{
			title: 'YouTube',
			url: 'https://www.youtube.com/feed/subscriptions',
			icon: './icons/youtube.svg'
		},
		{
			title: 'GitHub',
			url: 'https://github.com',
			icon: './icons/github.svg'
		},
		{
			title: 'MDN Docs',
			url: 'https://developer.mozilla.org/en-US/',
			icon: './icons/mdn.svg'
		},
		{
			title: 'Downdetector',
			url: 'https://downdetector.pl',
			icon: './icons/downdetector.svg'
		}
	];
</script>

<main>
	<div>
		<h1>New Tab</h1>
	</div>

	<SearchBar />

	<div class="quickLinks">
		{#each links as data}
			<LinkTile {data} />
		{/each}
	</div>
</main>

<footer>
	<p>
		Photo by <a href="https://unsplash.com/@fakurian">Milad Fakurian</a>
		on
		<a href="https://unsplash.com">Unsplash</a>
	</p>
</footer>
