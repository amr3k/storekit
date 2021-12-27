<script lang="ts">
	import { afterUpdate, beforeUpdate, onMount } from 'svelte';

	let ltr = true;
	onMount(() => {
		ltr = window.getComputedStyle(document.body).direction === 'ltr';
	});
	const switchDirection = (): void => {
		ltr = !ltr;
		document.dir = ltr ? 'ltr' : 'rtl';
		document.documentElement.setAttribute('lang', ltr ? 'ar' : 'en');
	};
</script>

<div
	class="flex items-center sm:justify-evenly lg:justify-around mb-2 shadow-lg bg-base-100 text-base-content"
>
	<div class="lg:hidden pl-2 w-1/3">
		<label for="main-drawer" class="btn btn-square btn-ghost">
			{#if ltr}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="h-6 w-6 fill-base-content"
				>
					<path fill="none" d="M0 0h24v24H0z" />
					<path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z" />
				</svg>
			{:else}
				<svg
					class="h-6 w-6 fill-base-content"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="24"
					height="24"
				>
					<path fill="none" d="M0 0h24v24H0z" />
					<path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
				</svg>
			{/if}
		</label>
	</div>
	<div class="px-2 w-1/3 flex justify-center lg:justify-start flex-1 lg:flex-none">
		<a href="/"><img class="w-24" src="/logo/light-bg.svg" alt="Storekit logo" /></a>
	</div>
	<div class="hidden w-1/3 px-2 mx-2 lg:flex lg:flex-1 lg:justify-center">
		<div class="flex items-stretch">
			<a href="/" class="navbar-category">Home</a>
			<a href="/category/men" class="navbar-category">Men</a>
			<a href="/category/women" class="navbar-category">Women</a>
			<a href="/category/accessories" class="navbar-category">Accessories</a>
			<a href="/category/outlet" class="navbar-category">Outlet</a>
		</div>
	</div>
	<div class="w-1/3 pr-2 flex justify-end">
		<button class="btn btn-square btn-ghost">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 fill-base-content">
				><path fill="none" d="M0 0h24v24H0z" /><path
					d="m18 16.6 4.3 4.3-1.4 1.4-4.3-4.3a9 9 0 0 1-5.6 2 9 9 0 1 1 9-9 9 9 0 0 1-2 5.6zm-2-.7a7 7 0 0 0 2-4.9 7 7 0 1 0-7 7 7 7 0 0 0 4.9-2l.1-.1z"
				/></svg
			>
		</button>
		<button class="btn btn-square btn-ghost" on:click={switchDirection}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path fill="none" d="M0 0h24v24H0z" />
				<path
					d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"
				/>
			</svg>
		</button>
		<button class="btn btn-square btn-ghost">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 fill-base-content"
				><path fill="none" d="M0 0h24v24H0z" /><path
					d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
				/></svg
			>
		</button>
		<button class="btn btn-square btn-ghost">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 fill-base-content"
				><path fill="none" d="M0 0h24v24H0z" /><path
					d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.4l2-8H8V5h13.7a1 1 0 0 1 1 1.2l-2.5 10a1 1 0 0 1-1 .8H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
				/></svg
			>
		</button>
	</div>
</div>

<style lang="postcss">
	.navbar-category {
		@apply mx-3 my-1 font-medium leading-6 border-b border-b-transparent;
	}
	.navbar-category:hover {
		@apply border-b border-b-primary duration-500;
	}
</style>
