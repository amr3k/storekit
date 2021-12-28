<script lang="ts">
	import { onMount } from 'svelte';
	import AccountDropdownCard from './Cards/account.svelte';
	import LanguageDropdownCard from './Cards/language.svelte';
	import CartDropdownCard from './Cards/cart.svelte';
	import Sidebar from './sidebar.svelte';
	import type { Product } from '$lib/Types/Data/product';
	import type { MenuStatus } from '$lib/Types/UI/header';
	import type { User } from '$lib/Types/Auth/user';
	export let user: User = {
		userName: 'Amr',
		isUserLoggedIn: true
	};
	let cart: Product[] = [
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
	];

	let openMenus: MenuStatus = {
		account: false,
		sidebar: false,
		cart: false,
		language: false,
		search: false
	};
	let ltr = true;
	onMount(() => {
		try {
			ltr = window.getComputedStyle(document.body).direction === 'ltr';
		} catch (e) {
			ltr = true;
		}
	});
	const switchDirection = (): void => {
		ltr = !ltr;
		document.dir = ltr ? 'ltr' : 'rtl';
		document.documentElement.setAttribute('lang', ltr ? 'ar' : 'en');
	};
	const closeSideBar = (): void => {
		try {
			// TODO Move all remaining open menu controllers to the openMenus object
			document.getElementById('main-drawer').checked = false;
		} catch (e) {
			//
		}
	};
	const closeAllMenus = (): void => {
		openMenus.account = false;
		openMenus.sidebar = false;
		openMenus.cart = false;
		openMenus.language = false;
		openMenus.search = false;
	};
</script>

<main class="shadow-lg bg-base-200 drawer">
	<input id="main-drawer" type="checkbox" class="drawer-toggle" />
	<div class="flex flex-col drawer-content">
		<div
			class="flex items-center sm:justify-evenly lg:justify-around mb-2 shadow-lg bg-base-100 text-base-content"
		>
			<div class="lg:hidden pl-2 w-1/3">
				<label for="main-drawer" class="btn btn-square btn-ghost">
					{#if ltr}
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
				<a href="/"><img class="w-24" src="/logo/light-bg.svg" alt="Storekit logo" /></a>
			</div>
			<div class="hidden w-1/3 px-2 mx-2 lg:flex lg:flex-1 lg:justify-center">
				<div class="flex items-stretch">
					<a href="/" class="navbar-category">Home</a>
					<a href="/category/men" class="navbar-category">Men</a>
					<a href="/category/women" class="navbar-category">Women</a>
					<a href="/category/accessories" class="navbar-category">Accessories</a>
					<a href="/category/outlet" class="navbar-category">Outlet</a>
				</div>
			</div>
			<div class="relative w-1/3 pr-2 flex justify-end">
				<button class="hidden md:inline-block btn btn-square btn-ghost">
					<!-- search -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						class="h-6 w-6 fill-base-content"
					>
						><path fill="none" d="M0 0h24v24H0z" /><path
							d="m18 16.6 4.3 4.3-1.4 1.4-4.3-4.3a9 9 0 0 1-5.6 2 9 9 0 1 1 9-9 9 9 0 0 1-2 5.6zm-2-.7a7 7 0 0 0 2-4.9 7 7 0 1 0-7 7 7 7 0 0 0 4.9-2l.1-.1z"
						/></svg
					>
				</button>
				<button
					class="hidden md:inline-block btn btn-square btn-ghost"
					on:click={() => {
						openMenus.language = !openMenus.language;
					}}
				>
					<!-- Language switcher -->
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"
						/>
					</svg>
				</button>
				{#if openMenus.language}
					<LanguageDropdownCard on:overlayClick={closeAllMenus} />
				{/if}
				<button
					on:click={() => {
						openMenus.account = !openMenus.account;
					}}
					class="account-button hidden md:inline-block btn btn-square btn-ghost"
				>
					<!-- User -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						class="h-6 w-6 fill-base-content"
						><path fill="none" d="M0 0h24v24H0z" /><path
							d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
						/></svg
					>
				</button>
				{#if openMenus.account}
					<AccountDropdownCard {user} on:overlayClick={closeAllMenus} />
				{/if}
				<button
					class="btn btn-square btn-ghost"
					on:click={() => {
						openMenus.cart = !openMenus.cart;
					}}
				>
					{#if cart.length > 0}
						<!-- TODO Add missing classes -->
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
							><path fill="none" d="M0 0h24v24H0z" /><path
								d="M5.5 20c.828 0 1.5.672 1.5 1.5S6.328 23 5.5 23 4 22.328 4 21.5 4.672 20 5.5 20zm13 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zM2.172 1.757l3.827 3.828V17H20v2H5c-.552 0-1-.448-1-1V6.413L.756 3.172l1.415-1.415zM16 3c.552 0 1 .448 1 1v2h2.993C20.55 6 21 6.456 21 6.995v8.01c0 .55-.45.995-1.007.995H8.007C7.45 16 7 15.544 7 15.005v-8.01C7 6.445 7.45 6 8.007 6h2.992L11 4c0-.552.448-1 1-1h4zm-5 5h-1v6h1V8zm7 0h-1v6h1V8zm-3-3h-2v1h2V5z"
							/></svg
						>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="h-6 w-6 fill-base-content"
							><path fill="none" d="M0 0h24v24H0z" /><path
								d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.4l2-8H8V5h13.7a1 1 0 0 1 1 1.2l-2.5 10a1 1 0 0 1-1 .8H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
							/></svg
						>
					{/if}
				</button>
				{#if openMenus.cart}
					<CartDropdownCard {cart} on:overlayClick={closeAllMenus} />
				{/if}
			</div>
		</div>
		<slot />
	</div>
	<Sidebar on:closeSideBar={closeSideBar} />
</main>

<style lang="postcss">
	.navbar-category {
		@apply mx-3 my-1 font-medium leading-6 border-b border-b-transparent;
	}
	.navbar-category:hover {
		@apply border-b border-b-primary duration-500;
	}
	main.drawer {
		min-height: 100vh;
	}
	.btn {
		@apply flex justify-center items-center;
	}
</style>
