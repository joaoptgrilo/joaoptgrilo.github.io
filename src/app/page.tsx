// src/app/page.tsx
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// Dynamically import all sections below the fold
// We set ssr: false because these components use client-side hooks like
// useInView, and this prevents potential hydration mismatches while still
// getting the code-splitting benefits.
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Certifications = dynamic(() => import("@/components/Certifications"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

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
