import Hero from "@/components/about/Hero";

// Metadata for the About page
export const metadata = {
  title: "About Me - Anthony Gordon Kruger's Portfolio",
  description: "EZdev portfolio",
  icons: [
    { rel: "icon", url: "/code.png" },
    { rel: "apple", url: "/code.png" },
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: "1.0",
  maximumScale: "1.0",
  userScalable: "0",
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
