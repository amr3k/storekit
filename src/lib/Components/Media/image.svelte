<script lang="ts">
	import { lazyLoad } from '$lib/Actions/lazyload';
	export let classes: string;
	export let src: string;
	export let alt: string;
</script>

<!-- Using 1x1 pixel placeholder -->
<img
	class={classes}
	use:lazyLoad={src}
	src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXV1dUmzt0AAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg=="
	loading="lazy"
	width="100%"
	height="100%"
	{alt}
/>
