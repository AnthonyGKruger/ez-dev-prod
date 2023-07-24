import WorkExperienceContent from "@/components/workExperience/Content";

// Metadata for the Work Experience page
export const metadata = {
  title: "Work Experience - Anthony Gordon Kruger's Portfolio",
  description: "EZdev portfolio",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
  icons: [
    { rel: 'icon', url: '/code.png' },
    { rel: 'apple', url: '/code.png' },
  ],
};

// WorkExperience component representing the Work Experience page of the portfolio website
const WorkExperience = () => {
  return (
    <>
      {/* Render the WorkExperienceContent component */}
      <WorkExperienceContent />
    </>
  );
};

export default WorkExperience;
