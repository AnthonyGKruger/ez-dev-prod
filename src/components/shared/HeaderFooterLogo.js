"use client";
import { useTheme } from "next-themes";
import { useEffect, useLayoutEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const HeaderFooterLogo = () => {
  // State to manage the logo image based on the current theme (light or dark)
  const [logo, setLogo] = useState("/media/logos/ezdev-logo-white.png");
  const { systemTheme, theme, setTheme } = useTheme();
  // Determine the current theme (either "light" or "dark")
  const currentTheme = theme === "system" ? systemTheme : theme;
  const { push } = useRouter();
  const pathname = usePathname();

  // Use layout effect to update the logo image when the theme changes
  useLayoutEffect(() => {
    currentTheme === "dark"
      ? setLogo("/media/logos/ezdev-logo-white.png")
      : setLogo("/media/logos/ezdev-logo.png");
  }, [systemTheme]);

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

  return pathname === "/" ? null : (
    <Link href="/" className="flex justify-evenly">
      <Image
        src={logo}
        alt="ez-dev logo"
        height={300}
        width={200}
        className="mx-auto"
        onClick={() => push("/")} // Clicking the logo navigates to the homepage
      />
    </Link>
  );
};

export default HeaderFooterLogo;
