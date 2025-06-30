// src/data/pt/experienceData.ts
import React from "react";
import Highlight from "@/components/Highlight";
import { ExperienceItem } from "../types";

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "Fedrax",
    companyLink: "https://www.fedrax.com/",
    companyLogoUrl: "/images/logos/fedrax-logo.svg",
    companyLogoAlt: "Logótipo da Fedrax",
    invertInLightMode: true, // This logo is light and needs to be inverted for light mode
    location: "Portimão, Portugal",
    period: "Fev 2020 – Out 2023",
    descriptionItems: [
      <>
        Arquitetura, desenvolvimento e manutenção de plataformas web{" "}
        <Highlight>críticas</Highlight> e de <Highlight>alto tráfego</Highlight>{" "}
        (ex: Gameblog.fr, CineSeries) garantindo{" "}
        <Highlight>99.9%+ de uptime</Highlight> e{" "}
        <Highlight>escalabilidade</Highlight> robusta.
      </>,
      <>
        Liderança de iniciativas de <Highlight>otimização</Highlight> de
        frontend e backend, alcançando{" "}
        <Highlight>scores &gt;90 no Google Lighthouse</Highlight> e contribuindo
        para um <Highlight>crescimento de tráfego orgânico de ~15%</Highlight>.
      </>,
      <>
        Desenho, implementação e consumo de{" "}
        <Highlight>APIs RESTful seguras e versionadas</Highlight> para troca de
        dados eficiente.
      </>,
      <>
        Criação de componentes frontend dinâmicos, reutilizáveis e{" "}
        <Highlight>performantes</Highlight> com <Highlight>React</Highlight>,
        melhorando as métricas de engagement do utilizador (ex:{" "}
        <Highlight>redução de ~10% na taxa de rejeição</Highlight>,{" "}
        <Highlight>aumento de ~12% na duração da sessão</Highlight>).
      </>,
      <>
        Promoção de práticas <Highlight>Agile (Scrum/Kanban)</Highlight>,{" "}
        <Highlight>Git (Gitflow)</Highlight>, e <Highlight>Docker</Highlight>{" "}
        para ambientes de desenvolvimento eficientes, colaborativos e
        reprodutíveis.
      </>,
    ],
    keyTech: [
      {
        name: "PHP",
        description:
          "Linguagem de scripting do lado do servidor amplamente usada para desenvolvimento web.",
      },
      {
        name: "JavaScript",
        description:
          "Linguagem versátil e de alto nível para desenvolvimento frontend e backend.",
      },
      {
        name: "React",
        description:
          "Biblioteca JavaScript para construir interfaces de utilizador.",
      },
      {
        name: "MySQL",
        description:
          "Popular sistema de gestão de bases de dados relacionais open-source.",
      },
      {
        name: "REST APIs",
        description:
          "Desenho e consumo de APIs REpresentational State Transfer.",
      },
      {
        name: "Docker",
        description:
          "Plataforma para desenvolver, enviar e executar aplicações em contentores.",
      },
      {
        name: "Agile",
        description:
          "Abordagem iterativa para a gestão de projetos e desenvolvimento de software.",
      },
    ],
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "ZeroUm",
    companyLink: "https://zeroum.pt/",
    companyLogoUrl: "/images/logos/zeroum-logo.png",
    companyLogoAlt: "Logótipo da ZeroUm",
    location: "Silves, Portugal",
    period: "Mar 2019 – Fev 2020",
    descriptionItems: [
      <>
        Desenvolvimento e personalização de{" "}
        <Highlight>websites WordPress seguros</Highlight> e de{" "}
        <Highlight>alta performance</Highlight> e soluções{" "}
        <Highlight>WooCommerce</Highlight> complexas para uma clientela
        diversificada.
      </>,
      <>
        Criação de <Highlight>temas WordPress à medida</Highlight> e{" "}
        <Highlight>plugins personalizados</Highlight>, integrando APIs de
        terceiros (pagamentos, envios, CRM).
      </>,
      <>
        Melhoria da <Highlight>eficiência operacional em até 30%</Highlight>{" "}
        para clientes de e-commerce através da automação do processamento de
        encomendas e sincronização de inventário.
      </>,
      <>
        Implementação de <Highlight>técnicas WPO</Highlight> abrangentes e{" "}
        <Highlight>melhores práticas de segurança</Highlight>, alcançando{" "}
        <Highlight>reduções médias de ~40% no tempo de carregamento</Highlight>.
      </>,
    ],
    keyTech: [
      {
        name: "PHP",
        description:
          "Linguagem de scripting do lado do servidor para desenvolvimento web.",
      },
      {
        name: "WordPress",
        description:
          "Popular sistema de gestão de conteúdos para construir websites.",
      },
      {
        name: "WooCommerce",
        description: "Plugin de e-commerce para WordPress.",
      },
      {
        name: "MySQL",
        description:
          "Sistema de gestão de bases de dados relacionais open-source.",
      },
      {
        name: "JavaScript",
        description:
          "Linguagem para desenvolvimento web do lado do cliente e do servidor.",
      },
      {
        name: "HTML5",
        description:
          "Versão mais recente da Linguagem de Marcação de Hipertexto.",
      },
      {
        name: "CSS3",
        description: "Versão mais recente das Folhas de Estilo em Cascata.",
      },
    ],
  },
];
