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
	}
	::selection {
		@apply bg-neutral text-neutral-content;
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
</style>
