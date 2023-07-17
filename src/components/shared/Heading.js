"use client";
import { usePathname } from "next/navigation";
import Lottie from "react-lottie-player";
import { useEffect, useState } from "react";
import Typed from "typed.js";
import { v4 as uuidv4 } from "uuid";

const Heading = ({ animationData, content, subtitle }) => {
	// const [randomId, setRandomId] = useState(
	// 	"typed" + Math.floor(Math.random() * 100)
	// );
	// let randomId = "typed" + uuidv4();

	// console.log("#" + randomId);

	const pathname = usePathname();

	// const options = {
	// 	strings: [content],
	// 	typeSpeed: 100,
	// 	backSpeed: 100,
	// 	loop: true,
	// 	// cursorChar: "|",
	// };

	// let typed;
	// useEffect(() => {
	// 	// setRandomId("typed" + uuidv4())
	// 	console.log("#" + randomId);
	// 	typed = new Typed("#" + randomId, options);
	// }, []);

	// if (pathname !== "/" || pathname !== "/skills") {
	// 	const options = {
	// 		strings: [subtitle],
	// 		typeSpeed: 100,
	// 		backSpeed: 100,
	// 		loop: true,
	// 		// cursorChar: "|",
	// 	};

	// 	let typed;
	// 	useEffect(() => {
	// 		// setRandomId("typed" + uuidv4())
	// 		typed = new Typed("#typed", options);
	// 	}, []);

	// 	// const typedSpan = <span id="typed"></span>;
	// }

	// const typedSpan = <span id="typed"></span>;

	return (
		<section className="">
			<div
				className={`px-6 py-6 m-auto ${
					pathname == "/" ? "border-t border-b border-primary-gold" : "mt-9"
				}`}
			>
				<div className="md:flex mx-auto md:mx-0 md:justify-center">
					<div className="md:w-max w-fit mx-auto md:mx-0">
						<Lottie
							loop
							play
							style={{ width: 150, height: 150 }}
							animationData={animationData}
							// className=" self-center mx-auto 2xl:mr-0 2xl:ml-auto"
							// className="flex justify-center"
						/>
					</div>

					<div className=" h-full md:inline ">
						<h3 className="md:mt-14 lg:text-md md:text-sm xl:text-md text-md font-base md:text-left text-center text-alternative-gold">
							{/* {pathname !== "/" || pathname !== "/skills"
								? subtitle
								: typedSpan} */}
								{subtitle}
						</h3>
						<h3 className=" lg:text-3xl md:text-3xl xl:text-4xl text-2xl font-bold md:text-left text-center">
							{content}
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Heading;
