export const toJSON = (rawBody: Uint8Array) => {
	return JSON.parse(new TextDecoder().decode(rawBody));
};
