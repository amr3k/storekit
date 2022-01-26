import { encode } from 'js-base64';

export const WOO_AUTH_HEADER =
	'Basic ' + encode(process.env.WOO_KEY + ':' + process.env.WOO_SECRET);
