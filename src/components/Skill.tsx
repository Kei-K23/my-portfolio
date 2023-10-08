"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/skillLists";
const Skill = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="select-none py-4 px-10 tracking-wider "
    >
      <h2 className="text-4xl font-bold mb-2">Skills</h2>
      <h3 className="text-xl font-bold">
        <span className="text-purple-700">while </span>
        <span className="text-yellow-500">( </span>
        <span className="text-sky-900">skills.length</span> &gt; 0{" "}
        <span className="text-yellow-500"> )</span>{" "}
        <span className="text-yellow-500">&#123;</span>
      </h3>
      <div className="my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((s) => (
          <motion.div
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileHover={{ translateY: -10 }}
            key={s.name}
            className="primary-col-bg p-4 primary-col-border "
          >
            <h2 className="text-center font-extrabold text-lg md:text-xl ">
              {s.name}
            </h2>
          </motion.div>
        ))}
      </div>
      <h3 className="text-xl font-bold text-yellow-500">&#125;</h3>
    </motion.div>
  );
};

export default Skill;
