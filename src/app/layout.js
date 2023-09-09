import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import Footer from "@/components/shared/Footer";
import CookieBanner from "@/components/shared/CookieBanner";
import Companies from "@/components/shared/Companies";
import ThemeToggle from "@/components/shared/ThemeToggle";
import BackToTop from "@/components/shared/BackToTop";
import ThemeProviderHelper from "@/components/shared/ThemeProviderHelper";
import ReduxProviderHelper from "@/components/shared/ReduxProviderHelper";

const roboto = Roboto({ subsets: ["latin"], weight: "300" });

// Layout component that wraps the content of the application
const Layout = ({ children }) => {
  return (
    <html lang="en">
      {/* Load Google Analytics script asynchronously */}
      {/*<Script*/}
      {/*  strategy="lazyOnload"*/}
      {/*  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}*/}
      {/*/>*/}

      {/*/Define the Google Analytics configuration /*/}
      {/*<Script id="google-analytics-config" strategy="lazyOnload">*/}
      {/*  {`*/}
      {/*      window.dataLayer = window.dataLayer || [];*/}
      {/*      function gtag(){dataLayer.push(arguments);}*/}
      {/*      gtag('js', new Date());*/}
      {/*      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {*/}
      {/*        page_path: window.location.pathname,*/}
      {/*      });*/}
      {/*    `}*/}
      {/*</Script>*/}

      <Script id={"google-tag-manager"}>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WRTN27BM');`}
      </Script>

      {/* Define the body element */}
      <body
        className={`${roboto.className} bg-white dark:bg-black dark:text-zinc-200 text-alternative-blue relative`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WRTN27BM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Redux store provider */}
        <ReduxProviderHelper>
          {/* Theme provider for next-themes */}
          <ThemeProviderHelper>
            {/*<ThemeProvider attribute="class">*/}
            {/* Render the Navbar component */}
            <Navbar />

            {/* Render the children components passed to the Layout */}
            {children}

            {/* Render the Companies component */}
            <Companies />

            {/* Render the Footer component */}
            <Footer />

            {/* Render the CookieBanner component */}
            <CookieBanner />

            {/* Render the BackToTop component */}
            <BackToTop />

            {/* Render the ThemeToggle component */}
            <ThemeToggle />

            {/* Render the Analytics component from @vercel/analytics */}
            <Analytics />
            {/*</ThemeProvider>*/}
          </ThemeProviderHelper>
        </ReduxProviderHelper>
      </body>
    </html>
  );
};

export default Layout;
