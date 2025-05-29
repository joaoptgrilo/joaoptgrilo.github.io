// src/app/page.tsx
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <>
      <Navigation />
      {/* 
        TEMPORARY CHANGE FOR TESTING HERO DIMENSIONS: 
        Simplified <main> tag. 
        Original was: <main className="flex flex-col items-center justify-between overflow-x-hidden">
        If Hero is now full viewport, then classes on <main> were constraining it.
        We'll need to decide how to structure <main> if its children (like About, Skills)
        should be centered while Hero remains full-width/height.
      */}
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
