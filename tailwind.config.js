/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	darkMode: 'class',
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		colors: {
			"primary-blue": "#354F6B",
			"secondary-blue": "#4F6781",
			"alternative-blue": "#0F2740",
			"light-blue": "#76899D",
			
			"primary-gold": "#a4804b",
			"secondary-gold": "#87632D",
			"alternative-gold": "#624111",
			"light-gold": "#f1d6b0",
			...colors,
		},
	},
	plugins: [],
};
