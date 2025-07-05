// src/data/pt/projectsData.tsx
import { Project } from "../types";
import React from "react";
import Highlight from "@/components/Highlight";

export const projectsData: Project[] = [
  {
    id: "fedrax-platforms",
    title: "Plataformas Fedrax (Gameblog, CineSeries, etc.)",
    imageUrl: "/images/projects/fedrax-platforms-showcase.webp",
    imageAlt:
      "Mostruário das plataformas Fedrax, incluindo as interfaces de utilizador do Gameblog e CineSeries",
    description:
      "Contribuí para plataformas de conteúdo de alto tráfego, focando na performance, melhorias de fluxo de trabalho e estabilidade para suportar receitas de publicidade e cargas de utilizadores substanciais.",
    detailedDescription: [
      <p key="d1">
        Como Desenvolvedor Full-Stack na Fedrax, fui fundamental no
        desenvolvimento e manutenção de várias plataformas de conteúdo de{" "}
        <Highlight>alto tráfego</Highlight> e ricas em media, incluindo o{" "}
        <Highlight>Gameblog.fr</Highlight> e o{" "}
        <Highlight>CineSeries.com</Highlight>. Estas plataformas servem milhões
        de visualizações de página e dependem de um{" "}
        <Highlight>uptime de 99.9%+</Highlight> para maximizar as receitas de
        publicidade.
      </p>,
      <p key="d2">
        A minha função envolvia responsabilidades full-stack, desde a{" "}
        <Highlight>otimização de queries</Highlight> em MySQL até à construção e
        consumo de <Highlight>APIs REST</Highlight> internas. No frontend, criei
        componentes dinâmicos e reutilizáveis com React e jQuery legado, focando
        na <Highlight>otimização de performance</Highlight> para alcançar
        pontuações consistentemente acima de 90 no Google Lighthouse.
      </p>,
      <p key="d3">
        Esta função exigia um profundo conhecimento de sistemas modernos e
        legados, seguindo um modelo de branching <Highlight>Gitflow</Highlight>{" "}
        num ambiente de CI/CD em <Highlight>GitLab</Highlight> para garantir
        lançamentos estáveis e previsíveis.
      </p>,
    ],
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
    detailedDescription: [
      <p key="d1">
        Este projeto foi uma iniciativa pessoal para aprofundar o meu
        conhecimento em <Highlight>arquitetura backend</Highlight> usando C# e
        .NET Core. O objetivo era construir um servidor robusto e escalável de
        raiz, focando em código limpo e padrões de design modernos.
      </p>,
      <p key="d2">
        Implementei uma <Highlight>API RESTful</Highlight> completa com
        endpoints claramente definidos para a gestão de recursos. As principais
        áreas de exploração incluíram a implementação de mecanismos de{" "}
        <Highlight>autenticação/autorização</Highlight> seguros, o desenho de um
        modelo de dados lógico e a garantia de que o servidor pudesse ser
        implementado de forma multiplataforma em ambientes Windows e Linux.
      </p>,
      <p key="d3">
        Este exercício foi crucial para aprimorar as minhas competências em{" "}
        <Highlight>design de APIs</Highlight>, injeção de dependências e
        criação de serviços backend manuteníveis fora de um ambiente de equipa
        profissional.
      </p>,
    ],
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
    detailedDescription: [
      <p key="d1">
        Para entender melhor a "magia" por trás das frameworks frontend
        modernas, construí a minha própria framework leve e{" "}
        <Highlight>sem dependências</Highlight> usando apenas{" "}
        <Highlight>Vanilla JavaScript (ES6+)</Highlight>. O desafio principal
        foi replicar funcionalidades comuns de frameworks, como arquitetura
        baseada em componentes e routing.
      </p>,
      <p key="d2">
        A framework possui um{" "}
        <Highlight>sistema de componentes orientado por JSON</Highlight>, onde a
        UI é renderizada a partir de um objeto de dados estruturado. Também
        implementei um <Highlight>router básico no lado do cliente</Highlight>{" "}
        usando a History API para permitir navegação tipo SPA sem recarregar a
        página.
      </p>,
      <p key="d3">
        Este projeto proporcionou-me uma visão inestimável sobre o funcionamento
        interno da <Highlight>gestão de estado</Highlight>, o{" "}
        <Highlight>conceito de DOM virtual</Highlight> (emulado de forma
        simples) e as complexidades de construir uma arquitetura frontend
        manutenível a partir de princípios fundamentais.
      </p>,
    ],
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
    detailedDescription: [
      <p key="d1">
        Este projeto, parte do currículo da freeCodeCamp, é uma{" "}
        <Highlight>Single Page Application</Highlight> construída com React e
        TypeScript. Permite que os utilizadores escrevam Markdown no estilo do
        GitHub num editor de texto e o vejam renderizado como HTML em tempo
        real.
      </p>,
      <p key="d2">
        A funcionalidade principal é alimentada pela biblioteca{" "}
        <Highlight>marked.js</Highlight> para analisar o input de Markdown. Para
        prevenir vulnerabilidades XSS de conteúdo fornecido pelo utilizador, todo
        o output HTML é higienizado com <Highlight>DOMPurify</Highlight> antes de
        ser renderizado.
      </p>,
      <p key="d3">
        Este foi um excelente exercício no manuseamento de input do utilizador,
        integração de bibliotecas de terceiros e gestão do estado de componentes
        num ambiente <Highlight>React/TypeScript</Highlight>.
      </p>,
    ],
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
    detailedDescription: [
      <p key="d1">
        Esta bateria eletrónica interativa é uma aplicação frontend construída de
        acordo com as especificações da freeCodeCamp usando{" "}
        <Highlight>React</Highlight> e <Highlight>TypeScript</Highlight>.
        Apresenta uma grelha de pads de bateria que podem ser acionados por
        cliques do rato ou pelas teclas correspondentes do teclado.
      </p>,
      <p key="d2">
        O estado da aplicação, incluindo o banco de sons ativo, o nível de
        volume e o nome do último som tocado, é gerido globalmente com{" "}
        <Highlight>Redux Toolkit</Highlight>. Isto assegura uma solução de
        gestão de estado previsível e desacoplada. O projeto demonstra o
        manuseamento de elementos multimédia (<Highlight>HTML5 Audio</Highlight>
        ) e interações complexas do utilizador numa stack React moderna.
      </p>,
    ],
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
    detailedDescription: [
      <p key="d1">
        Este projeto clássico demonstra conceitos fundamentais de React. A
        aplicação busca uma coleção de citações de uma{" "}
        <Highlight>API JSON</Highlight> remota no carregamento inicial.
      </p>,
      <p key="d2">
        Clicar no botão "Nova Citação" seleciona aleatoriamente uma citação dos
        dados obtidos e atualiza a UI. A citação e autor atuais são então
        usados para gerar um link "Tweetar Citação", que abre o Twitter num novo
        separador com um tweet pré-preenchido. O projeto usa{" "}
        <Highlight>React Hooks</Highlight> para a gestão de estado e implementa
        transições CSS para um efeito de fade suave quando a citação muda.
      </p>,
    ],
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
    detailedDescription: [
      <p key="d1">
        Este projeto é uma calculadora totalmente funcional construída com React
        e TypeScript, projetada para passar numa suíte de testes abrangente da
        freeCodeCamp. Lida com operações aritméticas padrão, números decimais e
        respeita a <Highlight>ordem das operações</Highlight> matemáticas.
      </p>,
      <p key="d2">
        Um desafio fundamental foi implementar a lógica para lidar com operações
        em cadeia e execução imediata. Por exemplo, pressionar um operador após
        um cálculo usa o resultado como o novo operando inicial. A lógica também
        lida corretamente com múltiplos operadores consecutivos, usando o último
        inserido. Este projeto foi um mergulho profundo na{" "}
        <Highlight>lógica de estado</Highlight> e gestão de input do utilizador
        em React.
      </p>,
    ],
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
    detailedDescription: [
      <p key="d1">
        Este "Relógio 25 + 5" é um temporizador Pomodoro clássico, construído
        para praticar o{" "}
        <Highlight>manuseamento de eventos baseados em tempo</Highlight> em
        JavaScript. Permite que os utilizadores personalizem a duração dos seus
        temporizadores de sessão e de pausa.
      </p>,
      <p key="d2">
        O temporizador faz a contagem decrescente no formato `mm:ss` e alterna
        automaticamente entre os modos "Sessão" e "Pausa", tocando um som de
        alarme no final de cada período. Construído principalmente com{" "}
        <Highlight>Vanilla JS</Highlight> e jQuery para manipulação do DOM,
        depende de <Highlight>setInterval</Highlight> para a lógica da contagem
        decrescente e do elemento <Highlight>HTML5 Audio</Highlight> para o
        alarme.
      </p>,
    ],
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