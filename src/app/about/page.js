import Hero from "@/components/about/Hero";

// Metadata for the About page
export const metadata = {
  title: "About Me - Anthony Gordon Kruger's Portfolio",
  description: "EZdev portfolio",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
  icons: [
    { rel: 'icon', url: '/code.png' },
    { rel: 'apple', url: '/code.png' },
  ],
};

// About component representing the About Me page of the portfolio website
const About = () => {
  return (
    <>
      {/* Render the Hero component */}
      <Hero />
    </>
  );
};

export default About;
