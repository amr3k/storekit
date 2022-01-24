// import { userLanguage } from './options';
export const handle = async ({ event, resolve }) => {
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
