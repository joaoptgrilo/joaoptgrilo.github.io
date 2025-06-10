// src/app/page.tsx
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Experience = dynamic(() => import("@/components/Experience"));
const Projects = dynamic(() => import("@/components/Projects"));
const Certifications = dynamic(() => import("@/components/Certifications"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
