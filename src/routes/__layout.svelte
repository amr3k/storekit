<script>
	import Header from '$lib/Header/header.svelte';
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
