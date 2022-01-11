<script lang="ts">
	const colors: string[] = ['#ff0000', '#ffff00', '#0000ff'];
	let choice: string = colors[0];
</script>

<svelte:head>
	<title>Explore the latest fashion from StoreKit</title>
</svelte:head>

<h1 class="font-semibold text-9xl text-center my-8">Home page</h1>

<div class="flex justify-center items-center">
	{#each colors as colorInput}
		<input
			bind:group={choice}
			class="absolute left-[-9999px]"
			id="product-color-{colorInput}"
			type="radio"
			name="product-color"
			value={colorInput}
		/>
		<div class="relative inline-block w-14 h-14 gradient-border rounded-full">
			<label
				style="background-color: {colorInput}"
				class="absolute inset-0 w-12 h-12 m-auto rounded-full cursor-pointer"
				for="product-color-{colorInput}"
			/>
		</div>
	{/each}
</div>
