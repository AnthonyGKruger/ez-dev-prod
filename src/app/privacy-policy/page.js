import PrivacyPolicyContent from "@/components/privacyPolicy/Content";

// Metadata for the Privacy Policy page
export const metadata = {
  title: "Privacy Policy - Anthony Gordon Kruger's Portfolio",
  description: "EZdev portfolio",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
  icons: [
    { rel: 'icon', url: '/code.png' },
    { rel: 'apple', url: '/code.png' },
  ],
};

// PrivacyPolicy component representing the Privacy Policy page of the portfolio website
const PrivacyPolicy = () => {
  return (
    <>
      {/* Render the PrivacyPolicyContent component */}
      <PrivacyPolicyContent />
    </>
  );
};

export default PrivacyPolicy;

