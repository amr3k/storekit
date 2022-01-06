/*
import { setLanguage } from '$lib/Stores/language';
import * as cookieLib from 'cookie';

export const userLanguage = async (httpCookieHeader) => {
	// This function checks request cookies,
	// and adjust local storage and store after it.
	const cookieObject = cookieLib.parse(httpCookieHeader || '');

	setLanguage(cookieObject.language || 'en');

	return cookieObject.language || 'en';
};
*/
export {};
