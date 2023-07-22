"use client";
import { hasCookie, setCookie } from "cookies-next";
import { useState, useEffect } from "react";
import Link from "next/link";
import Lottie from "react-lottie-player";
import animationData from "@/lotties/Cookies.json";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
	

	const { systemTheme, theme, setTheme } = useTheme();

	const currentTheme = theme === "system" ? systemTheme : theme;
	
	// setTheme('dark')
  
	return (
		<article
			className={`bg-white rounded-xl w-max mr-4 bottom-3 fixed right-0 z-40`}
		>
			<div className="relative flex flex-wrap items-center">
				<input
					onClick={() =>
						theme == "dark" ? setTheme("light") : setTheme("dark")
					}
					className={`peer relative h-6 w-12 cursor-pointer appearance-none rounded-xl ring-2 ring-inset
           ring-light-gold transition-all duration-300 bg-black
					 
						dark:after:content-["🌙"] after:content-["☀️"]

					 after:absolute after:top-0 after:left-0 after:h-6 after:w-6 
           after:rounded-xl after:bg-black after:ring-2 after:ring-inset after:ring-light-gold after:transition-all

            checked:bg-light-blue checked:ring-alternative-blue checked:after:left-6 checked:after:bg-light-blue
             checked:after:ring-alternative-blue hover:ring-primary-blue after:hover:ring-alternative-blue


						 dark:hover:ring-primary-gold dark:after:hover:ring-primary-gold

              checked:hover:bg-light-blue checked:hover:ring-primary-blue checked:after:hover:ring-alternative-blue 
               checked:focus:bg-light-blue  checked:focus:ring-alternative-blue
							 
							  checked:after:focus:ring-alternative-blue 
               focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-200
                disabled:after:ring-slate-300`}
								// className={`peer relative h-6 w-12 cursor-pointer appearance-none rounded-xl ring-2 ring-inset
								// ring-slate-300 transition-colors after:absolute after:top-0 after:left-0 after:h-6 after:w-6 
								// after:rounded-full after:bg-white after:ring-2 after:ring-inset after:ring-slate-500 after:transition-all
								//  checked:bg-emerald-200 checked:ring-emerald-500 checked:after:left-6 checked:after:bg-white
								// 	checked:after:ring-emerald-500 hover:ring-slate-400 after:hover:ring-slate-600
								// 	 checked:hover:bg-emerald-300 checked:hover:ring-emerald-600 checked:after:hover:ring-emerald-600 
								// 		checked:focus:bg-emerald-400  checked:focus:ring-emerald-700 checked:after:focus:ring-emerald-700 
								// 		focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-200
								// 		 disabled:after:ring-slate-300`}
					type="checkbox"
					value=""
          // defaultChecked
					checked={theme=="light" ? true:false}
					id="theme-toggle"
				/>
			</div>
		</article>
	);
};

export default ThemeToggle;
