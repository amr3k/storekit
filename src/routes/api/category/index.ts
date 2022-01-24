import { WOO_AUTH_HEADER } from '$lib/config';

export async function post({ request }) {
	try {
		/**
		 * Woocommerce API reference: https://woocommerce.github.io/woocommerce-rest-api-docs/
		 * Get product categories
		 **/
		const _body = await request.json();
		const categories: number[] = _body.categories;
		const pageID: number = _body.pageNumber;
		const perPage: number = _body.perPage;
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
