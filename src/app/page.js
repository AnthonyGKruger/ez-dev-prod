import Hero from "@/components/home/Hero";
import SkillsList from "@/components/skills/SkillsList";
import PortfolioContent from "@/components/portfolio/Content";
import QualificationsContent from "@/components/qualifications/Content";
import WorkExperienceContent from "@/components/workExperience/Content";

// Home component representing the home page of the portfolio website
const Home = () => {
  return (
    <article>
      {/* Display the Hero component */}
      <Hero />

      {/* Display the Skills component */}
      <SkillsList />

      {/* Display the Portfolio component */}
      <PortfolioContent />

      {/* Display the Qualifications component */}
      <QualificationsContent />

      {/* Display the WorkExperience component */}
      <WorkExperienceContent />
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
