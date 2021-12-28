<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const closeSideBar = (): void => {
		dispatch('closeSideBar');
	};
</script>

<div class="drawer-side lg:hidden">
	<label for="main-drawer" class="drawer-overlay" />
	<ul class="p-4 overflow-y-auto w-80 bg-base-200">
		<li><a on:click={closeSideBar} href="/" class="navbar-category">Home</a></li>
		<li><a on:click={closeSideBar} href="/category/men" class="navbar-category">Men</a></li>
		<li><a on:click={closeSideBar} href="/category/women" class="navbar-category">Women</a></li>
		<li>
			<a on:click={closeSideBar} href="/category/accessories" class="navbar-category">Accessories</a
			>
		</li>
		<li><a on:click={closeSideBar} href="/category/outlet" class="navbar-category">Outlet</a></li>
	</ul>
</div>

<style lang="postcss">
	.drawer-side ul > li {
		@apply mx-auto py-2 flex justify-items-stretch justify-center;
	}
	.drawer-side ul > li > a {
		@apply w-full text-center;
	}
</style>
