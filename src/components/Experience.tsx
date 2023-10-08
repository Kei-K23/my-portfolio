"use client";

import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="select-none py-14 px-10 tracking-wider "
    >
      <h2 className="text-4xl font-bold mb-2">Experiences</h2>
      <h3 className="text-xl font-bold">
        <span className="text-purple-700">for </span>
        <span className="text-yellow-500">(</span>
        <span className="text-sky-900">let</span> e = 0 ; e === skills.length ;
        e++ <span className="text-yellow-500">)</span>{" "}
        <span className="text-yellow-500">&#123;</span>
      </h3>
      <ul className="list-decimal pl-10 my-4">
        <li className="text-xl mb-2 font-bold">
          Working with HTML, CSS, JavaScript for 7 months until now
        </li>
        <li className="text-xl mb-2  font-bold">
          Builds static website only vanilla JavaScript for 6 months until now
        </li>
        <li className="text-xl mb-2  font-bold">
          Working with database and backend for 4 months until now
        </li>
        <li className="text-xl mb-2  font-bold">
          Builds modern website with latest language and trend for 3 months
          until now
        </li>
      </ul>
      <h3 className="text-xl font-bold text-yellow-500">&#125;</h3>
    </motion.div>
  );
};

export default Experience;
