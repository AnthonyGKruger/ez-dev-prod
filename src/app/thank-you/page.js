import ThankYouContent from "@/components/thankYou/Content";

// Metadata for the Thank You page
export const metadata = {
  title: "Thank You - Anthony Gordon Kruger's Portfolio",
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

// ThankYou component representing the Thank You page of the portfolio website
const ThankYou = () => {
  return (
    <>
      {/* Render the ThankYouContent component */}
      <ThankYouContent />
    </>
  );
};

export default ThankYou;
