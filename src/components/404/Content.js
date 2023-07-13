"use client";
import Lottie from "react-lottie-player";
import animationData from "@/lotties/404.json";

const NotFoundContent = () => {
	
  const lottieDimensions = 300;

	return (
		<>
			<section className="py-14">
				<div className="">
					<Lottie
						loop
						play
						style={{
							width: lottieDimensions,
							height: lottieDimensions,
							marginLeft: "auto",
							marginRight: "auto",
						}}
						animationData={animationData}
					/>
					<p className="text-center text-2xl px-5">
						Sorry, we can't find the page you are looking for.
					</p>
				</div>
				<p className="text-center italic font-thin mt-5 px-5">
					Try using the navigation above to find the page you are looking for.
				</p>
			</section>
		</>
	);
};

export default NotFoundContent;