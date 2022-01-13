<script lang="ts">
	import type { Category } from '$lib/Types/Data/category.types';

	export let currentPageNumber: number;
	export let totalPages: number;
	export let category: Category;
</script>

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

<style lang="postcss">
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
