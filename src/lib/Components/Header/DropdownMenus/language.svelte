<script lang="ts">
	import { clickOutside } from '$lib/Actions/clickOutside';
	import { setLanguage } from '$lib/Stores/language';
	import { closeAll as closeAllMenus } from '$lib/Stores/UI/headerMenus';

	import { fly } from 'svelte/transition';

	const switchLanguage = (language: string) => {
		closeAllMenus();
		setLanguage(language);
		document.dir = language === 'en' ? 'ltr' : 'rtl';
		document.documentElement.setAttribute('lang', language);
	};
</script>

<div
	use:clickOutside
	transition:fly={{ duration: 300, y: -20 }}
	class="account-dropdown absolute z-50 right-auto top-16 w-48 bg-base-100 border border-base-200 rounded-xl overflow-hidden shadow-2xl flex flex-col p-0"
>
	<div>
		<div class="pl-3">
			<p class="text-neutral text-lg font-light text-center">Choose a language</p>
		</div>
		<ul class="bg-base-100 p-2">
			<li dir="rtl" class="text-right">
				<button
					on:click={() => {
						switchLanguage('ar');
					}}
				>
					<div
						class="before:bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAlCAYAAAAA7LqSAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAetJREFUWIXtlk9rE0EcQN/M/kmySVpjI7RY0hJBKB49qEevXvqBvIn9KF5yUSgI+gkUiydPKraNFxNMSNNstrs7f7wo+AFmcC37jnuYt4/fDDPiY++u5Rog//UPuKIOqRp1SNWoQ6pGHVI16pCqIeYvX3t7a1lTcDk9IU62aW4MfWkAENZabyFG5yx/vKO1eYdGZ9eXBvC0tYpsisoXyKCBkCFXyzOstah8QZFNfSjdh+gyZfzhCIvl6vIcISQybJGvvmOxjE+O0GXqWkvoekFdpszOjkFIhJDc2H2MLlOmn19grWV2eszg/lOCqO3U62EiK4SMKNcT5uM3WKMwKmM+fku5niBkhC5XrrXuQ4xaI4MmWmUkvYPfXwVJ7wCtM2TQxKi1a62fiQRRglEp/eEhUXOLRndAf3iIKVOCKPEyES9nRIZtEJI42eHnt1cA3Nx7gpAhMmx7OezuJ6JS4vYO+w+eEcRdsosvZBdfCeIu+w+f0+jcRiv3Ic4vxHT2CVUsUfkCXSzJV2Ms0OwMkGFCnNwiiDZob91zqfVzsy8n7zG6oFxPkGECWMJ4A5UvCFt9NrcfuVYiRqOR8xCjS/LVOdYY4M/yAiEljc4eMohcKxF/mf5rrs0zvg6pGnVI1ahDqkYdUjXqkKrxC62KxlYsiVvMAAAAAElFTkSuQmCC')]"
					>
						العربية
					</div>
				</button>
			</li>
			<li dir="ltr">
				<button
					on:click={() => {
						switchLanguage('en');
					}}
				>
					<div
						class="before:bg-[url('data:image/png;base64,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')]"
					>
						English
					</div>
				</button>
			</li>
		</ul>
	</div>
</div>

<style lang="postcss">
	button {
		@apply w-full flex;
	}
	button > div:before {
		@apply inline-block bg-cover rounded-full bg-no-repeat bg-center mx-1 w-4 h-4;
	}
</style>
