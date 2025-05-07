// src/components/About.tsx
import React from "react";
import Image from "next/image";

const About = () => {
  const photoPath = "/images/joao-grilo-photo.webp";

  return (
    <section
      id="about"
      aria-label="About Me"
      className="py-20 md:py-32 bg-secondary-bg scroll-mt-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold font-fira-code text-primary text-center mb-12 md:mb-16 with-blinking-cursor">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-center">
          <div className="md:col-span-1 flex justify-center md:justify-start order-first md:order-none">
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-xl border-4 border-accent">
              <Image
                src={photoPath}
                alt="Portrait of João Grilo, experienced Full-Stack Developer"
                fill
                style={{ objectFit: "cover" }}
                className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                priority
              />
            </div>
          </div>

          <div className="md:col-span-2 text-left">
            <p className="font-poppins text-secondary text-lg mb-6 leading-relaxed">
              As a Full-Stack Developer with over 4.5 years of dedicated
              experience, I bring a passion for architecting, building, and
              fine-tuning high-performance web applications. My core expertise
              lies in PHP, JavaScript, and .NET Core, through which I&apos;ve
              consistently transformed intricate requirements into robust,
              scalable solutions that not only engage users but also fuel
              tangible business growth.
            </p>
            <p className="font-poppins text-secondary text-lg mb-6 leading-relaxed">
              I am driven by the pursuit of exceptional application performance
              and user experience. This dedication is reflected in my work,
              frequently achieving Google Lighthouse scores above 90 and
              contributing to significant outcomes like a ~15% uplift in organic
              traffic via strategic SEO and performance optimization. For me,
              development is results-oriented; every line of code serves a clear
              business purpose.
            </p>
            <p className="font-poppins text-secondary text-lg leading-relaxed">
              A firm believer in Agile principles and the power of continuous
              learning, I excel in collaborative environments where ideas
              flourish and teamwork leads to outstanding results. My development
              philosophy is inherently user-centric, prioritizing the creation
              of secure, intuitive, and efficient software. I enthusiastically
              embrace new technologies and methodologies to solve complex
              challenges and deliver solutions that make a real difference.
              (Fluent English - C2 Level).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
