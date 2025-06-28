import React from "react";
import Highlight from "@/components/Highlight";
import { CertificationItem } from "../en/certificationsData";

export const certificationsData: CertificationItem[] = [
  {
    id: "fcc-responsive-web-design",
    name: "Design Web Responsivo",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/responsive-web-design",
    description: (
      <>
        Abrange <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight>, Design
        Visual, <Highlight>Acessibilidade</Highlight>, princípios de Design
        Responsivo, e CSS <Highlight>Flexbox</Highlight> &{" "}
        <Highlight>Grid</Highlight>.
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
        Foca-se nos fundamentos de JavaScript, <Highlight>ES6</Highlight>,
        Expressões Regulares, Debugging,{" "}
        <Highlight>Estruturas de Dados</Highlight> e{" "}
        <Highlight>Scripting de Algoritmos</Highlight>.
      </>
    ),
  },
  {
    id: "fcc-frontend-dev-libraries",
    name: "Bibliotecas de Desenvolvimento Frontend",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/Joaoptgrilo/front-end-development-libraries",
    description: (
      <>
        Ensina bibliotecas frontend modernas, incluindo{" "}
        <Highlight>Bootstrap</Highlight>, jQuery, <Highlight>SASS</Highlight>,{" "}
        <Highlight>React</Highlight> e <Highlight>Redux</Highlight>.
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
        Foca-se nos fundamentos de <Highlight>D3.js</Highlight>, criação de
        gráficos de barras, gráficos de dispersão, mapas de calor e outras{" "}
        <Highlight>visualizações orientadas a dados</Highlight>.
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
        A resolver ativamente desafios para aprimorar o{" "}
        <Highlight>raciocínio algorítmico</Highlight> e dominar{" "}
        <Highlight>estruturas de dados</Highlight> para um código ótimo e
        eficiente.
      </>
    ),
    isInProgress: true,
  },
  {
    id: "aws-cloud-quest",
    name: "AWS Cloud Quest",
    issuer: "Amazon Web Services",
    credentialUrl: "https://www.credly.com/users/joao.grilo.dev",
    description: (
      <>
        Aprendizagem prática e gamificada dos{" "}
        <Highlight>fundamentos da Cloud AWS</Highlight> e serviços core,
        atualmente a seguir o percurso de{" "}
        <Highlight>Cloud Practitioner</Highlight> e outros emblemas.
      </>
    ),
    isInProgress: true,
  },
  {
    id: "tryhackme-learning-paths",
    name: "Percursos de Aprendizagem no TryHackMe",
    issuer: "TryHackMe",
    credentialUrl: "https://tryhackme.com/p/joaoptgrilo",
    description: (
      <>
        A progredir em percursos de cibersegurança fundamentais, incluindo{" "}
        <Highlight>Web Hacking</Highlight> e{" "}
        <Highlight>Offensive Pentesting</Highlight>, para construir uma
        mentalidade defensiva.
      </>
    ),
    isInProgress: true,
  },
];
