<script lang="ts">
	import { clickOutside } from '$lib/Actions/clickOutside';
	import { closeAll as closeAllMenus } from '$lib/Stores/UI/headerMenus';

	import { fade, fly } from 'svelte/transition';
	type User = {
		userName: string;
		isUserLoggedIn: boolean;
	};
	export let user: User;
</script>

<div
	use:clickOutside
	in:fly={{ duration: 300, y: -20 }}
	out:fade={{ duration: 200 }}
	class="account-dropdown absolute z-50 right-auto top-16 w-48 bg-base-100 border border-base-200 rounded-xl overflow-hidden shadow-2xl flex flex-col p-0"
>
	<div>
		{#if user.isUserLoggedIn}
			<div class="pl-3">
				<p class="text-neutral text-lg font-light text-center">
					Welcome<spane class="font-medium text-accent truncate">&nbsp;{user.userName}</spane>
				</p>
			</div>
			<ul class="bg-base-100 p-2">
				<li class="account-li">
					<a sveltekit:prefetch on:click={closeAllMenus} href="/account">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
							><path fill="none" d="M0 0h24v24H0z" /><path
								d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
							/>
						</svg>
						<span>Account</span>
					</a>
				</li>
				<li class="wishlist-li">
					<a sveltekit:prefetch on:click={closeAllMenus} href="/wishlist">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
							><path fill="none" d="M0 0h24v24H0z" /><path
								d="M20.24 4.76a6 6 0 0 1 .24 8.23L12 21.5 3.52 13A6 6 0 0 1 12 4.53a6 6 0 0 1 8.24.23zM5.17 6.17a4 4 0 0 0-.19 5.45L12 18.65l7.02-7.03a4 4 0 0 0-5.65-5.64l-4.2 4.2-1.41-1.4 2.82-2.83-.08-.07a4 4 0 0 0-5.33.3z"
							/></svg
						>
						<span>Wishlist</span>
					</a>
				</li>
				<li class="faq-li">
					<a sveltekit:prefetch on:click={closeAllMenus} href="/faq">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path fill="none" d="M0 0h24v24H0z" />
							<path
								d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.65V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.47-1.8l-1.96-.39A3.5 3.5 0 1 1 13 13.35z"
							/>
						</svg>
						<span>Help</span>
					</a>
				</li>
				<li class="logout-li">
					<a sveltekit:prefetch on:click={closeAllMenus} href="/logout">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
							><path fill="none" d="M0 0h24v24H0z" /><path
								d="m6.26 3.8 1.15 1.65a8 8 0 1 0 9.18 0l1.15-1.64A9.99 9.99 0 0 1 22 12a10 10 0 1 1-20 0 9.99 9.99 0 0 1 4.26-8.2zM11 12V2h2v10h-2z"
							/></svg
						>
						<span>Logout</span>
					</a>
				</li>
			</ul>
		{:else}
			<div class="p-2 my-4">
				<a sveltekit:prefetch on:click={closeAllMenus} href="/account" class="btn btn-primary">Login</a>
				<div class="divider">OR</div>
				<a sveltekit:prefetch on:click={closeAllMenus} href="/account" class="btn btn-secondary">Sign up</a>
			</div>
			<ul class="bg-base-100 p-2">
				<li class="wishlist-li">
					<a sveltekit:prefetch on:click={closeAllMenus} href="/wishlist">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
							><path fill="none" d="M0 0h24v24H0z" /><path
								d="M20.24 4.76a6 6 0 0 1 .24 8.23L12 21.5 3.52 13A6 6 0 0 1 12 4.53a6 6 0 0 1 8.24.23zM5.17 6.17a4 4 0 0 0-.19 5.45L12 18.65l7.02-7.03a4 4 0 0 0-5.65-5.64l-4.2 4.2-1.41-1.4 2.82-2.83-.08-.07a4 4 0 0 0-5.33.3z"
							/></svg
						>
						<span>Wishlist</span>
					</a>
				</li>
				<li class="faq-li">
					<a sveltekit:prefetch on:click={closeAllMenus} href="/faq">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path fill="none" d="M0 0h24v24H0z" />
							<path
								d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.65V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.47-1.8l-1.96-.39A3.5 3.5 0 1 1 13 13.35z"
							/>
						</svg>
						<span>Help</span>
					</a>
				</li>
			</ul>
		{/if}
	</div>
</div>

<style lang="postcss">
	.account-dropdown ul > li {
		@apply flex justify-items-stretch rounded;
	}
	.account-dropdown ul > li > a {
		@apply my-1 w-full font-semibold;
	}
	.account-dropdown ul > li > a > svg {
		@apply inline-block w-5 h-5 mx-3;
	}
	.account-dropdown ul > li:hover {
		@apply bg-base-200 duration-100;
	}
	.account-dropdown ul > li:hover svg {
		@apply duration-100;
	}
	.account-li:hover svg {
		@apply fill-sky-500;
	}
	.wishlist-li:hover svg {
		@apply fill-rose-600;
	}
	.faq-li:hover svg {
		@apply fill-cyan-500;
	}
	.logout-li:hover svg {
		@apply fill-red-500;
	}
	.divider {
		@apply mx-auto my-1 border-b border-b-transparent text-neutral;
	}
</style>
