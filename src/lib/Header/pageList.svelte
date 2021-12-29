<script lang="ts">
	import type { Pages } from '$lib/Types/UI/header';
	import { onMount } from 'svelte';

	// $: currentPathname = window.location.pathname || '/';
	export let pages: Pages;
	let currentPathname = '/';
	onMount(() => {
		currentPathname = window.location.pathname;
	});
	const updateCurrentPathname = (pathname: string) => {
		currentPathname = pathname;
	};
</script>

<div class="flex items-stretch">
	{#each pages as page}
		<a
			href={page.url}
			class:selected={page.url === currentPathname}
			class="navbar-category"
			on:click={() => updateCurrentPathname(page.url)}>{page.title}</a
		>
	{/each}
</div>

<style lang="postcss">
	.navbar-category {
		@apply mx-3 my-1 font-medium leading-6 border-b border-b-transparent;
	}
	.navbar-category.selected {
		@apply border-b-secondary;
	}
	.navbar-category:hover {
		@apply border-b border-b-primary duration-500;
	}
</style>
