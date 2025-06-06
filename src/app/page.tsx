// src/app/page.tsx
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// Dynamically import all sections below the fold.
// The `{ ssr: false }` option is removed to comply with Server Component rules.
// The code-splitting and lazy loading benefits are maintained by default.
const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Experience = dynamic(() => import("@/components/Experience"));
const Projects = dynamic(() => import("@/components/Projects"));
const Certifications = dynamic(() => import("@/components/Certifications"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <>
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}