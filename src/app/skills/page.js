import Heading from "@/components/shared/Heading";
import animationData from "@/lotties/Skill.json";
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
			<Heading
				animationData={animationData}
				content={"Some Of The Skills & Awesome Technologies I Use!"}
			/>
			<SkillsList/>
		</>
	);
};

export default Skills;
