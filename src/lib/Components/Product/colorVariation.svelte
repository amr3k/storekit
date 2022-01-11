<script lang="ts">
	// let variationLink: string;
	export let choice: string;
	// TODO the choice binding doesn't work, it doesn't switch current color
	export let colorName: string;
	const preloadColor = async (): Promise<string> => {
		const response: Response = await fetch(`/api/preloadColor?colorName=${colorName}`);
		const data = await response.json();
		return data.hexCode;
	};
	const randomNumber: number = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
</script>

{#await preloadColor()}
	<div class="mr-1 rounded-full bg-base-300 animate-pulse w-6 h-6" />
{:then backgroundColor}
	<input
		bind:group={colorName}
		class="peer absolute left-[-9999px]"
		id="product-color-{colorName}-{randomNumber}"
		type="radio"
		name="product-color"
		value={colorName}
	/>
	<div class="relative inline-block w-8 h-8 hover:shadow-md rounded-full gradient-border">
		<label
			style="background-color: {backgroundColor}"
			class="absolute inset-0 w-7 h-7 m-auto rounded-full cursor-pointer {choice === colorName
				? 'border-2 border-double border-white'
				: ''}"
			for="product-color-{colorName}-{randomNumber}"
			aria-label={colorName}
			aria-checked={choice === colorName}
			aria-roledescription="Product color"
			aria-details={colorName}
		/>
	</div>
{/await}
