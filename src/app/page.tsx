// src/app/page.tsx
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import SectionSkeleton from "@/components/SectionSkeleton";

// Sections near the top of the page are loaded normally for fast initial paint.
const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));

// Sections further down are loaded only on the client-side, with a skeleton fallback.
// This is the key to reducing main-thread work and improving mobile performance.
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});
const Certifications = dynamic(() => import("@/components/Certifications"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});

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
