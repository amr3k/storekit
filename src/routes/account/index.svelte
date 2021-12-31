<script context="module">
	export const load = async ({ params, fetch, session, stuff }) => {
		// The load function receives an object containing five fields:
		// url, params, fetch, session and stuff
		return {
			props: {
				params: params,
				session: session,
				stuff: stuff
			}
		};
	};
</script>

<script lang="ts">
	export const params = null;
	export const session = null;
	export const stuff = null;
</script>

<div class="flex flex-col items-center">
	<h1 class="text-5xl">Account page</h1>
</div>
