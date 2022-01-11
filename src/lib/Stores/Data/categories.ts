import { writable } from 'svelte/store';
import { browser } from '$app/env';
import type { Writable } from 'svelte/types/runtime/store';
import type { Category } from '$lib/Types/Data/category.types';
export const categoriesStore: Writable<Category[]> =
	writable(browser && JSON.parse(localStorage.getItem('categories'))) || writable([]);
categoriesStore.subscribe((value: Category[]) => {
	return browser && localStorage.setItem('categories', JSON.stringify(value));
});
