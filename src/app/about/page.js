import Hero from "@/components/about/Hero";

// Metadata for the About page
export const metadata = {
  title: "About Me - Anthony Gordon Kruger's Portfolio",
  description:
    "About Me!\n" +
    "As a highly motivated individual with a strong foundation in web development and a bachelor's degree in Information Technology earned in 2021, I am enthusiastic about taking my career to the next level as a Full Stack Web Developer. Drawing from my successful tenure as a Retail Branch Manager, where I honed my leadership and customer centric skills, I'm excited to demonstrate how my unique blend of experience and technical knowledge makes me an ideal candidate. Lets build the web together!\n" +
    "I'm highly motivated, a fast learner, and a collaborative team player who thrives in dynamic and fast-paced environments. When not coding, I'm exploring new technologies or enjoying my time with family and friends. I'm excited about the opportunities ahead and look forward to connecting with like-minded professionals.\n",
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
