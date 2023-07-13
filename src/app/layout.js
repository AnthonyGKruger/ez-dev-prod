"use client";
import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/store/index";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import Footer from "@/components/shared/Footer";
import CookieBanner from "@/components/shared/CookieBanner";
import Companies from "@/components/shared/Companies";

const roboto = Roboto({ subsets: ["latin"], weight: "300" });

export default ({ children }) => {
	return (
		<html lang="en">
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<Script strategy="lazyOnload">
				{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
				page_path: window.location.pathname,
				});
		`}
			</Script>

			{/* <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script> */}

			<body
				className={`${roboto.className} bg-white text-alternative-blue relative`}
			>
				<Provider store={store}>
					<Navbar />
					{children}
					<Companies />
					<Footer />
					<CookieBanner />
					<Analytics />
				</Provider>
			</body>
		</html>
	);
};
