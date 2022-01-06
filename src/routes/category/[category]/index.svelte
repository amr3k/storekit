<script context="module" lang="ts">
	import { categoriesStore } from '$lib/Stores/Data/categories';

	import { CategoryID } from '$lib/Types/Data/category.types';
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
		const res = await fetch('/api/category/1', {
			method: 'POST',
			body: JSON.stringify({
				categories: [CategoryID.CASUAL_SHOES, CategoryID.ATHLETIC_SHOES]
			})
		});
		if (res.status === 200) {
			const products: Product[] = await res.json();
			return {
				status: 200,
				props: {
					pageNumber,
					products
				}
			};
		} else {
			return {
				status: res.status,
				props: {
					error: new Error('Could not get products')
				}
			};
		}
	}
</script>

<script lang="ts">
	export let pageNumber: number; // For pagination
	export let products: Product[];
	export let error: Error;
</script>

<svelte:head>
	<title>Men shoes</title>
</svelte:head>
{#if !error}
	<div>
		{#each products as product}
			<p>{product.name}</p>
		{/each}
	</div>
{:else}
	<p>Error</p>
{/if}

<h1>This is page: {pageNumber}</h1>
