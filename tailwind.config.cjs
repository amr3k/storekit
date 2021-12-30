const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Open Sans', 'sans-serif']
			},
			keyframes: {
				'fly-1': {
					from: {
						transform: 'translateY(0.1em)'
					},
					to: {
						transform: 'translateY(-0.1em)'
					}
				}
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
		themes: {
			storekit: {
				// Using this palette: https://colorhunt.co/palette/000000f58840b85252eadede
				// Primary
				primary: '#000000',
				'primary-focus': '#241f31',
				'primary-content': '#ffffff',
				// Secondary
				'bg-secondary': '#f58840',
				'bg-secondary-focus': '#fead77',
				'bg-secondary-content': '#ffffff',
				// Accent
				'bg-accent': '#B85252',
				'bg-accent-focus': '#ff2626',
				'bg-accent-content': '#ffffff',
				// Neutral
				'bg-neutral': '#3d4451',
				'bg-neutral-focus': '#2a2e37',
				'bg-neutral-content': '#ffffff',
				// Base
				'bg-base-100': '#ffffff',
				'bg-base-200': '#f9fafb',
				'bg-base-300': '#d1d5db',
				'bg-base-content': '#1f2937',
				// States
				'bg-info': '#2094f3',
				'bg-success': '#009485',
				'bg-warning': '#ff9900',
				'bg-error': '#ff5724'
			}
		},
		base: true,
		utils: true,
		logs: false,
		rtl: true
	}
};

module.exports = config;
