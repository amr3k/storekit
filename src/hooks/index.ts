import type { Response } from '@sveltejs/kit';

// import { userLanguage } from './options';
export const handle = async ({ request, resolve }): Promise<Response> => {
	// request.locals.language = await userLanguage(request.headers.cookie);
	const response = await resolve(request);
	return {
		...response
		// headers: {
		//   ...response.headers,
		//   'Set-Cookie': [
		//     `language=${request.locals.language}; path=/; expires=none; max-age=31536000;`,
		//   ],
		// },
	};
};
