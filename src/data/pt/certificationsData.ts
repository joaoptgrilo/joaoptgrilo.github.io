// src/data/pt/certificationsData.ts
import { CertificationItem } from "../types";

export const certificationsData: CertificationItem[] = [
  {
    id: "fcc-responsive-web-design",
    name: "Design Web Responsivo",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/responsive-web-design",
    description:
      "Demonstrei domínio das tecnologias web fundamentais, incluindo {HTML semântico}, {CSS moderno (Flexbox e Grid)} e os princípios essenciais de {design acessível e responsivo}.",
  },
  {
    id: "fcc-js-algorithms-data-structures",
    name: "Algoritmos e Estruturas de Dados em JavaScript",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/javascript-algorithms-and-data-structures-v8",
    description:
      "Desenvolvi um forte domínio dos fundamentos de JavaScript e {ES6+}, com foco na aplicação de {estruturas de dados} e {pensamento algorítmico} para resolver problemas complexos de forma eficiente.",
  },
  {
    id: "fcc-frontend-dev-libraries",
    name: "Bibliotecas de Desenvolvimento Front-End",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/front-end-development-libraries",
    description:
      "Adquiri experiência prática na construção de interfaces de utilizador dinâmicas com bibliotecas e frameworks populares, incluindo {React}, {Redux} e {SASS}.",
  },
  {
    id: "fcc-data-visualization",
    name: "Visualização de Dados",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/data-visualization",
    description:
      "Dominei a biblioteca {D3.js} para transformar conjuntos de dados complexos em {visualizações de dados perspicazes}, claras e interativas.",
  },
  {
    id: "leetcode-problem-solving",
    name: "Resolução de Problemas no LeetCode",
    issuer: "LeetCode",
    credentialUrl: "https://leetcode.com/u/joaoptgrilo/",
    description:
      "Aprimoramento contínuo das {competências de resolução de problemas} ao enfrentar desafios algorítmicos, com foco na {complexidade de tempo e espaço} para escrever código altamente eficiente.",
    isInProgress: true,
  },
  {
    id: "aws-cloud-quest",
    name: "AWS Cloud Quest",
    issuer: "Amazon Web Services",
    credentialUrl: "https://www.credly.com/users/joao.grilo.dev/badges",
    description:
      "A desenvolver competências práticas e do mundo real em cloud através da plataforma de aprendizagem gamificada da AWS. A visar a certificação {Cloud Practitioner} para validar a proficiência nos {serviços e arquitetura centrais da AWS}.",
    isInProgress: true,
  },
  {
    id: "tryhackme-learning-paths",
    name: "Percursos de Aprendizagem no TryHackMe",
    issuer: "TryHackMe",
    credentialUrl: "https://tryhackme.com/p/joao.grilo.dev",
    description:
      "A fortalecer proativamente os {conhecimentos de cibersegurança} através de laboratórios práticos em {Web Hacking} e Pentesting, para construir aplicações mais seguras e {resilientes}.",
    isInProgress: true,
  },
];
