'use client'
import {motion} from "framer-motion"; // Importing the Framer Motion library for animations
import Image from 'next/image'


const HeroImage = () => {

  // Define animation variants for the card animation
  const cardVariants = {
    offscreen: {
      x: -4000, // Move the card offscreen initially
    }, onscreen: {
      x: 0, // Move the card onscreen with animation
      transition: {
        type: "spring", bounce: 0.2, duration: 1.5,
      },
    },
  };

  return <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{once: true, amount: 0.8}}
  >
    <motion.div variants={cardVariants}>
      <div className="w-full h-full flex py-9 xl:py-9 lg:py-14 px-9 bg-transparent">
        {/* Display the image using the optimized Next.js Image component */}
        <Image
          src={"/media/AnthonyIllustrated.jpeg"}
          alt="Anthony Kruger"
          className={`rounded-full shadow-lg hover:shadow-xl shadow-primary-gold hover:shadow-light-gold
                     border border-primary-gold hover:border-primary-blue self-center
                     mx-auto transition-all duration-500 hover:relative`}
          width={400}
          height={400}
        />
      </div>
    </motion.div>
  </motion.div>
}

export default HeroImage;