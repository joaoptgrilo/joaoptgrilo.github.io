// src/data/pt/experienceData.ts
import { ExperienceItem } from "../types";

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: "Programador Full-Stack",
    company: "Fedrax",
    companyLink: "https://www.fedrax.com/",
    companyLogoUrl: "/images/logos/fedrax-logo.svg",
    companyLogoAlt: "Logótipo da Fedrax",
    location: "Portimão, Portugal",
    period: "Fev 2020 – Out 2023",
    descriptionItems: [
      "Arquitetura, desenvolvimento e manutenção de plataformas web de missão crítica e elevado tráfego, utilizando uma stack principal de {PHP} e {MySQL}, garantindo mais de 99,9% de uptime e uma escalabilidade robusta.",
      "Desenvolvimento de uma biblioteca de componentes de frontend dinâmicos, reutilizáveis e de alta performance com {React} e {JavaScript} moderno, resultando numa melhoria direta das principais métricas de engagement do utilizador, incluindo uma redução de ~10% na bounce rate e um aumento de ~12% na duração das sessões.",
      "Orquestração do ciclo de vida completo de {APIs REST} seguras e versionadas, que suportaram novas funcionalidades de produto e {permitiram integrações críticas com parceiros}, expandindo as capacidades de negócio e eliminando erros de sincronização de dados.",
      'Promoção de metodologias {Agile} e estandardização de ambientes de desenvolvimento com {Docker}, o que {reduziu os bugs do tipo "funciona na minha máquina" em mais de 50%} e acelerou o onboarding de novos programadores, aumentando a velocidade geral da equipa.',
      "Liderança de uma otimização de performance full-stack, através da otimização de queries de base de dados, implementação de caching avançado e refinação da entrega de assets, elevando as pontuações do Google Lighthouse para mais de 90 e gerando um aumento de ~15% no tráfego orgânico.",
    ],
    keyTech: [
      {
        name: "PHP",
        description:
          "Linguagem de backend principal para a construção de aplicações web e APIs robustas.",
      },
      {
        name: "JavaScript",
        description:
          "Linguagem de alto nível para criar experiências de utilizador dinâmicas e interativas.",
      },
      {
        name: "React",
        description:
          "Biblioteca JavaScript para a construção de UIs de alta performance baseadas em componentes.",
      },
      {
        name: "MySQL",
        description:
          "Sistema de gestão de bases de dados relacionais para armazenar e gerir dados de aplicações.",
      },
      {
        name: "REST APIs",
        description:
          "Desenho, construção e consumo de APIs para uma comunicação fluida entre serviços.",
      },
      {
        name: "Docker",
        description:
          "Plataforma de contentorização para criar ambientes de desenvolvimento consistentes e portáteis.",
      },
      {
        name: "Agile",
        description:
          "Gestão de projetos iterativa para entregar software de alta qualidade de forma eficiente.",
      },
    ],
  },
  {
    id: 2,
    role: "Programador Full-Stack",
    company: "ZeroUm",
    companyLink: "https://zeroum.pt/",
    companyLogoUrl: "/images/logos/zeroum-logo.png",
    companyLogoAlt: "Logótipo da ZeroUm",
    location: "Silves, Portugal",
    period: "Mar 2019 – Fev 2020",
    descriptionItems: [
      "Desenvolvimento e escalonamento de sites {WordPress} personalizados e soluções {WooCommerce} complexas, através de código {PHP} limpo e orientado a objetos, e da otimização de queries {MySQL} para e-commerce de elevado tráfego.",
      "Criação de temas e plugins personalizados com {JavaScript}, {HTML5} e {CSS3} para fornecer funcionalidades à medida, como gateways de pagamento e integrações de APIs, aumentando a receita e a autonomia operacional dos clientes.",
      "Otimização das operações de e-commerce dos clientes através da automação do processamento de encomendas e da sincronização de inventário, resultando num aumento de eficiência de até 30%.",
      "Implementação de otimização de performance web (WPO) e de robustecimento da segurança (security hardening), alcançando uma redução média de ~40% nos tempos de carregamento e melhorando a experiência do utilizador e o ranking nos motores de busca.",
    ],
    keyTech: [
      {
        name: "PHP",
        description:
          "Linguagem principal para o desenvolvimento e personalização de WordPress/WooCommerce.",
      },
      {
        name: "WordPress",
        description:
          "CMS para construir e gerir websites personalizados e ricos em conteúdo.",
      },
      {
        name: "WooCommerce",
        description:
          "Plataforma de e-commerce para a criação de lojas online poderosas e escaláveis.",
      },
      {
        name: "MySQL",
        description:
          "A base de dados subjacente para a gestão de produtos, encomendas e dados de utilizadores.",
      },
      {
        name: "JavaScript",
        description:
          "Utilizado para criar funcionalidades de frontend interativas e personalizadas.",
      },
      {
        name: "HTML5",
        description: "O padrão para a estruturação de conteúdo web.",
      },
      {
        name: "CSS3",
        description: "Utilizado para a estilização e design de páginas web.",
      },
    ],
  },
];
