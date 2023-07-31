'use client'
import React, {useEffect, useState} from "react";
import EzdevSvg from "@/components/home/EzdevSvg";

// AnimatedContent component displays the animated content, centered on the page.
const AnimatedContent = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Set the pageLoaded state to true.
    setPageLoaded(true);

    // Clean up function to remove the Typed instance when the component unmounts
  }, []);

  return pageLoaded ? <div className="flex justify-center items-center">
    {/* Render the EzdevSvg component, which contains the animated SVG content. */}
    <EzdevSvg/>
  </div> : null


};

export default AnimatedContent;
