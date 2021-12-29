<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				status: status
			}
		};
	}
</script>

<script lang="ts">
	export let status: number = 404;

	let errorTitle: string;
	let errorMessage: string;
	switch (status) {
		case 400:
			errorTitle = 'Bad request';
			errorMessage = 'The request was invalid or cannot be otherwise served.';
			break;
		case 401:
			errorTitle = 'Unauthorized';
			errorMessage = 'Authentication is required and has failed or has not yet been provided.';
			break;
		case 403:
			errorTitle = 'Forbidden';
			errorMessage = 'You are not authorized to access this resource.';
			break;
		case 404:
			errorTitle = 'Not found';
			errorMessage =
				'The requested resource could not be found but may be available again in the future.';
			break;
		case 500:
			errorTitle = 'Internal server error';
			errorMessage =
				'The server encountered an unexpected condition which prevented it from fulfilling the request.';
			break;
		default:
			errorTitle = 'Something went wrong';
	}
	if (status === 404) {
		errorTitle = 'Not found';
	}
</script>

<svelte:head>
	<title>{errorTitle}</title>
</svelte:head>

<div class="flex flex-col items-center">
	{#if status === 400}
		<img src="/errors/400.svg" alt={`${status} ${errorTitle}`} />
	{:else if status === 401}
		<img src="/errors/401.svg" alt={`${status} ${errorTitle}`} />
	{:else if status === 403}
		<img src="/errors/403.svg" alt={`${status} ${errorTitle}`} />
	{:else if status === 404}
		<img src="/errors/404.svg" alt={`${status} ${errorTitle}`} />
	{:else if status >= 500}
		<img src="/errors/50X.svg" alt={`${status} ${errorTitle}`} />
	{/if}
	<h1 class="mx-8 text-4xl text-center">{errorMessage}</h1>
</div>

<style lang="postcss">
	img {
		@apply w-3/4 max-w-lg mb-12;
	}
</style>
