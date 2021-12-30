<script lang="ts">
	import { page } from '$app/stores';
	import type { Pages } from '$lib/Types/UI/header.types';
	import { getContext } from 'svelte';

	let pages: Pages = getContext('pages');
	$: currentPathname = $page.path;
</script>

<div class="flex items-stretch">
	{#each pages as page}
		<a
			href={page.url}
			class:selected={page.url === currentPathname}
			class="mx-3 my-1 font-medium leading-6 border-b border-b-transparent hover:border-b-primary hover:duration-500"
			>{page.title}</a
		>
	{/each}
</div>

<style lang="postcss">
	.selected {
		@apply border-b-secondary;
	}
</style>
