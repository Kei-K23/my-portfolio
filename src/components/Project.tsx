"use client";

import { motion } from "framer-motion";
import { projectLists } from "@/lib/projectLists";
import Link from "next/link";
import { GithubIcon, Globe } from "lucide-react";
const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="py-4 px-10 tracking-wider primary-col-border"
    >
      <h2 className="text-4xl font-bold mb-2">Projects</h2>
      <h3 className="text-xl font-bold">
        <span className="text-purple-700">if </span>
        <span className="text-yellow-500">( </span>
        <span className="text-sky-900">projects.length</span> &gt; 0{" "}
        <span className="text-yellow-500"> )</span>{" "}
        <span className="text-yellow-500">&#123;</span>
      </h3>
      <div className="my-4 grid grid-cols-3 gap-4">
        {projectLists.map((p) => (
          <div
            key={p.name}
            className="primary-col-bg p-4 primary-col-border hover:bg-transparent hover:primary-col-border"
          >
            <div className="flex justify-between items-center">
              <h2 className="underline text-xl font-extrabold mb-3">
                {p.name}
              </h2>
              <div className="flex justify-between items-center gap-3">
                <Link href={p.githubURL} target="_blank">
                  <GithubIcon />
                </Link>
                <Link href={p.webURL} target="_blank">
                  <Globe />
                </Link>
              </div>
            </div>
            <p className="text-lg">{p.description}</p>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-bold text-yellow-500">&#125;</h3>
    </motion.div>
  );
};

export default Project;
