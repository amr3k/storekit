<script context="module" lang="ts">
	import { CategoryID } from '$lib/Types/Data/category.types';
	import type { Product } from '$lib/Types/Data/product.types';

	export async function load({ url, params, fetch, session, stuff }) {
		// const categories = params.category; // Search categories store for the category provided in the URL
		const pageNumber = params.pageNumber || 1;
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
	export let stuff;
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

<p class="text-5xl">{stuff}</p>
