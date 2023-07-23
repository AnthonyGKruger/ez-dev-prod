import PortfolioContent from "@/components/portfolio/Content";

export const metadata = {
	title: "Portfolio - Anthony Gordon Kruger's Portfolio",
	description: "EZdev portfolio",
	viewport:
		"width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0",
	icons: [
		{ rel: 'icon', url: '/code.png' },
    { rel: 'apple', url: '/code.png' },
	],
};

const Portfolio = () => {
	return <><PortfolioContent /></>;
};

export default Portfolio;
