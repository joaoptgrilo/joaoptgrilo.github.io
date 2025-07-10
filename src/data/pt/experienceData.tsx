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
    location: "Portimão, Portugal",
    period: "Fev 2020 – Out 2023",
    descriptionItems: [
      <>
        Arquitetura, desenvolvimento e manutenção de plataformas web críticas e
        de alto tráfego usando uma stack principal de <Highlight>PHP</Highlight>{" "}
        e <Highlight>MySQL</Highlight>, garantindo 99.9%+ de uptime e
        escalabilidade robusta.
      </>,
      <>
        Criação de componentes frontend dinâmicos, reutilizáveis e performantes
        com <Highlight>React</Highlight> e <Highlight>JavaScript</Highlight>{" "}
        moderno, melhorando as métricas de engagement do utilizador (ex: redução
        de ~10% na taxa de rejeição, aumento de ~12% na duração da sessão).
      </>,
      <>
        {/* IMPROVED: Added context and impact. */}
        Desenho e consumo de <Highlight>APIs RESTful</Highlight> seguras e
        versionadas para alimentar novas funcionalidades e{" "}
        <Highlight>permitir integrações com parceiros</Highlight>, reduzindo
        significativamente os erros de sincronização de dados.
      </>,
      <>
        {/* IMPROVED: Added context and impact. */}
        Promoção de práticas <Highlight>Agile</Highlight> e utilização de{" "}
        <Highlight>Docker</Highlight> para criar ambientes de desenvolvimento
        consistentes,{" "}
        <Highlight>
          reduzindo bugs do tipo "na minha máquina funciona" em mais de 50%
        </Highlight>{" "}
        e acelerando o onboarding de novos developers.
      </>,
      <>
        Liderança de iniciativas de otimização de frontend e backend, alcançando
        scores &gt;90 no Google Lighthouse e contribuindo para um crescimento de
        tráfego orgânico de ~15%.
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
        Desenvolvimento e personalização de websites{" "}
        <Highlight>WordPress</Highlight> seguros e de alta performance e
        soluções <Highlight>WooCommerce</Highlight> complexas, aproveitando um
        profundo conhecimento da arquitetura <Highlight>PHP</Highlight>{" "}
        subjacente e das interações com a base de dados{" "}
        <Highlight>MySQL</Highlight>.
      </>,
      <>
        {/* IMPROVED: Added context. */}
        Criação de temas à medida e plugins personalizados com{" "}
        <Highlight>JavaScript</Highlight>, <Highlight>HTML5</Highlight>{" "}
        semântico e <Highlight>CSS3</Highlight> avançado para resolver
        necessidades de negócio específicas dos clientes que não eram
        satisfeitas por soluções prontas a usar.
      </>,
      <>
        Melhoria da eficiência operacional de clientes de e-commerce em até 30%
        através da automação do processamento de encomendas e sincronização de
        inventário.
      </>,
      <>
        Implementação de técnicas WPO abrangentes e melhores práticas de
        segurança, alcançando reduções médias de ~40% no tempo de carregamento
        nos sites dos clientes.
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
