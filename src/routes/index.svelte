<script lang="ts">
	//

	import Fire from '$lib/Components/AnimatedSVGs/fire.svelte';
</script>

<svelte:head>
	<title>Explore the latest fashion from StoreKit</title>
</svelte:head>

<main class="px-4 md:px-8 lg:px-12 py-6">
	<div
		class="relative grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 content-around place-items-stretch"
	>
		<section class="main-header-9 col-span-1 row-span-1 row-start-1 col-start-1">
			<h4 class="text-lg font-medium">Trendy Colections</h4>
			<div class="py-4">
				<h1 class="text-5xl md:text-6xl">
					Building <span>
						<svg
							class="w-8 h-8 fill-white rotate-[30deg]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path
								d="M12 4.2C8.9-1.2 0 .4 0 7.2c0 4.7 5.6 9.4 12 15.8 6.4-6.4 12-11.1 12-15.8 0-6.8-8.9-8.3-12-3z"
							/>
						</svg>
					</span>
				</h1>
				<h1 class="text-4xl md:text-5xl">a better you</h1>
			</div>
			<div class="my-4">
				<p>Anyone can beat you but no one can beat your</p>
				<p>outfit as long as you wear Storekit outfits</p>
			</div>
			<div class="flex flex-col md:flex-row gap-4 mb-8 md:mb-0">
				<button class="pbtn group whitespace-nowrap">
					Start shopping
					<span
						class="bg-red-500 shadow-xl rounded-full flex items-center justify-center ml-4 h-6 w-6"
					>
						<svg
							class="inline w-4 h-4 fill-white rtl:rotate-180 ltr:group-active:translate-x-1 rtl:group-active:-translate-x-1 duration-100"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="m13.2 12-5-5 1.4-1.4L16 12l-6.4 6.4L8.2 17z" />
						</svg>
					</span>
				</button>
				<button class="sbtn group">
					<span>
						<svg
							class="w-8 h-8 pl-2 group-active:animate-ping"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path
								d="m19.38 12.42-10.6 7.06a.5.5 0 0 1-.78-.41V4.93a.5.5 0 0 1 .78-.41l10.6 7.06a.5.5 0 0 1 0 .84z"
							/>
						</svg>
					</span>
					<span class="bg-transparent ml-14 whitespace-nowrap">Play video</span>
				</button>
			</div>
		</section>
		<section
			class="grid grid-rows-2 md:grid-rows-1 grid-cols-2 md:grid-cols-4 pt-10 md:gap-2 col-span-1 row-span-1"
		>
			<div class="mt-10 row-span-1 col-span-1 row-start-2 md:row-start-1 col-start-1">
				<h2 class="text-lg font-bold">Hannah</h2>
				<p class="text-sm font-light">Fashion Blogger</p>
			</div>
			<div class="flex items-end row-span-1 col-span-1 row-start-2 md:row-start-1 col-start-2">
				<img class="object-contain" src="/images/index/hannah.webp" alt="Hannah" />
			</div>
			<div class="flex flex-col col-span-2 row-span-1 row-start-1 col-start-1 md:col-start-3">
				<div class="relative">
					<div
						class="absolute flex w-12 -top-6 ltr:right-0 rtl:left-0 ltr:md:right-10 rtl:md:left-10"
					>
						<svg
							class="w-18 fill-gray-800 block -scale-x-100 md:scale-x-100 skew-x-[40deg] -skew-y-[30deg] md:skew-x-0 md:skew-y-0 rotate-90 md:rotate-0"
							xmlns="http://www.w3.org/2000/svg"
							xml:space="preserve"
							viewBox="0 0 302.82 302.82"
						>
							<path
								d="m4.58 174.22 62.48 62.48h.01c.36.36.73.7 1.11 1.01l.66.49.5.37c.3.2.6.36.9.54.12.06.23.14.36.2.28.16.58.29.87.42l.45.21.77.29c.2.07.41.15.62.21.2.07.42.11.63.16.27.07.53.15.8.2l.5.08.96.14c.13 0 .26 0 .4.02.34.02.7.05 1.05.05.2 0 .38-.02.58-.03a15.15 15.15 0 0 0 2.35-.26h.01l.2-.05c.42-.09.83-.19 1.24-.31l.46-.16c.31-.1.62-.21.92-.34.21-.08.4-.18.6-.28.25-.11.5-.22.72-.34.25-.13.48-.28.71-.42.18-.11.37-.21.55-.33l.81-.6.37-.28c.34-.28.67-.58.98-.88l.12-.11.02-.02.04-.05 62.43-62.42A15 15 0 0 0 129.54 153l-38.83 38.82c4.3-47.3 39.2-88.26 88.07-97.98a110.06 110.06 0 0 1 65.46 7.08 110.25 110.25 0 0 1 33.23 22.49 15 15 0 1 0 21.05-21.38 139.88 139.88 0 0 0-98.26-40.3c-9.08 0-18.24.88-27.34 2.69-61.89 12.31-106.14 63.91-112 123.7L25.8 152.99A15 15 0 1 0 4.6 174.2Z"
							/>
						</svg>
					</div>
					<svg
						class="w-12 h-12 fill-gray-200"
						xmlns="http://www.w3.org/2000/svg"
						xml:space="preserve"
						viewBox="0 0 98.8 98.8"
						><path
							d="M96.8 57.2C91.5 76 78.6 89.6 66 89.6c-1 0-2 0-3-.2a2 2 0 0 1-1.6-2.5l2.6-9.3a2 2 0 0 1 2-1.5h.2c4.7 0 13.2-7 17.5-22.5l.5-2a22.4 22.4 0 1 1-4-41.6c8 2.2 13.9 8.7 16.7 18.4a53.5 53.5 0 0 1-.1 28.8zM14 89.6c-1 0-2 0-3-.2a2 2 0 0 1-1.5-2.5l2.6-9.3a2 2 0 0 1 2-1.5h.2c4.7 0 13.2-7 17.6-22.5l.5-2a22.4 22.4 0 1 1-4-41.6c7.9 2.2 13.8 8.7 16.7 18.4a53.5 53.5 0 0 1-.2 28.8C39.6 76 26.7 89.6 14 89.6Z"
						/></svg
					>
				</div>
				<h3 class="text-lg font-bold">I just love Storekit!</h3>
				<p class="text-sm">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, modi? Ullam, et
					dolorum? Facilis, atque expedita.
				</p>
				<div class="flex items-center">
					<span class="font-bold">4.9</span>
					<svg
						class="mx-2 w-12 fill-teal-400"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"><path d="m12 1 4 7 8 1-6 6 1 8-7-4-7 4 1-8-6-6 8-1z" /></svg
					>
					<hr class="w-full mx-2" />
					<span class="whitespace-nowrap font-semibold tracking-tight">Overall rating</span>
				</div>
			</div>
		</section>
		<section class="flex flex-col col-span-1 row-span-1 md:row-span-2 row-start-2 md:row-start-1">
			<!-- Hero section -->
			<div class="relative flex justify-center md:pt-16">
				<img class="h-full object-contain" src="/images/index/index-hero.webp" alt="Hero" />
				<div
					class="absolute bottom-0 pb-4 ltr:right-0 rtl:left-0 rounded-2xl bg-white drop-shadow-xl"
				>
					<!-- Small hero -->
					<div
						class="w-16 h-10 md:w-32 md:h-20 flex justify-center items-end bg-gradient-to-r from-blue-100 to-blue-200 rounded-t-2xl border md:border-4 border-white"
					>
						<img
							class="w-3/4"
							id="sm-hero-388"
							src="images/index/index-hero-sm.webp"
							alt="healthy food"
						/>
					</div>
					<div class="text-center">
						<h2 class="text-md font-medium text-gray-900">Natural Health</h2>
						<p class="text-gray-500 text-xs font-medium">Blog | Article</p>
					</div>
				</div>
			</div>
			<div class="flex justify-center small-reactions-387">
				<div class="relative flex justify-center rounded-full bg-white p-1 -mt-2">
					<!-- Small surprised faces -->
					<!-- Like icon -->
					<svg
						class="absolute -top-10 ltr:-left-14 rtl:-right-14 w-14 rounded-full shadow-lg shadow-blue-700/40"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 60.2 60.2"
					>
						<defs>
							<linearGradient id="like-gradient-8" gradientTransform="rotate(90)">
								<stop offset="0%" stop-color="#65ACFF" />
								<stop offset="100%" stop-color="#0A11FF" />
							</linearGradient>
						</defs>
						<path
							fill="#5e91ff"
							d="M30.1.4A29.5 29.5 0 0 0 .6 30a29.5 29.5 0 0 0 29.5 29.5A29.5 29.5 0 0 0 59.6 30 29.5 29.5 0 0 0 30 .4Zm4 10.6c1.7 0 2.3 1.7 2.3 1.7s1.5 2.9 0 6.5c-1 3-1.3 3.2-1.3 3.2s-.4.6.8.5h7.5c.6 0 2.3.5 2.2 2.7 0 1.6-1 2.2-1.6 2.3 0 0-.1.1 0 .2.5.4 1.6 1.1 1.6 2.3 0 1.5-.7 2-1.9 2.3v.2c.5.3 1.3 1 1.2 2.2a2 2 0 0 1-1.5 2 .1.1 0 0 0 0 .2c.3.2.8.7.8 1.7 0 .6-.2 1-.5 1.3a2 2 0 0 1-1.5.7H26s-.8 0-.8-1.2V29.2c0-2.7.7-5.2 2-7.4 1-1.4 2.8-3.6 3.9-4.7.2-.2 1-1 1-1.4l.1-2.9c0-1 .9-1.8 1.9-1.8zM15.5 26.6H22c.5 0 .9.4.9 1v14.8c0 .5-.4 1-1 1h-6.4a1 1 0 0 1-1-1V27.5c0-.5.5-.9 1-.9z"
						/>
					</svg>
					{#each [1, 2, 3, 4, 5] as indx}
						<img
							class="rounded-full w-10 h-10	 border-2 border-white shadow-md"
							src="/images/index/reactions/{indx}.webp"
							alt="Healthy Reaction {indx}"
						/>
					{/each}
				</div>
			</div>
		</section>
	</div>
	<section class="flex flex-col md:flex-row justify-evenly styles-section-41">
		<!-- Styles -->
		<div
			class="relative flex flex-col justify-center rounded-t-3xl md:rounded-none ltr:md:rounded-tl-3xl rtl:md:rounded-tr-3xl ltr:after:right-0 rtl:after:left-0"
		>
			<h2>
				Styles
				<Fire width="4" />
			</h2>
			<p>Shop the latest trendy fashion outfits at Storekit</p>
		</div>
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 496 496">
				<path
					fill="#db9c2e"
					d="M252 261c50 0 92 7 99 17l1-5c0-21-45-38-100-38s-101 17-101 38l1 5c7-10 49-17 100-17z"
				/>
				<path
					fill="#c68722"
					d="M156 275c12-15 50-27 96-27 45 0 83 12 96 27l3 3 1-5c0-21-45-38-100-38s-101 17-101 38l1 5 4-3z"
				/>
				<path
					fill="#4b377c"
					d="M382 392c-4-104-61-179-130-179s-125 75-129 179c0 1 0 0 0 0 2 24 28 88 33 104h193c4-16 30-80 32-104h1z"
				/>
				<path
					fill="#7c66b2"
					d="M390 22c0-12-11-22-25-22h-39c-6 48-39 81-78 81s-71-33-78-81h-30c-14 0-25 10-25 22L90 67c0 12 11 22 25 22l37 8c14 23 26 34 26 70 0 44-10 85-27 117 23 44 60 72 101 72 42 0 78-28 102-72-17-32-28-73-28-117 0-36 12-47 26-70l29-8c14 0 25-10 25-22l-16-45z"
				/>
				<path
					fill="#684e9b"
					d="M390 22c0-13-11-7-25-7l-39-8c-6 46-39 81-78 81s-71-35-78-81l-30 8c-14 0-25-6-25 7L90 66c0 13 11 23 25 23l37 8c14 23 26 34 26 70 0 44-10 85-27 117 23 44 60 72 101 72 42 0 78-28 102-72-17-32-28-73-28-117 0-36 12-47 26-70l29-8c14 0 25-10 25-23l-16-44z"
				/>
				<path
					fill="#db9c2e"
					d="M248 30c-27 0-49-13-52-30v4c0 19 23 34 52 34s53-15 53-34l-1-4c-3 17-25 30-52 30z"
				/>
				<path
					fill="#c68722"
					d="M248 38c-27 0-49-21-52-38v4c0 19 23 34 52 34s53-15 53-34l-1-4c-3 17-25 38-52 38z"
				/>
				<path
					fill="#564289"
					d="M382 89c11 0 20-7 23-17-6 6-14 12-23 17zM91 72c3 10 12 17 24 17-9-5-17-11-24-17zm257 16c-29 10-63 57-100 57-32 0-62-45-89-53 11 16 19 45 19 75 0 44-10 85-27 117 23 44 60 72 101 72 42 0 78-28 102-72-17-32-28-73-28-117 0-32 10-60 22-79z"
				/>
				<circle cx="248.2" cy="34.7" r="13.2" fill="#db9c2e" /><path
					fill="#c68722"
					d="M261 35a13 13 0 1 1-26 0c0-8 6-6 13-6 8 0 13-2 13 6z"
				/>
				<path fill="#b77616" d="M261 35a13 13 0 1 1-26 0c0-8 6 2 13 2 8 0 13-10 13-2z" /><path
					fill="#db9c2e"
					d="M252 289c-51 0-93-8-100-18l-1 5c0 21 45 38 101 38 55 0 100-17 100-38l-1-5c-7 10-49 18-99 18z"
				/>
				<path
					fill="#c68722"
					d="M348 274c-13 15-51 27-96 27-46 0-84-12-96-27l-4-3-1 5c0 21 45 38 101 38 55 0 100-17 100-38l-1-5-3 3z"
				/>
			</svg>
			<h2>Empire Waist</h2>
			<p>Shop now +</p>
		</div>
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512"
				><path
					fill="#ec87c0"
					d="M181 0c-6 0-10 5-10 11v49h21V11c0-6-5-11-11-11zm150 0c-6 0-11 5-11 11v49h21V11c0-6-4-11-10-11z"
				/><path
					fill="#e6e9ed"
					d="M425 490s-47 22-170 22c-122 0-168-22-168-22S63 171 256 171s169 319 169 319z"
				/><path
					fill="#ccd1d9"
					d="M352 50c-18-20-96 10-96 10s-78-30-96-10 21 142 21 142h150s39-122 21-142z"
				/><path
					fill="#ec87c0"
					d="m87 431-1 22c27 7 82 17 170 17s143-10 170-17l-1-22c-22 6-77 18-169 18s-147-12-169-18z"
				/></svg
			>
			<h2>Wedding Vibes</h2>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque voluptatibus similique</p>
		</div>
		<div class="relative rounded-b-3xl md:rounded-none ltr:md:rounded-tr-3xl rtl:md:rounded-tl-3xl">
			<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512"
				><path
					fill="#d670ac"
					d="M192 0c-6 0-11 5-11 11v89h22V11c0-6-5-11-11-11zm128 0c-6 0-11 5-11 11v89h22V11c0-6-5-11-11-11z"
				/><path
					fill="#eb87bf"
					d="m181 66-36 43c-3 5-5 13-3 18 0 0 18 51 18 98 0 0-32 81-32 106v170c0 6 5 11 11 11h234c6 0 11-5 11-11V331c0-25-32-107-32-107 0-47 18-97 18-97 2-5 0-13-4-18l-35-43c-1-3-21-4-22-1 0 0-15 52-53 52s-53-52-53-52c-1-3-21-2-22 1z"
				/><path
					fill="#fff"
					d="M352 224c0-47 18-97 18-97 2-5 0-13-4-18l-35-43c-1-3-21-4-22-1v1l36 43c4 5 5 13 3 18 0 0-17 50-17 97 0 0 32 82 32 107v170c0 6-5 11-11 11h21c6 0 11-5 11-11V331c0-25-32-107-32-107z"
					opacity=".2"
				/></svg
			>
			<h2>Classic Trumpets</h2>
			<p>Shop now +</p>
		</div>
	</section>
</main>

<style lang="postcss">
	.main-header-9 > h4 {
		font-family: 'Zen Kurenaido';
	}
	.main-header-9 h1 {
		@apply text-gray-800;
		font-family: 'Mochiy Pop P One';
	}
	.main-header-9 h1 > span {
		@apply rounded-full inline-flex shadow-xl shadow-red-900/30 p-3 text-center;
		background: rgb(255, 199, 224);
		background: linear-gradient(
			232deg,
			rgba(255, 199, 224, 1) 0%,
			rgba(255, 13, 24, 1) 40%,
			rgba(255, 13, 24, 1) 70%,
			rgba(254, 142, 162, 1) 100%
		);
	}
	.main-header-9 p {
		@apply text-gray-500 font-semibold text-sm;
		font-family: Ubuntu;
	}
	button.pbtn {
		@apply text-white font-[Ubuntu] items-center font-semibold px-6 py-2 drop-shadow-lg flex rounded-full duration-100;
		background: linear-gradient(135deg, #943ef3 0%, #4a10c9 100%);
	}
	button.pbtn:hover {
		@apply drop-shadow-xl;
		background: linear-gradient(135deg, #9b3eff 0%, #4600df 100%);
	}
	button.sbtn {
		@apply relative text-inherit font-[Ubuntu] text-lg rounded-full font-semibold pr-6 py-2 flex items-center;
	}
	button.sbtn > span:first-child {
		@apply h-10 w-10 absolute flex items-center rounded-full bg-gradient-to-br from-white to-gray-50 -z-10 drop-shadow-lg;
	}
	button.sbtn:hover {
		@apply drop-shadow-xl;
	}
	button.sbtn:hover > span:first-child {
		@apply w-full duration-200;
	}
	button.sbtn:hover span:first-child svg {
		@apply fill-indigo-900 duration-200;
	}
	#sm-hero-388 {
		filter: drop-shadow(5px 0px 5px rgba(0, 0, 0, 0.3));
	}
	.small-reactions-387 > div {
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
	}
	.small-reactions-387 svg > path {
		fill: url('#like-gradient-8');
	}
	.small-reactions-387 img:not(:first-of-type) {
		margin-left: -12px;
	}
	.styles-section-41 > div {
		@apply bg-[#3B3B52] text-white p-4 w-full;
	}
	@media screen and (max-width: 768px) {
		.styles-section-41 > div {
			text-align: center;
		}
		.styles-section-41 svg {
			margin: auto;
		}
	}
	.styles-section-41 > div:first-child {
		border-color: linear-gradient(135deg, #943ef3 0%, #4a10c9 100%);
	}
	.styles-section-41 > div:not(:first-of-type) {
		@apply cursor-pointer;
	}
	.styles-section-41 > div:not(:first-of-type):hover {
		@apply rounded-t-3xl z-10 shadow-2xl;
		transform: scale(1.25);
		transition: transform 125ms ease-in-out;
		background: radial-gradient(
			circle at top right,
			#5923b3 0%,
			#4a1d95 25%,
			#5823b3 26%,
			#481996 33%,
			#8937f5 34%,
			#8937f5 100%
		);
	}
	.styles-section-41 > div:first-of-type h2 {
		@apply text-xl font-semibold flex items-center;
		font-family: 'Mochiy Pop P One';
	}
	.styles-section-41 > div:not(:first-of-type) h2 {
		@apply font-semibold text-lg;
		font-family: 'Zen Kurenaido';
	}
	.styles-section-41 p {
		@apply text-gray-200 text-xs mt-2;
		font-family: 'Ubuntu';
	}
	.styles-section-41 > div:not(:first-of-type) svg {
		@apply w-12 h-12;
		filter: drop-shadow(11px 4px 8px rgba(20, 19, 17, 0.699));
	}
</style>
