<script context="module">
	// show all products by default and filter after each search
	// No form submission
</script>

<script lang="ts">
	import Warning from '$lib/Components/Alerts/warning.svelte';
	import { closeAll as closeAllMenus } from '$lib/Stores/UI/headerMenus';

	import { fly } from 'svelte/transition';

	let results = [];
	let searchTerm: string = '';

	const searchProducts = (): void => {
		if (searchTerm.length > 2) {
			fetch(`/api/search?q=${searchTerm}`)
				.then((res) => {
					res.json().then((data) => (results = data));
				})
				.catch((err) => {
					console.error(err);
				});
		}
	};
</script>

<aside
	transition:fly={{ duration: 500, y: -500 }}
	class=" bg-base-100 fixed w-full h-full inset-0 z-10"
>
	<div class="absolute bottom-0 left-0 w-full -z-10 flex justify-center items-center">
		<svg
			class="max-w-lg opacity-30"
			xmlns="http://www.w3.org/2000/svg"
			data-name="Layer 1"
			viewBox="0 0 710 559"
			><path fill="#e6e6e6" d="M0 0h644v412H0z" /><path fill="#fff" d="M19 52h607v336H19z" /><path
				fill="#b85252"
				d="M0 0h644v27H0z"
			/><circle cx="20.3" cy="14" r="5.1" fill="#fff" /><circle
				cx="39.6"
				cy="14"
				r="5.1"
				fill="#fff"
			/><circle cx="58.8" cy="14" r="5.1" fill="#fff" /><path
				fill="#e6e6e6"
				d="M74 87h156v267H74z"
			/><path fill="#b85252" d="M257 87h130v73H257z" /><path
				fill="#e6e6e6"
				d="M257 181h130v79H257zm0 99h130v73H257zM415 87h156v116H415zm0 150h156v116H415z"
			/><path
				fill="#2f2e41"
				d="M510 211v-25a34 34 0 1 1 67 0v25a5 5 0 0 1-4 5h-58a5 5 0 0 1-5-5Z"
			/><path fill="#ffb8b8" d="m594 537-12 3-19-44 18-5 13 46z" /><path
				fill="#2f2e41"
				d="m572 539 23-6 4 14-37 10a15 15 0 0 1 10-18Z"
			/><path fill="#ffb8b8" d="M470 546h-12l-6-47h18v47z" /><path
				fill="#2f2e41"
				d="M449 542h24v15h-39a15 15 0 0 1 15-15Z"
			/><path
				fill="#ffb8b8"
				d="M456 282a10 10 0 0 0 15 1l33 14-3-18-31-11a10 10 0 0 0-14 14Z"
			/><path
				fill="#2f2e41"
				d="M523 392c-10 0-21-2-29-6a38 38 0 0 1-20-24c-5-14 1-29 7-43 3-9 6-17 7-25l1-3c1-12 2-24 9-28 3-2 7-2 13 0l55 18-2 104s-20 7-41 7Z"
			/><path
				fill="#b85252"
				d="M510 230s27-8 48-5c0 0-12 66-8 88s-69 9-54-12l5-25s-10-10-1-22Z"
			/><path
				fill="#2f2e41"
				d="m497 390-33-6 11-90c1-2 19-59 27-62a140 140 0 0 1 18-5h2l-7 10-27 63Z"
			/><path
				fill="#2f2e41"
				d="m480 535-43-7 24-99 36-135v3s3 18 53 10h1l60 213-49 8-45-155Z"
			/><path
				fill="#2f2e41"
				d="M539 407v-1c0-1 3-85 2-118-1-34 10-63 10-63v-1h1c14-4 26 8 26 8v1l-4 33 17 120Z"
			/><circle cx="537.1" cy="190.8" r="24.6" fill="#ffb8b8" /><path
				fill="#2f2e41"
				d="M503 188a27 27 0 0 1 26-26h5a27 27 0 0 1 27 26v1h-11l-4-10v10h-6l-2-5v5h-35Z"
			/><path
				fill="#2f2e41"
				d="M535 219a4 4 0 0 1-1-5c6-10 13-29 3-40l-1-1h29v43l-26 5a5 5 0 0 1-1 0 4 4 0 0 1-3-2Z"
			/><path
				fill="#3f3d56"
				d="M420 42a135 135 0 1 0 7 199l166 140a12 12 0 0 0 16-19L443 222a135 135 0 0 0-23-180Zm-11 166a101 101 0 1 1-12-142 101 101 0 0 1 12 142Z"
			/><path
				d="M512 391a101 101 0 0 1-18-136l-5 6a101 101 0 1 0 154 131l6-7a101 101 0 0 1-137 6Z"
				opacity=".3"
				style="isolation:isolate"
				transform="translate(-245 -171)"
			/><path
				fill="#ffb8b8"
				d="M545 325a10 10 0 0 0 12-10l35-9-14-12-31 11a10 10 0 0 0-2 20Z"
			/><path
				fill="#2f2e41"
				d="m559 319-2-19 29-16-19-23 3-25 8-4v1c4 4 35 45 35 50s-6 20-14 24-38 12-39 12Z"
			/><path fill="#ccc" d="M709 559H328a1 1 0 1 1 0-2h381a1 1 0 0 1 0 2Z" /></svg
		>
	</div>
	<div class="relative flex justify-start p-2 mb-4">
		<button class="group w-20 h-20 lg:w-12 lg:h-12" on:click={closeAllMenus}>
			<svg
				class="fill-accent group-hover:fill-accent-focus group-hover:duration-200"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				><path fill="none" d="M0 0h24v24H0z" /><path
					d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9 3-3 1 1-3 3 3 3-1 1-3-3-3 3-1-1 3-3-3-3 1-1 3 3z"
				/>
			</svg>
		</button>
	</div>
	<form action="" on:submit|preventDefault={searchProducts}>
		<div class="form-control px-12">
			<div class="relative">
				<input
					type="search"
					bind:value={searchTerm}
					placeholder="Search for products"
					class="w-full pr-16 input input-primary input-bordered"
				/>
				<button class="absolute top-0 right-0 rounded-l-none btn btn-primary">go</button>
			</div>
		</div>
	</form>
	{#if !results.length}
		<div>
			<Warning msg="No products found, please refine your search!" />
		</div>
	{/if}
</aside>
