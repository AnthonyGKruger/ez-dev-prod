"use client"
import {motion} from "framer-motion";
import React from "react";

const HomeMotionDiv = ({children}) => {
  const cardVariants = {
    offscreen: {
      x: -4000,
    }, onscreen: {
      x: 0, transition: {
        type: "spring", bounce: 0, duration: 0.8,
      },
    },
  };
  return <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{once: true, amount: 0.8}}
  >
    <motion.div variants={cardVariants}>
      {children}
    </motion.div>
  </motion.div>
}

export default HomeMotionDiv;