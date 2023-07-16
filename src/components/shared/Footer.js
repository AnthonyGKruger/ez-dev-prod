import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default () => {
	const { push } = useRouter();
	const footerNavs = [
		{
			href: "/",
			name: "About",
		},
		{
			href: "/portfolio",
			name: "Portfolio",
		},
		{
			href: "/contact-me",
			name: "Contact",
		},
		{
			href: "/privacy-policy",
			name: "Privacy",
		},
		{
			href: "https://github.com/AnthonyGKruger",
			name: (
				<AiFillGithub className="hover:text-primary-gold transition-all duration-300 text-3xl" />
			),
		},
		{
			href: "https://www.linkedin.com/in/anthony-gordon-kruger-ezdev/",
			name: (
				<AiFillLinkedin className="hover:text-primary-gold transition-all duration-300 text-3xl" />
			),
		},
	]; 

	return (
		<footer className="pt-10 mx-auto border border-t border-alternative-gold">
			<div className="max-w-screen-xl mx-auto ">
			{/* <div className="max-w-screen-xl mx-auto px-4  md:px-8"> */}
				<div className="justify-center sm:flex">
					<div className="space-y-6 cursor-pointer">
						<Image
							src="/media/logos/ezdev-logo.png"
							alt="ez-dev logo"
							height={300}
							width={200}
							className=" mx-auto "
							onClick={() => push("/")}
						/>

						<ul className="flex flex-wrap items-center gap-4 text-sm 2xl:text-xl sm:text-base justify-center ">
							{footerNavs.map((item, idx) => (
								<li key={idx} className=" hover:text-primary-gold duration-150">
									<Link href={item.href}>{item.name}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="mt-10 py-10 border-t border-alternative-gold text-center bg-alternative-blue text-white">
					<p>
						© {new Date().getFullYear() + " "}
						<Link href="/" className="hover:text-light-gold duration-150">
							EZdev Solutions (PTY) LTD.
						</Link>{" "}
						All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
