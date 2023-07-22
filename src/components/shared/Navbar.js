"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const Navbar = () => {
	const [logo, setLogo] = useState("/media/logos/ezdev-logo.png");

	const pathname = usePathname();
	const { theme } = useTheme(); 

	useLayoutEffect(() => {
		 theme == "dark"
			? setLogo("/media/logos/ezdev-logo-white.png")
			: setLogo("/media/logos/ezdev-logo.png");
	}, [theme]);

	useEffect(() => {
		window.onscroll = function () {
			scrollFunction(); 
		};

		function scrollFunction() {
			let elements = document.getElementsByClassName("navLink");
			if (
				document.body.scrollTop > 80 ||
				document.documentElement.scrollTop > 80
			) {
				for (let i = 0, len = elements.length; i < len; i++) {
					elements[i].classList.remove("py-4");
					elements[i].classList.add("py-1");
				}
			} else {
				for (let i = 0, len = elements.length; i < len; i++) {
					elements[i].classList.remove("py-1");
					elements[i].classList.add("py-4");
				}
			}
		}
	}, []);

	const linkClasses =
		`navLink col-span-1 py-4 2xl:text-xl font-base dark:text-white text-alternative-blue hover:text-light-gold 
		dark:hover:text-black hover:border-light-gold  hover:bg-primary-blue dark:hover:bg-light-gold transition-all 
		duration-300`;

	return (
		<>
			{pathname == "/" ? null : (
				<Link href="/" className="flex justify-evenly">
					<div className="w-48 h-auto dark:bg-black">
						<Image
							src={logo}
							alt="ez-dev logo"
							// layout="responsive"
							width={200}
							height={200}
							className="object-contain w-auto h-auto"
						/>
					</div>
				</Link>
			)}
			{/* <header className="bg-white text-center py-2">
				<h1 className="text-primary-blue mt-2 mb-0 text-3xl md:text-4xl 2xl:text-5xl font-thin">
					Anthony Kruger
				</h1>
				<h2 className="text-primary-gold mt-2 mb-0 text-sm 2xl:text-lg uppercase">
					Full Stack Web Developer
				</h2>
			</header> */}
			<header className="sticky top-0 z-50">
				<nav
					className={`grid grid-cols-4 lg:grid-cols-8 border-t border-b text-center ${
						pathname == "/" ? "" : "mt-4"
					} bg-white dark:bg-black border-primary-gold 3xl:px-96 xl:px-46`}
				>
					<Link className={`${linkClasses} inline`} href="/">
						Home
					</Link>
					<Link className={`${linkClasses} inline`} href="/about">
						About
					</Link>
					<Link className={`${linkClasses} hidden lg:inline`} href="/skills">
						Skills
					</Link>
					<Link
						className={`${linkClasses} hidden lg:inline`}
						href="/qualifications"
					>
						Qualifications
					</Link>
					<Link
						className={`${linkClasses} hidden lg:inline`}
						href="/work-experience"
					>
						Work Experience
					</Link>
					<Link className={`${linkClasses} hidden lg:inline`} href="/languages">
						Languages
					</Link>
					<Link className={`${linkClasses} inline`} href="/portfolio">
						Portfolio
					</Link>
					<Link className={`${linkClasses} inline`} href="/contact-me">
						Contact
					</Link>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
