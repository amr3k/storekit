import { WOO_AUTH_HEADER } from '$lib/config';
import type { Request } from '@sveltejs/kit';

export async function post(req: Request) {
	try {
		// Woocommerce API reference: https://woocommerce.github.io/woocommerce-rest-api-docs/
		// Get page number for pagination
		const pageID = req.params.page;
		const jsonBody = JSON.parse(new TextDecoder().decode(req.rawBody));
		const categories: number[] = jsonBody.categories;
		const _url =
			import.meta.env.VITE_WOO_ENDPOINT +
			`/products?category=${categories.join(',')}&per_page=10&page=${pageID}`;
		const res = await fetch(_url, {
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
		console.log('Error:', e);
		return {
			status: 500,
			body: e
		};
	}
}
