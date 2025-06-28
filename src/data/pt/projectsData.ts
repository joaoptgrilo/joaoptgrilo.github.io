// src/data/pt/projectsData.ts
import { Project } from "../types"; // UPDATED IMPORT

export const projectsData: Project[] = [
  {
    id: "fedrax-platforms",
    title: "Plataformas Fedrax (Gameblog, CineSeries, etc.)",
    imageUrl: "/images/projects/fedrax-platforms-showcase.webp",
    imageAlt:
      "Mostruário das plataformas Fedrax, incluindo as interfaces de utilizador do Gameblog e CineSeries",
    description:
      "Contribuí para plataformas de conteúdo de alto tráfego, focando na performance, melhorias de fluxo de trabalho e estabilidade para suportar receitas de publicidade e cargas de utilizadores substanciais.",
    techStack: [
      {
        name: "PHP",
        description: "Linguagem de scripting do lado do servidor.",
      },
      {
        name: "CodeIgniter",
        description: "Framework web PHP para desenvolvimento rápido.",
      },
      {
        name: "MySQL",
        description: "Sistema de gestão de bases de dados relacionais.",
      },
      { name: "WordPress", description: "Sistema de gestão de conteúdos." },
      {
        name: "React",
        description:
          "Biblioteca JavaScript para construir interfaces de utilizador.",
      },
      {
        name: "jQuery",
        description: "Biblioteca JavaScript para manipulação do DOM.",
      },
      {
        name: "SCSS",
        description: "Pré-processador CSS com funcionalidades avançadas.",
      },
      {
        name: "GitLab",
        description:
          "Ferramenta de ciclo de vida DevOps e gestor de repositórios Git.",
      },
    ],
    liveLink: "https://www.gameblog.fr/",
    type: "private",
  },
  {
    id: "personal-dotnet-server",
    title: "Servidor Backend Pessoal em C#/.NET Core",
    imageUrl: "/images/projects/personal-dotnet-server-architecture.webp",
    imageAlt:
      "Diagrama de arquitetura conceptual do servidor backend pessoal em C#/.NET Core",
    description:
      "Desenvolvi um servidor backend pessoal e multiplataforma, focando em conceitos de arquitetura avançada como design de APIs, balanceamento de carga e segurança.",
    techStack: [
      {
        name: "C#",
        description: "Linguagem de programação moderna e orientada a objetos.",
      },
      {
        name: ".NET Core",
        description: "Framework multiplataforma e open-source da Microsoft.",
      },
      {
        name: "API Design",
        description:
          "Melhores práticas para criar APIs robustas e utilizáveis.",
      },
      {
        name: "Backend Architecture",
        description:
          "Padrões de design para a estrutura de aplicações do lado do servidor.",
      },
    ],
    type: "description-focus",
  },
  {
    id: "personal-vanillajs-framework",
    title: "Framework Frontend Custom em Vanilla JS",
    imageUrl: "/images/projects/personal-vanillajs-framework-concepts.webp",
    imageAlt:
      "Representação visual de conceitos na framework frontend customizada em Vanilla JS",
    description:
      "Construí uma framework frontend leve e sem dependências em Vanilla JS, com routing no lado do cliente, um sistema de componentes baseado em JSON e módulos de API.",
    techStack: [
      {
        name: "Vanilla JS",
        description: "JavaScript padrão sem bibliotecas externas.",
      },
      {
        name: "JavaScript (ES6+)",
        description: "Funcionalidades e sintaxe moderna de JavaScript.",
      },
      {
        name: "Frontend Architecture",
        description:
          "Estruturação de aplicações do lado do cliente para manutenibilidade e escalabilidade.",
      },
      {
        name: "SPA Concepts",
        description: "Princípios para construir Aplicações de Página Única.",
      },
    ],
    type: "description-focus",
  },
  {
    id: "fcc-markdown-previewer",
    title: "FCC: Pré-visualizador de Markdown em Tempo Real",
    imageUrl: "/images/projects/fcc-markdown-previewer.webp",
    imageAlt:
      "Screenshot da interface da aplicação de pré-visualização de Markdown do FCC",
    description:
      "Uma SPA em React/TypeScript para edição e pré-visualização de Markdown em tempo real, utilizando `marked.js` e `DOMPurify`.",
    techStack: [
      {
        name: "React",
        description: "Biblioteca JavaScript para construir UIs.",
      },
      { name: "TypeScript", description: "Superset de JavaScript com tipos." },
      { name: "SCSS", description: "Pré-processador CSS." },
      {
        name: "marked.js",
        description: "Analisador e compilador de Markdown.",
      },
      {
        name: "DOMPurify",
        description: "Higienizador de XSS para HTML, MathML e SVG.",
      },
      {
        name: "CodePen",
        description: "Editor de código online e ambiente de desenvolvimento.",
      },
    ],
    liveLink: "https://codepen.io/JoaoGrilo/full/MYYgLLp",
    codeLink: "https://codepen.io/JoaoGrilo/pen/MYYgLLp",
    type: "public",
  },
  {
    id: "fcc-drum-machine",
    title: "FCC: Bateria Eletrónica Interativa",
    imageUrl: "/images/projects/fcc-drum-machine.webp",
    imageAlt:
      "Screenshot da interface da Bateria Eletrónica do FCC com pads e controlos",
    description:
      "Uma bateria digital em React/TypeScript com pads clicáveis/por teclado, troca de bancos de som e controlo de volume. O estado é gerido com Redux Toolkit.",
    techStack: [
      { name: "React", description: "Biblioteca JavaScript para UIs." },
      { name: "TypeScript", description: "Superset de JavaScript com tipos." },
      {
        name: "Redux Toolkit",
        description:
          "Conjunto de ferramentas para desenvolvimento Redux eficiente.",
      },
      { name: "SCSS", description: "Pré-processador CSS." },
      {
        name: "HTML5 Audio",
        description: "Reprodução de áudio nativa do browser.",
      },
      { name: "CodePen", description: "Editor de código online." },
    ],
    liveLink: "https://codepen.io/JoaoGrilo/full/qEEBpzq",
    codeLink: "https://codepen.io/JoaoGrilo/pen/qEEBpzq",
    type: "public",
  },
  {
    id: "fcc-random-quote-machine",
    title: "FCC: Máquina de Citações Aleatórias",
    imageUrl: "/images/projects/fcc-random-quote-machine.webp",
    imageAlt: "Screenshot da aplicação Máquina de Citações Aleatórias do FCC",
    description:
      "Uma aplicação em React/TypeScript que busca e exibe citações aleatórias de uma API, com funcionalidades de 'Nova Citação' e 'Tweetar Citação', e animações de transição.",
    techStack: [
      { name: "React", description: "Biblioteca JavaScript para UIs." },
      { name: "TypeScript", description: "Superset de JavaScript com tipos." },
      {
        name: "Fetch API",
        description: "Interface moderna para requisições de rede.",
      },
      { name: "SCSS", description: "Pré-processador CSS." },
      { name: "CORS", description: "Partilha de Recursos de Origem Cruzada." },
      { name: "CodePen", description: "Editor de código online." },
    ],
    liveLink: "https://codepen.io/JoaoGrilo/full/YPzoEjZ",
    codeLink: "https://codepen.io/JoaoGrilo/pen/YPzoEjZ",
    type: "public",
  },
  {
    id: "fcc-javascript-calculator",
    title: "FCC: Calculadora Retro em JavaScript",
    imageUrl: "/images/projects/fcc-javascript-calculator.webp",
    imageAlt: "Screenshot da Calculadora retro em JavaScript do FCC",
    description:
      "Uma calculadora digital funcional, de tema retro, em React/TypeScript com lógica customizada para análise de expressões e ordem de operações.",
    techStack: [
      { name: "React", description: "Biblioteca JavaScript para UIs." },
      { name: "TypeScript", description: "Superset de JavaScript com tipos." },
      { name: "SCSS", description: "Pré-processador CSS." },
      {
        name: "Algorithm Design",
        description:
          "Desenvolvimento de lógica de análise e avaliação customizada.",
      },
      { name: "CodePen", description: "Editor de código online." },
    ],
    liveLink: "https://codepen.io/JoaoGrilo/full/myyrPBZ",
    codeLink: "https://codepen.io/JoaoGrilo/pen/myyrPBZ",
    type: "public",
  },
  {
    id: "fcc-pomodoro-clock",
    title: "FCC: Relógio Pomodoro 25+5",
    imageUrl: "/images/projects/fcc-pomodoro-clock.webp",
    imageAlt: "Screenshot do Relógio Pomodoro 25+5 com tema retro do FCC",
    description:
      "Um temporizador Pomodoro de tema retro (Relógio 25+5) em Vanilla JS/jQuery, com durações de sessão/pausa ajustáveis e notificações de áudio.",
    techStack: [
      { name: "Vanilla JS", description: "JavaScript padrão." },
      {
        name: "jQuery",
        description: "Biblioteca JavaScript para manipulação do DOM.",
      },
      { name: "HTML5 Audio", description: "Áudio nativo do browser." },
      { name: "SCSS", description: "Pré-processador CSS." },
      { name: "CodePen", description: "Editor de código online." },
    ],
    liveLink: "https://codepen.io/JoaoGrilo/full/yyyoOMq",
    codeLink: "https://codepen.io/JoaoGrilo/pen/yyyoOMq",
    type: "public",
  },
];