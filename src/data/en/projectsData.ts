// src/data/en/projectsData.ts
import { Project } from "../types"; // UPDATED IMPORT

export const projectsData: Project[] = [
  {
    id: "fedrax-platforms",
    title: "Fedrax Platforms (Gameblog, CineSeries, etc.)",
    imageUrl: "/images/projects/fedrax-platforms-showcase.webp",
    imageAlt:
      "Showcase of Fedrax platforms including Gameblog and CineSeries user interfaces",
    description:
      "Contributed to high-traffic content platforms, focusing on performance, workflow enhancements, and stability for substantial advertising revenue and user loads.",
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