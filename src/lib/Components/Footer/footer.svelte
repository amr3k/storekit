<script lang="ts">
	import { language } from '$lib/Stores/language';
</script>

<footer class="p-10 md:mt-36 footer bg-base-content text-base-100 hidden">
	<div class="flex flex-col-reverse md:flex-col items-center md:items-start justify-center">
		<div>
			<h2 class="text-2xl mb-2 font-bold tracking-tight">We are #dothefuture</h2>
			<div class="form-control relative w-full">
				<input type="email" placeholder="Email address" class="input input-ghost" />
				<button
					class="absolute top-0 {$language === 'en'
						? 'rounded-l-none'
						: 'rounded-r-none'} btn btn-primary {$language === 'en' ? 'right-0' : 'left-0'}"
				>
					<svg
						class:rotate-180={$language === 'ar'}
						class="w-8 h-6 fill-base-100"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path fill="none" d="M0 0h24v24H0z" />
						<path d="m16 11-5-5 1-2 8 8-8 8-1-2 5-5H4v-2z" />
					</svg>
				</button>
			</div>
			<p class="text-base-300 text-sm">
				By entering your email address, you agree to receive emails from Muroexe.
			</p>
			<h3 class="text-lg">Currency EUR | English</h3>
		</div>
		<div class="w-full flex justify-center md:justify-start">
			<img class="w-36" src="/logo/dark.png" alt="" />
		</div>
	</div>
	<div class="grid grid-cols-2 gap-4">
		<div class="flex flex-col col-span-2 md:col-span-1">
			<span class="footer-title">All about your order</span>
			<a href="/under-construction" class="link link-hover">Shipments</a>
			<a href="/under-construction" class="link link-hover">Exchange & Returns</a>
			<a href="/under-construction" class="link link-hover">Size chart</a>
			<a href="/under-construction" class="link link-hover">FAQ</a>
			<a href="/under-construction" class="link link-hover">Terms of service</a>
			<a href="/under-construction" class="link link-hover">Refund policy</a>
		</div>
		<div class="flex flex-col col-span-2 md:col-span-1">
			<span class="footer-title">All about us :)</span>
			<a href="/under-construction" class="link link-hover">About us</a>
			<a href="/under-construction" class="link link-hover">Contact</a>
			<a href="/under-construction" class="link link-hover">Dress your projects</a>
			<a href="/under-construction" class="link link-hover">Design process</a>
			<a href="/under-construction" class="link link-hover">Official stores</a>
			<a href="/under-construction" class="link link-hover">Legal</a>
		</div>
		<div class="copyright col-span-2">
			<p>© Coming back from 2050, Muroexe, Paseo de los Melancólicos, 9. Madrid</p>
		</div>
	</div>
</footer>
