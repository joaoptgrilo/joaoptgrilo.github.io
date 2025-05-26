// src/components/About.tsx
"use client"; 

import React, { useEffect, useState } from "react"; 
import Image from "next/image";
import AnimatedText from "./AnimatedText"; 
import { FaBriefcase, FaRegLightbulb, FaChartLine, FaGlobeAmericas } from 'react-icons/fa'; 
import { useInView } from 'react-intersection-observer'; 

// --- CORRECTED Props type for AnimatedPanel ---
interface AnimatedPanelProps {
  children: React.ReactNode;
  className?: string;
  delay?: string; 
  threshold?: number; 
}

const AnimatedPanel: React.FC<AnimatedPanelProps> = ({ 
  children, 
  className = "", 
  delay = "", 
  threshold = 0.2 
}) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: threshold });
  useEffect(() => { if (inView) { setStartAnimation(true); } }, [inView]);
  return (
    <div 
      ref={ref} 
      className={`${className} ${startAnimation ? `animate-fadeInUp ${delay}` : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

// --- CORRECTED Props type for Highlight ---
interface HighlightProps {
  children: React.ReactNode;
}

const Highlight: React.FC<HighlightProps> = ({children}) => { // Added explicit return block
  return (
    <span className="text-accent font-fira-code font-semibold bg-accent/10 px-1 rounded-sm">{children}</span>
  );
};

// --- CORRECTED StatItem Interface ---
interface StatItem {
  id: string;
  label: string;
  value: string;
  description?: string; 
  icon: JSX.Element;
}
// --------------------------------

const About = () => {
  const photoPath = "/images/joao-grilo-photo.webp";
  const titleText = "About Me";

  const bioSnippetModuleClasses = "bg-secondary-bg/50 backdrop-blur-sm border border-accent/40 rounded-md p-4 md:p-6 shadow-lg panel-with-corners";
  const statsContainerModuleClasses = "bg-primary-bg/70 border border-accent/50 rounded-md p-6 md:p-8 shadow-xl panel-with-corners animate-glow-shadow";

  // --- CORRECTED bioSnippets to use JSX for the 'text' property ---
  const bioSnippets = [
    { 
      id: "bs1", 
      text: (
        <>A highly accomplished Full-Stack Developer with <Highlight>4.5+ years</Highlight> architecting & optimizing <Highlight>high-performance, high-traffic web applications</Highlight>. Consistently transforming intricate requirements into robust, scalable solutions.</>
      ) 
    },
    { 
      id: "bs2", 
      text: (
        <>Expertise in <Highlight>PHP, JavaScript (React), & .NET Core</Highlight>. Proven ability to achieve <Highlight>Google Lighthouse scores {'>'}90</Highlight> and contribute to a <Highlight>~15% organic traffic growth</Highlight> through strategic SEO & performance engineering.</>
      ) // Corrected > to {'>'}
    },
    { 
      id: "bs3", 
      text: (
        <>Firm believer in <Highlight>Agile principles</Highlight> & continuous skill enhancement. Inherently <Highlight>user-centric</Highlight> philosophy, focused on delivering scalable, secure, and intuitive software solutions. (Fluent English - C2 Level).</>
      ) 
    }
  ];
  // --------------------------------------------------------------------
  
  const stats: StatItem[] = [
    { id: "exp", label: "Experience", value: "4.5+ Yrs", description: "Full-Stack Dev", icon: <FaBriefcase /> },
    { id: "lighthouse", label: "Lighthouse", value: ">90", description: "Avg. Score", icon: <FaRegLightbulb /> },
    { id: "traffic", label: "Traffic Growth", value: "~15% ↑", description: "SEO/Perf Opt.", icon: <FaChartLine /> },
    { id: "lang", label: "Languages", value: "English C2", description: "Fluent", icon: <FaGlobeAmericas /> }
  ];

  return (
    <section id="about" aria-label="About Me" className="py-20 md:py-32 bg-primary-bg/70 backdrop-blur-lg scroll-mt-16 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedText
          text={titleText}
          elementType="h2"
          className="text-3xl md:text-4xl font-bold font-fira-code text-primary text-center mb-16 md:mb-20" 
          threshold={0.1} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          
          <AnimatedPanel 
            className="md:col-span-1 lg:col-span-1 md:row-span-2 bg-primary-bg/80 border border-accent/60 panel-with-corners animate-glow-shadow rounded-md flex flex-col items-center text-center p-6 space-y-4"
            delay="animation-delay-200"
            threshold={0.3}
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-accent shadow-xl">
              <Image
                  src={photoPath}
                  alt="Portrait of João Grilo" 
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 767px) 224px, 256px" 
                  className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                  priority
              />
            </div>
            <div> 
                <p className="font-fira-code text-xl text-accent uppercase tracking-wider">
                    JOÃO GRILO
                </p>
                <p className="font-fira-code text-sm text-primary/80 uppercase tracking-wide mt-0.5">
                    Full-Stack Developer
                </p>
            </div>
          </AnimatedPanel>

          <AnimatedPanel 
            className={`md:col-span-2 lg:col-span-2 ${bioSnippetModuleClasses}`}
            delay="animation-delay-300"
            threshold={0.3}
          >
            <p className="font-poppins text-secondary md:text-lg leading-relaxed">{bioSnippets[0].text}</p>
          </AnimatedPanel>
          
          <AnimatedPanel 
            className={`md:col-start-2 md:col-span-2 lg:col-start-2 lg:col-span-2 ${bioSnippetModuleClasses}`}
            delay="animation-delay-400"
            threshold={0.3}
          >
            <p className="font-poppins text-secondary md:text-lg leading-relaxed">{bioSnippets[1].text}</p>
          </AnimatedPanel>

          <AnimatedPanel
            className={`md:col-span-3 lg:col-span-4 ${statsContainerModuleClasses}`}
            delay="animation-delay-500" 
            threshold={0.2} 
          >
              <h3 className="font-fira-code text-xl text-accent mb-6 text-center sm:text-left"> 
                  Key Metrics & Info:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                  {stats.map((stat) => ( // 'stat' is now correctly typed as StatItem
                      <div 
                          key={stat.id} 
                          className={`
                              bg-secondary-bg/70 border border-accent/50 rounded-md p-4 
                              flex flex-col items-center justify-between text-center space-y-2 
                              transition-all duration-300 hover:bg-secondary-bg/90 hover:border-accent/70 hover:scale-105
                          `}
                      >
                          <div className="text-accent text-3xl"> 
                              {stat.icon}
                          </div>
                          <p className="font-fira-code text-primary text-base font-semibold leading-tight">
                              {stat.value}
                          </p>
                          <p className="font-fira-code text-secondary text-xs leading-tight">
                              {stat.label}
                          </p>
                          {stat.description && (
                                <p className="font-poppins text-secondary/80 text-[11px] leading-tight pt-0.5">
                                  {stat.description}
                                </p>
                          )}
                      </div>
                  ))}
              </div>
          </AnimatedPanel>

           <AnimatedPanel 
            className={`md:col-span-3 lg:col-span-4 ${bioSnippetModuleClasses}`}
            delay="animation-delay-600"
            threshold={0.3}
          >
            <p className="font-poppins text-secondary md:text-lg leading-relaxed">{bioSnippets[2].text}</p>
          </AnimatedPanel>

        </div> 
      </div>
    </section>
  );
};
export default About;