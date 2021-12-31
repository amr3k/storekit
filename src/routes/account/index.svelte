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
	export let params, session, stuff;
	console.log(params);
	console.log(session);
	console.log(stuff);
</script>

<div class="flex flex-col items-center">
	<h1 class="text-5xl">Admin page</h1>
	<pre>{params}</pre>
	<pre>{session}</pre>
	<pre>{stuff}</pre>
</div>
