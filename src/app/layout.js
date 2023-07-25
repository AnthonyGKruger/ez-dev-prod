"use client";
import React, {useLayoutEffect} from "react";
import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import {Roboto} from "next/font/google";
import {Provider} from "react-redux";
import store from "@/store/index";
import {Analytics} from "@vercel/analytics/react";
import Script from "next/script";
import Footer from "@/components/shared/Footer";
import CookieBanner from "@/components/shared/CookieBanner";
import Companies from "@/components/shared/Companies";
import ThemeToggle from "@/components/shared/ThemeToggle";
import {ThemeProvider} from "next-themes";
import BackToTop from "@/components/shared/BackToTop";
import {useTheme} from "next-themes";

const roboto = Roboto({subsets: ["latin"], weight: "300"});

// Layout component that wraps the content of the application
const Layout = ({children}) => {

  const {setTheme} = useTheme();

  useLayoutEffect(() => {
    setTheme("dark")
  }, [])

  return (
    <html lang="en">
    {/* Load Google Analytics script asynchronously */}
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />

    {/* Define the Google Analytics configuration */}
    <Script strategy="lazyOnload">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
    </Script>

    {/* Define the body element */}
    <body
      className={`${roboto.className} bg-white dark:bg-black dark:text-zinc-200 text-alternative-blue relative`}
    >
    {/* Redux store provider */}
    <Provider store={store}>
      {/* Theme provider for next-themes */}
      <ThemeProvider attribute="class">
        {/* Render the Navbar component */}
        <Navbar/>

        {/* Render the children components passed to the Layout */}
        {children}

        {/* Render the Companies component */}
        <Companies/>

        {/* Render the Footer component */}
        <Footer/>

        {/* Render the CookieBanner component */}
        <CookieBanner/>

        {/* Render the BackToTop component */}
        <BackToTop/>

        {/* Render the ThemeToggle component */}
        <ThemeToggle/>

        {/* Render the Analytics component from @vercel/analytics */}
        <Analytics/>
      </ThemeProvider>
    </Provider>
    </body>
    </html>
  );
};

export default Layout;
