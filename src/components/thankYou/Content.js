"use client";
import Lottie from "react-lottie-player";
import animationData from "@/lotties/ThankYou.json";

const ThankYouContent = () => {
	return (
		<>
			{/* Lottie animation */}
			<Lottie
				loop
				play
				style={{
					width: 400,
					height: 400,
					marginLeft: "auto",
					marginRight: "auto",
				}}
				animationData={animationData}
			/>

			{/* Thank-you message */}
			<article className="text-center ph4 avenir">
				<p className={`md:text-4xl text-3xl`}>Awesome!</p>
				<p className={`text-2xl md:px-20 px-5 lg:py-9 py-4`}>
					Thank you for contacting me, I will get back to you shortly... In the
					meantime, why not carry on looking around?
				</p>
			</article>
		</>
	);
};

export default ThankYouContent;
