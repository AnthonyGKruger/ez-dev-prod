import React from "react";
import AnimatedContent from "./AnimatedContent";
import TypedEffect from "@/components/home/TypedEffect";
import HomeMotionDiv from "@/components/home/HomeMotionDiv";
import HeroButton from "@/components/home/HeroButton";

const Hero = () => {
  const getYearDiffWithMonth = (startDate, endDate) => {
    const ms = endDate.getTime() - startDate.getTime();
    const date = new Date(ms);
    return Math.abs(date.getUTCFullYear() - 1970);
  };

  return (
    <section className="lg:pb-20 pt-10 pb-9 bg-alternative-blue dark:bg-black">
      {/* Render the AnimatedContent component after the page is loaded */}
      <AnimatedContent />
      <div className="container md:mt-8 px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 ">
          <div className="col-span-4 ">
            <HomeMotionDiv>
              <h1 className="text-5xl text-light-gold md:font-extrabold ">
                Hi there, my name is Anthony & I am a Full Stack Web Developer!
              </h1>
              <p className="text-2xl tracking-wide mt-5  text-white">
                {`I'm an ambitious and determined individual with a Bachelor's
                  degree in information technology and ${getYearDiffWithMonth(
                    new Date("2020-11-01"),
                    new Date(),
                  )} years of experience
                  in web development.`}
              </p>
              <p className="text-2xl tracking-wide mt-5 text-white">
                Looking for a Skilled Web Developer? <TypedEffect />
              </p>
              <div className="pt-9">
                <HeroButton />
              </div>
            </HomeMotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
