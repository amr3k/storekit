import { WOO_AUTH_HEADER } from '$lib/config';
import { categoriesStore } from '$lib/Stores/Data/categories';
import type { Category } from '$lib/Types/Data/category.types';

export const fetchCategories = async () => {
	try {
		const response = await fetch(
			`${import.meta.env.VITE_WOO_ENDPOINT}/products/categories?per_page=100&hide_empty=true`,
			{
				headers: {
					Accept: 'application/json',
					Authorization: WOO_AUTH_HEADER
				}
			}
		);
		if (response.ok && response.status === 200) {
			const data: Category[] = await response.json();
			categoriesStore.set(data);
			return data;
		}
	} catch (error) {
		console.error(error);
		return [];
	}
};
