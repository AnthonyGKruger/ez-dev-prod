export const GET = async (request) => {
	const responseData = [
		{
			id: "p3",
			title: "Digital Stream",
			description:
				"Digital marketing agency website built using NextJS and Tailwind Css \n(the code to for this project is unfortunately not available for public viewing)",
			link: "https://ez-staging-ds.vercel.app",
			image: "/media/logos/ds-logo.png",
			sourceCode: "",
			referralLetter:'/media/Digital Stream Referral Letter - Anthony Kruger - web - signed.pdf'
		},
		{
			id: "p1",
			title: "Mumbi Trust Administrators",
			description:
				"Accounting firm website built using NextJS and Tailwind Css",
			link: "https://mumbi.co.za",
			image: "/media/logos/mumbi-logo.png",
			sourceCode: "https://github.com/AnthonyGKruger/Mumbi-Trust-Administrators",
		},

		// {
		// 	id: "p4",
		// 	title: "Fan Catalogue",
		// 	description: "Fan Catalogue built using NextJs and Tailwind CSS.",
		// 	link: "https://tlwfans.vercel.app",
		// 	image: "/media/logos/TLW-logo.jpg",
		// 	sourceCode: "https://github.com/AnthonyGKruger/TLWfans",
		// },
		{
			id: "p5",
			title: "Star Wars E-commerce App",
			description:
				"Ecommerce app built NextJS and TailWind CSS - (still under development.)",
			link: "https://swapi-ecommerce.vercel.app/",
			image: "/media/logos/star-wars-logo.svg",
			sourceCode: "https://github.com/AnthonyGKruger/swapi-ecommerce",
		},
		{
			id: "p2",
			title: "Digital Payment Transformation Services",
			description:
				"Ecommerce app built using Wordpress and Woocommerce - (still under development.)",
			link: "https://dpts.co.za",
			image: "/media/logos/DPTS.png",
			sourceCode: "",
		},
	];
	return new Response(JSON.stringify(responseData), {
		status: 200,
	});
};
