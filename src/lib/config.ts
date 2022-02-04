import { encode } from 'js-base64';

import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import


export const WOO_ENDPOINT = process.env.WOO_ENDPOINT;
export const WOO_AUTH_HEADER =
	'Basic ' + encode(process.env.WOO_KEY + ':' + process.env.WOO_SECRET);
