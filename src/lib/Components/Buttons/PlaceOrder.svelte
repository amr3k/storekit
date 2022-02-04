<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let btnTitle: string;
	let animateSVG = false;
	let checkMark = false;
	let btnWidth = '80px';
	let animationDuration = 4000;
	const addToCart = () => {
		if (animateSVG === true) {
			// Prevent duplicate clicks
			return;
		}
		animateSVG = true;
		try {
			// @svelte-ignore
			const _mainBtn: HTMLButtonElement = document.querySelector('quickly-add-to-cart-3826');
			const _btnWidth = _mainBtn.offsetWidth;
			btnWidth = `${_btnWidth}px`;
		} catch (e) {
			btnWidth = `80px`;
			console.log(e);
		}
		// Send request to add the product to cart
		// If it was successful, show the animation followed by the success message
		// Else, show the animation followed by the error message
		setTimeout(() => {
			animateSVG = false;
			checkMark = true;
			dispatch('addToCart');
			setTimeout(() => {
				checkMark = false;
			}, animationDuration / 2);
		}, animationDuration);
	};
</script>

<div class="container relative w-full">
	<button
		on:click={addToCart}
		class="relative quickly-add-to-cart-3826 py-2 px-3 rounded whitespace-nowrap bg-accent hover:bg-accent-focus text-accent-content flex justify-center items-center shadow-md shadow-accent/50"
		aria-label="Place order"
	>
		<!-- Here I'm putting variables inside style attribute to calculate the length, duration which animation should follow -->
		<!-- I'm calculating the length to be button width - svg width -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			style="--btnWidth:calc({btnWidth} - 24px);--animationDuration:{animationDuration}ms"
			class:move-cart={animateSVG}
			class="absolute fill-gray-600 inset-0 w-6 h-6 -z-10"
		>
			<path fill="none" d="M0 0h24v24H0z" />
			<path
				d="M5.5 20a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm13 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM2.2 1.8 6 5.6V17h16.6v1.9L5 19a1 1 0 0 1-1-1V6.4L.8 3.2l1.4-1.4Z"
			/>
			<!-- This is the `item` drawing as `path` tag -->
			<path
				id="cart-item-28662"
				class="opacity-0 -translate-y-8"
				class:move-item={animateSVG}
				d="M16.2 2.5c.5 0 1 .5 1 1v2h3c.5 0 1 .5 1 1v8c0 .6-.5 1-1 1h-12a1 1 0 0 1-1-1v-8c0-.5.4-1 1-1h3v-2c0-.5.4-1 1-1zm-6 5h-1v6h1Zm6 0h-4v6h4zm3 0h-1v6h1zm-4-3h-2v1h2z"
			/>
		</svg>
		<div class="duration-500 {checkMark ? 'scale-0 opacity-0' : ''}">{btnTitle}</div>
		<div class="absolute duration-500 {checkMark ? 'scale-1' : 'scale-0 opacity-0'}">
			<svg
				class="w-4 h-4 inline-block fill-current"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<path fill="none" d="M0 0h24v24H0z" />
				<path d="M10 15.2 19.2 6l1.4 1.4L10 18l-6.4-6.4L5 10.2z" />
			</svg>
			<span>Added to cart</span>
		</div>
	</button>
</div>

<style lang="postcss">
	.move-cart {
		animation: moveCart var(--animationDuration);
	}
	.move-item {
		animation: moveItem var(--animationDuration);
	}
	@keyframes moveCart {
		0% {
			animation-timing-function: cubic-bezier(0, 0, 1, 2);
		}
		10% {
			transform: translate(0px, -24px);
		}
		30% {
			transform: translate(0px, -24px);
			animation-timing-function: linear;
		}
		70% {
			transform: translate(var(--btnWidth), -24px);
			animation-timing-function: linear;
		}
		95% {
			transform: translate(var(--btnWidth), 0px);
		}
		100% {
			transform: translate(0px, 0px);
		}
	}
	@keyframes moveItem {
		0% {
			animation-timing-function: ease-out;
		}
		30% {
			transform: translate(0px, 0px);
			opacity: 1;
		}
		95% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: translate(0px, 0px);
		}
	}
</style>
