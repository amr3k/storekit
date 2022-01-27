<script>
	import Header from '$lib/Components/Header/header.svelte';
	import { language as languageStore } from '$lib/Stores/language';
	import { onMount } from 'svelte';
	onMount(() => {
		document.dir = $languageStore === 'en' ? 'ltr' : 'rtl';
		document.documentElement.setAttribute('lang', $languageStore);
	});
</script>

<Header>
	<slot />
</Header>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	html {
		@apply antialiased;
		scroll-behavior: smooth;
	}
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	::selection {
		@apply bg-neutral text-neutral-content;
		text-fill-color: white;
		-webkit-text-fill-color: white;
	}
	html,
	body {
		margin: 0;
		padding: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Cairo', sans-serif;
	}
	/* Custom Scrollbar */
	/* Firefox */
	/* Looks like firefox doesn't support color gradient for scrollbar. */
	* {
		scrollbar-width: auto;
		scrollbar-color: rgba(255, 105, 152, 1) transparent;
	}

	/* Chrome, Edge, Safari */
	*::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}

	*::-webkit-scrollbar-track {
		background: rgb(255, 219, 247);
		background: radial-gradient(circle, rgba(255, 219, 247, 1) 0%, rgba(255, 216, 228, 1) 100%);
	}

	*::-webkit-scrollbar-thumb {
		background: rgb(255, 105, 152);
		background: radial-gradient(circle, rgba(255, 105, 152, 1) 0%, rgba(255, 111, 224, 1) 100%);
		border-radius: 6px;
	}

	*::-webkit-scrollbar-thumb:hover {
		background: rgb(255, 56, 118);
		background: radial-gradient(circle, rgba(255, 56, 118, 1) 0%, rgba(255, 54, 212, 1) 100%);
	}
	/* Gradient border colors (using background for a relative element)*/
	.gradient-border {
		@apply bg-gradient-to-br from-sky-200 via-pink-400 to-fuchsia-600;
	}
	html[dir='rtl'] .gradient-border {
		@apply bg-gradient-to-bl;
	}
	.animate-shine {
		background: linear-gradient(
			135deg,
			transparent 0%,
			transparent 45%,
			rgba(255, 255, 255, 0.2) 50%,
			transparent 55%,
			transparent 100%
		);
		background-size: 1000%;
		background-position: right;
		animation: shine 3s linear infinite;
	}
	.animate-shine-text {
		color: white;
		background: linear-gradient(
			45deg,
			#ee4242,
			#e49936,
			#e2f729,
			#28e328,
			#28e39b,
			#22f4fc,
			#422feb,
			#7f28e3,
			#ee28d4,
			#ec215e
		);
		background-size: 1600% 1600%;
		background-clip: text;
		text-fill-color: transparent;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: text-gradient 90s ease infinite;
	}
	@keyframes shine {
		to {
			background-position: left;
		}
	}
	@keyframes text-gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
