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
  className = "",
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
  <span className="text-[var(--color-accent-DEFAULT)] font-fira-code font-semibold bg-[var(--color-accent-opacity-20)] px-1 rounded-sm">
    {children}
  </span>
);

interface StatItem {
  id: string;
  label: string;
  value: string;
  description?: string;
  icon: JSX.Element;
}

const CountUp: React.FC<{ end: number; suffix?: string }> = ({
  end,
  suffix = "",
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    if (end === 0) return;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const photoPath = "/images/joao-grilo-photo.webp";
  const titleText = "About Me";

  const panelShellClasses = "panel-with-corners animate-glow-shadow rounded-md";
  const panelContentClasses =
    "bg-light-panel-bg p-4 md:p-6 h-full flex flex-col text-[var(--color-text-on-light)]";

  const bioSnippets = [
    {
      id: "bs1",
      content: (
        <>
          A <Highlight>dedicated Full-Stack Developer</Highlight> with over{" "}
          <Highlight>4.5 years</Highlight> of experience crafting{" "}
          <Highlight>high-performance, scalable web applications</Highlight>.
          Skilled at transforming complex needs into clean, robust solutions
          that reliably serve high traffic.
        </>
      ),
    },
    {
      id: "bs2",
      content: (
        <>
          Expertise in{" "}
          <Highlight>PHP, JavaScript (React), and .NET Core</Highlight>. Known
          for delivering projects that achieve{" "}
          <Highlight>Google Lighthouse scores &gt; 90</Highlight> and driving
          organic traffic growth of approximately{" "}
          <Highlight>15% through SEO and performance optimization</Highlight>.
        </>
      ),
    },
    {
      id: "bs3",
      content: (
        <>
          Passionate about <Highlight>Agile methodologies</Highlight> and
          continuous learning. Embraces a{" "}
          <Highlight>user-centric approach</Highlight> to build scalable,
          secure, and intuitive software. Fluent in English (C2 level).
        </>
      ),
    },
    {
      id: "bs4",
      content: (
        <>
          In a <Highlight>remote work</Highlight> setting, values a{" "}
          <Highlight>healthy work-life balance</Highlight>, dedicating time to{" "}
          <Highlight>continuous learning</Highlight> through{" "}
          <Highlight>certifications</Highlight>, exploring{" "}
          <Highlight>new technologies</Highlight>, and enjoying meaningful
          moments with <Highlight>family and pets</Highlight>.
        </>
      ),
    },
  ];

  const stats: StatItem[] = [
    {
      id: "exp",
      label: "Experience",
      value: "4.5",
      description: "Years Full-Stack Dev",
      icon: <FaBriefcase />,
    },
    {
      id: "lighthouse",
      label: "Lighthouse",
      value: "90",
      description: "Average Score",
      icon: <FaRegLightbulb />,
    },
    {
      id: "traffic",
      label: "Traffic Growth",
      value: "15",
      description: "SEO/Perf Optimization (%)",
      icon: <FaChartLine />,
    },
    {
      id: "lang",
      label: "Languages",
      value: "C2",
      description: "English Fluent",
      icon: <FaGlobeAmericas />,
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Me"
      className="pt-16 md:pt-20 lg:pt-24 scroll-mt-40 md:scroll-mt-44 lg:scroll-mt-48 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl pt-8 md:pt-10 lg:pt-12 pb-12 bg-primary-bg/40 backdrop-blur-md">
        <AnimatedText
          text={titleText}
          elementType="h2"
          className="text-3xl md:text-4xl font-bold font-fira-code text-primary text-center mb-12"
          threshold={0.1}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {/* Photo + Name panel */}
          <AnimatedPanel
            className={`md:col-span-1 lg:col-span-1 md:row-span-2 ${panelShellClasses}`}
            delay="animation-delay-200"
            threshold={0.3}>
            <div
              className={`${panelContentClasses} items-center text-center justify-between`}>
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[var(--color-text-on-light)] shadow-xl shrink-0">
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
              <div className="mt-auto pt-4">
                <p className="font-fira-code text-xl text-[var(--color-accent-DEFAULT)] uppercase tracking-wider">
                  JOÃO GRILO
                </p>
                <p className="font-fira-code text-sm text-[var(--color-text-on-light)]/80 uppercase tracking-wide mt-0.5">
                  Full-Stack Developer
                </p>
              </div>
            </div>
          </AnimatedPanel>

          {/* Bio snippet 1 */}
          <AnimatedPanel
            className={`md:col-span-2 lg:col-span-3 ${panelShellClasses}`}
            delay="animation-delay-300"
            threshold={0.3}>
            <div className={`${panelContentClasses}`}>
              <p className="font-poppins md:text-lg leading-relaxed flex-grow">
                {bioSnippets[0].content}
              </p>
            </div>
          </AnimatedPanel>

          {/* Bio snippet 2 */}
          <AnimatedPanel
            className={`md:col-start-2 md:col-span-2 lg:col-start-2 lg:col-span-3 ${panelShellClasses}`}
            delay="animation-delay-400"
            threshold={0.3}>
            <div className={`${panelContentClasses}`}>
              <p className="font-poppins md:text-lg leading-relaxed flex-grow">
                {bioSnippets[1].content}
              </p>
            </div>
          </AnimatedPanel>

          {/* Stats */}
          <AnimatedPanel
            className={`md:col-span-3 lg:col-span-4 ${panelShellClasses}`}
            delay="animation-delay-500"
            threshold={0.2}>
            <div className={`${panelContentClasses}`}>
              <h3 className="font-fira-code text-xl text-[var(--color-accent-DEFAULT)] mb-6 text-center sm:text-left">
                Key Metrics & Info:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="bg-[var(--color-primary-bg)]/20 border border-[var(--color-accent-opacity-50)] rounded-md p-4 flex flex-col items-center justify-between text-center space-y-2 transition-all duration-300 hover:bg-[var(--color-primary-bg)]/30 hover:border-accent">
                    <div className="text-[var(--color-accent-DEFAULT)] text-3xl">
                      {stat.icon}
                    </div>
                    <p className="font-fira-code text-[var(--color-text-on-light)] text-base font-semibold leading-tight">
                      {/* For numeric stats use CountUp */}
                      {isNaN(Number(stat.value)) ? (
                        stat.value
                      ) : (
                        <CountUp
                          end={Number(stat.value)}
                          suffix={stat.label === "Traffic Growth" ? "% ↑" : ""}
                        />
                      )}
                    </p>
                    <p className="font-fira-code text-[var(--color-text-on-light)]/80 text-xs leading-tight">
                      {stat.label}
                    </p>
                    {stat.description && (
                      <p className="font-poppins text-[var(--color-text-on-light)]/70 text-[11px] leading-tight pt-0.5">
                        {stat.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedPanel>

          {/* Bio snippet 3 */}
          <AnimatedPanel
            className={`md:col-span-3 lg:col-span-4 ${panelShellClasses}`}
            delay="animation-delay-600"
            threshold={0.3}>
            <div className={`${panelContentClasses}`}>
              <p className="font-poppins md:text-lg leading-relaxed">
                {bioSnippets[2].content}
              </p>
            </div>
          </AnimatedPanel>

          {/* Bio snippet 4 - new personal snippet */}
          <AnimatedPanel
            className={`md:col-span-3 lg:col-span-4 ${panelShellClasses}`}
            delay="animation-delay-700"
            threshold={0.3}>
            <div className={`${panelContentClasses}`}>
              <p className="font-poppins md:text-lg leading-relaxed">
                {bioSnippets[3].content}
              </p>
            </div>
          </AnimatedPanel>
        </div>
      </div>
    </section>
  );
};

export default About;
