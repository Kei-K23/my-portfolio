"use client";
import SVG from "@/lib/SVG";
import { textVariants } from "@/lib/motion";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full select-none main-section min-h-screen flex justify-start md:justify-center items-start md:items-center flex-col md:flex-row">
      <motion.div
        variants={textVariants}
        initial={textVariants.hiddenFromLeft}
        animate={textVariants.fadeIn}
        className=" w-full mt-24 md:mt-0 lg:w-[65%] div-padding md:pl-20 lg:pl-40"
      >
        <motion.h2
          variants={textVariants}
          initial={textVariants.hiddenFromLeft}
          animate={textVariants.fadeIn}
          className="text-xl sm:text-2xl lg:text-2xl xl:text-4xl font-bold mb-2"
        >
          About
        </motion.h2>
        <motion.h3
          variants={textVariants}
          initial={textVariants.hiddenFromLeft}
          animate={textVariants.fadeIn}
          className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold"
        >
          <span className="text-sky-900">console</span>.log(&quot;Hello World
          <span className="text-sky-900 font-extrabold"> ✌🏼</span> !&quot;)
        </motion.h3>
        <motion.h2
          variants={textVariants}
          initial={textVariants.hiddenFromLeft}
          animate={textVariants.fadeIn}
          className="text-2xl md:text-2xl lg:text-3xl xl:text-6xl  font-bold mt-8 mb-10"
        >
          Hi 🙋🏼‍♂️, my name is Arkar Min(<span className="text-sky-900">Kei</span>)
        </motion.h2>
        <motion.h3
          variants={textVariants}
          initial={textVariants.hiddenFromLeft}
          animate={textVariants.fadeIn}
          className="text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-4"
        >
          I write code and develop things relative to Web technology 🚀.
        </motion.h3>
        <motion.h3
          variants={textVariants}
          initial={textVariants.hiddenFromLeft}
          animate={textVariants.fadeIn}
          className="text-lg sm:text-xl lg:text-2xl xl:text-3xl"
        >
          My goal is to create tools and products that every one want to use and
          love 🎯.
        </motion.h3>
      </motion.div>
      <div className="w-full lg:w-[35%] flex justify-center items-center">
        <motion.div
          drag
          dragConstraints={{
            top: 1,
            right: 1,
            bottom: 1,
            left: 1,
          }}
          className="w-[140px] md:w-[150px] lg:w-[180px]"
        >
          <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 555">
            <motion.path
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              strokeWidth={14}
              strokeDasharray="0 1"
              stroke="green"
              d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
            />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
