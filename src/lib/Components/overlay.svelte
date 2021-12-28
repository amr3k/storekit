<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const overlayClick = () => {
		dispatch('overlayClick');
	};
</script>

<div class="fixed inset-0 h-full w-full" on:click={overlayClick} />
