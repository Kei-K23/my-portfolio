"use client";
import React from "react";
import ProjectsScrollTransition from "./ProjectsScrollTransition";

const Project = () => {
  return (
    <section className="w-full relative">
      <h2 className="sticky top-0 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold z-10 nav-bg py-4">
        My well-structure <span className="text-green-700">Projects</span>
      </h2>
      <ProjectsScrollTransition />
    </section>
  );
};

export default Project;
