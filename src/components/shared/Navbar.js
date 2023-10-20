// "use client";
import Link from "next/link";
// import {usePathname} from "next/navigation";
import HeaderFooterLogo from "@/components/shared/HeaderFooterLogo";

const Navbar = () => {
  // CSS classes for the navigation links
  const linkClasses = `navLink col-span-1 py-4 2xl:text-xl font-base dark:text-white text-alternative-blue hover:text-light-gold dark:hover:text-black hover:border-light-gold  hover:bg-primary-blue dark:hover:bg-light-gold transition-all duration-500`;

  return (
    <>
      <HeaderFooterLogo />
      <header className="sticky top-0 z-50">
        <nav
          className={`grid grid-cols-4 lg:grid-cols-8 border-t border-b text-center 
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
