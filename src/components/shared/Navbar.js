"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const Navbar = () => {
	// State to manage the logo image based on the current theme
	const [logo, setLogo] = useState("/media/logos/ezdev-logo.png");

	// Get the current page's pathname
	const pathname = usePathname();

	// Get the current theme from the useTheme hook
	const { theme } = useTheme();

	// UseLayoutEffect to change the logo image when the theme changes
	useLayoutEffect(() => {
		theme == "dark"
			? setLogo("/media/logos/ezdev-logo-white.png")
			: setLogo("/media/logos/ezdev-logo.png");
	}, [theme]);

	// UseEffect to add scroll behavior to the navigation bar
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

	// CSS classes for the navigation links
	const linkClasses = `navLink col-span-1 py-4 2xl:text-xl font-base dark:text-white text-alternative-blue hover:text-light-gold dark:hover:text-black hover:border-light-gold  hover:bg-primary-blue dark:hover:bg-light-gold transition-all duration-300`;

	return (
		<>
			{pathname == "/" ? null : (
				<Link href="/" className="flex justify-evenly">
					<div className="w-48 h-auto dark:bg-black">
						<Image
							src={logo}
							alt="ez-dev logo"
							width={200}
							height={200}
							className="object-contain w-auto h-auto"
						/>
					</div>
				</Link>
			)}

			<header className="sticky top-0 z-50">
				<nav
					className={`grid grid-cols-4 lg:grid-cols-8 border-t border-b text-center ${
						pathname == "/" ? "" : "mt-4"
					} bg-white dark:bg-black border-primary-gold 3xl:px-96 xl:px-46`}
				>
					{/* List of navigation links */}
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
