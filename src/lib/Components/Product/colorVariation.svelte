<script lang="ts">
	// let variationLink: string;
	export let colorName: string;
	const preloadColor = async (): Promise<string> => {
		const response: Response = await fetch(`/api/preloadColor?colorName=${colorName}`);
		const data = await response.json();
		return data.hexCode;
	};
</script>

{#await preloadColor()}
	<div class="mr-1 rounded-full bg-base-300 animate-pulse w-6 h-6" />
{:then backgroundColor}
	<div
		title={colorName}
		style="background-color: {backgroundColor};"
		class="mr-1 rounded-full w-6 h-6 flex justify-center items-center"
	>
		<div
			class="w-5 h-5 rounded-full border-2 border-transparent hover:border-base-200 duration-200 ease-linear"
		/>
	</div>
{/await}
