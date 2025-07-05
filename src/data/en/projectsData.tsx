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
      "Contributed to high-traffic content platforms, focusing on performance, workflow enhancements, and stability for substantial advertising revenue and user loads.",
    detailedDescription: [
      <p key="d1">
        As a Full-Stack Developer at Fedrax, I was instrumental in the
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
        This role required a deep understanding of both modern and legacy
        systems, adhering to a <Highlight>Gitflow</Highlight> branching model
        within a <Highlight>GitLab</Highlight> CI/CD environment to ensure
        stable and predictable releases.
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
      "Developed a personal, multi-platform backend server, focusing on advanced architecture concepts like API design, load balancing, and security.",
    detailedDescription: [
      <p key="d1">
        This project was a personal initiative to deepen my understanding of{" "}
        <Highlight>backend architecture</Highlight> using C# and .NET Core. The
        goal was to build a robust, scalable server from the ground up, focusing
        on clean code and modern design patterns.
      </p>,
      <p key="d2">
        I implemented a full <Highlight>RESTful API</Highlight> with clearly
        defined endpoints for resource management. Key areas of exploration
        included implementing secure{" "}
        <Highlight>authentication/authorization</Highlight> mechanisms,
        designing a logical data model, and ensuring the server could be
        deployed cross-platform on both Windows and Linux environments.
      </p>,
      <p key="d3">
        This exercise was crucial for honing my skills in{" "}
        <Highlight>API design</Highlight>, dependency injection, and creating
        maintainable backend services outside of a professional team setting.
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
      "Built a lightweight, dependency-free Vanilla JS frontend framework featuring client-side routing, a JSON-driven component system, and API modules.",
    detailedDescription: [
      <p key="d1">
        To better understand the "magic" behind modern frontend frameworks, I
        built my own lightweight,{" "}
        <Highlight>dependency-free framework</Highlight> using only{" "}
        <Highlight>Vanilla JavaScript (ES6+)</Highlight>. The core challenge was
        to replicate common framework features like component-based architecture
        and routing.
      </p>,
      <p key="d2">
        The framework features a{" "}
        <Highlight>JSON-driven component system</Highlight>, where the UI is
        rendered from a structured data object. I also implemented a basic{" "}
        <Highlight>client-side router</Highlight> using the History API to
        enable SPA-like navigation without page reloads.
      </p>,
      <p key="d3">
        This project provided invaluable insights into the inner workings of{" "}
        <Highlight>state management</Highlight>, the{" "}
        <Highlight>virtual DOM concept</Highlight> (emulated simply), and the
        complexities of building a maintainable frontend architecture from first
        principles.
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
      "A React/TypeScript SPA for real-time Markdown editing and previewing, using `marked.js` and `DOMPurify`.",
    detailedDescription: [
      <p key="d1">
        This project, part of the freeCodeCamp curriculum, is a{" "}
        <Highlight>Single Page Application</Highlight> built with React and
        TypeScript. It allows users to write GitHub-flavored Markdown in a text
        editor and see it rendered as HTML in real-time.
      </p>,
      <p key="d2">
        The core functionality is powered by the{" "}
        <Highlight>marked.js</Highlight> library for parsing the Markdown
        input. To prevent XSS vulnerabilities from user-provided content, all
        HTML output is sanitized using <Highlight>DOMPurify</Highlight> before
        being rendered.
      </p>,
      <p key="d3">
        This was an excellent exercise in handling user input, integrating
        third-party libraries, and managing component state in a{" "}
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
      "A React/TypeScript digital drum machine with clickable/keyboard pads, sound bank switching, and volume control. State managed with Redux Toolkit.",
    detailedDescription: [
      <p key="d1">
        This interactive drum machine is a frontend application built to
        freeCodeCamp specifications using <Highlight>React</Highlight> and{" "}
        <Highlight>TypeScript</Highlight>. It features a grid of drum pads that
        can be triggered by mouse clicks or corresponding keyboard keys.
      </p>,
      <p key="d2">
        The application's state, including the active sound bank, volume level,
        and the last played sound's name, is managed globally using{" "}
        <Highlight>Redux Toolkit</Highlight>. This ensures a predictable and
        decoupled state management solution. The project demonstrates handling
        of media elements (<Highlight>HTML5 Audio</Highlight>) and complex user
        interactions within a modern React stack.
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
      "A React/TypeScript app fetching and displaying random quotes from an API, with 'New Quote' and 'Tweet Quote' features and fade animations.",
    detailedDescription: [
      <p key="d1">
        This classic project demonstrates fundamental React concepts. The
        application fetches a collection of quotes from a remote{" "}
        <Highlight>JSON API</Highlight> on initial load.
      </p>,
      <p key="d2">
        Clicking the "New Quote" button randomly selects a quote from the
        fetched data and updates the UI. The current quote and author are then
        used to generate a "Tweet Quote" link, which opens Twitter in a new tab
        with a pre-populated tweet. The project uses{" "}
        <Highlight>React Hooks</Highlight> for state management and implements
        CSS transitions for a smooth fade effect when the quote changes.
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
      "A functional, retro-themed digital calculator in React/TypeScript with custom logic for expression parsing and order of operations.",
    detailedDescription: [
      <p key="d1">
        This project is a fully functional calculator built with React and
        TypeScript, designed to pass a comprehensive suite of tests from
        freeCodeCamp. It handles standard arithmetic operations, decimal
        numbers, and respects the mathematical{" "}
        <Highlight>order of operations</Highlight>.
      </p>,
      <p key="d2">
        A key challenge was implementing the logic to handle chained operations
        and immediate execution. For example, pressing an operator after a
        calculation uses the result as the new starting operand. The logic also
        correctly handles multiple consecutive operators by using the last one
        entered. This project was a deep dive into <Highlight>state logic</Highlight>{" "}
        and user input management in React.
      </p>,
    ],
    techStack: [
      { name: "React", description: "JavaScript library for UIs." },
      { name: "TypeScript", description: "Typed superset of JavaScript." },
      { name: "SCSS", description: "CSS preprocessor." },
      {
        name: "Algorithm Design",
        description: "Developing custom parsing and evaluation logic.",
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
      "A retro, wood-themed Pomodoro timer (25+5 Clock) with Vanilla JS/jQuery, featuring adjustable session/break lengths and audio notifications.",
    detailedDescription: [
      <p key="d1">
        This "25 + 5 Clock" is a classic Pomodoro timer built to practice{" "}
        <Highlight>time-based event handling</Highlight> in JavaScript. It
        allows users to customize the length of their session and break timers.
      </p>,
      <p key="d2">
        The timer counts down in `mm:ss` format and switches between "Session"
        and "Break" modes automatically, playing an alarm sound at the end of
        each period. Built primarily with <Highlight>Vanilla JS</Highlight> and
        jQuery for DOM manipulation, it relies on{" "}
        <Highlight>setInterval</Highlight> for the countdown logic and the{" "}
        <Highlight>HTML5 Audio</Highlight> element for the alarm.
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