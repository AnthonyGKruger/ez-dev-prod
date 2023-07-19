"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const Navbar = () => {
	
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
		"navLink col-span-1 py-4 2xl:text-xl font-base text-alternative-blue hover:text-light-gold hover:border-light-gold  hover:bg-primary-blue transition-all duration-300";

	return (
		<>
			<Link href="/" className="flex justify-evenly">
				<div className="w-48 h-auto">
					<Image
						src="/media/logos/ezdev-logo.png"
						alt="ez-dev logo"
						// layout="responsive"
						width={200}
						height={200}
						className="object-contain w-auto h-auto"
					/>
				</div>
			</Link>
			{/* <header className="bg-white text-center py-2">
				<h1 className="text-primary-blue mt-2 mb-0 text-3xl md:text-4xl 2xl:text-5xl font-thin">
					Anthony Kruger
				</h1>
				<h2 className="text-primary-gold mt-2 mb-0 text-sm 2xl:text-lg uppercase">
					Full Stack Web Developer
				</h2>
			</header> */}
			<header className="sticky top-0 z-50">
				<nav className="grid grid-cols-4 lg:grid-cols-8 border-t border-b text-center mt-4 bg-white border-primary-gold 3xl:px-96 xl:px-46">
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
