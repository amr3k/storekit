<script lang="ts">
	import { fade } from 'svelte/transition';
	import { preloadImage } from '$lib/Functions/preloadImage';
	import type { Product } from '$lib/Types/Data/product.types';
	import { createEventDispatcher } from 'svelte';
	export let product: Product;
	const isProductAvailable = product.stock_status === 'instock' && product.status === 'publish';

	let productSizes: string[] = [];
	product.attributes.forEach((attribute) => {
		if (attribute.name.match(/size/i)) {
			productSizes = attribute.options;
		}
	});
	let productInWishlist = false;
	// This variable indicates a user has clicked Add to cart while the product has multiple sizes
	let availableSizesVisible = false;

	const dispatch = createEventDispatcher();
	const openQuickView = () => {
		dispatch('openQuickView', product);
	};

	const addToCart = (size: string) => {
		if (typeof size === 'string') {
			console.log('Adding to cart');
			availableSizesVisible = false;
			return;
		}
	};
</script>

{#await preloadImage(product.images[0].src)}
	<div
		class="w-full h-full aspect-[2/3] bg-base-300 animate-pulse rounded-lg border border-gray-100"
	/>
{:then imageAsBase64}
	<div
		in:fade={{ duration: 500 }}
		class="group w-full bg-base-200 relative rounded-lg flex flex-col overflow-hidden shadow-lg border border-gray-100"
	>
		<a sveltekit:prefetch href="/product/{product.slug}" class="w-full h-full relative">
			<img
				class="object-cover w-full h-full {isProductAvailable || 'opacity-40'}"
				src={imageAsBase64}
				alt={product.images[0].alt}
			/>
			{#if isProductAvailable}
				<!-- Product second image -->
				<img
					class="object-cover w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 duration-500"
					src={product.images[1].src}
					alt={product.images[1].alt}
				/>
			{/if}
		</a>
		{#if isProductAvailable}
			<div
				class="product-blurred-menu absolute bottom-20 w-full opacity-0 group-hover:opacity-100 flex flex-col items-center justify-end duration-200 ease-linear"
			>
				<button
					class:main-bottons-838={availableSizesVisible}
					class="hover:text-secondary hover:fill-secondary"
					on:click={openQuickView}
				>
					<h2 class="text-xl font-extrabold">Quick view</h2>
					<svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
						><path fill="none" d="M0 0h24v24H0z" /><path
							d="M21 11V3h-8l3 3L6 16l-3-3v8h8l-3-3L18 8z"
						/></svg
					>
				</button>
				<button
					class:main-bottons-838={availableSizesVisible}
					on:click={() => {
						if (productSizes.length > 1) {
							availableSizesVisible = true;
						}
					}}
					class="hover:text-secondary hover:fill-secondary"
				>
					<h2 class="text-xl font-extrabold">Add to cart</h2>
					<svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path fill="none" d="M0 0h24v24H0V0z" />
						<path
							d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8.9-5h7.5a2 2 0 0 0 1.7-1l3.9-7-1.8-1-3.8 7h-7L4.2 2H1v2h2l3.6 7.6L5.2 14A2 2 0 0 0 7 17h12v-2H7l1.1-2z"
						/>
					</svg>
				</button>
				<ul
					class="p-4 flex justify-center items-center rounded-lg backdrop-blur-xl bg-white/70 shadow-xl duration-100 ease-in-out {availableSizesVisible
						? 'opacity-100 -translate-y-full'
						: 'opacity-0'}"
				>
					{#each productSizes as _pSize}
						<li
							class="w-20 flex justify-between items-center p-0 m-0 rounded text-gray-800/70 hover:text-inherit hover:bg-white"
						>
							<button
								on:click={() => addToCart(_pSize)}
								class="text-xl font-bold text-center w-full py-2 px-0">{_pSize}</button
							>
						</li>
					{/each}
				</ul>
				<div
					class="flex justify-center items-center duration-100 ease-in-out {availableSizesVisible
						? 'opacity-100 -translate-y-14'
						: 'opacity-0'}"
				>
					<!-- Close button -->
					<!-- This button hides sizes and returns main buttons to view -->
					<button
						class="p-2 backdrop-blur-xl bg-white/70 hover:bg-white shadow-xl rounded-full"
						on:click={() => (availableSizesVisible = false)}
					>
						<svg
							class="fill-current w-6 h-6 inset-0 duration-100"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="m6 7 2 3-1 1-5-5 5-5 1 1-2 3h7a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H6z" />
						</svg>
					</button>
				</div>
			</div>
		{/if}
		{#if product.on_sale && isProductAvailable}
			<!-- Show sale badge -->
			<div
				class="absolute bg-red-500 text-white select-none top-0 ltr:right-0 ltr:rounded-tr-lg ltr:rounded-bl-lg rtl:left-0 rtl:rounded-tl-lg rtl:rounded-br-lg"
			>
				<div class="w-full h-full px-2 py-1 animate-shine">Sale</div>
			</div>
			<!-- Show sale badge -->
		{/if}
		{#if !isProductAvailable}
			<!-- Show Out of stock badge -->
			<a sveltekit:prefetch href="/product/{product.slug}">
				<div class="absolute inset-0 w-full h-full flex items-center justify-center select-none">
					<div class="w-full h-20 flex items-center justify-center backdrop-blur-xl bg-white/60">
						<h1
							class="text-4xl uppercase bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-800 border-t-4 border-b-4 border-red-500 font-black"
						>
							Out of stock
						</h1>
					</div>
				</div>
			</a>
			<!-- Show Out of stock badge -->
		{/if}
		<div class="p-2 flex justify-between">
			<!-- Product title -->
			<h3 class:text-gray-500={!isProductAvailable} class="font-bold text-md truncate w-full">
				<a sveltekit:prefetch href="/product/{product.slug}" title={product.name}>
					{product.name}
				</a>
			</h3>
		</div>
		{#if isProductAvailable}
			<!-- Product description, rating & price -->
			<div class="flex justify-between items-center">
				<div />
				<p class="text-md font-semibold flex justify-end m-2">
					<style>
						/*
							I had to write this in plain CSS 
							because postCSS complains about missing `del` tag
							which is not visible ofc, but it does exist in `product.price_html`
						*/
						del {
							display: flex;
							justify-items: center;
							font-size: 10px;
							color: gray;
							margin: auto 4px;
						}
					</style>
					{#if product.price_html}
						<!-- This is auto generated by Woocommerce, so no worries about XSS -->
						{@html product.price_html}
					{:else}
						<p>ㅤ</p>
					{/if}
				</p>
			</div>
		{:else}
			<!-- Show empty space -->
			<div class="flex justify-between items-center">
				<div class="flex ml-3" />
				<!-- Show empty string to preserve spacing -->
				<p class="text-md font-semibold flex justify-end m-2">ㅤ</p>
			</div>
		{/if}
		<button
			class="absolute p-2 fill-gray-700 hover:fill-red-500 select-none top-4 ltr:left-4 rtl:right-4 rounded-xl backdrop-blur-md bg-gradient-to-b from-white/70 to-gray-50/70 shadow-md hover:bg-white/90 hover:shadow-lg hover:scale-110 duration-100 wishlist-button"
		>
			<!-- TODO Insert add to wishlist function -->
			<!-- Wishlist button -->
			<div class="flex">
				{#if productInWishlist}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path fill="none" d="M0 0h24v24H0z" />
						<path d="M12 4.5a6 6 0 0 1 8.5 8.5L12 21.5 3.5 13A6 6 0 0 1 12 4.5z" />
					</svg>
					<h3 class="">Remove from wishlist</h3>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							d="M19 14v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm1.24-9.24a6 6 0 0 1 .24 8.23l-1.42-1.42a4 4 0 0 0-5.72-5.56L12 7.22l-1.33-1.2a4 4 0 0 0-5.69 5.61l8.43 8.45-1.41 1.4L3.52 13A6 6 0 0 1 12 4.53a6 6 0 0 1 8.24.23z"
						/>
					</svg>
					<h3>Add to wishlist</h3>
				{/if}
			</div>
		</button>
	</div>
{/await}

<style lang="postcss">
	.product-blurred-menu > button {
		@apply w-3/4 flex justify-between items-center rounded-lg p-4 backdrop-blur-xl bg-white/70 shadow-xl mb-2 duration-100 ease-in-out;
	}
	.main-bottons-838 {
		/* This class makes the two buttons `Quick view` and `Add to cart` move up slowly if the product has multiple sizes */
		@apply -translate-y-20 opacity-40 text-primary-content pointer-events-none shadow-none backdrop-blur-none;
	}
	.wishlist-button svg {
		@apply w-7 h-7;
	}
	.wishlist-button:hover svg {
		@apply scale-110;
	}
	.wishlist-button h3 {
		@apply w-0 whitespace-nowrap invisible;
	}
	.wishlist-button:hover h3 {
		@apply w-full visible;
	}
</style>
