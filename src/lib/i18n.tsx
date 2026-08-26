import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

export const dict = {
  pt: {
    nav: {
      home: "Início",
      services: "Serviços",
      how: "Como Trabalhamos",
      solutions: "Soluções",
      contact: "Contacto",
      cta: "Falar com a KwanzaSites",
      menu: "Menu",
    },
    hero: {
      badge: "ANGOLA · SOFTWARE HOUSE",
      title: "Transformando desafios de negócio em soluções digitais",
      text: "Desenvolvemos software, automações e soluções digitais personalizadas para transformar processos complexos em experiências simples, eficientes e escaláveis.",
      primary: "Construir uma solução",
      secondary: "Falar connosco",
      descriptor: "Software • Automation • Digital Solutions",
    },
    problems: {
      title: "Seu negócio tem um problema. Nós construímos a solução.",
      items: [
        {
          t: "Processos manuais",
          d: "Reduza tarefas repetitivas e aumente a produtividade.",
        },
        {
          t: "Sistemas desconectados",
          d: "Integre ferramentas e centralize informações.",
        },
        {
          t: "Falta de presença digital",
          d: "Transforme a sua presença digital numa experiência profissional.",
        },
        {
          t: "Processos difíceis de escalar",
          d: "Construa sistemas preparados para acompanhar o crescimento do negócio.",
        },
      ],
    },
    services: {
      eyebrow: "Serviços",
      title: "Tecnologia construída para o seu negócio.",
      items: [
        {
          t: "Desenvolvimento de Software",
          d: "Criamos websites, plataformas e sistemas personalizados para resolver necessidades específicas do seu negócio.",
        },
        {
          t: "Automação",
          d: "Transformamos processos repetitivos em workflows automáticos, reduzindo erros e libertando tempo da sua equipa.",
        },
        {
          t: "Integrações",
          d: "Conectamos sistemas, APIs e ferramentas para que os seus dados fluam de forma simples e eficiente.",
        },
        {
          t: "Manutenção & Evolução",
          d: "Mantemos as suas soluções seguras, atualizadas e preparadas para acompanhar o crescimento do seu negócio.",
        },
      ],
    },
    house: {
      eyebrow: "Software House",
      title: "Mais do que desenvolvimento. Somos o seu parceiro tecnológico.",
      text: "Da ideia à produção, acompanhamos todo o ciclo de vida da solução.",
      steps: ["Discovery", "Design", "Development", "QA", "Deployment", "Evolution"],
    },
    process: {
      eyebrow: "Como trabalhamos",
      title: "Do problema à solução.",
      items: [
        { t: "Descoberta", d: "Entendemos o negócio, os processos e o problema." },
        { t: "Estratégia", d: "Definimos a melhor abordagem tecnológica." },
        {
          t: "Desenvolvimento",
          d: "Construímos a solução com foco em qualidade e escalabilidade.",
        },
        { t: "QA & Deploy", d: "Testamos, validamos e colocamos a solução em produção." },
        { t: "Evolução", d: "Continuamos a melhorar e manter a solução." },
      ],
    },
    why: {
      eyebrow: "Por que KwanzaSites",
      title: "Construímos tecnologia com propósito.",
      items: [
        {
          t: "Soluções personalizadas",
          d: "Nada de soluções genéricas quando o negócio exige algo específico.",
        },
        { t: "Qualidade", d: "Desenvolvimento orientado a boas práticas e testes." },
        { t: "Escalabilidade", d: "Soluções preparadas para evoluir." },
        { t: "Parceiro tecnológico", d: "Não desaparecemos depois do deploy." },
      ],
    },
    audience: {
      eyebrow: "Para quem construímos",
      title: "Tecnologia para negócios que querem evoluir.",
      items: [
        "Pequenas e médias empresas",
        "Startups",
        "Empresas de serviços",
        "Comércio",
        "Instituições",
        "Empreendedores",
      ],
    },
    cta: {
      title: "Tem um problema que pode ser resolvido com tecnologia?",
      text: "Vamos transformar a sua ideia, processo ou desafio numa solução digital.",
      primary: "Falar com um especialista",
      secondary: "Solicitar orçamento",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Vamos juntos construir algo melhor.",
      name: "Nome",
      company: "Empresa",
      email: "Email",
      phone: "Telefone / WhatsApp",
      type: "Tipo de solução",
      typePlaceholder: "O que procura?",
      options: [
        "Website",
        "Sistema personalizado",
        "Automação",
        "Integração",
        "Manutenção",
        "Outro",
      ],
      message: "Mensagem",
      submit: "Enviar pedido",
      alt: "Prefere falar diretamente?",
      whatsapp: "WhatsApp",
      sent: "Pedido preparado. Vamos responder em breve.",
    },
    whatsapp: { label: "Falar no WhatsApp" },
    footer: {
      descriptor: "Software • Automation • Digital Solutions",
      description: "Construímos soluções tecnológicas para empresas que querem evoluir.",
      company: "Empresa",
      companyLinks: ["Sobre", "Como trabalhamos", "Contacto"],
      services: "Serviços",
      serviceLinks: ["Desenvolvimento", "Automação", "Integrações", "Manutenção"],
      contact: "Contacto",
      contactLinks: ["Email", "WhatsApp", "Angola"],
      rights: "© 2026 KwanzaSites. Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      how: "How We Work",
      solutions: "Solutions",
      contact: "Contact",
      cta: "Talk to KwanzaSites",
      menu: "Menu",
    },
    hero: {
      badge: "ANGOLA · SOFTWARE HOUSE",
      title: "Transforming business challenges into digital solutions.",
      text: "We build custom software, automations and digital solutions that turn complex processes into simple, efficient and scalable experiences.",
      primary: "Build a solution",
      secondary: "Talk to us",
      descriptor: "Software • Automation • Digital Solutions",
    },
    problems: {
      title: "Your business has a problem. We build the solution.",
      items: [
        { t: "Manual processes", d: "Cut repetitive tasks and increase productivity." },
        { t: "Disconnected systems", d: "Integrate tools and centralise information." },
        {
          t: "No digital presence",
          d: "Turn your digital presence into a professional experience.",
        },
        {
          t: "Processes that don't scale",
          d: "Build systems ready to keep up with business growth.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Technology built for your business.",
      items: [
        {
          t: "Software Development",
          d: "We create websites, platforms and custom systems that solve specific business needs.",
        },
        {
          t: "Automation",
          d: "We turn repetitive processes into automatic workflows, reducing errors and freeing your team's time.",
        },
        {
          t: "Integrations",
          d: "We connect systems, APIs and tools so your data flows simply and efficiently.",
        },
        {
          t: "Maintenance & Evolution",
          d: "We keep your solutions secure, up to date and ready to follow your growth.",
        },
      ],
    },
    house: {
      eyebrow: "Software House",
      title: "More than development. We are your technology partner.",
      text: "From idea to production, we cover the full lifecycle of the solution.",
      steps: ["Discovery", "Design", "Development", "QA", "Deployment", "Evolution"],
    },
    process: {
      eyebrow: "How we work",
      title: "From problem to solution.",
      items: [
        { t: "Discovery", d: "We understand the business, the processes and the problem." },
        { t: "Strategy", d: "We define the best technical approach." },
        { t: "Development", d: "We build the solution focused on quality and scalability." },
        { t: "QA & Deploy", d: "We test, validate and ship the solution to production." },
        { t: "Evolution", d: "We keep improving and maintaining the solution." },
      ],
    },
    why: {
      eyebrow: "Why KwanzaSites",
      title: "We build technology with purpose.",
      items: [
        {
          t: "Custom solutions",
          d: "No generic templates when the business demands something specific.",
        },
        { t: "Quality", d: "Development driven by best practices and testing." },
        { t: "Scalability", d: "Solutions prepared to evolve." },
        { t: "Technology partner", d: "We don't disappear after deployment." },
      ],
    },
    audience: {
      eyebrow: "Who we build for",
      title: "Technology for businesses that want to evolve.",
      items: [
        "Small and medium businesses",
        "Startups",
        "Service companies",
        "Retail & commerce",
        "Institutions",
        "Entrepreneurs",
      ],
    },
    cta: {
      title: "Do you have a problem technology can solve?",
      text: "Let's turn your idea, process or challenge into a digital solution.",
      primary: "Talk to a specialist",
      secondary: "Request a quote",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something better.",
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone / WhatsApp",
      type: "Solution type",
      typePlaceholder: "What are you looking for?",
      options: [
        "Website",
        "Custom system",
        "Automation",
        "Integration",
        "Maintenance",
        "Other",
      ],
      message: "Message",
      submit: "Send request",
      alt: "Prefer to talk directly?",
      whatsapp: "WhatsApp",
      sent: "Request ready. We'll get back to you shortly.",
    },
    whatsapp: { label: "Chat on WhatsApp" },
    footer: {
      descriptor: "Software • Automation • Digital Solutions",
      description: "We build technology solutions for businesses that want to evolve.",
      company: "Company",
      companyLinks: ["About", "How we work", "Contact"],
      services: "Services",
      serviceLinks: ["Development", "Automation", "Integrations", "Maintenance"],
      contact: "Contact",
      contactLinks: ["Email", "WhatsApp", "Angola"],
      rights: "© 2026 KwanzaSites. All rights reserved.",
    },
  },
} as const;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof dict)["pt"] };

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const value = useMemo(
    () => ({ lang, setLang, t: dict[lang] as (typeof dict)["pt"] }),
    [lang],
  );
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
