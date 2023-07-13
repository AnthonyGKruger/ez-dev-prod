"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Heading from "@/components/shared/Heading";
import animationData from "@/lotties/Portfolio.json";

const PortfolioContent = () => {
	const [mappedPortfolioItems, setMappedPortfolioItems] = useState([]);

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
					duration: 1.5,
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
						amount = 0.3;
						break;
					case 2:
						amount = 0.6;
						break;
					case 3:
						amount = 0.9;
						break;
					case 4:
						amount = 0;
						break;
					case 5:
						amount = 0.3;
						break;
					case 6:
						amount = 0.6;
						break;
					case 7:
						amount = 0.9;
						break;
					case 8:
						amount = 0;
						break;
					case 9:
						amount = 0.3;
						break;
					case 10:
						amount = 0.6;
						break;
					case 11:
						amount = 0.9;
						break;
					default:
						amount = 0;
				}

				const handleClick = () => {
					window.open(portfolioItem.link, "_blank");
				};

				return (
					<motion.div
						key={idx}
						className="col-span-4 md:col-span-2 lg:col-span-6 xl:col-span-3 self-center h-full cursor-pointer"
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: amount }}
						whileHover={{ scale: 1.1 }}
						transition={{ type: "spring", stiffness: 400, damping: 50 }}
						onClick={handleClick}
					>
						<motion.div
							className="h-full p-9 overflow-hidden text-center bg-white rounded-lg hover:rounded-3xl hover:text-secondary-gold shadow-md hover:shadow-xl shadow-primary-blue hover:shadow-primary-gold border border-primary-gold duration-300 flex flex-col justify-center"
							variants={cardVariants}
						>
							<div className="flex justify-center items-center h-full">
								<div className="relative w-full h-40 md:h-40">
									<div className="absolute inset-0">
										<Image
											src={portfolioItem.image}
											alt={portfolioItem.title}
											className="object-contain w-full h-full"
											layout="fill"
										/>
									</div>
								</div>
							</div>
							<dl className="mt-2 text-sm leading-normal">
								<dt className="sr-only">Description</dt>
								<dd className="text-gray 2xl:text-xl">
									{portfolioItem.description}
								</dd>
							</dl>
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
			<section className="py-14">
				<div className="container px-6 m-auto">
					<div className="grid grid-cols-4 gap-6 md:grid-cols-4 lg:grid-cols-12">
						{mappedPortfolioItems}
					</div>
				</div>
			</section>
		</>
	);
};

export default PortfolioContent;
