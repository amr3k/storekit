<script lang="ts">
	import { clickOutside } from '$lib/Components/clickOutside';

	import type { Product } from '$lib/Types/Data/product';

	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	export let cart: Product[];

	let totalPrice = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

	console.log(cart.length);

	const dispatch = createEventDispatcher();

	const overlayClick = () => {
		dispatch('overlayClick');
	};
</script>

<div
	use:clickOutside
	on:outclick={overlayClick}
	transition:fly={{ duration: 300, y: -20 }}
	class="cart-dropdown absolute right-auto top-16 w-48 bg-base-100 border border-base-200 rounded-xl overflow-hidden shadow-2xl flex flex-col p-0"
>
	<div class="cart-header flex justify-center">
		<div class="cart-icon">
			<!-- TODO continue designing this based on /design/cart.webp -->
			<svg
				class="w-6 h-6"
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M21 10.12h-18a2 2 0 00-2 2v8a2 2 0 002 2h18a2 2 0 002-2v-8a2 2 0 00-2-2zM11 21v-8"
				/>
				<path d="M11 3.055V21M15 21v-5.945M19 21v-11.945" />
			</svg>
		</div>

		<div class="cart-total">
			<span class="text-xs">Total</span>
			<span class="text-base font-bold">{totalPrice}</span>
		</div>
	</div>
</div>

<style lang="postcss">
	.account-dropdown ul > li {
		@apply flex justify-items-stretch rounded;
	}
	.account-dropdown ul > li > a {
		@apply my-1 w-full font-semibold;
	}
	.account-dropdown ul > li > a > svg {
		@apply inline-block w-5 h-5 mx-3;
	}
	.account-dropdown ul > li:hover {
		@apply bg-base-200 duration-100;
	}
	.account-dropdown ul > li:hover svg {
		@apply duration-100;
	}
	.account-li:hover svg {
		@apply fill-sky-500;
	}
	.wishlist-li:hover svg {
		@apply fill-rose-600;
	}
	.faq-li:hover svg {
		@apply fill-cyan-500;
	}
	.logout-li:hover svg {
		@apply fill-red-500;
	}
	.divider {
		@apply mx-auto my-1 border-b border-b-transparent text-neutral;
	}
</style>
