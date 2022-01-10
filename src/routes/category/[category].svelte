<script context="module" lang="ts">
	import { categoriesStore } from '$lib/Stores/Data/categories';

	import type { Product } from '$lib/Types/Data/product.types';
	import { get as getStoreValue } from 'svelte/store';

	export async function load({ url, params, fetch }) {
		// Initialize empty array of category IDs
		let categoriesIDs: number[] = [];

		/**
		 * Filter the categoriesStore for the categories that
		 * includes the current category name in their slug
		 * and add their ID to the categoriesIDs array
		 */
		getStoreValue(categoriesStore)
			.filter((c) => c.slug.includes(params.category))
			.forEach((c) => {
				categoriesIDs.push(c.id);
			});
		if (categoriesIDs.length === 0) {
			// If no categories were found, return 404
			return {
				status: 404,
				body: {
					error: 'Category not found'
				}
			};
		}

		// Get page number from query parameters
		const pageNumber = parseInt(url.searchParams.get('page')) || 1;

		// Get products of the current category
		const res: Response = await fetch('/api/category', {
			method: 'POST',
			body: JSON.stringify({
				categories: categoriesIDs,
				pageNumber: pageNumber
			})
		});
		if (res.status === 200) {
			const products: Product[] = await res.json();
			return {
				status: 200,
				props: {
					category: params.category,
					pageNumber,
					products
				}
			};
		} else {
			return {
				status: 404
			};
		}
	}
</script>

<script lang="ts">
	import ProductCard from '$lib/Components/Product/productCard.svelte';

	export let category: string;
	export let pageNumber: number; // For pagination
	export let products: Product[];
	// console.log(products[1]);
</script>

<svelte:head>
	<title>Shop the best collection of {category}</title>
</svelte:head>

<h1 class="text-4xl text-center">{category}</h1>
<div
	class="px-4 grid gap-4 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
>
	{#each products as product}
		<ProductCard {product} />
	{/each}
</div>

<h1>This is page: {pageNumber}</h1>
