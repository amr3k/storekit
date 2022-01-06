<script lang="ts">
	import { setContext } from 'svelte';
	import Sidebar from './Sidebar/sidebar.svelte';
	import PageList from './pageList.svelte';
	import Buttons from './buttons.svelte';
	import {
		sidebar as sidebarHeaderMenu,
		closeAll as closeAllHeaderMenus
	} from '$lib/Stores/UI/headerMenus';
	import { language as languageStore } from '$lib/Stores/language';
	import Footer from '$lib/Components/Footer/footer.svelte';
	setContext('pages', [
		{
			title: 'Home',
			url: '/'
		},
		{
			title: 'Men',
			url: '/category/men'
		},
		{
			title: 'Women',
			url: '/category/women'
		},
		{
			title: 'Accessories',
			url: '/category/accessories'
		},
		{
			title: 'Shoes',
			url: '/category/shoes'
		}
	]);
	setContext('header-user', {
		userName: 'Amr',
		isUserLoggedIn: true
	});
	setContext('cart', [
		{
			image:
				'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
			title: 'Nike Air Max',
			price: 190,
			quantity: 1
		},
		{
			image:
				'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
			title: 'Nike Ayonix',
			price: 210,
			quantity: 2
		},
		{
			image:
				'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
			title: 'Adidas Yeezy',
			price: 200,
			quantity: 1
		}
	]);
	const escapeClick = (event: KeyboardEvent) => {
		if (event.key === 'Escape' || event.key === 'Esc') {
			closeAllHeaderMenus();
		}
	};
</script>

<svelte:window on:keydown={escapeClick} />

<header class="shadow-lg bg-base-200 drawer min-h-screen">
	<input id="main-drawer" type="checkbox" bind:checked={$sidebarHeaderMenu} class="drawer-toggle absolute -top-96 -left-96" />
	<div class="flex flex-col drawer-content">
		<nav
			class="flex items-center sm:justify-evenly lg:justify-around mb-2 shadow-lg bg-base-100 text-base-content"
		>
			<div class="lg:hidden pl-2 w-1/3">
				<label for="main-drawer" class="btn btn-square btn-ghost">
					{#if $languageStore === 'en'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="h-6 w-6 fill-base-content"
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z" />
						</svg>
					{:else}
						<svg
							class="h-6 w-6 fill-base-content"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24"
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
						</svg>
					{/if}
				</label>
			</div>
			<div class="px-2 w-1/3 flex justify-center lg:justify-start flex-1 lg:flex-none">
				<a href="/"><img class="w-24" src="/logo/light.png" alt="Storekit logo" /></a>
			</div>
			<div class="hidden w-1/3 px-2 mx-2 lg:flex lg:flex-1 lg:justify-center">
				<PageList />
			</div>
			<Buttons />
		</nav>
		<slot />
		<Footer />
	</div>
	<Sidebar />
</header>
