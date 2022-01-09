<script lang="ts">
	import { fade } from 'svelte/transition';
	import { preloadImage } from '$lib/Functions/preloadImage';
	import { language as languageStore } from '$lib/Stores/language';
	import type { Product } from '$lib/Types/Data/product.types';
	import { roundPrice } from '$lib/Functions/roundPrice';
	export let product: Product;
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
		<!-- {#if product.on_sale} -->
		<div
			class="absolute bg-red-500 text-white select-none px-2 py-1 top-0 {$languageStore === 'en'
				? 'right-0 rounded-tr-lg rounded-bl-lg'
				: 'left-0 rounded-tl-lg rounded-br-lg'}"
		>
			Sale
		</div>
		<!-- {/if} -->
		<div class="p-2">
			<h3 class="font-medium text-lg truncate">
				<a href="/product/{product.slug}" title={product.name}>
					{product.name}
				</a>
			</h3>
			<p class="">{roundPrice(parseFloat(product.price))}</p>
			<!-- <p class="">{product.regular_price}</p>
			<p class="">{product.sale_price}</p> -->
			<!-- <p>{product.stock_quantity}</p> -->
		</div>
	</div>
{/await}
