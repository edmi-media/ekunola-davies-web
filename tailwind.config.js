/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{ts,tsx}", "./index.html"],
	theme: {
		extend: {
			colors: {
				"brand-light": "#10dfe1",
				"brand-dark": "#23385e",
				light: "#fbfbfb",
				"dark-100": "#878787",
				"dark-200": "#262626",
				"dark-300": "#1b1b1e",
				"dark-400": "#151419",
			},
		},
	},
	plugins: [],
}
