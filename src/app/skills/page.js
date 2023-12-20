import SkillsList from "@/components/skills/SkillsList";

// Metadata for the Skills page
export const metadata = {
  title: "Skills - Anthony Gordon Kruger's Portfolio",
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

// Skills component representing the Skills page of the portfolio website
const Skills = () => {
  return (
    <>
      {/* Render the SkillsList component */}
      <SkillsList />
    </>
  );
};

export default Skills;
