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
			className={` md:w-3/4 bg-white pa2 br4 border rounded-xl mx-4 p-2 bottom-3 fixed right-0 z-50 border-[#624111]`}
		>
			<div className="container px-6 m-auto">
				<div className="grid grid-cols-4 gap-6 md:grid-cols-12 lg:grid-cols-12">
					<div className="col-span-1 md:col-span-2 lg:col-span-3">
						<Lottie
							loop
							play
							animationData={animationData}
							style={{ width: 70, height: 70 }}
						/>
					</div>
					<div className="col-span-3 md:col-span-10 lg:col-span-9 py-auto">
						<h1 className={`text-2xl mx-0 pt-5  `}>
							Cookie Policy and Terms & Conditions
						</h1>
					</div>
				</div>
			</div>

			<div
				className={`p-3 border-t border-[#624111] grid grid-cols-4 gap-6 md:grid-cols-12 lg:grid-cols-12`}
			>
				<div className="col-span-4 md:col-span-9 lg:col-span-9">
					<p className={`text-lg`}>
						This website uses cookies to improve the UI and UX. By using my
						website you consent to all cookies & terms and conditions in
						accordance with my{" "}
						<Link
							className={`hover:text-[#624111] duration-500 font-extrabold underline `}
							href={"/PrivacyPolicy"}
						>
							Privacy Policy.
						</Link>
					</p>
				</div>
				<div className={`col-span-4 md:col-span-3 lg:col-span-3 flex`}>
					
						<button
							className={`flex self-center justify-center mx-auto my-auto text-lg tracking-wide font-extrabold border-2 border-[#624111] hover:border-[#354f6b] rounded-xl px-5 py-2  pointer bg-[#354f6b] hover:bg-white text-[#f1d6b0] hover:text-[#354f6b] duration-300`}
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
