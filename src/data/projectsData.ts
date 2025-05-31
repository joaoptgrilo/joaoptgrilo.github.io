// src/data/projectsData.ts

export interface Project {
  id: string;
  title: string;
  imageUrl?: string; // Path to image, or placeholder identifier
  imageAlt?: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  codeLink?: string;
  learnMoreLink?: string; // For private projects or case studies
  type: "public" | "private" | "description-focus";
}

// Mock data for 2-3 projects to establish layout
export const mockProjectsData: Project[] = [
  {
    id: "project-1",
    title: "Futuristic Web Platform X",
    imageUrl: "/images/placeholders/project-placeholder-16-9.avif", // Placeholder image
    imageAlt: "Abstract visual for Platform X",
    description:
      "A cutting-edge platform designed to revolutionize user interaction with complex data streams, featuring real-time updates and a modular architecture.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "GraphQL",
    ],
    liveLink: "#", // Placeholder
    codeLink: "#", // Placeholder
    type: "public",
  },
  {
    id: "project-2",
    title: "AI-Powered Analytics Dashboard",
    imageUrl: "/images/placeholders/project-placeholder-16-9.avif",
    imageAlt: "AI Dashboard visualization",
    description:
      "Developed an intelligent dashboard providing deep insights through advanced AI algorithms, with a focus on intuitive data visualization and predictive analysis.",
    techStack: ["Python", "Flask", "D3.js", "PostgreSQL", "Docker"],
    learnMoreLink: "#", // Placeholder for private project details
    type: "private",
  },
  {
    id: "project-3",
    title: "E-Commerce Optimization Suite",
    // No imageUrl to test fallback or different card presentation
    imageAlt: "E-commerce icons",
    description:
      "A suite of tools aimed at enhancing performance and user conversion for e-commerce websites, including A/B testing and personalization engines.",
    techStack: ["PHP", "Symfony", "MySQL", "Redis", "JavaScript"],
    liveLink: "#",
    type: "description-focus",
  },
];
