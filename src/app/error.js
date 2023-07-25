'use client';
import React from 'react';
import Lottie from "react-lottie-player";
import animationData from "@/lotties/500.json"

// ErrorPage component representing the error page, in this case, the 500 error page
const ErrorPage = () => {
  const lottieDimensions = 300; // Setting the dimensions for the Lottie animation

  return (
    <>
      <section className="py-14">
        <div className="">
          {/* Render the Lottie animation */}
          <Lottie
            loop
            play
            style={{
              width: lottieDimensions,
              height: lottieDimensions,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            animationData={animationData}
          />
          <p className="text-center text-2xl px-5">
            Oops, something went wrong.
          </p>
        </div>
        <p className="text-center italic font-thin mt-5 px-5">
          Try using the navigation above to navigate to a new page.
        </p>
      </section>
    </>
  );
};

export default ErrorPage;
