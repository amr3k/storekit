import { encode } from 'js-base64';

export const WOO_AUTH_HEADER =
	'Basic ' + encode(import.meta.env.VITE_WOO_KEY + ':' + import.meta.env.VITE_WOO_SECRET);
