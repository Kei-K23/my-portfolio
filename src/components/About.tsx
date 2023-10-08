"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div className="select-none py-14 px-10 tracking-wider">
      <h2 className="text-4xl font-bold mb-2">About</h2>
      <h3 className="text-xl font-bold">
        <span className="text-sky-900">console</span>.log(&quot;Hello World
        <span className="text-sky-900 font-extrabold"> -_-</span> !&quot;)
      </h3>
      <h2 className="text-3xl md:text-5xl font-bold mt-8 mb-4">
        Hi, my name is Arkar Min(<span className="text-sky-900">Kei</span>)
      </h2>
      <h3 className="text-xl md:text-2xl">
        I write code and develop things relative to Web technology.
      </h3>
      <h3 className="text-xl md:text-2xl">
        My goal is to create tools and products that every one want to use and
        love.
      </h3>
    </motion.div>
  );
};

export default About;
