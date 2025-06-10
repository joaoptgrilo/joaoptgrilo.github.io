// src/app/page.tsx
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import DeferredSections from "@/components/DeferredSections"; // Import the new client component

// Sections near the top of the page are loaded normally for fast initial paint.
const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Skills />
      {/* Render the client component that will handle deferred loading */}
      <DeferredSections />
    </main>
  );
}
