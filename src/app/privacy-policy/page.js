import PrivacyPolicyContent from "@/components/privacyPolicy/Content";

// Metadata for the Privacy Policy page
export const metadata = {
  title: "Privacy Policy - Anthony Gordon Kruger's Portfolio",
  description:
    "All About Privacy\n" +
    "This privacy policy applies to ezdev.solutions and explains how I use any personal information I collect about you when you use this website.\n",
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

// PrivacyPolicy component representing the Privacy Policy page of the portfolio website
const PrivacyPolicy = async () => {
  return (
    <>
      {/* Render the PrivacyPolicyContent component */}
      <PrivacyPolicyContent />
    </>
  );
};

export default PrivacyPolicy;
