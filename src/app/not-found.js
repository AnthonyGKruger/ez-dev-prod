import React from "react";
import NotFoundContent from "@/components/404/Content";

// Metadata for the 404 page
export const metadata = {
	title: "404 - Anthony Gordon Kruger's Portfolio",
	description: "EZdev portfolio",
	viewport:
		"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
	icons: [
		{ rel: "icon", url: "/code.png" },
		{ rel: "apple", url: "/code.png" },
	],
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
