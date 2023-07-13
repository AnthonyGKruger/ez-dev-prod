export const GET = async (request) => {
	const responseData = [
		{
			id: "p3",
			title: "Digital Stream",
			description: "Digital marketing agency website built using NextJS and Tailwind Css",
			link: "https://ez-staging-ds.vercel.app",
			image: "/media/logos/ds-logo.png",
		},
		{
			id: "p1",
			title: "Mumbi Trust Administrators",
			description: "Accounting firm website built using NextJS and Tailwind Css",
			link: "https://mumbi.co.za",
			image: "/media/logos/mumbi-logo.png",
		},
		{
			id: "p2",
			title: "Digital Payment Transformation Services",
			description:
				"Ecommerce app built using Wordpress and Woocommerce - (still under development.)",
			link: "https://dpts.co.za",
			image: "/media/logos/DPTS.png",
		},

		{
			id: "p4",
			title: "Fan Catalogue",
			description: "Fan Catalogue built using NextJs and Tailwind CSS.",
			link: "https://tlwfans.vercel.app",
			image: "/media/logos/TLW-logo.jpg",
		},
	];
	return new Response(JSON.stringify(responseData), {
		status: 200,
	});
};
