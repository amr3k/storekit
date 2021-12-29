<script lang="ts">
	import type { Pages } from '$lib/Types/UI/header';

	import { createEventDispatcher } from 'svelte';

	export let pages: Pages;

	const dispatch = createEventDispatcher();
	const closeSideBar = (): void => {
		dispatch('closeSideBar');
	};
</script>

<!-- TODO convert hidden icons to appropriate elements [Language switcher => dropdown menu] -->

<div class="drawer-side lg:hidden">
	<label for="main-drawer" class="drawer-overlay" />
	<ul class="p-4 overflow-y-auto w-80 bg-base-200">
		{#each pages as page}
			<li>
				<a on:click={closeSideBar} href={page.url}>
					{page.title}
				</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	.drawer-side ul > li {
		@apply mx-auto my-1 py-2 flex justify-items-stretch justify-center;
	}
	.drawer-side ul > li > a {
		@apply w-full text-center;
	}
</style>
