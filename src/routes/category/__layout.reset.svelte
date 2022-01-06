<script context="module" lang="ts">
	// Check if categories store exists
	import { categoriesStore } from '$lib/Stores/Data/categories';
	import { get as getStoreData } from 'svelte/store';

	export const load = async ({ url, params, fetch, session, stuff }) => {
		if (getStoreData(categoriesStore).length === 0) {
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
