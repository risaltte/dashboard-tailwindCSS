/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./**/*.{js}",
	],
	theme: {
		extend: {
			colors: {
				'brand-p': '#FF4000'
			}
		},
	},
	plugins: [],
	darkMode: 'class'
}

