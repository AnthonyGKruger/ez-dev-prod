import SkillsList from "@/components/skills/SkillsList";

// Metadata for the Skills page
export const metadata = {
  title: "Skills - Anthony Gordon Kruger's Portfolio",
  description: "EZdev portfolio",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
  icons: [
    { rel: 'icon', url: '/code.png' },
    { rel: 'apple', url: '/code.png' },
  ],
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
