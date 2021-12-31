<script lang="ts">
	export let title: string = 'Send';
</script>

<button
	class="group px-3 py-2 rounded-full text-md font-medium text-primary-content bg-primary hover:bg-primary-focus flex items-center justify-center overflow-hidden duration-200 active:scale-95"
>
	<div class="svg-wrapper-1">
		<div class="svg-wrapper">
			<svg
				class="block w-8 mr-2 origin-center transition-transform duration-300 ease-in-out group-hover:rotate-45 group-hover:scale-110"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				><path fill="none" d="M0 0h24v24H0z" /><path
					fill="currentColor"
					d="M2 9.3c-.6-.2-.6-.4 0-.6l19-6.4c.6-.2.9.1.7.7l-5.4 19c-.2.6-.5.6-.7 0L12 14l6-8-8 6-8-2.7z"
				/></svg
			>
		</div>
	</div>
	<span class="ml-1 transition-all duration-300 ease-in-out">{title}</span>
</button>

<style lang="postcss">
	button:hover .svg-wrapper {
		animation: fly-1 0.6s ease-in-out infinite alternate;
	}
	@keyframes fly-1 {
		from {
			transform: translateY(0.1em);
		}

		to {
			transform: translateY(-0.1em);
		}
	}
</style>
