"use client";
import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedContent from "./AnimatedContent";

const Hero = () => {
	// State to keep track of whether the page is loaded or not.
	const [pageLoaded, setPageLoaded] = useState(false);

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

	// useEffect hook to initialize the Typed instance and set the pageLoaded state to true.
	useEffect(() => {
		// Create a new Typed instance with the options provided.
		typed = new Typed("#typed", options);

		// Set the pageLoaded state to true.
		setPageLoaded(true);

		// Clean up function to remove the Typed instance when the component unmounts.
		return () => {
			typed.destroy();
		};
	}, []);

	// Variants for Framer Motion animations.
	const cardVariants = {
		offscreen: {
			x: -4000,
		},
		onscreen: {
			x: 0,
			transition: {
				type: "spring",
				bounce: 0,
				duration: 0.8,
			},
		},
	};

	// Event handler for the "Let's Chat!" button click.
	const handleClick = () => {
		// Scroll to the contact form section using window.location.hash.
		window.location.hash = "#contact-form";
	};

	return (
		<section className="lg:pb-20 pt-10 pb-9 bg-alternative-blue dark:bg-black">
			{/* Render the AnimatedContent component after the page is loaded */}
			{pageLoaded && <AnimatedContent />}
			<div className="container md:mt-8 px-6 m-auto">
				<div className="grid grid-cols-4 gap-6 ">
					<div className="col-span-4 ">
						{/* Use Framer Motion to animate the content */}
						<motion.div
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.8 }}
						>
							<motion.div variants={cardVariants}>
								<h1 className="text-5xl text-light-gold md:font-extrabold ">
									Hi there, My name is Anthony & I am a Full Stack Web
									Developer!
								</h1>
								<p className="text-2xl tracking-wide mt-5  text-white">
									I'm an ambitious and determined individual with a Bachelor's
									degree in information technology and three years of experience
									in web development.
								</p>
								<p className="text-2xl tracking-wide mt-5 text-white">
									Looking for a Skilled Web Developer? <span id="typed"></span>
								</p>
								<div className="pt-9">
									<button
										onClick={handleClick}
										className={`w-full md:w-auto hover:scale-105 mx-auto text-center border-2 border-alternative-gold dark:border-light-gold hover:border-primary-gold rounded-full px-5 py-4 pointer bg-light-gold dark:bg-black hover:bg-white dark:hover:bg-light-gold text-alternative-blue hover:text-alternative-gold dark:text-white dark:hover:text-black duration-300`}
									>
										{/* Wrap the button content with Link component for client-side navigation */}
										<Link
											href="#contact-form"
											className="font-bold text-xl tracking-wide "
										>
											Let's Chat!
										</Link>
									</button>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
