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
      "Apresentação das interfaces de utilizador das plataformas Fedrax, incluindo Gameblog e CineSeries",
    description:
      "Desenvolvi e mantive plataformas de media de alto tráfego, otimizando o desempenho e a estabilidade para suportar milhões de utilizadores e gerar receita publicitária substancial.",
    detailedDescription: [
      <p key="d1">
        Como Full-Stack Developer na Fedrax, tive um papel fundamental no
        desenvolvimento e manutenção de várias plataformas de conteúdo de alto
        tráfego, incluindo o <Highlight>Gameblog.fr</Highlight> e o{" "}
        <Highlight>CineSeries.com</Highlight>. Estas plataformas servem milhões
        de visualizações de página e dependem de um{" "}
        <Highlight>uptime superior a 99.9%</Highlight> para maximizar a receita
        publicitária.
      </p>,
      <p key="d2">
        As minhas responsabilidades eram full-stack, desde a{" "}
        <Highlight>otimização de queries na base de dados</Highlight> em MySQL
        até à criação e consumo de <Highlight>REST APIs</Highlight> internas. No
        frontend, criei componentes dinâmicos e reutilizáveis com React e jQuery
        legado, com foco na <Highlight>otimização de desempenho</Highlight> para
        alcançar pontuações no Google Lighthouse consistentemente acima de 90.
      </p>,
      <p key="d3">
        Para garantir a continuidade do negócio, segui um modelo de branching{" "}
        <Highlight>Gitflow</Highlight> rigoroso num ambiente de CI/CD em{" "}
        <Highlight>GitLab</Highlight>, garantindo lançamentos estáveis e
        previsíveis, essenciais para a receita e a confiança do utilizador.
      </p>,
    ],
    techStack: [
      {
        name: "PHP",
        description: "Linguagem de scripting do lado do servidor.",
      },
      {
        name: "CodeIgniter",
        description: "Framework web em PHP para desenvolvimento rápido.",
      },
      {
        name: "MySQL",
        description: "Sistema de gestão de bases de dados relacionais.",
      },
      {
        name: "WordPress",
        description: "Sistema de gestão de conteúdos (CMS).",
      },
      {
        name: "React",
        description:
          "Biblioteca JavaScript para criar interfaces de utilizador.",
      },
      {
        name: "jQuery",
        description: "Biblioteca JavaScript para manipulação do DOM.",
      },
      {
        name: "SCSS",
        description: "Pré-processador de CSS com funcionalidades avançadas.",
      },
      {
        name: "GitLab",
        description:
          "Ferramenta DevOps baseada na web e gestor de repositórios Git.",
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
      "Diagrama da arquitetura conceptual do servidor backend pessoal em C#/.NET Core",
    description:
      "Arquitetei um servidor backend robusto em C#/.NET de raiz, aprofundando competências em design de APIs, autenticação segura e implementação multi-plataforma.",
    detailedDescription: [
      <p key="d1">
        Este projeto foi uma iniciativa pessoal para aprofundar os meus
        conhecimentos em <Highlight>arquitetura de backend</Highlight> usando C#
        e .NET Core. O objetivo era construir um servidor robusto e escalável de
        raiz, com foco em código limpo e padrões de design modernos.
      </p>,
      <p key="d2">
        Implementei uma <Highlight>RESTful API</Highlight> completa com
        endpoints bem definidos para gestão de recursos. As principais áreas de
        exploração incluíram a implementação de mecanismos de{" "}
        <Highlight>autenticação/autorização</Highlight> seguros, o design de um
        modelo de dados lógico e a garantia de que o servidor pudesse ser
        implementado em ambientes Windows e Linux.
      </p>,
      <p key="d3">
        Este projeto autodirigido foi crucial para aperfeiçoar as minhas
        competências em <Highlight>design de APIs</Highlight>, injeção de
        dependências e na criação de serviços de backend manuteníveis e prontos
        para produção.
      </p>,
    ],
    techStack: [
      {
        name: "C#",
        description: "Linguagem de programação moderna e orientada a objetos.",
      },
      {
        name: ".NET Core",
        description: "Framework open-source e multi-plataforma da Microsoft.",
      },
      {
        name: "API Design",
        description:
          "Boas práticas para a criação de APIs robustas e fáceis de usar.",
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
    title: "Framework Frontend Pessoal em Vanilla JS",
    imageUrl: "/images/projects/personal-vanillajs-framework-concepts.webp",
    imageAlt:
      "Representação visual de conceitos da framework frontend pessoal em Vanilla JS",
    description:
      "Criei uma framework frontend leve e sem dependências em Vanilla JS para desconstruir e dominar conceitos essenciais como routing no cliente e arquitetura de componentes.",
    detailedDescription: [
      <p key="d1">
        Para perceber "o que está por baixo do capô" das frameworks modernas,
        construí a minha própria{" "}
        <Highlight>framework leve e sem dependências</Highlight> usando apenas{" "}
        <Highlight>Vanilla JavaScript (ES6+)</Highlight>. O desafio principal
        foi replicar funcionalidades comuns, como arquitetura baseada em
        componentes e routing.
      </p>,
      <p key="d2">
        A framework inclui um{" "}
        <Highlight>sistema de componentes baseado em JSON</Highlight>, onde a
        interface é renderizada a partir de um objeto de dados estruturado.
        Também implementei um{" "}
        <Highlight>router básico no lado do cliente</Highlight> usando a History
        API para permitir uma navegação tipo SPA sem recarregar a página.
      </p>,
      <p key="d3">
        Este projeto proporcionou-me uma visão valiosa sobre o funcionamento
        interno da <Highlight>gestão de estado</Highlight>, o conceito de{" "}
        <Highlight>DOM virtual</Highlight> (emulado de forma simples) e as
        complexidades de construir uma arquitetura de frontend manutenível a
        partir dos princípios fundamentais.
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
          "Estruturação de aplicações no lado do cliente para manutenibilidade e escalabilidade.",
      },
      {
        name: "SPA Concepts",
        description:
          "Princípios para a construção de Single Page Applications.",
      },
    ],
    type: "description-focus",
  },
  {
    id: "fcc-markdown-previewer",
    title: "FCC: Pré-visualizador de Markdown em Tempo Real",
    imageUrl: "/images/projects/fcc-markdown-previewer.webp",
    imageAlt: "Interface da aplicação de pré-visualização de Markdown da FCC",
    description:
      "Criei um pré-visualizador de Markdown seguro e em tempo real com React e TypeScript, demonstrando a integração de bibliotecas (marked.js) e prevenção de XSS (DOMPurify).",
    detailedDescription: [
      <p key="d1">
        Este projeto, parte do currículo da freeCodeCamp, é uma{" "}
        <Highlight>Single Page Application</Highlight> construída com React e
        TypeScript. Permite que os utilizadores escrevam Markdown (formato
        GitHub) num editor de texto e o vejam renderizado como HTML em tempo
        real.
      </p>,
      <p key="d2">
        A funcionalidade principal é potenciada pela biblioteca{" "}
        <Highlight>marked.js</Highlight> para processar o input. Um foco
        importante foi a segurança: para prevenir vulnerabilidades de XSS, todo
        o HTML gerado é sanitizado com <Highlight>DOMPurify</Highlight> antes de
        ser renderizado.
      </p>,
      <p key="d3">
        Foi um excelente exercício para praticar o manuseamento de input do
        utilizador, a integração segura de bibliotecas externas e a gestão de
        estado de componentes num ambiente{" "}
        <Highlight>React/TypeScript</Highlight>.
      </p>,
    ],
    techStack: [
      { name: "React", description: "Biblioteca JavaScript para criar UIs." },
      { name: "TypeScript", description: "Superset de JavaScript com tipos." },
      { name: "SCSS", description: "Pré-processador de CSS." },
      { name: "marked.js", description: "Parser e compilador de Markdown." },
      {
        name: "DOMPurify",
        description: "Sanitizador de XSS para HTML, MathML e SVG.",
      },
      {
        name: "CodePen",
        description: "Editor de código e ambiente de desenvolvimento online.",
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
    imageAlt: "Interface da Bateria Eletrónica da FCC com pads e controlos",
    description:
      "Desenvolvi uma bateria eletrónica com React, TypeScript e Redux Toolkit, demonstrando gestão de estado complexa e interação reativa do utilizador com HTML5 Audio.",
    detailedDescription: [
      <p key="d1">
        Esta bateria eletrónica interativa é uma aplicação frontend construída
        de acordo com as especificações da freeCodeCamp, usando{" "}
        <Highlight>React</Highlight> e <Highlight>TypeScript</Highlight>.
        Apresenta uma grelha de pads que podem ser acionados por cliques do rato
        ou pelas teclas correspondentes.
      </p>,
      <p key="d2">
        Implementei o <Highlight>Redux Toolkit</Highlight> para uma gestão de
        estado global e robusta, controlando o banco de sons ativo, o nível de
        volume e as atualizações no ecrã. Isto garantiu uma arquitetura
        previsível e desacoplada. O projeto demonstra o manuseamento de
        elementos multimédia (<Highlight>HTML5 Audio</Highlight>) e interações
        complexas numa stack React moderna.
      </p>,
    ],
    techStack: [
      { name: "React", description: "Biblioteca JavaScript para UIs." },
      { name: "TypeScript", description: "Superset de JavaScript com tipos." },
      {
        name: "Redux Toolkit",
        description: "Ferramentas para desenvolvimento Redux eficiente.",
      },
      { name: "SCSS", description: "Pré-processador de CSS." },
      {
        name: "HTML5 Audio",
        description: "Reprodução de áudio nativa no browser.",
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
    imageAlt: "Interface da Máquina de Citações Aleatórias da FCC",
    description:
      "Uma app em React/TypeScript que demonstra chamadas assíncronas a APIs, gestão de estado com Hooks e atualizações dinâmicas da UI com transições CSS.",
    detailedDescription: [
      <p key="d1">
        Este projeto clássico demonstra conceitos fundamentais de React. A
        aplicação realiza um pedido assíncrono a uma{" "}
        <Highlight>API JSON</Highlight> remota para carregar uma coleção de
        citações no arranque.
      </p>,
      <p key="d2">
        Clicar no botão "Nova Citação" seleciona aleatoriamente uma citação dos
        dados em cache e atualiza a UI. A citação e o autor atuais são usados
        para gerar um link "Tweetar Citação". O projeto utiliza{" "}
        <Highlight>React Hooks</Highlight> para gestão de estado e efeitos, e
        implementa transições CSS para um efeito de fade suave na mudança de
        citação.
      </p>,
    ],
    techStack: [
      { name: "React", description: "Biblioteca JavaScript para UIs." },
      { name: "TypeScript", description: "Superset de JavaScript com tipos." },
      {
        name: "Fetch API",
        description: "Interface moderna para pedidos de rede.",
      },
      { name: "SCSS", description: "Pré-processador de CSS." },
      { name: "CORS", description: "Partilha de recursos de origem cruzada." },
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
    imageAlt: "Interface da Calculadora retro em JavaScript da FCC",
    description:
      "Uma calculadora funcional em React/TS que demonstra gestão de estado complexa e lógica personalizada para interpretar expressões e respeitar a ordem das operações.",
    detailedDescription: [
      <p key="d1">
        Este projeto é uma calculadora totalmente funcional construída com React
        e TypeScript, desenhada para passar um conjunto completo de testes. Lida
        corretamente com operações aritméticas padrão, números decimais e
        respeita a <Highlight>ordem das operações</Highlight> matemáticas.
      </p>,
      <p key="d2">
        Um desafio fundamental foi desenhar e implementar a{" "}
        <Highlight>lógica de avaliação personalizada</Highlight>. O algoritmo
        gere corretamente operações encadeadas, execução imediata e múltiplos
        operadores consecutivos. Este projeto foi um mergulho profundo na{" "}
        <Highlight>lógica de estado</Highlight> complexa e na gestão robusta do
        input do utilizador em React.
      </p>,
    ],
    techStack: [
      { name: "React", description: "Biblioteca JavaScript para UIs." },
      { name: "TypeScript", description: "Superset de JavaScript com tipos." },
      { name: "SCSS", description: "Pré-processador de CSS." },
      {
        name: "Algorithm Design",
        description:
          "Desenvolvimento de lógica de parsing e avaliação de expressões.",
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
    imageAlt: "Interface do Relógio Pomodoro 25+5 da FCC",
    description:
      "Um temporizador Pomodoro (Relógio 25+5) em Vanilla JS/jQuery que demonstra a gestão de eventos baseados no tempo, transições de estado e notificações áudio.",
    detailedDescription: [
      <p key="d1">
        Este "Relógio 25 + 5" é um temporizador Pomodoro clássico, construído
        para praticar a{" "}
        <Highlight>gestão de eventos baseados no tempo</Highlight> em
        JavaScript. Permite aos utilizadores personalizar a duração das suas
        sessões de trabalho e de pausa.
      </p>,
      <p key="d2">
        O temporizador faz a contagem decrescente no formato `mm:ss` e alterna
        automaticamente entre os modos "Sessão" e "Pausa". A lógica principal
        utiliza <Highlight>setInterval</Highlight> para a contagem decrescente,
        com um elemento <Highlight>HTML5 Audio</Highlight> a acionar um alarme
        no final de cada período. A manipulação do DOM é feita com Vanilla JS e
        jQuery.
      </p>,
    ],
    techStack: [
      { name: "Vanilla JS", description: "JavaScript padrão." },
      {
        name: "jQuery",
        description: "Biblioteca JavaScript para manipulação do DOM.",
      },
      { name: "HTML5 Audio", description: "Áudio nativo do browser." },
      { name: "SCSS", description: "Pré-processador de CSS." },
      { name: "CodePen", description: "Editor de código online." },
    ],
    liveLink: "https://codepen.io/JoaoGrilo/full/yyyoOMq",
    codeLink: "https://codepen.io/JoaoGrilo/pen/yyyoOMq",
    type: "public",
  },
];
