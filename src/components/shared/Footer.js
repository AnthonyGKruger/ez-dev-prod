import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import HeaderFooterLogo from "@/components/shared/HeaderFooterLogo";

const Footer = () => {
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
        <AiFillLinkedin className="hover:text-primary-gold transition-all duration-500 text-3xl" />
      ),
    },
  ];

  return (
    <footer className="pt-10 mx-auto border-t border-primary-gold">
      <div className="mx-auto">
        <div className="justify-center sm:flex">
          <div className="space-y-6 cursor-pointer">
            <HeaderFooterLogo />
            <ul className="flex flex-wrap items-center gap-4 text-sm 2xl:text-xl sm:text-base justify-center">
              {/* Footer navigation links */}
              {footerNavs.map((item, idx) => (
                <li key={idx} className="hover:text-primary-gold duration-150">
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Copyright information */}
        <div className="mt-10 py-5 border-t border-primary-gold text-center bg-alternative-blue dark:bg-transparent text-white">
          <p>
            © {new Date().getFullYear() + " "}
            <Link
              href="/"
              className="hover:text-light-gold dark:hover:text-primary-gold duration-500"
            >
              EZdev Solutions (PTY) LTD.
            </Link>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
