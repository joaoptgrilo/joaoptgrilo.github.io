// src/data/en/projectsData.tsx
import { Project } from "../types";
import React from "react";
import Highlight from "@/components/Highlight";

export const projectsData: Project[] = [
  {
    id: "fedrax-platforms",
    title: "Fedrax Platforms (Gameblog, CineSeries, etc.)",
    imageUrl: "/images/projects/fedrax-platforms-showcase.webp",
    imageAlt:
      "Showcase of Fedrax platforms including Gameblog and CineSeries user interfaces",
    description:
      "Engineered and maintained high-traffic media platforms, enhancing performance and stability to support millions of users and drive substantial advertising revenue.",
    detailedDescription: [
      <p key="d1">
        As a Full-Stack Developer at Fedrax, I played a key role in the
        development and maintenance of several high-traffic, media-rich content
        platforms, including <Highlight>Gameblog.fr</Highlight> and{" "}
        <Highlight>CineSeries.com</Highlight>. These platforms serve millions of
        pageviews and rely on <Highlight>99.9%+ uptime</Highlight> to maximize
        advertising revenue.
      </p>,
      <p key="d2">
        My role involved full-stack responsibilities, from{" "}
        <Highlight>database query optimization</Highlight> in MySQL to building
        and consuming internal <Highlight>REST APIs</Highlight>. On the
        frontend, I engineered dynamic, reusable components with React and
        legacy jQuery, focusing on <Highlight>performance tuning</Highlight> to
        achieve Google Lighthouse scores consistently above 90.
      </p>,
      <p key="d3">
        To ensure business continuity, I adhered to a strict{" "}
        <Highlight>Gitflow</Highlight> branching model within a{" "}
        <Highlight>GitLab</Highlight> CI/CD environment, guaranteeing stable and
        predictable releases essential for revenue and user trust.
      </p>,
    ],
    techStack: [
      { name: "PHP", description: "Server-side scripting language." },
      {
        name: "CodeIgniter",
        description: "PHP web framework for rapid development.",
      },
      { name: "MySQL", description: "Relational database management system." },
      { name: "WordPress", description: "Content management system." },
      {
        name: "React",
        description: "JavaScript library for building user interfaces.",
      },
      {
        name: "jQuery",
        description: "JavaScript library for DOM manipulation.",
      },
      { name: "SCSS", description: "CSS preprocessor with advanced features." },
      {
        name: "GitLab",
        description:
          "Web-based DevOps lifecycle tool and Git repository manager.",
      },
    ],
    liveLink: "https://www.gameblog.fr/",
    type: "private",
  },
  {
    id: "personal-dotnet-server",
    title: "Personal C#/.NET Core Backend Server",
    imageUrl: "/images/projects/personal-dotnet-server-architecture.webp",
    imageAlt:
      "Conceptual architecture diagram of the personal C#/.NET Core backend server",
    description:
      "Architected a robust C#/.NET backend server from the ground up, mastering API design, secure authentication, and cross-platform deployment.",
    detailedDescription: [
      <p key="d1">
        To master modern <Highlight>backend architecture</Highlight>, I designed
        and built this scalable server from scratch using C# and .NET Core,
        focusing on clean code and enterprise design patterns.
      </p>,
      <p key="d2">
        I implemented a full <Highlight>RESTful API</Highlight> with secure{" "}
        <Highlight>authentication/authorization</Highlight> mechanisms and a
        logical data model. A key achievement was ensuring the server could be
        deployed cross-platform on both Windows and Linux environments,
        showcasing its flexibility.
      </p>,
      <p key="d3">
        This self-directed project was crucial for honing my skills in{" "}
        <Highlight>API design</Highlight>, dependency injection, and creating
        maintainable, production-ready backend services.
      </p>,
    ],
    techStack: [
      {
        name: "C#",
        description: "Modern, object-oriented programming language.",
      },
      {
        name: ".NET Core",
        description: "Cross-platform, open-source framework by Microsoft.",
      },
      {
        name: "API Design",
        description: "Best practices for creating robust and usable APIs.",
      },
      {
        name: "Backend Architecture",
        description: "Design patterns for server-side application structure.",
      },
    ],
    type: "description-focus",
  },
  {
    id: "personal-vanillajs-framework",
    title: "Custom Vanilla JS Frontend Framework",
    imageUrl: "/images/projects/personal-vanillajs-framework-concepts.webp",
    imageAlt:
      "Visual representation of concepts in the custom Vanilla JS frontend framework",
    description:
      "Engineered a lightweight, zero-dependency frontend framework in Vanilla JS to deconstruct and master core concepts like client-side routing and component-based architecture.",
    detailedDescription: [
      <p key="d1">
        To look "under the hood" of modern libraries like React, I built my own
        <Highlight>dependency-free framework</Highlight> using only{" "}
        <Highlight>Vanilla JavaScript (ES6+)</Highlight>. The goal was to
        replicate core features to gain a fundamental understanding of how they
        work.
      </p>,
      <p key="d2">
        The framework features a{" "}
        <Highlight>JSON-driven component system</Highlight> that renders the UI
        from a structured data object. I also implemented a{" "}
        <Highlight>client-side router</Highlight> using the History API,
        enabling SPA-like navigation without page reloads.
      </p>,
      <p key="d3">
        This project provided invaluable insights into the inner workings of{" "}
        <Highlight>state management</Highlight>, the{" "}
        <Highlight>virtual DOM concept</Highlight> (which I emulated simply),
        and the architectural challenges of building a scalable frontend from
        first principles.
      </p>,
    ],
    techStack: [
      {
        name: "Vanilla JS",
        description: "Standard JavaScript without external libraries.",
      },
      {
        name: "JavaScript (ES6+)",
        description: "Modern JavaScript features and syntax.",
      },
      {
        name: "Frontend Architecture",
        description:
          "Structuring client-side applications for maintainability and scalability.",
      },
      {
        name: "SPA Concepts",
        description: "Principles for building Single Page Applications.",
      },
    ],
    type: "description-focus",
  },
  {
    id: "fcc-markdown-previewer",
    title: "FCC: Real-time Markdown Previewer",
    imageUrl: "/images/projects/fcc-markdown-previewer.webp",
    imageAlt: "Screenshot of the FCC Markdown Previewer application interface",
    description:
      "Built a secure, real-time Markdown previewer with React & TypeScript, demonstrating expertise in third-party library integration (marked.js) and XSS prevention (DOMPurify).",
    detailedDescription: [
      <p key="d1">
        This project, part of the freeCodeCamp curriculum, demonstrates building
        a secure and interactive <Highlight>Single Page Application</Highlight>{" "}
        with React and TypeScript. It allows users to write GitHub-flavored
        Markdown and see it rendered as HTML in real-time.
      </p>,
      <p key="d2">
        A key focus was security: the <Highlight>marked.js</Highlight> library
        parses the Markdown, but to prevent XSS vulnerabilities, all HTML output
        is sanitized using <Highlight>DOMPurify</Highlight> before rendering.
      </p>,
      <p key="d3">
        This was an excellent exercise in handling user input, integrating
        third-party libraries securely, and managing component state in a{" "}
        <Highlight>React/TypeScript</Highlight> environment.
      </p>,
    ],
    techStack: [
      { name: "React", description: "JavaScript library for building UIs." },
      { name: "TypeScript", description: "Typed superset of JavaScript." },
      { name: "SCSS", description: "CSS preprocessor." },
      { name: "marked.js", description: "Markdown parser and compiler." },
      {
        name: "DOMPurify",
        description: "XSS sanitizer for HTML, MathML and SVG.",
      },
      {
        name: "CodePen",
        description: "Online code editor and development environment.",
      },
    ],
    liveLink: "https://codepen.io/JoaoGrilo/full/MYYgLLp",
    codeLink: "https://codepen.io/JoaoGrilo/pen/MYYgLLp",
    type: "public",
  },
  {
    id: "fcc-drum-machine",
    title: "FCC: Interactive Drum Machine",
    imageUrl: "/images/projects/fcc-drum-machine.webp",
    imageAlt:
      "Screenshot of the FCC Drum Machine interface with pads and controls",
    description:
      "Developed an interactive drum machine using React, TypeScript, and Redux Toolkit, showcasing complex state management and responsive user interaction with HTML5 Audio.",
    detailedDescription: [
      <p key="d1">
        This interactive drum machine is a frontend application built to
        freeCodeCamp specifications using <Highlight>React</Highlight> and{" "}
        <Highlight>TypeScript</Highlight>. It features a grid of drum pads that
        can be triggered by mouse clicks or corresponding keyboard keys.
      </p>,
      <p key="d2">
        I implemented <Highlight>Redux Toolkit</Highlight> for robust, global
        state management, handling the active sound bank, volume level, and
        display updates. This ensured a predictable and decoupled architecture.
        The project demonstrates handling of <Highlight>HTML5 Audio</Highlight>{" "}
        and complex user interactions within a modern React stack.
      </p>,
    ],
    techStack: [
      { name: "React", description: "JavaScript library for UIs." },
      { name: "TypeScript", description: "Typed superset of JavaScript." },
      {
        name: "Redux Toolkit",
        description: "Toolset for efficient Redux development.",
      },
      { name: "SCSS", description: "CSS preprocessor." },
      { name: "HTML5 Audio", description: "Native browser audio playback." },
      { name: "CodePen", description: "Online code editor." },
    ],
    liveLink: "https://codepen.io/JoaoGrilo/full/qEEBpzq",
    codeLink: "https://codepen.io/JoaoGrilo/pen/qEEBpzq",
    type: "public",
  },
  {
    id: "fcc-random-quote-machine",
    title: "FCC: Random Quote Machine",
    imageUrl: "/images/projects/fcc-random-quote-machine.webp",
    imageAlt: "Screenshot of the FCC Random Quote Machine application",
    description:
      "A React/TypeScript app demonstrating asynchronous API calls, state management with Hooks, and dynamic UI updates with smooth CSS transitions.",
    detailedDescription: [
      <p key="d1">
        This classic project demonstrates fundamental React concepts. The
        application performs an asynchronous fetch to a remote{" "}
        <Highlight>JSON API</Highlight> to load a collection of quotes on
        initial load.
      </p>,
      <p key="d2">
        The "New Quote" button randomly selects a quote from the cached data and
        updates the UI. The current quote is then used to generate a "Tweet
        Quote" link. This project utilizes <Highlight>React Hooks</Highlight>{" "}
        for state and effect management and implements CSS transitions for a
        smooth fade effect when the quote changes.
      </p>,
    ],
    techStack: [
      { name: "React", description: "JavaScript library for UIs." },
      { name: "TypeScript", description: "Typed superset of JavaScript." },
      {
        name: "Fetch API",
        description: "Modern interface for network requests.",
      },
      { name: "SCSS", description: "CSS preprocessor." },
      { name: "CORS", description: "Cross-Origin Resource Sharing." },
      { name: "CodePen", description: "Online code editor." },
    ],
    liveLink: "https://codepen.io/JoaoGrilo/full/YPzoEjZ",
    codeLink: "https://codepen.io/JoaoGrilo/pen/YPzoEjZ",
    type: "public",
  },
  {
    id: "fcc-javascript-calculator",
    title: "FCC: Retro JavaScript Calculator",
    imageUrl: "/images/projects/fcc-javascript-calculator.webp",
    imageAlt: "Screenshot of the FCC retro-themed JavaScript Calculator",
    description:
      "A functional calculator in React/TS that showcases complex state management and custom logic for parsing expressions and respecting order of operations.",
    detailedDescription: [
      <p key="d1">
        This project is a fully functional calculator built with React and
        TypeScript, designed to pass a comprehensive test suite. It correctly
        handles standard arithmetic, decimals, and respects the mathematical{" "}
        <Highlight>order of operations</Highlight>.
      </p>,
      <p key="d2">
        A key challenge was designing and implementing the{" "}
        <Highlight>custom evaluation logic</Highlight>. The algorithm correctly
        handles chained operations, immediate execution, and multiple
        consecutive operators. This project was a deep dive into complex{" "}
        <Highlight>state logic</Highlight> and robust user input management in
        React.
      </p>,
    ],
    techStack: [
      { name: "React", description: "JavaScript library for UIs." },
      { name: "TypeScript", description: "Typed superset of JavaScript." },
      { name: "SCSS", description: "CSS preprocessor." },
      {
        name: "Algorithm Design",
        description:
          "Developed custom expression parsing and evaluation logic.",
      },
      { name: "CodePen", description: "Online code editor." },
    ],
    liveLink: "https://codepen.io/JoaoGrilo/full/myyrPBZ",
    codeLink: "https://codepen.io/JoaoGrilo/pen/myyrPBZ",
    type: "public",
  },
  {
    id: "fcc-pomodoro-clock",
    title: "FCC: 25+5 Pomodoro Clock",
    imageUrl: "/images/projects/fcc-pomodoro-clock.webp",
    imageAlt: "Screenshot of the FCC retro-themed 25+5 Pomodoro Clock",
    description:
      "A Pomodoro timer (25+5 Clock) in Vanilla JS/jQuery demonstrating time-based event handling, state transitions, and audio notifications.",
    detailedDescription: [
      <p key="d1">
        This "25 + 5 Clock" is a classic Pomodoro timer built to practice{" "}
        <Highlight>time-based event handling</Highlight> in JavaScript. It
        allows users to customize the length of their session and break timers.
      </p>,
      <p key="d2">
        The timer counts down in `mm:ss` format and switches between "Session"
        and "Break" modes automatically. The core logic relies on{" "}
        <Highlight>setInterval</Highlight> for the countdown, with an{" "}
        <Highlight>HTML5 Audio</Highlight> element triggering an alarm at the
        end of each period. The DOM is manipulated using Vanilla JS and jQuery.
      </p>,
    ],
    techStack: [
      { name: "Vanilla JS", description: "Standard JavaScript." },
      {
        name: "jQuery",
        description: "JavaScript library for DOM manipulation.",
      },
      { name: "HTML5 Audio", description: "Native browser audio." },
      { name: "SCSS", description: "CSS preprocessor." },
      { name: "CodePen", description: "Online code editor." },
    ],
    liveLink: "https://codepen.io/JoaoGrilo/full/yyyoOMq",
    codeLink: "https://codepen.io/JoaoGrilo/pen/yyyoOMq",
    type: "public",
  },
];
