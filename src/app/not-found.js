import NotFoundContent from "@/components/404/Content";

export const metadata = {
	title: "404 - Anthony Gordon Kruger's Portfolio",
	description: "EZdev portfolio",
	viewport:
		"width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0",
	icons: [
		{ rel: 'icon', url: '/code.png' },
    { rel: 'apple', url: '/code.png' },
	],
};

const NotFound = () => {
	return (
		<>
			<NotFoundContent />
		</>
	);
};

export default NotFound;
