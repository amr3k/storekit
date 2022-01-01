<script>
	export let msg = 'Lorem ipsum dolor sit amet, consectetur adip!';
</script>

<div class="flex justify-center mt-12 mx-4">
	<div class="flex flex-row items-center flex-1 alert alert-warning max-w-fit">
		<svg class="w-8 h-8 mr-4 fill-warning" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
			><path fill="none" d="M0 0h24v24H0z" /><path
				d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"
			/></svg
		>
		<span>{msg}</span>
	</div>
</div>

<style>
	span {
		margin: 0 !important;
	}
</style>
