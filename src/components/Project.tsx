"use client";
import React from "react";
import ProjectsScrollTransition from "./ProjectsScrollTransition";

const Project = () => {
  return (
    <section className="w-full main-section relative">
      <h2 className="sticky top-10 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
        My well-structure <span className="text-green-700">Projects</span>
      </h2>
      <ProjectsScrollTransition />
    </section>
  );
};

export default Project;
