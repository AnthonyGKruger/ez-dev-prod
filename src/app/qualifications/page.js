import QualificationsContent from "@/components/qualifications/Content";

// Metadata for the Qualifications page
export const metadata = {
  title: "Qualifications - Anthony Gordon Kruger's Portfolio",
  description: "Always Leveling Up\n" + "Have A Look At My Qualifications",
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

// Qualifications component representing the Qualifications page of the portfolio website
const Qualifications = () => {
  return (
    <>
      {/* Render the QualificationsContent component */}
      <QualificationsContent />
    </>
  );
};

export default Qualifications;
