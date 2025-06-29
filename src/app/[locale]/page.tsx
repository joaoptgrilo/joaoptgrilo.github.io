// src/app/[locale]/page.tsx
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));

const DeferredSections = dynamic(() => import("@/components/DeferredSections"));

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Skills />
      <DeferredSections />
    </main>
  );
}