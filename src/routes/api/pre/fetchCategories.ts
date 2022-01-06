import { WOO_AUTH_HEADER } from '$lib/config';
import type { Category } from '$lib/Types/Data/category.types';
import type { Request } from '@sveltejs/kit';

export const get = async (req: Request) => {
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
			return {
				status: 200,
				body: {
					data
				}
			};
		}
	} catch (error) {
		console.error(error);
		return {
			status: 500,
			body: {
				error: 'Error fetching categories'
			}
		};
	}
};
