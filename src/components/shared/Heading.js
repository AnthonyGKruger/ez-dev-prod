"use client";
// Import statements
import { usePathname } from "next/navigation";
import Lottie from "react-lottie-player";

const Heading = ({ animationData, content, subtitle, ID }) => {
	// Get the current pathname of the page using the usePathname hook
	const pathname = usePathname();

	return (
		<section id={ID} className="">
			{/* The heading section */}
			<div
				className={`px-6 py-6 m-auto ${
					pathname == "/" ? "border-t border-b border-primary-gold" : "mt-9"
				}`}
			>
				<div className="md:flex mx-auto md:mx-0 md:justify-center">
					<div className="md:w-max w-fit mx-auto md:mx-0">
						{/* Lottie animation */}
						<Lottie
							loop
							play
							style={{ width: 150, height: 150 }}
							animationData={animationData}
						/>
					</div>

					<div className="h-full md:inline">
						{/* Subtitle */}
						<h3 className="md:mt-14 lg:text-md md:text-sm xl:text-md text-md font-base md:text-left text-center text-alternative-gold dark:text-light-gold">
							{subtitle}
						</h3>
						{/* Heading content */}
						<h3 className="dark:text-white lg:text-3xl md:text-3xl xl:text-4xl text-2xl font-bold md:text-left text-center">
							{content}
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Heading;
