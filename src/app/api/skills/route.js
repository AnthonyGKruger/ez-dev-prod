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

export const GET = async (request) => {
  const iconStyles = "mx-auto text-6xl";
	const responseData = [
		{ title: "NextJS", icon: <TbBrandNextjs className={`${iconStyles} `} /> },
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

	return new Response(JSON.stringify(responseData), {
		status: 200,
	});
};
