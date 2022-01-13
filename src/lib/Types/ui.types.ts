import type { sortBy } from './Data/category.types';

export type headerPages = { title: string; url: string }[];

export type categoryPreferencesType = {
	productsPerPage: number;
	sortBy: sortBy;
};
