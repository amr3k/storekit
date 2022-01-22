<script lang="ts">
	import type { Product } from '$lib/Types/Data/product.types';
	import { createEventDispatcher } from 'svelte';
	import PlaceOrder from '../Buttons/PlaceOrder.svelte';

	export let product: Product;
	let productColors: string[] = [];
	product.attributes.forEach((attribute) => {
		if (attribute.name.match(/color/i)) {
			productColors = attribute.options;
		}
	});
	const dispatch = createEventDispatcher();
	const close = () => {
		dispatch('close');
	};
</script>

<div class="w-1/2 max-w-4xl bg-white z-50 mt-32 rounded-lg shadow-lg">
	<div class="flex justify-end">
		<!-- Close button -->
		<button class="relative close-btn" on:click={close}>
			<svg class="fill-red-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
				><path fill="none" d="M0 0h24v24H0z" /><path
					d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.4 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8-1.4 1.4-2.8-2.8-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8z"
				/></svg
			>
			<svg
				class="absolute opacity-0 fill-red-600"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				><path fill="none" d="M0 0h24v24H0z" /><path
					d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-11.4L9.2 7.8 7.8 9.2l2.8 2.8-2.8 2.8 1.4 1.4 2.8-2.8 2.8 2.8 1.4-1.4-2.8-2.8 2.8-2.8-1.4-1.4-2.8 2.8z"
				/></svg
			>
		</button>
	</div>
	<div class="flex justify-evenly px-10 pb-5 h-full">
		<div class="w-full px-10">
			<!-- Left side: Product image slider -->
			<img class="object-cover w-full" src={product.images[0].src} alt="{product.images[0].alt}" />
		</div>
		<div class="flex flex-col items-start w-full px-4">
			<!-- Right side: Product info -->
			<h1 class="text-xl font-semibold">{product.name}</h1>
			<div class="my-2">
				<!-- Product price as html -->
				<!-- {@html product.price_html} -->
				<p class="font-bold text-accent">${Math.round(parseInt(product.price))}.00</p>
			</div>
			<div class="flex gap-4 my-4 justify-evenly">
				<!-- Call to action -->
				<PlaceOrder />
				<button class="w-full">View Details</button>
			</div>
			<div>
				<!-- Category information -->
				<span class="font-bold">Categories: </span>
				{#each product.categories as cat}
					<span class="badge mx-1"><a href="/category/{cat.name}">{@html cat.name}</a></span>
				{/each}
			</div>
			<div>
				<!-- Share product to social media -->
				<!-- Share to Facebook -->
				<button>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
						><path fill="none" d="M0 0h24v24H0z" /><path
							d="M18.856 6.857H5.144A2.145 2.145 0 0 0 3 8.3v9.14a2.145 2.145 0 0 0 2.144 2.143h12.72a2.145 2.145 0 0 0 2.144-2.143V8.3a2.145 2.145 0 0 0-2.144-2.143zm.002 12.72a.8.8 0 0 1-.8.8H5.144a.8.8 0 0 1-.8-.8V8.3a.8.8 0 0 1 .8-.8h12.72a.8.8 0 0 1 .8.8z"
						/><path
							d="M15.964 15.964h-2.8v-2.8a1.6 1.6 0 0 0-3.2 0v2.8h-2.8a1.6 1.6 0 0 0 0 3.2h2.8v2.8a1.6 1.6 0 0 0 3.2 0v-2.8h2.8a1.6 1.6 0 0 0 0-3.2z"
						/></svg
					>
				</button>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.close-btn > svg {
		@apply w-8 h-8 inset-0 duration-100;
	}
	.close-btn:hover > svg:first-child {
		@apply opacity-0;
	}
	.close-btn:hover > svg:last-child {
		@apply opacity-100;
	}
</style>
