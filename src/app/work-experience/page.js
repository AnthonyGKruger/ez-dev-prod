import WorkExperienceContent from "@/components/workExperience/Content";

export const metadata = {
  title: 'Work Experience - Anthony Gordon Kruger\'s Portfolio',
	description:"EZdev portfolio",
	viewport:"width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0",
  icons: [
    { rel: 'icon', url: '/code.png' },
    { rel: 'apple', url: '/code.png' },
  ],
};

const WorkExperience = () => {

	return (
		<><WorkExperienceContent/></>
	);
};

export default WorkExperience;
