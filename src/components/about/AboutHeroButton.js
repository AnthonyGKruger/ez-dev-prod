"use client"
import Link from "next/link";
import React from "react";

const HeroButton = () => {
  return <button
    onClick={() => {
      window.location = "/contact-me"
    }}
    className={`w-full md:w-auto hover:scale-105 mx-auto text-center  border-2
                            border-alternative-gold dark:border-light-gold hover:border-primary-gold rounded-full px-5 py-4  pointer
                            bg-light-gold dark:bg-black hover:bg-white dark:hover:bg-light-gold
                            text-alternative-blue hover:text-alternative-gold dark:text-white
                            dark:hover:text-black
                            duration-300 `}
  >
    <Link
      href="/contact-me"
      className="font-bold text-xl tracking-wide "
    >
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      Let's Chat!
    </Link>
  </button>
}

export default HeroButton;