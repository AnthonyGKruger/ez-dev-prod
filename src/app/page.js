import Image from "next/image";
import Hero from "@/components/about/Hero";
import Skills from "./skills/page";
import Qualifications from "./qualifications/page";
import WorkExperience from "./work-experience/page";
import Languages from "./languages/page";

export const metadata = {
  title: 'Home - Anthony Gordon Kruger\'s Portfolio',
  icons: [
    { rel: 'icon', url: '/favicon.png' },
    { rel: 'apple', url: '/favicon.png' },
  ],
};

export default () => {
	return (
		<main className="">
			<Hero />
			<Skills/>
			<Qualifications/>
			<WorkExperience/>
			<Languages/>
		</main>
	);
};
