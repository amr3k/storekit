export const preloadImage = async (source: string): Promise<string> => {
	/**
	 * Preload image and return as base64
	 *
	 * @param {string} source - image source
	 * @returns {Promise<string>} - base64 image
	 */
	const res: Response = await fetch(source);
	const blob: Blob = await res.blob();
	const reader: FileReader = new FileReader();
	return new Promise(function (resolve) {
		reader.readAsDataURL(blob);
		reader.onload = () => resolve(reader.result.toString());
		reader.onerror = (error) => console.error('Error: ', error);
	});
};
