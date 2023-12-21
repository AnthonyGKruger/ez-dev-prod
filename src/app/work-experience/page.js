import WorkExperienceContent from "@/components/workExperience/Content";

// Metadata for the Work Experience page
export const metadata = {
  title: "Work Experience - Anthony Gordon Kruger's Portfolio",
  description:
    "Hard Work & Perseverance\n" + "Check Out My Work Experience Below",
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
