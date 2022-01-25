import type { ShortCategory } from './category.types';
type ProductImage = {
	id: number;
	date_created: string;
	date_created_gmt: string;
	date_modified: string;
	date_modified_gmt: string;
	src: string;
	name: string;
	alt: string;
};
type ProductAttribute = {
	id: number;
	name: string;
	position: number;
	visible: boolean;
	variation: boolean;
	options: string[];
};
type ProductDefaultAttribute = {
	id: number;
	name: string;
	option: string;
};
type ProductMetaData = {
	id: number;
	key: string;
	value: string;
};

type link = {
	href: string;
};

type ProductLinks = {
	self: link[];
	collection: link[];
};

export type Product = {
	id: number;
	name: string;
	slug: string;
	permalink: string;
	date_created: string;
	date_created_gmt: string;
	date_modified: string;
	date_modified_gmt: string;
	type: string;
	status: string;
	featured: boolean;
	catalog_visibility: string;
	description: string;
	short_description: string;
	sku: string;
	price: string;
	regular_price: string;
	sale_price: string;
	date_on_sale_from: string;
	date_on_sale_from_gmt: string;
	date_on_sale_to: string;
	date_on_sale_to_gmt: string;
	on_sale: boolean;
	purchasable: boolean;
	total_sales: number;
	virtual: boolean;
	downloadable: boolean;
	downloads: (number | string)[];
	download_limit: number;
	download_expiry: number;
	external_url: string;
	button_text: string;
	tax_status: string;
	tax_class: string;
	manage_stock: boolean;
	stock_quantity: number;
	backorders: string;
	backorders_allowed: boolean;
	backordered: boolean;
	low_stock_amount: number;
	sold_individually: boolean;
	weight: string;
	dimensions: {
		length: string;
		width: string;
		height: string;
	};
	shipping_required: boolean;
	shipping_taxable: boolean;
	shipping_class: string;
	shipping_class_id: number;
	reviews_allowed: boolean;
	average_rating: string;
	rating_count: number;
	upsell_ids: number[];
	cross_sell_ids: number[];
	parent_id: number;
	purchase_note: string;
	categories: ShortCategory[];
	tags: (string | number)[];
	images: ProductImage[];
	attributes: ProductAttribute[];
	default_attributes: ProductDefaultAttribute[];
	variations: number[];
	grouped_products: number[];
	menu_order: number;
	price_html: string;
	related_ids: number[];
	meta_data: ProductMetaData[];
	stock_status: string;
	_links: ProductLinks;
};
