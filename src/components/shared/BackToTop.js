'use client'
// Import statements
import ScrollToTop from "react-scroll-up";
import {BiSolidUpArrow} from "react-icons/bi";

// BackToTop component
const BackToTop = () => {
  return (
    <ScrollToTop showUnder={160}>
      {/* Back to Top button */}
      <div
        className={`rounded-full border-2 mr-4 bottom-16 fixed right-0 z-40 h-10 w-10 text-xl bg-white dark:bg-black 
          flex items-center justify-center dark:border-light-gold border-alternative-blue dark:hover:bg-light-gold hover:bg-light-blue
          dark:hover:text-black transition-all duration-300 hover:scale-105`}
      >
        {/* Back to Top icon */}
        <BiSolidUpArrow
          className={`dark:text-white  text-alternative-blue
            hover:text-alternative-gold dark:hover:text-black hover:scale-105 hover:animate-bounce`}
        />
      </div>
    </ScrollToTop>
  );
};

export default BackToTop;
