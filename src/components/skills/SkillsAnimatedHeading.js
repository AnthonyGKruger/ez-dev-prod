import Heading from "@/components/shared/Heading";
import darkAnimationData from "@/lotties/darkSkill.json";
import animationData from "@/lotties/Skill.json";
import {useTheme} from "next-themes";

const SkillsAnimatedHeading = () => {
  const {theme} = useTheme();
  return <Heading
    animationData={theme === "dark" ? darkAnimationData : animationData}
    content={"Some Of The Skills & Awesome Technologies I Use!"}
  />
}

export default SkillsAnimatedHeading;