/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				landing: "url('/dfc_land.jpg')",
				modal: "url('/dfc_bg.jpg')",
			},
		},
	},
	plugins: [],
};
