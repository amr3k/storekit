import { get as getStoreValue } from 'svelte/store';
import { categoriesStore } from '$lib/Stores/Data/categories';
import type { Category } from '$lib/Types/Data/category.types';

export const getCategoryAncestors = (currentCategory: Category) => {
	let breadcrumbs: Category[] = [currentCategory];
	while (true) {
		const _ca = getStoreValue(categoriesStore).find((c) => c.id === currentCategory.parent);
		breadcrumbs.push(_ca);
		if (_ca.parent === 0) {
			break;
		}
	}
	return breadcrumbs;
};
