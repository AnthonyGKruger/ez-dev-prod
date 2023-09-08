import Heading from "@/components/shared/Heading";
import darkAnimationData from "@/lotties/darkSkill.json";
import animationData from "@/lotties/Skill.json";
import { useTheme } from "next-themes";

const SkillsAnimatedHeading = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  // Determine the current theme (either "light" or "dark")
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Heading
      animationData={
        currentTheme === "dark" ? darkAnimationData : animationData
      }
      content={"Some Of The Skills & Awesome Technologies I Use!"}
    />
  );
};

export default SkillsAnimatedHeading;
