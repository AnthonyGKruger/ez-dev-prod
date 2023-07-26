"use client";

import Image from "next/image"; // Importing the Next.js Image component for optimized images
import Link from "next/link"; // Importing Next.js Link component for client-side navigation
import {motion} from "framer-motion"; // Importing the Framer Motion library for animations

// Hero component representing the hero section of the "About Me" page
const Hero = () => {
    // Define animation variants for the card animation
    const cardVariants = {
        offscreen: {
            x: -4000, // Move the card offscreen initially
        },
        onscreen: {
            x: 0, // Move the card onscreen with animation
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1.5,
            },
        },
    };

    return (
        <section className="lg:py-20 pb-9 bg-alternative-blue dark:bg-transparent">
            <div className="container px-6 m-auto">
                <div className="grid grid-cols-4 gap-6 md:grid-cols-4 lg:grid-cols-12 ">
                    {/* Column for displaying image */}
                    <div className="col-span-4 lg:col-span-5 ">
                        {/* Use Framer Motion to animate the card */}
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true, amount: 0.8}}
                        >
                            <motion.div variants={cardVariants}>
                                <div className="w-full h-full flex py-9 xl:py-9 lg:py-14 px-9 bg-transparent">
                                    {/* Display the image using the optimized Next.js Image component */}
                                    <Image
                                        src={"/media/AnthonyIllustrated.jpeg"}
                                        alt="Anthony Kruger"
                                        className={`rounded-full shadow-lg hover:shadow-xl shadow-primary-gold hover:shadow-light-gold
                     border border-primary-gold hover:border-primary-blue self-center
                     mx-auto transition-all duration-500 hover:relative`}
                                        width={400}
                                        height={400}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                    {/* Column for displaying text content */}
                    <div className="col-span-4 lg:col-span-7 bg-transparent">
                        <h1 className="text-5xl text-light-gold md:font-extrabold text-center lg:text-left">
                            About Me!
                        </h1>
                        {/* Text content introducing the user */}
                        <p className="text-xl tracking-wide mt-5 text-white">
                            I`&#39;`m an ambitious and determined individual with a Bachelor`&#39;`s
                            degree in information technology and three years of experience in
                            web development. As a successful retail branch manager, I`&#39;`ve honed
                            my management and sales skills, which will be valuable to my
                            future employer in information technology. I`&#39;`m seeking a role that
                            leverages my interaction skills, operational experience, and
                            positive attitude.
                        </p>
                        <p className="text-xl tracking-wide mt-5 text-white">
                            I`&#39;`m highly motivated, a fast learner, and a collaborative team
                            player who thrives in dynamic and fast-paced environments. When
                            not coding, I`&#39;`m exploring new technologies or enjoying my time
                            with family and friends. I`&#39;`m excited about the opportunities ahead
                            and look forward to connecting with like-minded professionals.
                        </p>
                        <div className="pt-9">
                            {/* Button to navigate to the "Contact Me" page */}
                            <button
                                className={`w-full md:w-auto hover:scale-105 mx-auto text-center  border-2
                            border-alternative-gold dark:border-light-gold hover:border-primary-gold rounded-full px-5 py-4  pointer
                            bg-light-gold dark:bg-black hover:bg-white dark:hover:bg-light-gold
                            text-alternative-blue hover:text-alternative-gold dark:text-white
                            dark:hover:text-black
                            duration-300`}
                            >
                                <Link
                                    href="/contact-me"
                                    className="font-bold text-xl tracking-wide "
                                >
                                    Let`&#39;`s Chat!
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
