/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "rgba(240,250,250) ",
				Secondary: "#F0F2FB",
				NavBar: " #0c1f3d",
				BntColor: " #0cab69",
				LogoOtherTextColor: "#f392b2",
			},
			backgroundImage: {
				Welcome: "url('assets/TextBgImage.jpg')",
			},
			fontFamily: {
				Poppins: "Poppins",
			},
		},
	},
	plugins: [require("kutty")],
	
};
