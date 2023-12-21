import PortfolioContent from "@/components/portfolio/Content";

// Metadata for the Portfolio page
export const metadata = {
  title: "Portfolio - Anthony Gordon Kruger's Portfolio",
  description:
    "Dominating The Web One Project At A Time\n" + "Check Out My Portfolio",
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

// Portfolio component representing the Portfolio page of the portfolio website
const Portfolio = () => {
  return (
    <>
      {/* Render the PortfolioContent component */}
      <PortfolioContent />
    </>
  );
};

export default Portfolio;
