<script lang="ts">
	import type { Product } from '$lib/Types/Data/product.types';
	import Image from '$lib/Components/Media/image.svelte';
	export let product: Product;
	const productInStock = product.stock_status === 'instock';
</script>

<div
	class="group w-full bg-base-200 rounded-lg flex flex-col items-center overflow-hidden hover:shadow-lg border border-gray-100"
>
	<a sveltekit:prefetch href="/product/{product.slug}" class="w-full h-full relative">
		<Image classes="object-contain" source={product.images[0].src} alt={product.images[0].alt} />
		<Image
			classes="object-contain absolute inset-0 opacity-0 group-hover:opacity-100 duration-200"
			source={product.images[1].src}
			alt={product.images[1].alt}
		/>
	</a>
	<div class="px-4 py-2">
		<h3 class="font-medium">
			<a href="/product/{product.slug}" title={product.name}>
				{product.name}
			</a>
		</h3>
		<p class="">{product.price}</p>
		<p class="">{product.regular_price}</p>
		<p class="">{product.sale_price}</p>
		<!-- <p>{product.stock_quantity}</p> -->
	</div>
</div>
