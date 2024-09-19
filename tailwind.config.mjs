/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				nerko: ['"Nerko One"', 'cursive'], // Agregar la fuente Nerko One
			},
		},
	},
	plugins: [],
}
