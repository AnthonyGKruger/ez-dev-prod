"use client";
import { TbBrandNextjs, TbBrandAzure } from "react-icons/tb";
import {
	FaReact,
	FaHtml5,
	FaPhp,
	FaJava,
	FaPython,
	FaWordpress,
} from "react-icons/fa";
import { BiLogoJavascript, BiLogoCss3, BiLogoPostgresql } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";
import { motion } from "framer-motion";
import Heading from "@/components/shared/Heading";
import animationData from "@/lotties/Skill.json";
import darkAnimationData from "@/lotties/darkSkill.json";
import { useTheme } from "next-themes";

const SkillsList = () => {
	const { theme } = useTheme();

	const iconStyles = "mx-auto text-6xl";

	const skills = [
		{
			title: "NextJS",
			icon: (
				<TbBrandNextjs className={`${iconStyles} text-black dark:text-white`} />
			),
		},
		{
			title: "ReactJS",
			icon: <FaReact className={`${iconStyles} text-blue-600`} />,
		},
		{
			title: "JavaScript",
			icon: <BiLogoJavascript className={`${iconStyles} text-yellow-500`} />,
		},
		{
			title: "CSS",
			icon: <BiLogoCss3 className={`${iconStyles} text-indigo-500`} />,
		},
		{
			title: "HTML",
			icon: <FaHtml5 className={`${iconStyles} text-rose-500`} />,
		},
		{
			title: "PHP",
			icon: <FaPhp className={`${iconStyles} text-purple-800`} />,
		},
		{
			title: "Java",
			icon: <FaJava className={`${iconStyles} text-blue-500`} />,
		},
		{
			title: "Python",
			icon: <FaPython className={`${iconStyles} text-emerald-700`} />,
		},
		{
			title: "SQL",
			icon: <BiLogoPostgresql className={`${iconStyles} text-indigo-600`} />,
		},
		{
			title: "WordPress",
			icon: <FaWordpress className={`${iconStyles} text-blue-800`} />,
		},
		{
			title: "Azure",
			icon: <TbBrandAzure className={`${iconStyles} text-blue-500`} />,
		},
		{ title: "Linux", icon: <FcLinux className={`${iconStyles} `} /> },
	];

	const cardVariants = {
		offscreen: {
			y: 500,
		},
		onscreen: {
			y: 0,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 1.5,
			},
		},
	};

	const cards = skills.map((skill, idx) => {
		let amount;

		switch (idx) {
			case 0:
				amount = 0;
				break;
			case 1:
				amount = 0.3;
				break;
			case 2:
				amount = 0.6;
				break;
			case 3:
				amount = 0.9;
				break;
			case 4:
				amount = 0;
				break;
			case 5:
				amount = 0.3;
				break;
			case 6:
				amount = 0.6;
				break;
			case 7:
				amount = 0.9;
				break;
			case 8:
				amount = 0;
				break;
			case 9:
				amount = 0.3;
				break;
			case 10:
				amount = 0.6;
				break;
			case 11:
				amount = 0.9;
				break;
			default:
				amount = 0;
		}

		return (
			<motion.div
				key={idx}
				className="col-span-2 lg:col-span-3 max-w-full"
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: amount }}
				whileHover={{ scale: 1.1 }}
				transition={{ type: "spring", stiffness: 400, damping: 50 }}
			>
				<motion.div className="max-w-full" variants={cardVariants}>
					<div
						className={`max-w-full overflow-hidden text-center bg-white dark:bg-neutral-900 rounded-lg 
					hover:rounded-3xl hover:text-secondary-gold shadow-lg dark:shadow hover:shadow- dark:hover:shadow-lg
					 shadow-alternative-blue  hover:shadow-secondary-gold
					  dark:hover:shadow-secondary-gold border border-primary-gold duration-300`}
					>
						<figure className="p-9 pb-0 text-center">{skill.icon}</figure>

						<div className="p-6">
							<h3 className=" text-xl font-base">{skill.title}</h3>
						</div>
					</div>
				</motion.div>
			</motion.div>
		);
	});

	return (
		<>
			<Heading
				animationData={theme == "dark" ? darkAnimationData : animationData}
				content={"Some Of The Skills & Awesome Technologies I Use!"}
			/>
			<section className="py-14 md:py-28 bg-primary-blue dark:bg-black overflow-hidden">
				<div className="container px-6 m-auto">
					<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
						{cards}
					</div>
				</div>
			</section>
		</>
	);
};

export default SkillsList;
