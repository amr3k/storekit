<script context="module" lang="ts">
	import { categoriesStore } from '$lib/Stores/Data/categories';

	import type { Category } from '$lib/Types/Data/category.types';
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

		// Get page number from query parameters
		let pageNumber = parseInt(url.searchParams.get('page')) || 1;
		pageNumber = pageNumber > 0 ? pageNumber : 1;

		// Get products of the current category
		const res: Response = await fetch('/api/category', {
			method: 'POST',
			body: JSON.stringify({
				categories: [matchCategory.id],
				pageNumber: pageNumber
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
	import ProductCard from '$lib/Components/Product/productCard.svelte';
	import { getCategoryAncestors } from '$lib/Functions/getCategoryAncestors';
	export let category: Category;
	let breadCrumbs: Category[] = getCategoryAncestors(category);

	// Pagination
	export let currentPageNumber: number;
	let productsPerPage = 12;
	const totalPages: number = Math.ceil(category.count / productsPerPage);

	export let products: Product[];
</script>

<svelte:head>
	<title>Shop the best collection of {category.name}</title>
</svelte:head>

<h1 class="text-4xl text-center">{category.name}</h1>
<div class="flex px-2 breadcrumbs">
	<a href="/">Home</a>
	{#each breadCrumbs as category}
		<span class="mx-1 text-gray-600">&#9679</span>
		<a href="/category/{category.slug}">{category.name}</a>
	{/each}
</div>
<div
	class="px-4 grid gap-4 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
>
	{#each products as product}
		<ProductCard {product} />
	{/each}
</div>

{#if totalPages > 1}
	<div class="flex justify-center my-10 text-primary pagination">
		<a
			sveltekit:prefetch
			href="/category/{category.slug}?page={currentPageNumber - 1}"
			class="ltr:rounded-l-full rtl:rounded-r-full {currentPageNumber === 1
				? 'disabled'
				: 'bg-gradient-to-b from-blue-50 to-blue-100'}">Previous</a
		>
		{#each [...Array(totalPages + 1).keys()].slice(1) as currentPage}
			<a
				sveltekit:prefetch
				href="/category/{category.slug}?page={currentPage}"
				class="border-x border-gray-200 {currentPage === currentPageNumber
					? 'bg-gradient-to-b from-sky-600 to-sky-700 font-semibold text-primary-content'
					: 'bg-gradient-to-b from-blue-50 to-blue-100'}">{currentPage}</a
			>
		{/each}
		<a
			sveltekit:prefetch
			href="/category/{category.slug}?page={currentPageNumber + 1}"
			class="ltr:rounded-r-full rtl:rounded-l-full {currentPageNumber === totalPages
				? 'disabled'
				: 'bg-gradient-to-b from-blue-50 to-blue-100'}">Next</a
		>
	</div>
{/if}

<style lang="postcss">
	.breadcrumbs a {
		@apply font-semibold text-primary;
	}
	.pagination > a {
		@apply px-4 py-2 duration-100 ease-in-out shadow-md;
	}
	.pagination > a:hover {
		@apply from-blue-800 to-blue-900 text-blue-50;
	}
	.pagination > a.disabled {
		@apply bg-gray-300 text-gray-400 cursor-not-allowed pointer-events-none;
	}
</style>
