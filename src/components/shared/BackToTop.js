import ScrollToTop from "react-scroll-up";
import { BiSolidUpArrow } from "react-icons/bi";

const BackToTop = () => {
	return (
		<ScrollToTop showUnder={160}>
			<div
				className={`rounded-full border-2 mr-4 bottom-16 fixed right-0 z-40 h-10 w-10 text-xl bg-white dark:bg-black 
        flex items-center justify-center dark:border-light-gold border-alternative-blue hover:bg-light-blue
        dark:hover:text-black  transition-all duration-300`}
			>
				<BiSolidUpArrow
					className={`dark:text-light-gold  text-alternative-blue
           hover:text-alternative-gold dark:hover:text-primary-gold`}
				/>
			</div>
		</ScrollToTop>
	);
};

export default BackToTop;
