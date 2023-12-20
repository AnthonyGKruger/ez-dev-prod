"use server";
import HeroImage from "@/components/about/HeroImage";
import AboutHeroButton from "@/components/about/AboutHeroButton";

// Hero component representing the hero section of the "About Me" page
const Hero = () => {
  return (
    <section className="lg:py-20 pb-9 bg-alternative-blue dark:bg-transparent">
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-4 lg:grid-cols-12 ">
          {/* Column for displaying image */}
          <div className="col-span-4 lg:col-span-5 ">
            <HeroImage />
          </div>
          {/* Column for displaying text content */}
          <div className="col-span-4 lg:col-span-7 bg-transparent">
            <h1 className="text-5xl text-light-gold md:font-extrabold text-center lg:text-left">
              About Me!
            </h1>
            {/* Text content introducing the user */}
            <p className="text-xl tracking-wide mt-5 text-white">
              {`As a highly motivated individual with a strong foundation in web development and a bachelor's
degree in Information Technology earned in 2021, I am enthusiastic about taking my career to the
next level as a Full Stack Web Developer. Drawing from my successful tenure as a Retail Branch
Manager, where I honed my leadership and customer centric skills, I'm excited to demonstrate
how my unique blend of experience and technical knowledge makes me an ideal candidate. Lets build the web together!`}
            </p>
            <p className="text-xl tracking-wide mt-5 text-white">
              {`I'm highly motivated, a fast learner, and a collaborative team
                    player who thrives in dynamic and fast-paced environments. When
                    not coding, I'm exploring new technologies or enjoying my time
                    with family and friends. I'm excited about the opportunities ahead
                    and look forward to connecting with like-minded professionals.`}
            </p>
            <div className="pt-9">
              {/* Button to navigate to the "Contact Me" page */}
              <AboutHeroButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
