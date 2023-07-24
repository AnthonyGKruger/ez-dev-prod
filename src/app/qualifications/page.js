import QualificationsContent from "@/components/qualifications/Content";

// Metadata for the Qualifications page
export const metadata = {
  title: "Qualifications - Anthony Gordon Kruger's Portfolio",
  description: "EZdev portfolio",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
  icons: [
    { rel: 'icon', url: '/code.png' },
    { rel: 'apple', url: '/code.png' },
  ],
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
