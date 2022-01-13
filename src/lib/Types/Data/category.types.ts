export enum sortBy {
	'date',
	'id',
	'include',
	'title',
	'slug'
}

export type ShortCategory = {
	id: number;
	name: string;
	slug: string;
};
type link = {
	href: string;
};

type CategoryLinks = {
	self: link[];
	collection: link[];
	up: link[];
};

export type Category = {
	id: number;
	name: string;
	slug: string;
	parent: number;
	description: string;
	display: string;
	image: string;
	menu_order: number;
	count: number;
	_links: CategoryLinks;
};
