<script lang="ts">
	import { onMount } from 'svelte';
	import { /* browser, */ type Link } from './lib/types';
	import LinkTile from './lib/LinkTile.svelte';
	import SearchBar from './lib/SearchBar.svelte';
	import Settings from './lib/Settings.svelte';

	let links: Link[] = [
		{
			title: 'YouTube',
			url: 'https://www.youtube.com/feed/subscriptions',
			favicon: './icons/youtube.svg'
		},
		{
			title: 'GitHub',
			url: 'https://github.com',
			favicon: './icons/github.svg'
		},
		{
			title: 'MDN Docs',
			url: 'https://developer.mozilla.org/en-US/',
			favicon: './icons/mdn.svg'
		},
		{
			title: 'Downdetector',
			url: 'https://downdetector.pl',
			favicon: './icons/downdetector.svg'
		}
	];

	onMount(async () => {
		if (!browser) return;
		let topSites: Array<any> = await browser.topSites.get({includeFavicon: true});
		links = topSites.slice(0, 4);
	});
</script>

<main>
	<Settings />

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
