"use client";
// Import statements
import {hasCookie, setCookie} from "cookies-next";
import {useEffect, useState} from "react";
import Link from "next/link";
import Lottie from "react-lottie-player";
import animationData from "@/lotties/Cookies.json";

// CookieBanner component
const CookieBanner = (props) => {
    // State to control whether to show the consent banner or not
    const [showConsent, setShowConsent] = useState(true);

    // Check if the "localConsent" cookie exists to determine whether to show the consent banner or not
    useEffect(() => {
        setShowConsent(hasCookie("localConsent"));
    }, []);

    // Function to handle the user accepting the cookies
    const acceptCookie = () => {
        setShowConsent(true);
        setCookie("localConsent", "true", {}); // Set the "localConsent" cookie with the value "true"
    };

    // If the user has already given consent, do not show the banner and return null
    if (showConsent) {
        return null;
    }

    // If the user has not given consent, display the consent banner
    return (
        <article
            className={`md:w-3/4 lg:w-2/4 xl:w-1/3 bg-white dark:bg-black border rounded-xl mx-4 p-2 bottom-3 fixed right-0 z-50 border-[#624111] dark:border-light-gold`}
        >
            <div className="container  pt-0 m-auto">
                <div className="grid grid-cols-4 gap-6 md:grid-cols-12 lg:grid-cols-12">
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 self-center">
                        {/* Display the Lottie animation */}
                        <Lottie
                            loop
                            play
                            animationData={animationData}
                            style={{width: 70, height: 70}}
                        />
                    </div>
                    <div className="col-span-3 md:col-span-10 lg:col-span-9 py-auto self-center">
                        <h1 className={`xl:text-2xl mx-auto md:pt-2  `}>
                            {`Cookie Policy and T's & C's`}
                        </h1>
                    </div>
                </div>
            </div>

            <div
                className={`p-3 border-t border-[#624111] dark:border-light-gold grid grid-cols-4 `}
            >
                <div className="col-span-4 ">
                    <p className={`xl:text-lg text-sm`}>
                        This website uses cookies to improve the UI and UX. By using my
                        website you consent to all cookies & terms and conditions in
                        accordance with my{" "}
                        {/* Provide a link to the "Privacy Policy" */}
                        <Link
                            className={`hover:text-[#624111] dark:text-light-gold duration-500 font-lightbold underline `}
                            href={"/privacy-policy"}
                        >
                            Privacy Policy.
                        </Link>
                    </p>
                </div>
                <div className={`col-span-4  `}>
                    {/* Display the "Accept" button */}
                    <button
                        className={`w-full md:w-auto p-2 rounded-xl self-center mt-4 mx-auto my-auto text-sm xl:text-lg tracking-wide font-extrabold border-2 border-primary-gold dark:border-light-gold hover:border-primary-blue bg-primary-blue dark:bg-transparent hover:bg-white dark:hover:bg-light-gold dark:text-white dark:hover:text-black text-light-gold  hover:text-primary-blue duration-300`}
                        onClick={() => acceptCookie()} // Handle the click event to accept cookies
                    >
                        Accept
                    </button>
                </div>
            </div>
        </article>
    );
};

export default CookieBanner;
