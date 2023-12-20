"use client";
import React, { useEffect } from "react";
import Typed from "typed.js";

const TypedEffect = () => {
  // useEffect hook to initialize the Typed instance and set the pageLoaded state to true.
  useEffect(() => {
    // Options for the Typed.js library.
    const options = {
      strings: [
        "Let's collaborate!",
        "Let's build something together!",
        "Have a look at my portfolio!",
        "Contact me!",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // Declare the typed variable to store the Typed instance.
    let typed;

    // Create a new Typed instance with the options provided.
    typed = new Typed("#typed", options);

    // Clean up function to remove the Typed instance when the component unmounts.
    return () => {
      typed.destroy();
    };
  }, []);

  return <span id="typed"></span>;
};

export default TypedEffect;
