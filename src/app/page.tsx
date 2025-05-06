// src/app/page.tsx
import Navigation from "@/components/Navigation"; // Adjust path if alias isn't setup: '../components/Navigation'
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation might be moved to layout.tsx later for stickiness */}
      <Navigation />

      {/* Using <main> for semantic content area */}
      {/* Consider adding container/padding classes here or within sections */}
      <main className="flex flex-col">
        {/* Sections rendered in the order defined by the layout sketch */}
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
