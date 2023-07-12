import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	const linkClasses =
		"col-span-1 py-4 2xl:text-xl font-black text-alternative-blue hover:text-light-gold hover:border-light-gold  hover:bg-primary-blue transition-all duration-300";
	return (
		<>
			<Link href="/" className="flex justify-evenly">
				<Image
					src="/media/logos/ezdev-logo.png"
					alt="ez-dev logo"
					height={300}
					width={200}
				/>
			</Link>
			<header
				className={"bg-white text-center py-2 sticky top-0 z-50"}
			>
				<h1 className={`text-primary-blue  mt-2 mb-0  text-3xl md:text-4xl 2xl:text-6xl font-thin`}>
					Anthony Gordon Kruger
				</h1>
				<h2 className={`text-primary-gold mt-2 mb-0 text-sm 2xl:text-xl uppercase`}>
					Software developer and tech enthusiast
				</h2>
				<nav className={" grid grid-cols-3 lg:grid-cols-7  border-y border-2 text-center mt-4 bg-white border-primary-gold 3xl:px-96 xl:px-46"}>
					<Link className={`${linkClasses} inline`} href="/">
						About
					</Link>
					<Link className={`${linkClasses} hidden lg:inline`} href="/skills">
						Skills
					</Link>
					<Link className={`${linkClasses} hidden lg:inline`} href="/work-experience">
						Work Experience
					</Link>
					<Link className={`${linkClasses} hidden lg:inline`} href="/qualifications">
						Qualifications
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
