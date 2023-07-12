import Heading from "@/components/shared/Heading";
import animationData from "@/lotties/Skill.json";
import SkillsList from "@/components/skills/SkillsList"

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
