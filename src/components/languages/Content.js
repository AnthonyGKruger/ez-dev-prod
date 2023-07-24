// Import statements
"use client";
import React from "react";
import Heading from "@/components/shared/Heading";
import Lottie from "react-lottie-player";
import headingAnimationData from "@/lotties/Language.json";
import englishAnimationData from "@/lotties/EnglishFlag.json";
import afrikaansAnimationData from "@/lotties/SouthAfricanFlag.json";

const LanguagesContent = () => {
  return (
    <>
      {/* Heading component with animation */}
      <Heading
        animationData={headingAnimationData}
        subtitle={"Keeping Up With The Lingo"}
        content="Below Are The Languages I Am Fluent In"
      />
      <article className="py-14 bg-alternative-blue dark:bg-transparent">
        <div className="flex w-[50%] mx-auto bg-alternative-blue dark:bg-transparent">
          {/* English Language */}
          <div className="inline w-full lg:w-[50%] text-center">
            <div className={`f4 text-light-gold text-xl`}>
              {/* Lottie animation for English */}
              <Lottie
                loop
                play
                animationData={englishAnimationData}
                style={{
                  width: 100,
                  height: 100,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              English
            </div>
          </div>
          {/* Afrikaans Language */}
          <div className="inline w-full lg:w-[50%] text-center">
            <div className={`f4 text-light-gold text-xl`}>
              {/* Lottie animation for Afrikaans */}
              <Lottie
                loop
                play
                animationData={afrikaansAnimationData}
                style={{
                  width: 100,
                  height: 100,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              Afrikaans
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default LanguagesContent;
