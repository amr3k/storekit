<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const overlayClick = () => {
		dispatch('overlayClick');
	};
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			dispatch('overlayClick');
		}
	};
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="fixed inset-0 h-full w-full" on:click={overlayClick} />
