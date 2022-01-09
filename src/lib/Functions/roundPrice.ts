export const roundPrice = (price: number, decimals: number = 2): number => {
	return Math.round(price * Math.pow(10, decimals)) / Math.pow(10, decimals);
};
