<script context="module" lang="ts">
	import { categoriesStore } from '$lib/Stores/Data/categories';
	import categoryPreferencesStore from '$lib/Stores/UI/category';

	import type { Category } from '$lib/Types/Data/category.types';
	import { sortBy } from '$lib/Types/Data/category.types';
	import type { Product } from '$lib/Types/Data/product.types';
	import { get as getStoreValue } from 'svelte/store';

	export async function load({ url, params, fetch }) {
		// Initialize empty array of category IDs
		let matchCategory: Category;

		/**
		 * Filter the categoriesStore for the categories that
		 * includes the current category name in their slug
		 * and add their ID to the categoriesIDs array
		 */
		getStoreValue(categoriesStore).forEach((sc) => {
			// sc = stored category
			if (sc.slug.includes(params.category)) {
				matchCategory = sc;
			}
		});
		if (!matchCategory) {
			// If no categories were found, return 404
			return {
				status: 404,
				body: {
					error: 'Category not found'
				}
			};
		}
		const cps: categoryPreferencesType = getStoreValue(categoryPreferencesStore);

		// Get page number from query parameters
		let pageNumber = parseInt(url.searchParams.get('page')) || 1;
		pageNumber = pageNumber > 0 ? pageNumber : 1;

		// Get products of the current category
		const res: Response = await fetch('/api/category', {
			method: 'POST',
			body: JSON.stringify({
				categories: [matchCategory.id],
				pageNumber: pageNumber,
				perPage: cps.productsPerPage
			})
		});
		if (res.status === 200) {
			const products: Product[] = await res.json();
			return {
				status: 200,
				props: {
					category: matchCategory,
					currentPageNumber: pageNumber,
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
	import Pagination from '$lib/Components/Category/Pagination.svelte';
	import ProductCard from '$lib/Components/Product/productCard.svelte';
	import { getCategoryAncestors } from '$lib/Functions/getCategoryAncestors';
	import type { categoryPreferencesType } from '$lib/Types/ui.types';
	export let category: Category;
	let breadCrumbs: Category[] = getCategoryAncestors(category);

	// Pagination
	export let currentPageNumber: number;
	$: totalPages = Math.ceil(category.count / parseInt($categoryPreferencesStore.productsPerPage));

	export let products: Product[];

	const updateProducts = async () => {
		const res: Response = await fetch('/api/category', {
			method: 'POST',
			body: JSON.stringify({
				categories: [category.id],
				pageNumber: 1,
				perPage: $categoryPreferencesStore.productsPerPage
			})
		});
		if (res.status === 200) {
			products = await res.json();
		}
	};
</script>

<svelte:head>
	<title>Shop the best collection of {category.name}</title>
</svelte:head>

<h1 class="text-4xl text-center">{category.name}</h1>
<div class="flex items-center justify-around pb-6 px-4">
	<div class="flex px-2 breadcrumbs w-full">
		<a href="/">Home</a>
		{#each breadCrumbs as category}
			<span class="mx-1 text-gray-600">&#9679</span>
			<a href="/category/{category.slug}">{category.name}</a>
		{/each}
	</div>
	<select bind:value={$categoryPreferencesStore.productsPerPage} class="select select-bordered">
		<option value="12">12</option>
		<option value="24">24</option>
		<option value="48">48</option>
	</select>
</div>

<div
	class="px-4 grid gap-4 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
>
	{#each products as product}
		<ProductCard {product} />
	{/each}
</div>

<Pagination {currentPageNumber} bind:totalPages {category} />

<style lang="postcss">
	.breadcrumbs a {
		@apply font-semibold text-primary;
	}
</style>
