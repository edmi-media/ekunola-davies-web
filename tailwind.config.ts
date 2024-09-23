import type { Config } from "tailwindcss"

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		backgroundImage: {
			"auditorium-1": "url('/assets/images/auditorium-1.webp')",
			"auditorium-2": "url('/assets/images/auditorium-2.webp')",
			"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			hero: "url('/assets/images/hero.jpg')",
		},
		container: {
			center: true,
			screens: {
				"2xl": "1400px",
			},
		},
		fontFamily: {
			heading: ["var(--heading)"],
			body: ["var(--body)"],
		},
		extend: {
			colors: {
				"primary-teal": "#10dfe1",
				"primary-blue": "#23385e",
				"primary-white": "#fbfbfb",
				neutral: {
					"100": "#ffffff",
					"200": "#f6f8fa",
					"300": "#e2e4e9",
					"400": "#cdd0d5",
					"500": "#868c98",
					"600": "#525866",
					"700": "#31353f",
					"800": "#161922",
					"900": "#0a0d14",
				},
				error: {
					"100": "#fdedf0",
					"200": "#f8c9d2",
					"300": "#df1c41",
					"400": "#af1d38",
					"500": "#710e21",
				},
				warning: {
					"100": "#fef7ec",
					"200": "#fbdfb1",
					"300": "#f2ae40",
					"400": "#b47818",
					"500": "#693d11",
				},
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
