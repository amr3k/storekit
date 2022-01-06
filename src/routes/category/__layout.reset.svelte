<script context="module" lang="ts">
	import { categoriesStore } from '$lib/Stores/Data/categories';
	import { get as getStoreData } from 'svelte/store';

	export const load = async ({ url, params, fetch, session, stuff }) => {
		if (getStoreData(categoriesStore).length === 0) {
			/**
			 * Check if the categories store is empty.
			 * If it is, then load the categories.
			 * This is to prevent the categories from being loaded multiple times.
			 */
			const fetchedCategoriesResponse = await fetch('/api/pre/fetchCategories');
			const fetchedCategories = await fetchedCategoriesResponse.json();
			categoriesStore.set(fetchedCategories.data);
		}
		return {
			status: 200,
			props: {
				url,
				params,
				session,
				stuff
			}
		};
	};
</script>

<script lang="ts">
	import Header from '$lib/Components/Header/header.svelte';
	import CategorySidebar from '$lib/Components/Category/Sidebar.svelte';
</script>

<Header>
	<CategorySidebar>
		<main class="min-h-full">
			<slot />
		</main>
	</CategorySidebar>
</Header>
