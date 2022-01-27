<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Product } from '$lib/Types/Data/product.types';
	import { createEventDispatcher, getContext } from 'svelte';
	import PlaceOrder from '$lib/Components/Buttons/PlaceOrder.svelte';

	export let product: Product;
	const productURL = `${import.meta.env.VITE_PRODUCTION_URL}/product/${product.slug}`;
	const shareMsg = encodeURI(`Hey, checkout this ${product.name}`);
	let productColors: string[] = [];
	product.attributes.forEach((attribute) => {
		if (attribute.name.match(/color/i)) {
			productColors = attribute.options;
		}
	});
	let mainPic = 0;
	const dispatch = createEventDispatcher();
	const close = () => {
		dispatch('close');
	};
	const productList: Product[] = getContext('productsInPage');
	const handleProductNavigation = (direction: string) => {
		mainPic = 0;
		const ndx = productList.findIndex((p) => p.id === product.id);
		if (direction === 'previous' && ndx > 1) {
			product = productList[ndx - 1];
		} else if (direction === 'next' && ndx < productList.length - 1) {
			product = productList[ndx + 1];
		}
	};
</script>

<div class="relative w-3/4 md:w-2/3 lg:w-1/2 max-w-4xl bg-white z-50 rounded-lg shadow-2xl">
	<div class="flex justify-end">
		<!-- Close button -->
		<button class="relative close-btn rounded-full focus:outline-primary/10" on:click={close}>
			<svg class="fill-red-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path fill="none" d="M0 0h24v24H0z" />
				<path
					d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.4 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8-1.4 1.4-2.8-2.8-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8z"
				/>
			</svg>
			<svg
				class="absolute opacity-0 fill-red-600"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<path fill="none" d="M0 0h24v24H0z" />
				<path
					d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-11.4L9.2 7.8 7.8 9.2l2.8 2.8-2.8 2.8 1.4 1.4 2.8-2.8 2.8 2.8 1.4-1.4-2.8-2.8 2.8-2.8-1.4-1.4-2.8 2.8z"
				/>
			</svg>
		</button>
	</div>
	<div class="flex justify-evenly px-2 h-full pb-8">
		<div class="w-full px-8 flex flex-col items-center justify-center">
			<!-- Left side: Product image slider -->
			<img
				transition:fade={{ duration: 200 }}
				class="object-contain h-80 w-auto"
				src={product.images[mainPic].src}
				alt={product.images[mainPic].alt}
			/>
			<div class="flex justify-center py-4">
				{#each product.images as _img, index}
					<input
						type="radio"
						bind:group={mainPic}
						id="product-{product.images[index].id}-image-{index}"
						value={index}
						class="image-selection-radio absolute left-[-9999px]"
					/>
					<label
						for="product-{product.images[index].id}-image-{index}"
						class="w-4 aspect-square mx-1 cursor-pointer bg-primary/20 hover:bg-primary-focus hover:scale-110 rounded-full duration-100"
					/>
				{/each}
			</div>
		</div>
		<div class="flex flex-col items-start w-full px-4">
			<!-- Right side: Product info -->
			<h1 class="text-xl font-semibold">{product.name}</h1>
			<div class="my-2">
				<!-- Product price as html -->
				<!-- {@html product.price_html} -->
				<p class="font-bold text-accent">${Math.round(parseInt(product.price))}.00</p>
			</div>
			<div class="flex gap-4 my-4 justify-evenly items-center">
				<!-- Call to action -->
				<PlaceOrder on:addToCart={close} btnTitle="Buy now" />
				<a class="w-full" href="/product/{product.slug}">View details</a>
			</div>
			<div>
				<!-- Category information -->
				<h3 class="text-xl font-bold mt-4">Categories:</h3>
				{#each product.categories as cat}
					<span
						class="badge hover:bg-secondary-focus hover:border-secondary-focus duration-100 mx-1"
						><a href="/category/{cat.slug}">{@html cat.name}</a></span
					>
				{/each}
			</div>
			<h3 class="text-xl font-bold mt-4">Share this product</h3>
			<div class="social-share-div-388 flex gap-2">
				<!-- Facebook -->
				<a
					href="https://facebook.com/sharer/sharer.php?u={productURL}&quote={shareMsg}"
					rel="noopener"
					target="_blank"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
						<radialGradient
							id="a"
							cx="33.3"
							cy="27.9"
							r="43.9"
							gradientTransform="matrix(1 0 0 -1 0 66)"
							gradientUnits="userSpaceOnUse"
						>
							<stop offset="0" stop-color="#f4e9c3" /><stop offset=".2" stop-color="#f8eecd" /><stop
								offset=".6"
								stop-color="#fdf4dc"
							/>
							<stop offset="1" stop-color="#fff6e1" /></radialGradient
						>
						<path
							fill="url(#a)"
							d="M51 37.3c.2 1 1.1 1.7 2.1 1.7h5.4c2.6 0 4.8 2.3 4.5 5-.3 2.3-2.4 4-4.7 4H49a2 2 0 0 0-2 2.3c.2 1 1.1 1.7 2.1 1.7h8.4a4.5 4.5 0 0 1 4.5 4.5c0 2.5-2 4.5-4.5 4.5h-49a5.5 5.5 0 1 1 0-11H14a2 2 0 0 0 2-2.3c-.2-1-1.1-3.7-2.1-3.7H5.5A4.5 4.5 0 0 1 1 39c.3-2.3 2.4-4 4.7-4H8a3 3 0 0 0 3-3.2c0-1.6-1.6-2.8-3.2-2.8H4.5A4.5 4.5 0 0 1 0 24c.3-2.3 2.4-4 4.7-4H20a3 3 0 0 0 3-3 3 3 0 0 0-3-3H7.5a5.5 5.5 0 1 1 0-11h49c3.2 0 5.8 2.8 5.5 6-.3 3-1.9 5-4.8 5H52a5 5 0 0 0 0 10h6.5c3.2 0 5.8 2.8 5.5 6-.3 3-2.9 5-5.8 5H53a2 2 0 0 0-2 2.3z"
						/>
						<linearGradient
							id="b"
							x1="32"
							x2="32"
							y1="-3.3"
							y2="59.2"
							gradientTransform="matrix(1 0 0 -1 0 66)"
							gradientUnits="userSpaceOnUse"
							><stop offset="0" stop-color="#155cde" /><stop offset=".3" stop-color="#1f7fe5" />
							<stop offset=".6" stop-color="#279ceb" /><stop offset=".8" stop-color="#2cafef" />
							<stop offset="1" stop-color="#2eb5f0" /></linearGradient
						>
						<path fill="url(#b)" d="M58 32a26 26 0 1 1-52 0 26 26 0 0 1 52 0z" /><path
							fill="#fff"
							d="m42.8 36-.8 2a3 3 0 0 1-2.8 2H35v17.8a27 27 0 0 1-8-.3V40h-3a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h3v-6a10 10 0 0 1 10-10h3a4 4 0 1 1 0 8h-3a2 2 0 0 0-2 2v6h5a3 3 0 0 1 2.8 4z"
						/>
					</svg>
				</a>
				<!-- Twitter -->
				<a
					href="https://twitter.com/intent/tweet/?text={shareMsg}&url={productURL}"
					rel="noopener"
					target="_blank"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"
						><radialGradient
							id="a"
							cx="32"
							cy="33"
							r="29.6"
							gradientUnits="userSpaceOnUse"
							spreadMethod="reflect"
							><stop offset="0" stop-color="#c5f1ff" /><stop
								offset=".3"
								stop-color="#cdf3ff"
							/><stop offset=".9" stop-color="#e4faff" /><stop
								offset="1"
								stop-color="#e9fbff"
							/></radialGradient
						><path
							fill="url(#a)"
							d="M10.5 60h41a4.5 4.5 0 0 0 0-9h-.4c-1 0-2-.7-2-1.7A2 2 0 0 1 51 47h5.3c2.3 0 4.4-1.7 4.7-4 .2-2.7-1.9-5-4.5-5h-3.4c-1 0-2-.7-2-1.7A2 2 0 0 1 53 34h5.2c3 0 5.5-2 5.8-5 .3-3.2-2.3-6-5.5-6H46.2c-1.7 0-3.1-1.2-3.2-2.8a3 3 0 0 1 3-3.2h2.2c3 0 5.5-2 5.8-5 .3-3.2-2.3-6-5.5-6h-38a5.5 5.5 0 1 0 0 11H14a2 2 0 1 1 0 4H4.7A4.6 4.6 0 0 0 0 25c-.2 2.7 1.9 5 4.5 5h8.3c1.7 0 3.1 1.2 3.2 2.8a3 3 0 0 1-3 3.2H7.7A4.6 4.6 0 0 0 3 40c-.2 2.7 1.9 5 4.5 5h6.4c1 0 2 .7 2 1.7A2 2 0 0 1 14 49h-3.5a5.5 5.5 0 1 0 0 11z"
						/><linearGradient
							id="b"
							x1="32.5"
							x2="32.5"
							y1="64.1"
							y2="22.1"
							gradientUnits="userSpaceOnUse"
							spreadMethod="reflect"
							><stop offset="0" stop-color="#155cde" /><stop
								offset=".3"
								stop-color="#1f7fe5"
							/><stop offset=".6" stop-color="#279ceb" /><stop
								offset=".8"
								stop-color="#2cafef"
							/><stop offset="1" stop-color="#2eb5f0" /></linearGradient
						><path
							fill="url(#b)"
							d="M57.7 19c-1.5.6-3 .8-4.7 1 1.6-.8 2.8-2 3.8-3.4.6-.9-.3-2-1.2-1.5-1.7.8-3.3 1.4-5.3 1.7a11 11 0 0 0-16.9 2.8 11 11 0 0 0-1.2 7.4 26.5 26.5 0 0 1-20.5-10.6 1 1 0 0 0-1.7.2C9.6 17.8 9 19 9 21v.3a10 10 0 0 0 5.6 8.6l-.6.1c-2 0-2.7-.7-3.7-1A1 1 0 0 0 9 30.1a11 11 0 0 0 3 6 10 10 0 0 0 6.4 2.9c-1.3.6-2.8 1-4.4 1h-1a1 1 0 0 0-.9 1.5 11 11 0 0 0 9.7 5.5A26 26 0 0 1 8 51H7a1 1 0 0 0-1 1c0 .5.3.8.7 1 0 0 7.6 3 16.3 3a31 31 0 0 0 31-30.4v-2c1.8-.6 3.4-1.5 4.7-3 .7-.7 0-1.9-1-1.5z"
						/></svg
					>
				</a>
				<!-- Pinterest -->
				<a
					href="https://pinterest.com/pin/create/button/?url={productURL}&media={product.images[0]
						.src}&description={shareMsg}"
					rel="noopener"
					target="_blank"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"
						><radialGradient
							id="a"
							cx="32.5"
							cy="31.5"
							r="30.5"
							gradientUnits="userSpaceOnUse"
							spreadMethod="reflect"
							><stop offset="0" stop-color="#afeeff" /><stop
								offset=".2"
								stop-color="#bbf1ff"
							/><stop offset=".7" stop-color="#d7f8ff" /><stop
								offset="1"
								stop-color="#e1faff"
							/></radialGradient
						><path
							fill="url(#a)"
							d="M59 20h1.5c2.2 0 3.9-2 3.4-4.2a3.6 3.6 0 0 0-3.5-2.8H53a2 2 0 1 1 0-4h3.4c1.7 0 3.2-1.1 3.5-2.8A3.5 3.5 0 0 0 56.5 2h-48C6.5 2 5 3.6 5 5.5S6.6 9 8.5 9H10a2 2 0 1 1 0 4H4.6a3.6 3.6 0 0 0-3.5 2.8A3.5 3.5 0 0 0 4.5 20H18v12H4.6a3.6 3.6 0 0 0-3.5 2.8A3.5 3.5 0 0 0 4.5 39H5a2 2 0 1 1 0 4h-.5c-2.2 0-3.9 2-3.4 4.2A3.6 3.6 0 0 0 4.6 50H10a2 2 0 1 1 0 4H8.6a3.6 3.6 0 0 0-3.5 2.8A3.5 3.5 0 0 0 8.5 61h47c2 0 3.5-1.6 3.5-3.5S57.4 54 55.5 54H55a2 2 0 1 1 0-4h4.4c1.7 0 3.2-1.1 3.5-2.8a3.5 3.5 0 0 0-3.4-4.2H47V31h12.4c1.7 0 3.2-1.1 3.5-2.8a3.5 3.5 0 0 0-3.4-4.2H59a2 2 0 1 1 0-4z"
						/><linearGradient
							id="b"
							x1="32"
							x2="32"
							y1="56"
							y2="6"
							gradientUnits="userSpaceOnUse"
							spreadMethod="reflect"
							><stop offset="0" stop-color="#ff634d" /><stop
								offset=".2"
								stop-color="#fe6464"
							/><stop offset=".5" stop-color="#fc6581" /><stop
								offset=".8"
								stop-color="#fa6694"
							/><stop offset="1" stop-color="#fa669a" /><stop
								offset="1"
								stop-color="#fa669a"
							/></linearGradient
						><path fill="url(#b)" d="M57 31a25 25 0 1 1-50 0 25 25 0 0 1 50 0z" /><path
							fill="#fff"
							d="M27 34.7c0-4-.5-5.6-.5-7.2 0-3.7 2.2-4.5 3.6-4.5 2.4 0 3.9 1.7 3.9 3.7 0 3-3 3.3-3 3.3v2.8c0 2 .7 4.2 4.1 4.2 5.4 0 5.9-7.4 5.9-9.5 0-2.8-1.7-8.5-8.2-8.5-8.7 0-10 7.5-10 9.5 0 1 0 2.7.2 3.4 2.6.6 2 2.9 1.3 3.5-1 1-5.3 1.1-5.3-7.7C19 19.3 26.5 15 33 15c6.2 0 13 4.3 13 12.6C46 35.1 40.6 41 35 41c-3.3 0-5-3-5-3 0 5.2-4.4 12.9-5 14 0 0 2-9.7 2-17.3z"
						/></svg
					></a
				>
				<!-- Whatsapp -->
				<a href="whatsapp://send?text={shareMsg} {productURL}" rel="noopener" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"
						><radialGradient id="a" cx="32.5" cy="32.5" r="30.5" gradientUnits="userSpaceOnUse"
							><stop offset="0" stop-color="#eed7a2" /><stop
								offset=".1"
								stop-color="#f1dcab"
							/><stop offset=".4" stop-color="#f8e8c3" /><stop
								offset=".7"
								stop-color="#fcefd2"
							/><stop offset="1" stop-color="#fef2d7" /></radialGradient
						><path
							fill="url(#a)"
							d="M59 21h1.5c2.2 0 3.9-2 3.4-4.2a3.6 3.6 0 0 0-3.5-2.8H53a2 2 0 1 1 0-4h3.4c1.7 0 3.2-1.1 3.5-2.8A3.5 3.5 0 0 0 56.5 3h-48C6.5 3 5 4.6 5 6.5S6.6 10 8.5 10H10a2 2 0 1 1 0 4H4.6a3.6 3.6 0 0 0-3.5 2.8A3.5 3.5 0 0 0 4.5 21H18v12H4.6a3.6 3.6 0 0 0-3.5 2.8A3.5 3.5 0 0 0 4.5 40H5a2 2 0 1 1 0 4h-.5c-2.2 0-3.9 2-3.4 4.2A3.6 3.6 0 0 0 4.6 51H10a2 2 0 1 1 0 4H8.6a3.6 3.6 0 0 0-3.5 2.8A3.5 3.5 0 0 0 8.5 62h47c2 0 3.5-1.6 3.5-3.5S57.4 55 55.5 55H55a2 2 0 1 1 0-4h4.4c1.7 0 3.2-1.1 3.5-2.8a3.5 3.5 0 0 0-3.4-4.2H47V32h12.4c1.7 0 3.2-1.1 3.5-2.8a3.5 3.5 0 0 0-3.4-4.2H59a2 2 0 1 1 0-4z"
						/><path
							fill="#fff"
							d="M30 7A25.1 25.1 0 0 0 9.4 43L6.1 55.7c-.5 2 1.3 3.7 3.2 3.2L23 55.3A25 25 0 1 0 30 7z"
						/><linearGradient id="b" x1="32" x2="32" y1="11" y2="54" gradientUnits="userSpaceOnUse"
							><stop offset="0" stop-color="#00d772" /><stop offset="1" stop-color="#00b26e" /><stop
								offset="1"
								stop-color="#00b26e"
							/></linearGradient
						><path
							fill="url(#b)"
							d="M13.6 43.2c0-.5 0-1-.2-1.4l-.3-.6A21 21 0 0 1 32 11a21 21 0 0 1 21 22.6A21.2 21.2 0 0 1 32 53c-2.6 0-5.2-.5-7.6-1.4l-.6-.3a2 2 0 0 0-1.3 0L12.3 54a1 1 0 0 1-1.3-1.3l2.6-9.5z"
						/><path
							fill="#fff"
							fill-rule="evenodd"
							d="M25.6 21.1c-.5-1-1-1-1.4-1l-1.3-.1c-.4 0-1 .2-1.7.8S19 23 19 26.1s2.3 6.2 2.6 6.6c.3.4 4.4 7 11 9.6 5.3 2.1 6.4 1.7 7.6 1.6 1.2-.1 3.8-1.5 4.3-3s.6-2.8.4-3a492.7 492.7 0 0 0-5-2.6 2 2 0 0 0-2.3.5l-1.3 1.5a2 2 0 0 1-2.4.5 21 21 0 0 1-4.6-3 22 22 0 0 1-3-3.7 2 2 0 0 1 .1-2.5l.8-.8a2 2 0 0 0 .3-2L25.6 21z"
							clip-rule="evenodd"
						/><linearGradient
							id="c"
							x1="43.5"
							x2="43.5"
							y1="11.1"
							y2="39.2"
							gradientUnits="userSpaceOnUse"
							><stop offset="0" stop-color="#00e67a" /><stop offset="1" stop-color="#00c177" /><stop
								offset="1"
								stop-color="#00c177"
							/></linearGradient
						><path
							fill="url(#c)"
							d="M53 30h-9a2 2 0 0 1-2-2c0-1.1.9-2 2-2h.5a1.5 1.5 0 1 0 0-3h-8a2.5 2.5 0 1 1 0-5h1a1.5 1.5 0 1 0 0-3h-1a2.5 2.5 0 0 1-2.1-3.9A21 21 0 0 1 52.9 30z"
						/><linearGradient
							id="d"
							x1="8.6"
							x2="42"
							y1="42.1"
							y2="54.2"
							gradientUnits="userSpaceOnUse"
							><stop offset="0" stop-color="#00c267" /><stop offset="1" stop-color="#009d61" /><stop
								offset="1"
								stop-color="#009d61"
							/></linearGradient
						><path
							fill="url(#d)"
							d="M30 50.4c0 1-.5 1.9-1.4 2.3-1.4-.2-2.8-.6-4.2-1.1l-.6-.3h-1.3L12.3 54a1 1 0 0 1-1.3-1.3l2.6-9.5c0-.5 0-1-.2-1.4l-.3-.6c-1-2-1.6-4-1.9-6.2h7.3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 1 0 0 3H23a2 2 0 0 1 2 2.3c-.2 1-1.1 1.7-2.1 1.7h-1.4a1.5 1.5 0 1 0 0 3h5.9c1.3 0 2.5 1 2.6 2.4z"
						/></svg
					></a
				>
				<!-- Telegram -->
				<a
					href="https://telegram.me/share/url?text={shareMsg}&url={productURL}"
					rel="noopener"
					target="_blank"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
						<radialGradient
							id="a"
							cx="32.5"
							cy="31.5"
							r="30.5"
							gradientUnits="userSpaceOnUse"
							spreadMethod="reflect"
							><stop offset="0" stop-color="#afeeff" /><stop
								offset=".2"
								stop-color="#bbf1ff"
							/><stop offset=".7" stop-color="#d7f8ff" /><stop
								offset="1"
								stop-color="#e1faff"
							/></radialGradient
						><path
							fill="url(#a)"
							d="M59 20h1.5c2.2 0 3.9-2 3.4-4.2a3.6 3.6 0 0 0-3.5-2.8H53a2 2 0 1 1 0-4h3.4c1.7 0 3.2-1.1 3.5-2.8A3.5 3.5 0 0 0 56.5 2h-48C6.5 2 5 3.6 5 5.5S6.6 9 8.5 9H10a2 2 0 1 1 0 4H4.6a3.6 3.6 0 0 0-3.5 2.8A3.5 3.5 0 0 0 4.5 20H18v12H4.6a3.6 3.6 0 0 0-3.5 2.8A3.5 3.5 0 0 0 4.5 39H5a2 2 0 1 1 0 4h-.5c-2.2 0-3.9 2-3.4 4.2A3.6 3.6 0 0 0 4.6 50H10a2 2 0 1 1 0 4H8.6a3.6 3.6 0 0 0-3.5 2.8A3.5 3.5 0 0 0 8.5 61h47c2 0 3.5-1.6 3.5-3.5S57.4 54 55.5 54H55a2 2 0 1 1 0-4h4.4c1.7 0 3.2-1.1 3.5-2.8a3.5 3.5 0 0 0-3.4-4.2H47V31h12.4c1.7 0 3.2-1.1 3.5-2.8a3.5 3.5 0 0 0-3.4-4.2H59a2 2 0 1 1 0-4z"
						/><linearGradient
							id="b"
							x1="32"
							x2="32"
							y1="64"
							y2="14"
							gradientUnits="userSpaceOnUse"
							spreadMethod="reflect"
							><stop offset="0" stop-color="#155cde" /><stop
								offset=".3"
								stop-color="#1f7fe5"
							/><stop offset=".6" stop-color="#279ceb" /><stop
								offset=".8"
								stop-color="#2cafef"
							/><stop offset="1" stop-color="#2eb5f0" /></linearGradient
						><path fill="url(#b)" d="M57 31a25 25 0 1 1-50 0 25 25 0 0 1 50 0z" /><path
							fill="#fff"
							d="m40 23-20 8.1 9.6 2.3L32 43l8-20z"
						/><path
							fill="#fff"
							d="M31.9 45h-.2a2 2 0 0 1-1.8-1.6l-2-8.4-8.4-1.9a2 2 0 0 1-.3-3.8l20-8.2a2 2 0 0 1 2.6 2.7l-8.1 20a2 2 0 0 1-1.8 1.2zm-5.3-14.4 3.5.8a2 2 0 0 1 1.5 1.5l.8 3.5 4-9.8-9.8 4z"
						/></svg
					></a
				>
			</div>
		</div>
	</div>
	<div class="nav-wrp left-0 -translate-x-full">
		<button class="previous-product" on:click={() => handleProductNavigation('previous')}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path fill="none" d="M0 0h24v24H0z" />
				<path d="m10.8 12 5 5-1.4 1.4L8 12l6.4-6.4 1.4 1.5z" />
			</svg>
		</button>
	</div>
	<div class="nav-wrp right-0 translate-x-full">
		<button class="next-product" on:click={() => handleProductNavigation('next')}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path fill="none" d="M0 0h24v24H0z" />
				<path d="m13.2 12-5-5 1.4-1.4L16 12l-6.4 6.4L8.2 17z" />
			</svg>
		</button>
	</div>
</div>

<style lang="postcss">
	.nav-wrp {
		@apply absolute top-0 flex items-center h-full;
	}
	.nav-wrp > button {
		@apply z-50 bg-white p-4 rounded-full shadow-sm cursor-pointer;
	}
	.nav-wrp > button > svg {
		@apply w-8 h-8;
	}
	button.previous-product {
		border-radius: 75% 25% 25% 75% / 50% 25% 25% 50%;
	}
	button.next-product {
		border-radius: 25% 75% 75% 25% / 25% 50% 50% 25%;
	}
	button:hover > svg {
		@apply scale-150 duration-200 ease-linear;
	}
	.close-btn > svg {
		@apply w-8 h-8 inset-0 duration-100;
	}
	.close-btn:hover > svg:first-child {
		@apply opacity-0;
	}
	.close-btn:hover > svg:last-child {
		@apply opacity-100;
	}
	input.image-selection-radio:checked + label {
		@apply bg-primary;
	}
	.social-share-div-388 svg {
		@apply w-8 h-8;
	}
	.social-share-div-388 svg:hover {
		@apply scale-125 duration-100 ease-linear;
	}
</style>
