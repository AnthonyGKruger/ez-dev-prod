import React from "react";
import Hero from "@/components/home/Hero";
import Skills from "./skills/page";
import Portfolio from "./portfolio/page";
import WorkExperience from "@/app/work-experience/page";
import Qualifications from "@/app/qualifications/page";

// Home component representing the home page of the portfolio website
const Home = () => {
  return (
    <article>
      {/* Display the Hero component */}
      <Hero />

      {/* Display the Skills component */}
      <Skills />

      {/* Display the Portfolio component */}
      <Portfolio />

      {/* Display the Qualifications component */}
      <Qualifications />

      {/* Display the WorkExperience component */}
      <WorkExperience />
    </article>
  );
};

// Metadata for the home page
export const metadata = {
  title: "Home - Anthony Gordon Kruger's Portfolio",
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

// Export the Home component as the default export
export default Home;
