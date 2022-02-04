<script context="module" lang="ts">
	import { categoriesStore } from '$lib/Stores/Data/categories';
	import { get as getStoreData } from 'svelte/store';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ url, params, fetch, session, stuff }) => {
		if (!getStoreData(categoriesStore)) {
			/**
			 * Check if the categories store is empty.
			 * If it is, then load the categories.
			 * This is to prevent the categories from being loaded multiple times.
			 */
			console.log('Loading categories...');
			const res: Response = await fetch('/api/pre/fetchCategories');
			const fetchedCategories = await res.json();
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
		<main>
			<slot />
		</main>
	</CategorySidebar>
</Header>
