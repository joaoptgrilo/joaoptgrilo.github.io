// src/app/page.tsx
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import DeferredSections from "@/components/DeferredSections"; // Import the client component

// Load the components that are visible above the fold
const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Skills />
      {/* Render the client component that will handle all deferred loading */}
      <DeferredSections />
    </main>
  );
}
