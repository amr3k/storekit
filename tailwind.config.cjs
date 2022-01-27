const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Open Sans', 'sans-serif']
			}
		}
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
		require('tailwindcss-flip'),
		require('@tailwindcss/forms')
	],
	// config (optional)
	daisyui: {
		styled: true,
		themes: false,
		base: true,
		utils: true,
		logs: false,
		rtl: true
	}
};

module.exports = config;
