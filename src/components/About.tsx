// src/components/About.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import {
  FaBriefcase,
  FaRegLightbulb,
  FaChartLine,
  FaGlobeAmericas,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

interface AnimatedPanelProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
  threshold?: number;
}

const AnimatedPanel: React.FC<AnimatedPanelProps> = ({
  children,
  className,
  delay = "",
  threshold = 0.2,
}) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });
  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className={`${className} ${
        startAnimation ? `animate-fadeInUp ${delay}` : "opacity-0"
      }`}>
      {children}
    </div>
  );
};

interface HighlightProps {
  children: React.ReactNode;
}

const Highlight: React.FC<HighlightProps> = ({ children }) => (
  <span className="text-accent font-fira-code font-semibold">{children}</span>
);

const About = () => {
  const photoPath = "/images/joao-grilo-photo.webp";
  const titleText = "About Me";
  const panelCommonClasses =
    "border border-accent/60 p-6 md:p-8 shadow-xl rounded-md panel-with-corners";
  // --- UPDATED: Internal Panel Background to use a subtle gradient ---
  const internalPanelBgClasses =
    "bg-gradient-to-b from-primary-bg/85 to-primary-bg/90";
  // -----------------------------------------------------------------

  const stats = [
    {
      label: "EXP",
      value: "4.5+ Yrs FS Dev Exp.",
      icon: <FaBriefcase className="mr-2 shrink-0" />,
    },
    {
      label: "METRIC",
      value: ">90 Lighthouse Score",
      icon: <FaRegLightbulb className="mr-2 shrink-0" />,
    },
    {
      label: "DATA",
      value: "~15% Traffic ↑ (SEO/Perf)",
      icon: <FaChartLine className="mr-2 shrink-0" />,
    },
    {
      label: "LANG",
      value: "English C2 (Fluent)",
      icon: <FaGlobeAmericas className="mr-2 shrink-0" />,
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Me"
      className="py-20 md:py-32 bg-primary-bg/70 backdrop-blur-lg scroll-mt-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <AnimatedText
          text={titleText}
          elementType="h2"
          className="text-3xl md:text-4xl font-bold font-fira-code text-primary text-center mb-12 md:mb-16"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-1 space-y-6">
            <AnimatedPanel
              className={`${panelCommonClasses} ${internalPanelBgClasses} flex flex-col items-center`}
              delay="animation-delay-200"
              threshold={0.3}>
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-accent shadow-xl">
                <Image
                  src={photoPath}
                  alt="Portrait of João Grilo, experienced Full-Stack Developer"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 639px) 224px, (max-width: 767px) 256px, 288px"
                  className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                  priority
                />
              </div>
            </AnimatedPanel>
            <AnimatedPanel
              className={`${panelCommonClasses} ${internalPanelBgClasses}`}
              delay="animation-delay-400"
              threshold={0.3}>
              <h3 className="font-fira-code text-xl text-accent mb-4 text-left">
                Key Metrics & Info:
              </h3>
              <div className="space-y-3">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="font-fira-code text-sm md:text-base flex items-start text-accent">
                    <span className="inline-flex items-center shrink-0">
                      {stat.icon}
                      <span className="text-primary/80 mx-1">{`[ ${stat.label}:`}</span>
                    </span>
                    <span className="flex-grow break-words">
                      <span className="text-accent">{`${stat.value}`}</span>
                      <span className="text-primary/80 ml-1">{`]`}</span>
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedPanel>
          </div>
          <div className="lg:col-span-2">
            <AnimatedPanel
              className={`${panelCommonClasses} ${internalPanelBgClasses}`}
              delay="animation-delay-300"
              threshold={0.3}>
              <p className="font-poppins text-secondary text-lg mb-6 leading-relaxed">
                As a Full-Stack Developer with over{" "}
                <Highlight>4.5 years</Highlight> of dedicated experience, I
                bring a passion for architecting, building, and fine-tuning{" "}
                <Highlight>high-performance web applications</Highlight>. My
                core expertise lies in{" "}
                <Highlight>PHP, JavaScript, and .NET Core</Highlight>, through
                which I&apos;ve consistently transformed intricate requirements
                into robust, scalable solutions that not only engage users but
                also fuel tangible business growth.
              </p>
              {/* --- ADDED PARAGRAPH SEPARATOR --- */}
              <hr className="w-1/3 my-4 sm:my-5 border-accent/20 mx-auto lg:mx-0 opacity-50" />
              {/* --------------------------------- */}
              <p className="font-poppins text-secondary text-lg mb-6 leading-relaxed">
                I am driven by the pursuit of exceptional application
                performance and user experience. This dedication is reflected in
                my work, frequently achieving{" "}
                <Highlight>Google Lighthouse scores above 90</Highlight> and
                contributing to significant outcomes like a{" "}
                <Highlight>~15% uplift in organic traffic</Highlight> via
                strategic SEO and performance optimization. For me, development
                is results-oriented; every line of code serves a clear business
                purpose.
              </p>
              {/* --- ADDED PARAGRAPH SEPARATOR --- */}
              <hr className="w-1/3 my-4 sm:my-5 border-accent/20 mx-auto lg:mx-0 opacity-50" />
              {/* --------------------------------- */}
              <p className="font-poppins text-secondary text-lg leading-relaxed">
                A firm believer in <Highlight>Agile principles</Highlight> and
                the power of continuous learning, I excel in collaborative
                environments where ideas flourish and teamwork leads to
                outstanding results. My development philosophy is inherently{" "}
                <Highlight>user-centric</Highlight>, prioritizing the creation
                of secure, intuitive, and efficient software. I enthusiastically
                embrace new technologies and methodologies to solve complex
                challenges and deliver solutions that make a real difference.
                (Fluent English - C2 Level).
              </p>
            </AnimatedPanel>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
