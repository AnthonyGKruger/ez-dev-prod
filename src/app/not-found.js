import React from "react";
import NotFoundContent from "@/components/404/Content";

// Metadata for the 404 page
export const metadata = {
  title: "404 - Anthony Gordon Kruger's Portfolio",
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

// NotFound component representing the 404 page of the portfolio website
const NotFound = () => {
  return (
    <>
      {/* Display the NotFoundContent component */}
      <NotFoundContent />
    </>
  );
};

export default NotFound;
