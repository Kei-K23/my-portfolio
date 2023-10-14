import About from "@/components/About";
import Experience from "@/components/Experience";
import PageSections from "@/components/ProjectsScrollTransition";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="tracking-widest ">
      {/* <PageSections /> */}
      <About />
      <Experience />
      <Project />
      <section className="min-h-screen main-section">profile</section>
      <section className="min-h-screen main-section">about</section>
    </main>
  );
}
