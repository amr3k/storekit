export const roundPrice = (price: number, decimals = 2) => {
	return Math.round(price * Math.pow(10, decimals)) / Math.pow(10, decimals);
};
