// src/app/[locale]/page.tsx
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// This export enables Incremental Static Regeneration (ISR)
// It tells Next.js to pre-build this page and revalidate it at most once per hour.
export const revalidate = 3600; // Revalidate every hour (3600 seconds)

// Carrega os componentes que são visíveis "above the fold"
const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));

// Carrega o componente que gere todas as secções "below the fold"
const DeferredSections = dynamic(() => import("@/components/DeferredSections"));

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Skills />
      {/* Renderiza o componente cliente que vai gerir todo o carregamento diferido */}
      <DeferredSections />
    </main>
  );
}