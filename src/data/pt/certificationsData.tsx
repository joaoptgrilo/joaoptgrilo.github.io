// src/data/pt/certificationsData.tsx
import React from "react";
import Highlight from "@/components/Highlight";
import { CertificationItem } from "../types";

export const certificationsData: CertificationItem[] = [
  {
    id: "fcc-responsive-web-design",
    name: "Design Web Responsivo",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/responsive-web-design",
    description: (
      <>
        Demonstrei domínio das tecnologias web fundamentais, incluindo{" "}
        <Highlight>HTML semântico</Highlight>,{" "}
        <Highlight>CSS moderno (Flexbox e Grid)</Highlight> e os princípios
        essenciais de <Highlight>design acessível e responsivo</Highlight>.
      </>
    ),
  },
  {
    id: "fcc-js-algorithms-data-structures",
    name: "Algoritmos e Estruturas de Dados em JavaScript",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/javascript-algorithms-and-data-structures-v8",
    description: (
      <>
        Desenvolvi um forte domínio dos fundamentos de JavaScript e{" "}
        <Highlight>ES6+</Highlight>, com foco na aplicação de{" "}
        <Highlight>estruturas de dados</Highlight> e{" "}
        <Highlight>pensamento algorítmico</Highlight> para resolver problemas
        complexos de forma eficiente.
      </>
    ),
  },
  {
    id: "fcc-frontend-dev-libraries",
    name: "Bibliotecas de Desenvolvimento Front-End",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/front-end-development-libraries",
    description: (
      <>
        Adquiri experiência prática na construção de interfaces de utilizador
        dinâmicas com bibliotecas e frameworks populares, incluindo{" "}
        <Highlight>React</Highlight>, <Highlight>Redux</Highlight> e{" "}
        <Highlight>SASS</Highlight>.
      </>
    ),
  },
  {
    id: "fcc-data-visualization",
    name: "Visualização de Dados",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/data-visualization",
    description: (
      <>
        Dominei a biblioteca <Highlight>D3.js</Highlight> para transformar
        conjuntos de dados complexos em{" "}
        <Highlight>visualizações de dados perspicazes</Highlight>, claras e
        interativas.
      </>
    ),
  },
  {
    id: "leetcode-problem-solving",
    name: "Resolução de Problemas no LeetCode",
    issuer: "LeetCode",
    credentialUrl: "https://leetcode.com/u/joaoptgrilo/",
    description: (
      <>
        Aprimoramento contínuo das{" "}
        <Highlight>competências de resolução de problemas</Highlight> ao
        enfrentar desafios algorítmicos, com foco na{" "}
        <Highlight>complexidade de tempo e espaço</Highlight> para escrever
        código altamente eficiente.
      </>
    ),
    isInProgress: true,
  },
  {
    id: "aws-cloud-quest",
    name: "AWS Cloud Quest",
    issuer: "Amazon Web Services",
    credentialUrl: "https://www.credly.com/users/joao-grilo-dev/badges",
    description: (
      <>
        A desenvolver competências práticas e do mundo real em cloud através da
        plataforma de aprendizagem gamificada da AWS. A visar a certificação{" "}
        <Highlight>Cloud Practitioner</Highlight> para validar a proficiência
        nos <Highlight>serviços e arquitetura centrais da AWS</Highlight>.
      </>
    ),
    isInProgress: true,
  },
  {
    id: "tryhackme-learning-paths",
    name: "Percursos de Aprendizagem no TryHackMe",
    issuer: "TryHackMe",
    credentialUrl: "https://tryhackme.com/p/joao.grilo.dev",
    description: (
      <>
        A fortalecer proativamente os{" "}
        <Highlight>conhecimentos de cibersegurança</Highlight> através de
        laboratórios práticos em <Highlight>Web Hacking</Highlight> e
        Pentesting, para construir aplicações mais seguras e{" "}
        <Highlight>resilientes</Highlight>.
      </>
    ),
    isInProgress: true,
  },
];
