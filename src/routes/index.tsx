import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import {
  Audience,
  Contact,
  CtaBand,
  Hero,
  Problems,
  Process,
  Services,
  SoftwareHouse,
  Why,
} from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

const siteUrl = import.meta.env.VITE_SITE_URL || "/";
const siteName = "KwanzaSites";
const siteDescription =
  "Software house angolana especializada em desenvolvimento de software, automação de processos, integrações e manutenção de soluções digitais.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${siteName} | Software House em Angola` },
      { name: "description", content: siteDescription },
      { name: "keywords", content: "software house em Angola, desenvolvimento de software em Angola, automação de processos, soluções tecnológicas Angola" },
      { property: "og:site_name", content: siteName },
      { property: "og:title", content: `${siteName} | Tecnologia que transforma negócios` },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${siteName} | Software House em Angola` },
      { name: "twitter:description", content: siteDescription },
      { name: "twitter:url", content: siteUrl },
    ],
    links: [{ rel: "canonical", href: siteUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteName,
          url: siteUrl,
          logo: `${siteUrl.replace(/\/$/, "")}/logo.png`,
          description: siteDescription,
          areaServed: { "@type": "Country", name: "Angola" },
          knowsAbout: [
            "Desenvolvimento de software",
            "Automação de processos",
            "Desenvolvimento web",
            "Integração de sistemas",
            "Transformação digital",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Problems />
          <Services />
          <SoftwareHouse />
          <Process />
          <Why />
          <Audience />
          <CtaBand />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </I18nProvider>
  );
}
