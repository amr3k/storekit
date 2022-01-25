import { WOO_AUTH_HEADER } from '$lib/config';
import type { Category } from '$lib/Types/Data/category.types';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	try {
		/**
		 * Woocommerce API reference: https://woocommerce.github.io/woocommerce-rest-api-docs/
		 * Get product categories
		 */
		const res: Response = await fetch(
			`${import.meta.env.VITE_WOO_ENDPOINT}/products/categories?per_page=100&hide_empty=true`,
			{
				headers: {
					Accept: 'application/json',
					Authorization: WOO_AUTH_HEADER
				}
			}
		);
		if (res.ok && res.status === 200) {
			const data: Category[] = await res.json();
			return {
				status: 200,
				body: {
					data
				}
			};
		}
	} catch (error) {
		return {
			status: 500,
			body: {
				error: 'Error fetching categories'
			}
		};
	}
};
