export const get = async ({ request }) => {
	/**
	 * This function fetches color hex code by name.
	 * It uses API provided by ColourLovers (https://www.colourlovers.com/api/).
	 *
	 * @param {string} color - color (e.g. Nave Blue)
	 * @returns {string} - hex representation of the color
	 */
	try {
		// TODO - fix this; use params instead of request
		const colorName = decodeURI(request.url.searchParams.get('colorName')).replace(' ', '+');

		const res: Response = await fetch(
			`http://www.colourlovers.com/api/colors/?format=json&keywords=${colorName}`
		);
		const data: any = await res.json();
		if (res.ok && data[0] !== undefined) {
			return {
				status: 200,
				body: { hexCode: `#${data[0].hex.toLowerCase()}` }
			};
		} else {
			return {
				status: 404,
				body: { hexCode: '#ffffff' }
			};
		}
	} catch (err) {
		console.error("Couldn't fetch color code!", err);
		return {
			status: 500,
			body: { hexCode: '#ffffff' }
		};
	}
};
