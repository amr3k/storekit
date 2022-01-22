<script lang="ts">
	let animateSVG: boolean = false;
	let checkMark: boolean = false;
	let btnWidth: string = '80px';
	let animationDuration: number = 5000;
	const addToCart = () => {
		if (animateSVG === true) {
			// Prevent duplicate clicks
			return;
		}
		animateSVG = true;
		const _btnWidth = document.querySelector('#quickly-add-to-cart-3826').offsetWidth;
		btnWidth = `${_btnWidth}px`;

		setTimeout(() => {
			animateSVG = false;
			checkMark = true;
			setTimeout(() => {
				checkMark = false;
			}, animationDuration / 2);
		}, animationDuration);
	};
</script>

<svelte:head>
	<title>Explore the latest fashion from StoreKit</title>
</svelte:head>

<h1 class="bg-gray-700 animate-shine-text font-black mt-20 text-4xl text-center">Home page</h1>

<div class="flex flex-col justify-center items-center my-12 gap-10">
	<button on:click={addToCart} id="quickly-add-to-cart-3826" class="relative btn">
		<!-- Here I'm putting variables inside style attribute to calculate the length, duration which animation should follow -->
		<!-- I'm calculating the length to be 90% of (button width - svg width) -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			style="--btnWidth:calc(calc({btnWidth} - 24px) * 0.9);--animationDuration:{animationDuration}ms"
			class:move-cart={animateSVG}
			class="absolute fill-red-400 inset-0 w-6 h-6 -z-10"
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
		<div class="duration-500 {checkMark ? 'scale-0' : ''}">Add to cart</div>
		<div class="absolute duration-500 delay-200 {checkMark ? 'scale-1' : 'scale-0'}">
			<svg
				class="w-4 h-4 inline-block fill-current"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<path fill="none" d="M0 0h24v24H0z" />
				<path d="M10 15.2 19.2 6l1.4 1.4L10 18l-6.4-6.4L5 10.2z" />
			</svg>
			<span>Order placed</span>
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
