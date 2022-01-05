import { encode } from 'js-base64';
import type { Request, Response } from '@sveltejs/kit';

export async function post(req: Request) {
	try {
		// Woocommerce API reference: https://woocommerce.github.io/woocommerce-rest-api-docs/
		const pageID = req.params.page;
		const jsonBody = JSON.parse(new TextDecoder().decode(req.rawBody));
		const categories: number[] = jsonBody.categories;
		const _url =
			import.meta.env.VITE_WOO_ENDPOINT + `/products?category=${categories.join(',')}&per_page=3`;
		const res = await fetch(_url, {
			method: 'GET',
			headers: {
				Accept: 'Application/json',
				Authorization:
					'Basic ' + encode(import.meta.env.VITE_WOO_KEY + ':' + import.meta.env.VITE_WOO_SECRET)
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
