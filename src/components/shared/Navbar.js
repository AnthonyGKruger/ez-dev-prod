import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	const linkClasses =
		"col-span-1 py-4 font-bold text-[#0f2740] hover:text-[#f1d6b0]  hover:border-[#f1d6b0]  hover:bg-[#354f6b] transition-all duration-300";
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
				className={"bg-white text-center py-2 sticky z-50"}
			>
				<h1 className={`text-[#0f2740]  mt-2 mb-0  text-3xl md:text-4xl font-thin`}>
					Anthony Gordon Kruger
				</h1>
				<h2 className={`text-[#a4804b] mt-2 mb-0 text-sm font- uppercase ttu tracked`}>
					Software developer and tech enthusiast
				</h2>
				<nav className={" grid grid-cols-3 lg:grid-cols-7 lg:grid-cols-17 xl:px-40 border-y border-2 text-center mt-4 bg-white border-[#a4804b] "}>
					<Link className={`${linkClasses} inline`} href="/">
						About
					</Link>
					<Link className={`${linkClasses} hidden lg:inline`} href="/Skills">
						Skills
					</Link>
					<Link className={`${linkClasses} hidden lg:inline`} href="/WorkExperience">
						Work Experience
					</Link>
					<Link className={`${linkClasses} hidden lg:inline`} href="/Education">
						Qualifications
					</Link>
					<Link className={`${linkClasses} hidden lg:inline`} href="/Languages">
						Languages
					</Link>
					<Link className={`${linkClasses} inline`} href="/Portfolio">
						Portfolio
					</Link>
					<Link className={`${linkClasses} inline`} href="/ContactMe">
						Contact
					</Link>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
