import Hero from "@/components/about/Hero";

export const metadata = {
  title: 'About Me - Anthony Gordon Kruger\'s Portfolio',
	description:"EZdev portfolio",
	viewport:"width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0",
  icons: [
    { rel: 'icon', url: '/favicon.png' },
    { rel: 'apple', url: '/favicon.png' },
  ],
};

const About = () => {
	return (
		<>
			<Hero />
		</>
	);
};

export default About;