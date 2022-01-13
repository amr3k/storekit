import { WOO_AUTH_HEADER } from '$lib/config';
import { toJSON } from '$lib/Functions/API';
import type { Request } from '@sveltejs/kit';

export async function post(req: Request) {
	try {
		/**
		 * Woocommerce API reference: https://woocommerce.github.io/woocommerce-rest-api-docs/
		 * Get product categories
		 **/
		const jsonBody = toJSON(req.rawBody);
		const categories: number[] = jsonBody.categories;
		const pageID: number = jsonBody.pageNumber;
		const perPage: number = jsonBody.perPage;
		const _url =
			import.meta.env.VITE_WOO_ENDPOINT +
			`/products?category=${categories.join(',')}&per_page=${perPage}&page=${pageID}`;
		const res: Response = await fetch(_url, {
			method: 'GET',
			headers: {
				Accept: 'Application/json',
				Authorization: WOO_AUTH_HEADER
			}
		});

		if (res.status === 200) {
			const data = await res.json();
			return {
				status: 200,
				body: data
			};
		} else {
			return {
				status: res.status,
				body: { error: 'Error fetching data' }
			};
		}
	} catch (e) {
		return {
			status: 500,
			body: e
		};
	}
}
