import LanguagesContent from "@/components/languages/Content";

// Metadata for the Languages page
export const metadata = {
  title: "Languages - Anthony Gordon Kruger's Portfolio",
  description: "EZdev portfolio",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
  icons: [
    { rel: 'icon', url: '/code.png' },
    { rel: 'apple', url: '/code.png' },
  ],
};

// Languages component representing the Languages page of the portfolio website
const Languages = () => {
  return (
    <>
      {/* Render the LanguagesContent component */}
      <LanguagesContent />
    </>
  );
};

export default Languages;
