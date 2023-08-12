/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./**/*.html",
		"./**/*.{js}",
	],
	theme: {
		extend: {
			colors: {
				'brand-p': '#FF4000'
			},

			boxShadow: {
				'inner-custom': '0 0 20px 4px rgba(154, 161, 177, 0.15), 0 4px 80px -8px rgba(36, 40, 47, 0.25), 0 4px 4px -2px rgba(91, 94, 105, 0.15)'
			}
		},		
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
	darkMode: 'class'
}

