/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'heading': ['Martian\\ Grotesk', 'sans-serif'],
      },
			colors: {
				brand: {
					ink: '#1b142b',
					slate: '#15182a',
					lavender: '#bfabff',
					purple: '#b026ff',
					surface: '#f9f7ff',
				},
			},
		},
	},
	plugins: [],
}
