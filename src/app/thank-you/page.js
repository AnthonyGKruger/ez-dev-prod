import ThankYouContent from "@/components/thankYou/Content";

// Metadata for the Thank You page
export const metadata = {
  title: "Thank You - Anthony Gordon Kruger's Portfolio",
  description: "EZdev portfolio",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
  icons: [
    { rel: 'icon', url: '/code.png' },
    { rel: 'apple', url: '/code.png' },
  ],
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
