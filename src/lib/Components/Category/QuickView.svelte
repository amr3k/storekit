<script lang="ts">
	import type { Product } from '$lib/Types/Data/product.types';

	export let product: Product;
	let productColors: string[] = [];
	product.attributes.forEach((attribute) => {
		if (attribute.name.match(/color/i)) {
			productColors = attribute.options;
		}
	});
</script>
