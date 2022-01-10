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
		style="background-color: {backgroundColor};"
		class="mr-1 rounded-full w-6 h-6 border-base-100"
	/>
{/await}
