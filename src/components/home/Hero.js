"use client";
import Typed from "typed.js";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedContent from "./AnimatedContent";

const Hero = () => {
	const [pageLoaded, setPageLoaded] = useState(false);

	const options = {
		strings: ["Let's collaborate!", "Let's build something together!"],
		typeSpeed: 100,
		backSpeed: 100,
		loop: true,
		// cursorChar: "|",
	};

	let typed;
	useEffect(() => {
		typed = new Typed("#typed", options);
		setPageLoaded(true);
	}, []);

	const cardVariants = {
		offscreen: {
			x: -4000,
		},
		onscreen: {
			x: 0,
			// rotate: -10,
			transition: {
				type: "spring",
				bounce: 0,
				duration: 0.8,
			},
		},
	};

	const handleClick = () => {
		window.location.hash = "#contact-form";
	};

	return (
		<section className="lg:pb-20 pt-10 pb-9 bg-alternative-blue">
			{pageLoaded && <AnimatedContent />}
			<div className="container md:mt-8 px-6 m-auto">
				<div className="grid grid-cols-4 gap-6 ">
					<div className="col-span-4 ">
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
										className="w-full md:w-auto hover:scale-105 mx-auto text-center  border-2 border-alternative-gold hover:border-primary-gold rounded-full px-5 py-4  pointer bg-light-gold hover:bg-white text-alternative-blue hover:text-alternative-gold duration-300"
									>
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
