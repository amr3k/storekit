export const preloadImage = async (source: string): Promise<string> => {
	/**
	 * Preload image and return as base64
	 *
	 * @param {string} source - image source
	 * @returns {Promise<string>} - base64 image
	 */
	let res: Response = await fetch(source);
	let blob: Blob = await res.blob();
	let reader: FileReader = new FileReader();
	return new Promise(function (resolve) {
		reader.readAsDataURL(blob);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => console.error('Error: ', error);
	});
};
