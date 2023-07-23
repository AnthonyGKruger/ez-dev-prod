import Hero from "@/components/home/Hero";
import Skills from "./skills/page";
import Qualifications from "./qualifications/page";
import WorkExperience from "./work-experience/page";
import Languages from "./languages/page";
import Portfolio from "./portfolio/page";


export const metadata = {
  title: 'Home - Anthony Gordon Kruger\'s Portfolio',
	description:"EZdev portfolio",
	viewport:"width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0",
  icons: [
    { rel: 'icon', url: '/code.png' },
    { rel: 'apple', url: '/code.png' },
  ],
};

export default () => {
	return (
		<main className="">
			<Hero />
			<Skills/>
			<Portfolio/>
			{/* <Qualifications/>
			<WorkExperience/>
			<Languages/> */}
		</main>
	);
};
