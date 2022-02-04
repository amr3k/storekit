<script lang="ts">
	export let width: string;
</script>

<svg
	class="w-{width} flame-938"
	xmlns="http://www.w3.org/2000/svg"
	xml:space="preserve"
	viewBox="0 0 125 190"
>
	<path
		fill="#F36E21"
		d="M77 186s-11-3-16-8-9-17-9-17 0-7-4-18l5 10s-5-22 2-31 0-36-3-37c0 0 13 5 20 47s17 45 6 54"
		class="flame-main"
	/>
	<path
		fill="#F6891F"
		d="M62 122c4-15 12-14-12-61 0 0 32 11 53 64 20 52-20 61-20 61 0 1-19 0-15-18s-10-30-6-46z"
		class="flame-main one"
	/>
	<path fill="#FFD04A" d="M82 79s11 25 3 40-21 42 0 65c0 0 41-33-3-105z" class="flame-main two" />
	<path
		fill="#FDBA16"
		d="M100 102s-23 47-12 80c0 0 33-16 20-46s-8-22-8-34z"
		class="flame-main three"
	/>
	<path fill="#F36E21" d="M103 106s9 31-1 47-15 29-15 29 47-17 16-76z" class="flame-main four" />
	<path fill="#FDBA16" d="M62 104s-16 68 11 78c26 10-4-51-11-78z" class="flame-main five" />
	<path fill="#F36E21" d="M101 113s9 10 5 16c-7 1 1-12-5-16z" class="flame" /><path
		fill="#F36E21"
		d="M56 127s-4 13 2 17c6-3-2-12-2-17z"
		class="flame one"
	/>
	<path fill="#F36E21" d="M55 105s-4 6-1 9c3-1-2-7 1-9z" class="flame two" />
</svg>

<style lang="postcss">
	svg.flame-938 {
		filter: drop-shadow(0px 0px 5px orange);
	}

	.flame {
		animation-name: flamefly;
		animation-duration: 2s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		opacity: 0;
		transform-origin: 50% 50% 0;
	}
	.flame.one {
		animation-delay: 1s;
		animation-duration: 3s;
	}

	.flame-main {
		animation-name: flameWobble;
		animation-duration: 3s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}
	.flame-main.one {
		animation-duration: 4s;
		animation-delay: 1s;
	}
	.flame-main.two {
		animation-duration: 3s;
		animation-delay: 2s;
	}
	.flame-main.three {
		animation-duration: 2.1s;
		animation-delay: 3s;
	}
	.flame-main.four {
		animation-duration: 3.2s;
		animation-delay: 4s;
	}
	.flame-main.five {
		animation-duration: 2.5s;
		animation-delay: 5s;
	}

	@keyframes flameWobble {
		50% {
			transform: scale(1, 1.2) translate(0, -30px) rotate(-2deg);
		}
	}
	@keyframes flamefly {
		0% {
			transform: translate(0) rotate(180deg);
		}
		50% {
			opacity: 1;
		}
		100% {
			transform: translate(-20px, -100px) rotate(180deg);
			opacity: 0;
		}
	}
</style>
