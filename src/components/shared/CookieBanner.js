"use client";
import { hasCookie, setCookie } from "cookies-next";
import { useState, useEffect } from "react";
import Link from "next/link";
import Lottie from "react-lottie-player";
import animationData from "@/lotties/Cookies.json";

const CookieBanner = (props) => {
	const [showConsent, setShowConsent] = useState(true);

	useEffect(() => {
		setShowConsent(hasCookie("localConsent"));
	}, []);

	const acceptCookie = () => {
		setShowConsent(true);
		setCookie("localConsent", "true", {});
	};
 
	if (showConsent) {
		return null;
	}

	return (
		<article
			className={`md:w-3/4 xl:w-1/3 bg-white dark:bg-black border rounded-xl mx-4 p-2 bottom-3 fixed right-0 z-50 border-[#624111] dark:border-light-gold`}
		>
			<div className="container p-6 pt-0 m-auto">
				<div className="grid grid-cols-4 gap-6 md:grid-cols-12 lg:grid-cols-12">
					<div className="col-span-1 md:col-span-2 lg:col-span-3 self-center">
						<Lottie
							loop
							play
							animationData={animationData}
							style={{ width: 70, height: 70 }}
						/>
					</div>
					<div className="col-span-3 md:col-span-10 lg:col-span-9 py-auto self-center">
						<h1 className={`text-2xl mx-0 pt-5  `}>
							Cookie Policy and Terms & Conditions
						</h1>
					</div>
				</div>
			</div>

			<div
				className={`p-3 border-t border-[#624111] dark:border-light-gold grid grid-cols-4 `}
			>
				<div className="col-span-4 ">
					<p className={`text-lg`}>
						This website uses cookies to improve the UI and UX. By using my
						website you consent to all cookies & terms and conditions in
						accordance with my{" "}
						<Link
							className={`hover:text-[#624111] dark:text-light-gold duration-500 font-lightbold underline `}
							href={"/privacy-policy"}
						>
							Privacy Policy.
						</Link>
					</p>
				</div>
				<div className={`col-span-4  `}>
					
						<button
							className={`p-2 rounded-xl self-center mt-4 mx-auto my-auto text-lg tracking-wide font-extrabold border-2 border-primary-gold dark:border-light-gold hover:border-primary-blue bg-primary-blue dark:bg-transparent hover:bg-white dark:hover:bg-light-gold dark:text-white dark:hover:text-black text-light-gold  hover:text-primary-blue duration-300`}
							onClick={() => acceptCookie()}
						>
							Accept
						</button>
					
				</div>
			</div>
		</article>
	);
};

export default CookieBanner;
