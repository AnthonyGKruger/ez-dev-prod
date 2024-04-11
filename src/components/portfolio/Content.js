// Import statements
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { GoBrowser } from "react-icons/go";
import { BsCodeSlash } from "react-icons/bs";
import { PiCertificate } from "react-icons/pi";
import Heading from "@/components/shared/Heading";
import animationData from "@/lotties/Portfolio.json";
import Loader from "@/components/shared/Loader";
import ContactMeContent from "../contactMe/Content";

const PortfolioContent = () => {
	// State to hold the mapped portfolio items
	const [mappedPortfolioItems, setMappedPortfolioItems] = useState(null);

	// Fetch portfolio data from the server
	const fetchPortfolioData = async () => {
		const response = await fetch("/api/portfolio");
		const data = await response.json();

		// Framer Motion variants for card animations
		const cardVariants = {
			offscreen: {
				y: 800,
			},
			onscreen: {
				y: 0,
				transition: {
					type: "spring",
					bounce: 0.4,
					duration: 0.8,
				},
			},
		};

		// Map and create portfolio items
		setMappedPortfolioItems(
			data.map((portfolioItem, idx) => {
				// Calculate animation amount based on the index
				let amount;
				const amountMap = {
					0: 0,
					1: 0.3,
					2: 0.6,
					3: 0,
					4: 0.3,
					5: 0.6,
					6: 0,
					7: 0.3,
					8: 0.6,
					9: 0,
					10: 0.3,
					11: 0.6,
				};

				amount = amountMap[idx] || 0;

				return (
					<motion.div
						key={idx}
						className="col-span-4 md:col-span-2 lg:col-span-6 xl:col-span-4 self-center h-full"
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: amount }}
						whileHover={{ scale: 1.05 }}
						transition={{ type: "spring", stiffness: 400, damping: 50 }}
					>
						<motion.div
							className={`h-full pb-3 pt-5 px-5 overflow-hidden text-center bg-white dark:bg-neutral-900 rounded-lg 
                hover:rounded-3xl hover:text-secondary-gold dark:hover:text-light-gold shadow-lg dark:shadow 
                hover:shadow dark:hover:shadow-lg shadow-alternative-blue hover:shadow-secondary-gold 
                dark:hover:shadow-secondary-gold border border-primary-gold duration-1000 flex flex-col justify-center`}
							variants={cardVariants}
						>
							<div className="flex justify-center items-center h-full">
								<div className="relative w-full h-40 md:h-40">
									<div className="absolute inset-0">
										{/* Display portfolio item image using Next.js Image component */}
										<Image
											src={portfolioItem.image}
											alt={portfolioItem.title}
											className="object-contain w-full h-full"
											width={300}
											height={300}
										/>
									</div>
								</div>
							</div>
							<dl className="mt-5 text-sm leading-normal">
								<dt className="sr-only">Description</dt>
								<dd className="text-gray 2xl:text-xl text-left">
									{portfolioItem.description}
								</dd>
							</dl>
							<div className="pt-9">
								{/* Buttons for site viewing, referral letter, and code viewing */}
								<button
									className={`hover:scale-105 mx-auto text-center border-2 border-alternative-gold 
                    dark:border-light-gold hover:border-primary-blue dark:hover:border-light-gold rounded-xl 
                    px-3 py-2 pointer bg-primary-blue dark:bg-transparent dark:hover:bg-light-gold hover:bg-white 
                    text-[#f1d6b0] dark:text-white dark:hover:text-black hover:text-primary-blue duration-500`}
								>
									<Link
										href={portfolioItem.link}
										className="font-base text-base tracking-wide flex z-50"
										target="_blank"
									>
										<GoBrowser className="inline self-center mr-2" />
										<span className="inline">View</span>
									</Link>
								</button>
								{portfolioItem.referralLetter ? (
									<button
										className={`ml-5 hover:scale-105 mx-auto text-center border-2 border-alternative-gold 
                      dark:border-light-gold hover:border-primary-blue dark:hover:border-light-gold rounded-xl 
                      px-3 py-2 pointer bg-primary-blue dark:bg-transparent dark:hover:bg-light-gold hover:bg-white 
                      text-[#f1d6b0] dark:text-white dark:hover:text-black hover:text-primary-blue duration-500`}
									>
										<Link
											href={portfolioItem.referralLetter}
											className="font-base text-base tracking-wide flex z-50"
											target="_blank"
										>
											<PiCertificate className="inline self-center mr-2 font-bold" />
											<span className="inline">Referral Letter</span>
										</Link>
									</button>
								) : null}
								{portfolioItem.sourceCode ? (
									<button
										className={`ml-5 hover:scale-105 mx-auto text-center border-2 border-alternative-gold 
                      dark:border-light-gold hover:border-primary-blue dark:hover:border-light-gold rounded-xl 
                      px-3 py-2 pointer bg-primary-blue dark:bg-transparent dark:hover:bg-light-gold hover:bg-white 
                      text-[#f1d6b0] dark:text-white dark:hover:text-black hover:text-primary-blue duration-500`}
									>
										<Link
											href={portfolioItem.sourceCode}
											className="font-base text-base tracking-wide flex z-50"
											target="_blank"
										>
											<BsCodeSlash className="inline self-center mr-2" />
											<span className="inline">Code</span>
										</Link>
									</button>
								) : null}
							</div>
						</motion.div>
					</motion.div>
				);
			})
		);
	};

	// Fetch portfolio data on component mount
	useEffect(() => {
		fetchPortfolioData();
	}, []);

	return (
		<>
			{/* Heading component with animation */}
			<Heading
				animationData={animationData}
				content={"Check Out My Portfolio"}
				subtitle={"Dominating The Web One Project At A Time"}
			/>
			<section className="py-14 bg-alternative-blue dark:bg-black overflow-hidden">
				<div className="container px-6 m-auto">
					{!mappedPortfolioItems && <Loader />}
					<div className="grid grid-cols-4 gap-6 md:grid-cols-4 lg:grid-cols-12 ">
						{/* Render the mapped portfolio items */}
						{mappedPortfolioItems}
					</div>
				</div>
			</section>
			{/* Display the ContactMeContent component after the portfolio */}
			<ContactMeContent />
		</>
	);
};

export default PortfolioContent;
