<script lang="ts">
	import type { User } from '$lib/Types/Auth/user.types';
	import type { Product } from '$lib/Types/Data/product.types';

	import { getContext } from 'svelte';
	import AccountDropdownCard from './DropdownMenus/account.svelte';
	import LanguageDropdownCard from './DropdownMenus/language.svelte';
	import CartDropdownCard from './DropdownMenus/cart.svelte';
	import {
		closeAllHeaderMenus,
		accountHeaderMenu,
		languageHeaderMenu,
		cartHeaderMenu
	} from '$lib/Stores/UI/headerMenus';

	let user: User = getContext('header-user');
	let cart: Product[] = getContext('cart');

	const closeAllMenus = () => closeAllHeaderMenus();
</script>

<div class="relative w-1/3 pr-2 flex justify-end">
	<button class="hidden md:inline-block btn btn-square btn-ghost">
		<!-- search -->
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 fill-base-content">
			><path fill="none" d="M0 0h24v24H0z" /><path
				d="m18 16.6 4.3 4.3-1.4 1.4-4.3-4.3a9 9 0 0 1-5.6 2 9 9 0 1 1 9-9 9 9 0 0 1-2 5.6zm-2-.7a7 7 0 0 0 2-4.9 7 7 0 1 0-7 7 7 7 0 0 0 4.9-2l.1-.1z"
			/></svg
		>
	</button>
	<button
		class="hidden md:inline-block btn btn-square btn-ghost"
		on:click={() => {
			languageHeaderMenu.update(() => true);
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
	{#if $languageHeaderMenu}
		<LanguageDropdownCard on:overlayClick={closeAllMenus} />
	{/if}
	<button
		on:click={() => {
			accountHeaderMenu.update(() => true);
		}}
		class="account-button hidden md:inline-block btn btn-square btn-ghost"
	>
		<!-- User -->
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 fill-base-content">
			<path fill="none" d="M0 0h24v24H0z" />
			<path
				d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
			/>
		</svg>
	</button>
	{#if $accountHeaderMenu}
		<AccountDropdownCard {user} on:overlayClick={closeAllMenus} />
	{/if}
	<button
		class="btn btn-square btn-ghost"
		on:click={() => {
			cartHeaderMenu.update(() => true);
		}}
	>
		{#if cart.length > 0}
			<div class="relative">
				<div class="w-2 h-2 absolute -top-1 -right-1 bg-primary rounded-full" />
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="fill-base-content w-6 h-6"
				>
					<path fill="none" d="M0 0h24v24H0z" />
					<path
						d="M5.5 20c.828 0 1.5.672 1.5 1.5S6.328 23 5.5 23 4 22.328 4 21.5 4.672 20 5.5 20zm13 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zM2.172 1.757l3.827 3.828V17H20v2H5c-.552 0-1-.448-1-1V6.413L.756 3.172l1.415-1.415zM16 3c.552 0 1 .448 1 1v2h2.993C20.55 6 21 6.456 21 6.995v8.01c0 .55-.45.995-1.007.995H8.007C7.45 16 7 15.544 7 15.005v-8.01C7 6.445 7.45 6 8.007 6h2.992L11 4c0-.552.448-1 1-1h4zm-5 5h-1v6h1V8zm7 0h-1v6h1V8zm-3-3h-2v1h2V5z"
					/>
				</svg>
			</div>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 fill-base-content"
				><path fill="none" d="M0 0h24v24H0z" /><path
					d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.4l2-8H8V5h13.7a1 1 0 0 1 1 1.2l-2.5 10a1 1 0 0 1-1 .8H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
				/></svg
			>
		{/if}
	</button>
	{#if $cartHeaderMenu}
		<CartDropdownCard {cart} on:overlayClick={closeAllMenus} />
	{/if}
</div>

<style lang="postcss">
	.btn {
		@apply flex justify-center items-center;
	}
</style>
