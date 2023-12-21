import LanguagesContent from "@/components/languages/Content";

// Metadata for the Languages page
export const metadata = {
  title: "Languages - Anthony Gordon Kruger's Portfolio",
  description:
    "Keeping Up With The Lingo\n" + "Below Are The Languages I Am Fluent In",
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
