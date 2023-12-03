"use client";
import { TbBrandNextjs } from "react-icons/tb";
import { FaHtml5, FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
// import { FcLinux } from "react-icons/fc";
import { motion } from "framer-motion";
import SkillsAnimatedHeading from "@/components/skills/SkillsAnimatedHeading";

const SkillsList = () => {
  const iconStyles = "mx-auto text-6xl";

  // An array of skills and their corresponding icons
  // Each skill object contains a 'title' and an 'icon' property
  // The 'icon' property is an SVG icon component provided by various icon libraries
  // (e.g., react-icons/fa, react-icons/bi, react-icons/tb, react-icons/fc)
  // The 'iconStyles' variable sets the default styles for the icons
  const skills = [
    {
      title: "Next.js",
      icon: (
        <TbBrandNextjs className={`${iconStyles} text-black dark:text-white`} />
      ),
    },
    {
      title: "ReactJS",
      icon: <FaReact className={`${iconStyles} text-blue-600`} />,
    },
    {
      title: "Tailwind Css",
      icon: <SiTailwindcss className={`${iconStyles} text-blue-500`} />,
    },
    {
      title: "JavaScript",
      icon: <BiLogoJavascript className={`${iconStyles} text-yellow-500`} />,
    },
    {
      title: "HTML",
      icon: <FaHtml5 className={`${iconStyles} text-rose-500`} />,
    },
    {
      title: "CSS",
      icon: <IoLogoCss3 className={`${iconStyles} text-blue-700`} />,
    },
    // {
    // 	title: "Java",
    // 	icon: <FaJava className={`${iconStyles} text-blue-500`} />,
    // },
    // {
    // 	title: "Python",
    // 	icon: <FaPython className={`${iconStyles} text-emerald-700`} />,
    // },
    // {
    // 	title: "SQL",
    // 	icon: <BiLogoPostgresql className={`${iconStyles} text-indigo-600`} />,
    // },
    // {
    //   title: "WordPress",
    //   icon: <FaWordpress className={`${iconStyles} text-blue-800`} />,
    // },
    // {
    //   title: "Azure",
    //   icon: <TbBrandAzure className={`${iconStyles} text-blue-500`} />,
    // },
    // { title: "Linux", icon: <FcLinux className={`${iconStyles} `} /> },
  ];

  const cardVariants = {
    // Framer Motion variants for card animations
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
    // Mapping the skills array to create individual cards for each skill
    let amount;

    // Determine the amount for each card animation based on the index
    // This will give a staggered effect to the card animations
    const amountMap = {
      0: 0,
      1: 0.3,
      2: 0.6,
      3: 0,
      4: 0.3,
      5: 0.6,
      6: 0,
      7: 0.3,
      8: 0.6,
      9: 0,
      10: 0.3,
      11: 0.6,
    };

    amount = amountMap[idx] || 0;

    return (
      <motion.div
        key={idx}
        className="col-span-2  lg:col-span-4 max-w-full"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: amount }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 0, damping: 50 }}
      >
        <motion.div className="max-w-full" variants={cardVariants}>
          <div
            className={`max-w-full overflow-hidden text-center bg-white dark:bg-neutral-900 rounded-lg 
          hover:rounded-3xl hover:text-secondary-gold shadow-lg dark:shadow hover:shadow-dark 
          dark:hover:shadow-lg shadow-alternative-blue hover:shadow-secondary-gold
          dark:hover:shadow-secondary-gold border border-primary-gold duration-500`}
          >
            {/* Icon of the skill */}
            <figure className="p-9 pb-0 text-center">{skill.icon}</figure>

            {/* Title of the skill */}
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
      <SkillsAnimatedHeading />
      <section className="py-14 md:py-28 bg-primary-blue dark:bg-black overflow-hidden">
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-6 lg:grid-cols-12">
            {/* Render the cards for each skill */}
            {cards}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsList;
