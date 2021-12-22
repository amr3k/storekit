<script lang="ts">
	let rtl = false;

	const switchDirection = (): void => {
		rtl = !rtl;
		document.dir = rtl ? 'rtl' : 'ltr';
	};
</script>

<h1 class="title text-3xl font-bold">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h2 class="ml-5 prose-h2 prose-2xl prose-strong">عنوان</h2>
<p>
	هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث
	يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
	التطبيق.
</p>
<div class="alert alert-warning">
	<div class="flex-1">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="w-6 h-6 mx-2 stroke-current"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
			/>
		</svg>
		<p>Lorem ipsum dolor sit amet, consectetur adip!</p>
	</div>
</div>

<div class="mx-auto flex flex-col items-center">
	<p class="font-bold">Direction: {rtl ? 'rtl' : 'ltr'}</p>
	<button class="btn btn-primary" on:click={switchDirection}>Change Direction</button>
</div>

<style>
	button {
		margin-top: 1rem;
	}
</style>
