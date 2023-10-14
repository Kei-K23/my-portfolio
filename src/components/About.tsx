"use client";
import SVG from "@/lib/SVG";
import { textVariants } from "@/lib/motion";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full select-none main-section min-h-screen flex justify-start md:justify-center items-start md:items-center flex-col md:flex-row">
      <motion.div className=" w-full mt-24 md:mt-0 lg:w-[65%] div-padding md:pl-20 lg:pl-40">
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
        {SVG.Github()}
      </div>
    </section>
  );
};

export default About;
