
import SkillsList from "@/components/skills/SkillsList"

export const metadata = {
  title: 'Skills - Anthony Gordon Kruger\'s Portfolio',
	description:"EZdev portfolio",
	viewport:"width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0",
  icons: [
    { rel: 'icon', url: '/favicon.png' },
    { rel: 'apple', url: '/favicon.png' },
  ],
};

const Skills = () => {
	return (
		<>
			
			<SkillsList/>
		</>
	);
};

export default Skills;
