"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { projectLists } from "@/lib/projectLists";
import ProjectSlide from "./ProjectSlide";

export default function ProjectsScrollTransition() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      {projectLists.map((project, index) => (
        <ProjectSlide
          key={index}
          name={project.name}
          description={project.description}
          githubURL={project.githubURL}
          img={project.img}
          languageUsage={project.languageUsage}
          webURL={project.webURL}
        />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </div>
  );
}
