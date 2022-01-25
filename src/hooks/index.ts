// import { userLanguage } from './options';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }): Promise<Response> => {
	// request.locals.language = await userLanguage(request.headers.cookie);
	const response = await resolve(event);
	return response;
	// return {
	// 	...response
	// headers: {
	//   ...response.headers,
	//   'Set-Cookie': [
	//     `language=${request.locals.language}; path=/; expires=none; max-age=31536000;`,
	//   ],
	// },
	// };
};
