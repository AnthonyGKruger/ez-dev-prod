"use client"
import Heading from "@/components/shared/Heading";
// import classes from "@/styles/Languages.module.css";
import Lottie from "react-lottie-player";
import headingAnimationData from "@/lotties/Language.json";
import englishAnimationData from "@/lotties/EnglishFlag.json";
import afrikaansAnimationData from "@/lotties/SouthAfricanFlag.json";

const Languages = () => {
	
	return (
		<>
			<Heading animationData={headingAnimationData} content="Local Is Lekker, Below Are The Languages I Am Fluent In" />
			<article className="flex w-[50%] mx-auto py-14">
				<div className="inline w-full lg:w-[50%] text-center">
					<div className={`f4 `}>
						<Lottie
							loop
							play
							animationData={englishAnimationData}
							style={{
								width: 100,
								height: 100,
								marginLeft: "auto",
								marginRight: "auto",
							}}
						/>
						English
					</div>
				</div>
				<div className="inline w-full lg:w-[50%] text-center">
					<div className={`f4 `}>
						<Lottie
							loop
							play
							animationData={afrikaansAnimationData}
							style={{
								width: 100,
								height: 100,
								marginLeft: "auto",
								marginRight: "auto",
							}}
						/>
						Afrikaans
					</div>
				</div>
			</article>
		</>
	);
};

export default Languages;
