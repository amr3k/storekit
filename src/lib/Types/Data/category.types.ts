export enum CategoryID {
	CASUAL_SHOES = 457,
	ATHLETIC_SHOES = 306,
	BLOUSE = 265,
	SHIRTS = 269,
	SWEATERS = 52,
	DRESSES = 32
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
