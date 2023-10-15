"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { imgVariants, textVariants } from "@/lib/motion";

const expLists = [
  "Working with HTML, CSS, JavaScript for 10 months until now",
  "Builds static website only vanilla JavaScript for 8 months until now",
  "Builds modern website with latest language, frameworks, libraries and trend for 5 months until now",
  "Working with database and backend for 4 months until now",
];

const Experience = () => {
  return (
    <section className="w-full select-none main-section min-h-screen flex justify-start md:justify-center items-start md:items-center flex-col md:flex-row page-padding gap-20">
      <motion.div
        variants={imgVariants}
        className="w-full lg:w-[50%] grid grid-cols-2 gap-7 "
      >
        <motion.div
          variants={imgVariants}
          initial="hidden"
          whileInView={imgVariants.fadeIn}
          className="overflow-hidden rounded-2xl shadow-lg shadow-neutral-700 hover:shadow-none"
        >
          <Image
            src="/photo_1.jpg"
            width={100}
            height={100}
            alt="photo-1"
            className="hover:scale-105  transition-all w-full h-[200px] lg:h-[200px] object-cover bg-cover "
          />
        </motion.div>
        <motion.div
          variants={imgVariants}
          initial="hidden"
          whileInView={imgVariants.fadeIn}
          className="overflow-hidden rounded-2xl shadow-lg shadow-neutral-700 hover:shadow-none"
        >
          <Image
            src="/photo_2.jpg"
            width={100}
            height={100}
            alt="photo-2"
            className="hover:scale-105 transition-all w-full h-[200px] lg:h-[200px] rounded-2xl shadow-lg shadow-neutral-700"
          />
        </motion.div>
        <motion.div
          variants={imgVariants}
          initial="hidden"
          whileInView={imgVariants.fadeIn}
          className="overflow-hidden rounded-2xl shadow-lg shadow-neutral-700 col-span-2 hover:shadow-none"
        >
          <Image
            src="/photo_3.jpg"
            width={100}
            height={100}
            alt="photo-3"
            className="hover:scale-105 transition-all w-full h-[200px] lg:h-[200px]  rounded-2xl shadow-lg shadow-neutral-700"
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={textVariants}
        initial={textVariants.hiddenFromRight}
        animate={textVariants.fadeIn}
        className="w-full lg:w-[50%] "
      >
        <motion.h2
          variants={textVariants}
          className="text-xl sm:text-2xl lg:text-2xl xl:text-4xl font-bold mb-2"
        >
          Experiences
        </motion.h2>
        <motion.h3
          variants={textVariants}
          initial={textVariants.hiddenFromRight}
          animate={textVariants.fadeIn}
          className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold"
        >
          <span className="text-purple-700">for </span>
          <span className="text-yellow-500">(</span>
          <span className="text-sky-900">let</span> e = 0 ; e === skills.length
          ; e++ <span className="text-yellow-500">)</span>{" "}
          <span className="text-yellow-500">&#123;</span>
        </motion.h3>
        <motion.ul
          variants={textVariants}
          initial={textVariants.hiddenFromRight}
          animate="listFadeIn"
          className="list-decimal pl-10 my-4"
        >
          {expLists.map((list, index) => (
            <motion.li
              variants={textVariants}
              key={index}
              custom={index}
              className="hover:text-green-700 transition-colors text-lg  xl:text-xl font-bold mb-4"
            >
              {list}
            </motion.li>
          ))}
        </motion.ul>
        <motion.h3
          variants={textVariants}
          initial={textVariants.hiddenFromRight}
          animate={textVariants.fadeIn}
          className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold text-yellow-500"
        >
          &#125;
        </motion.h3>
      </motion.div>
    </section>
  );
};

export default Experience;
