import ThankYouContent from "@/components/thankYou/Content";

export const metadata = {
  title: 'Thank You - Anthony Gordon Kruger\'s Portfolio',
	description:"EZdev portfolio",
	viewport:"width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0",
  icons: [
    { rel: 'icon', url: '/code.png' },
    { rel: 'apple', url: '/code.png' },
  ],
};

const ThankYou = () => {
	return (<>		<ThankYouContent/>
</>
	);
};

export default ThankYou;
