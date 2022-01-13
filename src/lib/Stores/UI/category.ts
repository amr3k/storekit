import { writable } from 'svelte/store';
import { browser } from '$app/env';
import type { Writable } from 'svelte/types/runtime/store';
import type { categoryPreferencesType } from '$lib/Types/ui.types';
import { sortBy } from '$lib/Types/Data/category.types';

let categoryPreferencesStore: Writable<categoryPreferencesType> = writable({
	productsPerPage: 12,
	sortBy: sortBy.date
});
try {
	categoryPreferencesStore = writable(
		(browser && JSON.parse(localStorage.getItem('categoryPreferences'))) || {
			productsPerPage: 12,
			sortBy: 'date'
		}
	);
} catch (e) {
	console.error('localStorage is invalid', e);
}

categoryPreferencesStore.subscribe((value) => {
	if (browser) {
		return localStorage.setItem('categoryPreferences', JSON.stringify(value));
	}
});

export default categoryPreferencesStore;
