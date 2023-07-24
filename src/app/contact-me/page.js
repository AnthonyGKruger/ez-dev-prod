import ContactMeContent from "@/components/contactMe/Content";

// Metadata for the Contact Me page
export const metadata = {
  title: "Contact Me - Anthony Gordon Kruger's Portfolio",
  description: "EZdev portfolio",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
  icons: [
    { rel: "icon", url: "/code.png" },
    { rel: "apple", url: "/code.png" },
  ],
};

// ContactMe component representing the Contact Me page of the portfolio website
const ContactMe = () => {
  return (
    <>
      {/* Render the ContactMeContent component */}
      <ContactMeContent />
    </>
  );
};

export default ContactMe;
