import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default () => {
	const footerNavs = [
	
		{
			href: "#",
			name: "About",
		},
		{
			href: "#",
			name: "Contact",
		},
		{
			href: "#",
			name: "Privacy",
		},
		{
			href: "#",
			name: (
				<AiFillGithub className="hover:text-primary-gold transition-all duration-300 text-3xl" />
			),
		},
		{
			href: "#",
			name: (
				<AiFillLinkedin className="hover:text-primary-gold transition-all duration-300 text-3xl" />
			),
		},
	];

	return (
		<footer className="pt-10 mx-auto border border-t border-alternative-gold">
			<div className="max-w-screen-xl mx-auto px-4  md:px-8">
				<div className="justify-center sm:flex">
					<div className="space-y-6">
						<Image
							src="/media/logos/ezdev-logo.png"
							alt="ez-dev logo"
							height={300}
							width={200}
							className=" mx-auto "
							// className="w-55 mx-auto "
						/>
						{/* <p className="max-w-md text-center ">
							Nulla auctor metus vitae lectus iaculis, vel euismod massa
							efficitur.
						</p> */}
						<ul className="flex flex-wrap items-center gap-4 text-sm 2xl:text-xl sm:text-base justify-center ">
							{footerNavs.map((item, idx) => (
								<li key={idx}className=" hover:text-primary-gold duration-150">
									<Link  href={item.href}>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					{/* <div className="mt-6">
						<p className="text-center md:text-left font-semibold">Get the app</p>
						<div className="flex items-center gap-3 mt-3 sm:block justify-center md:justify-start">
							<Link href="#">
								<AiFillGithub className="hover:text-[#a4804b] transition-all duration-300 text-3xl" />
							</Link>
							<Link href="#" className="mt-0 block sm:mt-3">
								<AiFillLinkedin className="hover:text-[#a4804b] transition-all duration-300 text-3xl" />
							</Link>
						</div>
					</div> */}
				</div>
				<div className="mt-10 py-10 border-t border-alternative-gold text-center">
					<p>
						© {new Date().getFullYear() + " "}
						<Link href="/" className="hover:text-primary-gold duration-150">
							EZdev Solutions (PTY) LTD.
						</Link>{" "}
						All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
