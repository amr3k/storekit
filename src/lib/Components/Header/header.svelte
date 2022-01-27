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
			title: 'Dresses',
			url: '/category/dresses'
		},
		{
			title: 'Skirts',
			url: '/category/skirts'
		},
		{
			title: 'Pants',
			url: '/category/pants'
		},
		{
			title: 'Shoes',
			url: '/category/womens-shoes'
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

<div class="shadow-lg bg-base-200 drawer min-h-screen">
	<input
		id="main-drawer"
		type="checkbox"
		bind:checked={$sidebarHeaderMenu}
		class="drawer-toggle absolute -top-96 -left-96"
	/>
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
				<a sveltekit:prefetch href="/">
					<svg class="w-24" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 307 112"
						><path
							d="m78 24 2-1c1-1 3-1 3-3h1l3-2 2-1 8-2h1-1l-4 3-3 2c-2 3-11 11-12 14l-1 3v1l1-1v1h1l2-1 2-3 2-2h1l2-1 4-3c4-1 9-5 11-8 1-2 1-4-1-6v-2c-1-2-3-2-5-2s-7 0-8 2h-1l-13 5-6 3-5 3c-5 3-19 12-20 19 0 2 0 4 2 5a13 13 0 0 0 11 2l4-1 12-3h2v1l-2 4-8 8-9 8-9 8-5 5-3 4-2 1-2 2-3 2-2 2-4 4-5 6-1 2 2-2 2-2 3-2 3-2 3-3 2-1 8-7 7-4 4-3 3-2 1-1 1-1 2-1v-1l1-1 1-1v-1l1 1c0-2 1-1 2-1v-2l1 1v-1l2-1v-2 1h2v-1h1v-1h1v-1h1v-1l1-1 2-1 1-2 2-6c1-2 0-4-2-5h-6l-5 1-12 2h-5l-1-2 2-3c2-3 7-7 11-9l3-2 2-1 2-1 4-3 5-2zm0 0"
						/><path
							d="M73 38v1l1 1 2 2 2 2h3l2-1h1l2-1h4v-1h4l3-1-1 1-2 4-3 6-2 5a220 220 0 0 0-12 37l1-1 1-3 2-4 4-8v-1l2-3 1-2 1-1 1-2 2-5 2-3 1-1 1-1s-1 0 0 0v-2c1-1 2-1 1-2l1-1v-2c1-1 2-1 2-3l1-2v1l1-5-2-3v-1h3l5-1 4-1 3-1 6-1 1-1 7-3h2v-1l1-1h-1v1h-1l-1 1-32 5c-5 0-9 2-14 3l-6 1-1-1h-3zm0 0"
						/><path
							d="M97 80c0 2 1 4 4 4h1l3-1c4-2 8-4 10-7l3-3h1-1l1 1-1 2 3-4 2-2v-1l2-5v-1l1-2 1-2v-2l1-1h-1c1 0 0 0 0 0h1c0-3-1-11-4-11h-2l1 1v4l-1 4-2 8c-1 4-4 9-7 12l-2 1-2 2-3 3-4 3-1-2v-4l2-4v-1l-3 5 1-2v-1l2-3 1-3v-1h1v-1l1-1 2-2 1-1 2-3 1-1v1-1l3-2v-1h1l2-2 2-4-1-2h-1l-1 1-1 1c-5 4-15 15-18 22l-1 3v6Zm22-9 1-1v-1l1-1v-1l2-1v-3h2l-1 2-1 2-1 2-1 1-2 1 1 1h-1v-1zm6-12v1h-1l1-1zm-5-8h1l1-2h-1l-1 2zm-13 15 1-2-1 2zm-1 1h-1v2zm13 6h1l-1 1zm23-8 8-3 6-3 5-6c1-3 1-8-2-10v1c-3-3-6-4-9-4l-3 1-12 5h-1l2 2 7-3-1 2-8 15-10 19-2 8h2l6-9 3-4 1-2v-2l2-2-1 1h1l1-4 2 9 4 11 5 7 1-1-1-2-3-5-1-3-1-2-1-12v-4zm-1-6 1 1v-3l3-5c1-2 2-5 0-8h6l6 1c2 2 1 5 0 7-4 7-10 10-17 12l-1-1v-1l1 1 1-4zm-5 9 1-1v1zm0 0"
						/><path
							d="m183 60-2-1h-2l-11 1 3-6 2-3 2-1h1l5-1h1l10-2 3-1 2-1h1l-1-1 1-1h-18l-4 1h-10l-2 1 3 3 2 1-2 2-3 6-2 3v2l-2 3-4 8-2 3-2 4c-1 2-3 4-6 5v2l1 2 2 1 2-1h1v1l1-1 1-2 5-2h2l4-2h2l8-3c1-1 3-1 3-3l1 1 2-2c-8 0-16 3-24 5l1-2 3-4 2-5 3-5h5l5-1 3-1v-1h-1l1-1h1l-1 1h1l3-1v-1zm-5 17-2 2 1-1 1-1zm26 0 1-8-1-4v-2l13-12 3-3h1l-1-1-5 4-11 10-5 6 1-3 1-2 3-6 2-5 1-1 2-5v-1l1-1-2-3h-1l-2 3-2 4-1 2-6 9-6 11-2 5-6 10-1 4h2l1-1h1c1 0 2 0 2-2l1-1v-1l-1 1v1l-2 1 1-1 1-2h1l2-1 1-3 1-1 1-2 1-1 4-5 3-3v1l-3 18c-1 5 0 9 2 13h1v-3l-1-2v-1l-1-4 1-6 1-4 2-4v-2 5l1-1zm-16 5 1-2 2-1-2 2-1 1Zm14 3h1l1-6h-1v2zm0 12v-8 8zm1 4v-1l-1 1h1zm12-13 1 1 2-1 1-1h1v-1l1-1v1-2h1v-1 1l-1-1h1v-2l1 1v-2l1-1v-3c2 0 2-1 2-2v-1l1-1v-1c0-2 1-2 2-3v-1l1-1 2-3v-1l1-2 1-1 1-1 1-2 2-7-1-2-2-3-1 1-1 1-1 2a372 372 0 0 0-17 40zm4-1 1-1v1h-1Zm1-3 1-1 1 1h-2Zm0 0"
						/><path
							d="M229 38v2l2 2 3 2h2l2-1h1l2-1h5v-1h3l3-1v1l-2 4-3 6-3 5a220 220 0 0 0-11 37v-1l2-3 1-4 4-8v-1l3-3 1-2 1-1 1-2 2-5 2-3v-1l1-1 1-2 1-2v-1l1-1v-1l1-3 1-2v1l1-5-1-3v-1h1-1 3l4-1 4-1 3-1 6-1 1-1 8-3h2v-2 1h-1l-1 1-33 5-14 3-5 1-2-1h-2zm0 0"
						/></svg
					>
				</a>
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
</div>
