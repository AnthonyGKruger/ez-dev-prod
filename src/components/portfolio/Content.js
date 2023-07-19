"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
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
	const [mappedPortfolioItems, setMappedPortfolioItems] = useState(null);

	const fetchPortfolioData = async () => {
		const response = await fetch("/api/portfolio");
		const data = await response.json();

		const cardVariants = {
			offscreen: {
				y: 800,
			},
			onscreen: {
				y: 0,
				transition: {
					type: "spring",
					bounce: 0.4,
					duration: 1,
				},
			},
		};

		setMappedPortfolioItems(
			data.map((portfolioItem, idx) => {
				let amount;

				switch (idx) {
					case 0:
						amount = 0;
						break;
					case 1:
						amount = 0.1;
						break;
					case 2:
						amount = 0.2;
						break;
					case 3:
						amount = 0.3;
						break;
					case 4:
						amount = 0.4;
						break;
					case 5:
						amount = 0.5;
						break;
					case 6:
						amount = 0.6;
						break;
					case 7:
						amount = 0.7;
						break;
					case 8:
						amount = 0.8;
						break;
					case 9:
						amount = 0.9;
						break;
					case 10:
						amount = 1;
						break;
					case 11:
						amount = 1;
						break;
					default:
						amount = 0;
				}

				const handleClickForSiteViewing = () => {
					window.open(portfolioItem.link, "_blank");
				};

				const handleClickForCodeViewing = () => {
					window.open(portfolioItem.sourceCode, "_blank");
				};

				const handleClickForLetterViewing = () => {
					window.open(portfolioItem.referralLetter, "_blank");
				};

				return (
					<motion.div
						key={idx}
						className="col-span-4 md:col-span-2 lg:col-span-6 xl:col-span-4 self-center h-full cursor-pointer"
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: amount }}
						whileHover={{ scale: 1.05 }}
						transition={{ type: "spring", stiffness: 400, damping: 50 }}
						onClick={handleClickForSiteViewing}
					>
						<motion.div
							className="h-full pb-3 pt-5 px-5 overflow-hidden text-center bg-white rounded-lg hover:rounded-3xl hover:text-secondary-gold shadow-md hover:shadow-xl shadow-light-blue hover:shadow-primary-gold border border-primary-gold duration-300 flex flex-col justify-center"
							variants={cardVariants}
						>
							<div className="flex justify-center items-center h-full">
								<div className="relative w-full h-40 md:h-40">
									<div className="absolute inset-0">
										<Image
											src={portfolioItem.image}
											alt={portfolioItem.title}
											className="object-contain w-full h-full"
											width={300}
											height={300}
											// layout="fill"
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
								<button
									onClick={handleClickForSiteViewing}
									className="hover:scale-105 mx-auto text-center  border-2 border-alternative-gold hover:border-primary-blue rounded-xl px-3 py-2  pointer bg-primary-blue hover:bg-white text-[#f1d6b0] hover:text-primary-blue duration-300"
								>
									<Link
										href={portfolioItem.link}
										className="font-base text-base tracking-wide flex "
										target="_blank"
									>
										<GoBrowser className="inline self-center mr-2" />
										<span className="inline">View</span>
									</Link>
								</button>
								{portfolioItem.referralLetter ? (
									<button
										onClick={handleClickForLetterViewing}
										className="ml-5 hover:scale-105 mx-auto text-center  border-2 border-alternative-gold hover:border-primary-blue rounded-xl px-3 py-2  pointer bg-primary-blue hover:bg-white text-[#f1d6b0] hover:text-primary-blue duration-300"
									>
										<Link
											href={portfolioItem.referralLetter}
											className="font-base text-base tracking-wide flex"
											target="_blank"
										>
											<PiCertificate className="inline self-center mr-2 font-bold" />
											<span className="inline">Referral Letter</span>
										</Link>
									</button>
								) : null}
								{portfolioItem.sourceCode ? (
									<button
										onClick={handleClickForCodeViewing}
										className="ml-5 hover:scale-105 mx-auto text-center  border-2 border-alternative-gold hover:border-primary-blue rounded-xl px-3 py-2  pointer bg-primary-blue hover:bg-white text-[#f1d6b0] hover:text-primary-blue duration-300"
									>
										<Link
											href={portfolioItem.sourceCode}
											className="font-base text-base tracking-wide flex"
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

	useEffect(() => {
		fetchPortfolioData();
	}, []);

	return (
		<>
			<Heading
				animationData={animationData}
				content={"Check Out My Portfolio Below"}
				subtitle={"Dominating The Web One Project At A Time"}
			/>
			<section className="py-14 bg-alternative-blue overflow-hidden">
				<div className="container px-6 m-auto">
					{!mappedPortfolioItems && <Loader />}
					<div className="grid grid-cols-4 gap-6 md:grid-cols-4 lg:grid-cols-12 ">
						{mappedPortfolioItems}
					</div>
				</div>
			</section>
			<ContactMeContent />
		</>
	);
};

export default PortfolioContent;
