<script lang="ts">
	import { fade } from 'svelte/transition';
	import { preloadImage } from '$lib/Functions/preloadImage';
	import { language as languageStore } from '$lib/Stores/language';
	import type { Product } from '$lib/Types/Data/product.types';
	import { roundPrice } from '$lib/Functions/roundPrice';
	export let product: Product;
	const isVariableProduct = product.type === 'variable';

	const productInStock = product.stock_status === 'instock';
	// console.log(product);
</script>

{#await preloadImage(product.images[0].src)}
	<div
		class="w-full h-full aspect-[2/3] bg-base-300 animate-pulse rounded-lg border border-gray-100"
	/>
{:then base64}
	<div
		in:fade={{ duration: 500 }}
		class="group w-full bg-base-200 relative rounded-lg flex flex-col overflow-hidden hover:shadow-lg border border-gray-100"
	>
		<a sveltekit:prefetch href="/product/{product.slug}" class="w-full h-full relative">
			<img class="object-cover w-full h-full" src={base64} alt={product.images[0].alt} />
			<img
				class="object-cover w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100 duration-200"
				src={product.images[1].src}
				alt={product.images[1].alt}
			/>
		</a>
		{#if product.on_sale}
			<div
				class="absolute bg-red-500 text-white select-none px-2 py-1 top-0 {$languageStore === 'en'
					? 'right-0 rounded-tr-lg rounded-bl-lg'
					: 'left-0 rounded-tl-lg rounded-br-lg'}"
			>
				Sale
			</div>
		{/if}
		<div class="p-2 flex justify-between">
			<h3 class="font-bold text-sm truncate w-full">
				<a href="/product/{product.slug}" title={product.name}>
					{product.name}
				</a>
			</h3>
		</div>
		<p class="text-md font-semibold flex justify-end">
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
			{@html product.price_html}
		</p>
	</div>
{/await}
