// src/app/page.tsx
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import DeferredSections from "@/components/DeferredSections"; // Import the client component

// Only the component directly below the fold remains here for the fastest initial render.
const About = dynamic(() => import("@/components/About"));

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      {/* ALL other sections, including Skills, are now handled by the client component */}
      <DeferredSections />
    </main>
  );
}
