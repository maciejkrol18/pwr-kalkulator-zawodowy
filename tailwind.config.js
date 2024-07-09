/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"pwr-dark": "#1e1f24",
				"pwr-violet": "rgb(204, 153, 255)",
				"pwr-yellow": "#ffda54",
			},
			fontFamily: {
				pwr: "Plus Jakarta Sans, sans-serif",
			},
			borderColor: {
				pwr: "rgb(32, 33, 38)",
			},
			backgroundImage: {
				"pwr-gradient":
					"linear-gradient(225deg, rgb(146, 101, 156) 0px, rgb(130, 99, 183) 33.75%, rgb(111, 78, 176) 100%)",
			},
		},
	},
	plugins: [],
};
