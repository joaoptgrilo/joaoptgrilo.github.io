// src/app/page.tsx
// Removed imports for Navigation, Footer, ScrollToTopButton if they are in RootLayout
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience"; // Placeholder
import Projects from "@/components/Projects"; // Using actual component
import Certifications from "@/components/Certifications"; // Placeholder
import Contact from "@/components/Contact"; // Placeholder

export default function Home() {
  return (
    <>
      {/* Navigation is now likely in RootLayout */}
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      {/* Footer and ScrollToTopButton are now likely in RootLayout */}
    </>
  );
}
