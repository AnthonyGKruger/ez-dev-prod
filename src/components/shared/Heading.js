"use client";
import { usePathname } from "next/navigation";
import Lottie from "react-lottie-player";

const Heading = ({ animationData, content }) => {
	const pathname = usePathname();

	return (
		<section className="">
			<div
				className={`px-6 py-6 m-auto ${
					pathname == "/"
						? "border border-top border-bottom border-primary-gold"
						: "mt-9"
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
						<h3 className="md:mt-14 lg:text-3xl md:text-3xl xl:text-4xl text-2xl font-black md:text-left text-center">
							{content}
						</h3>
					</div>
				</div>
			</div>
			{/* <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
					<div className="col-span-4 md:col-span-1 lg:col-span-3 xl:col-span-3 2xl:col-span-5 flex">
						<Lottie
							loop
							play
							style={{ width: 150, height: 150 }}
							animationData={animationData}
							className=" self-center mx-auto 2xl:mr-0 2xl:ml-auto"
							// className="mx-auto 2xl:self-end 2xl:ml-auto"
						/>
					</div>
					<div className="col-span-4 md:col-span-7 lg:col-span-9 xl:col-span-9 2xl:col-span-7">
						<div className="flex h-full w-full  ">
							<h3 className="lg:text-3xl md:text-3xl xl:text-4xl text-2xl self-center text-center font-black">
								{content}
							</h3>
						</div>
					</div>
				</div>
			</div> */}
		</section>
	);
};

export default Heading;
