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
</style>
