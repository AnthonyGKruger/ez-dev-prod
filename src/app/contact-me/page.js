import ContactMeContent from "@/components/contactMe/Content";

// Metadata for the Contact Me page
export const metadata = {
  title: "Contact Me - Anthony Gordon Kruger's Portfolio",
  description:
    "Let's Build Something Together!\n" +
    "Fill In The Form Below To Contact Me",
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

// ContactMe component representing the Contact Me page of the portfolio website
const ContactMe = async () => {
  return (
    <>
      {/* Render the ContactMeContent component */}
      <ContactMeContent />
    </>
  );
};

export default ContactMe;
