"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
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
				duration: 1.5,
			},
		},
	};

	return (
		<section className="lg:py-20 pb-9 bg-alternative-blue">
			<div className="container px-6 m-auto">
				<div className="grid grid-cols-4 gap-6 md:grid-cols-4 lg:grid-cols-12 ">
					<div className="col-span-4 lg:col-span-5 ">
						<motion.div
							className="card-container max-w-full overflow-hidden "
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.8 }}
						>
							<motion.div
								className="card max-w-full overflow-hidden"
								variants={cardVariants}
							>
								<div className="w-full h-full flex py-9 xl:py-9 lg:py-14 px-9 bg-transparent">
									{/* <div className="w-full h-full flex mb-9 bg-transparent"> */}
									<Image
										src={"/media/AnthonyIllustrated.jpeg"}
										alt="Anthony Kruger"
										className={`rounded-full shadow-lg hover:shadow-xl shadow-primary-gold hover:shadow-light-gold
										 border border-primary-gold hover:border-primary-blue self-center
										  mx-auto transition-all duration-500 hover:relative`}
										// className="rounded-full shadow-lg xl:shadow-xl lg:shadow-xl  shadow-primary-blue hover:shadow-md hover:shadow-primary-gold border border-primary-gold hover:border-primary-blue self-center mx-auto transition-all duration-500 hover:relative"
										width={400}
										height={400}
										priority
									/>
								</div>
							</motion.div>
						</motion.div>
					</div>
					<div className="col-span-4 lg:col-span-7 bg-transparent self-center z-0 relative">
						<h1 className="text-5xl text-light-gold md:font-extrabold text-center lg:text-left">
							Hi There!
						</h1>
						{/* <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
						We help startups to grow and make money
					</h2> */}
						<p className="text-2xl tracking-wide mt-5  text-white">
							I'm an ambitious and determined individual with a Bachelor's
							degree in information technology and three years of experience in
							web development.
						</p>
						<p className="text-2xl tracking-wide mt-5 text-white">
							Ready to take your online presence to the next level?
						</p>
						<div className="pt-9">
							<button className="hover:scale-105 mx-auto text-center  border-2 border-light-gold hover:border-primary-gold rounded-xl px-5 py-4  pointer bg-primary-blue/50 hover:bg-white text-[#f1d6b0] hover:text-primary-blue duration-300">
								<Link
									href="/contact-me"
									className="font-bold text-xl tracking-wide "
								>
									Let's Chat!
								</Link>
							</button>
							{/* <ResumeRequest/> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
