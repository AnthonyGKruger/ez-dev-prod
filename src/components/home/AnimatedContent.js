import React from "react";
import EzdevSvg from "@/components/home/EzdevSvg";

// AnimatedContent component displays the animated content, centered on the page.
const AnimatedContent = () => {
  return (
    // Use flex to horizontally and vertically center the content.
    <div className="flex justify-center items-center">
      {/* Render the EzdevSvg component, which contains the animated SVG content. */}
      <EzdevSvg />
    </div>
  );
};

export default AnimatedContent;
