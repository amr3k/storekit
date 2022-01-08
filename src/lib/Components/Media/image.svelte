<script lang="ts">
	export let classes: string; // Tailwind classes
	export let source: string; // Image source
	export let alt: string; // Image alternative title
	export let aspectRation: string = '2/3'; // Image aspect ratio, this will be used for the placeholder

	const preload = async (): Promise<string> => {
		/**
		 * Preload image and return as base64
		 */
		let res: Response = await fetch(source);
		let blob: Blob = await res.blob();
		let reader: FileReader = new FileReader();
		return new Promise(function (resolve) {
			reader.readAsDataURL(blob);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => console.error('Error: ', error);
		});
	};
</script>

{#await preload()}
	<!-- Display a simple fading gray placeholder to preserve the space while the image is loading -->
	<div class="aspect-[{aspectRation}] animate-pulse bg-base-300 " {alt} />
{:then base64}
	<img class={classes} src={base64} loading="lazy" width="100%" height="100%" {alt} />
{:catch}
	<!-- In case of an error, keep the placeholder -->
	<div class="aspect-[{aspectRation}] bg-base-300 " {alt} />
{/await}
