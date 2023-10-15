import About from "@/components/About";
import Experience from "@/components/Experience";
import PageSections from "@/components/ProjectsScrollTransition";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="tracking-widest ">
      <About />
      <Experience />
      <Project />
      <Skill />
      <Contact />
    </main>
  );
}
