import ThankYouContent from "@/components/thankYou/Content";

// Metadata for the Thank You page
export const metadata = {
  title: "Thank You - Anthony Gordon Kruger's Portfolio",
  description:
    "Thank you for contacting me, I will get back to you shortly... In the meantime, why not carry on looking around?",
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
const ThankYou = async () => {
  return (
    <>
      {/* Render the ThankYouContent component */}
      <ThankYouContent />
    </>
  );
};

export default ThankYou;
