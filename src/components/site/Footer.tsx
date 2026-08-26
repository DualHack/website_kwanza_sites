import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";
import { WHATSAPP_URL } from "./WhatsAppButton";
import { Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  const { t } = useI18n();

  const columns = [
    { title: t.footer.company, links: t.footer.companyLinks, hrefs: ["#solucoes", "#processo", "#contacto"] },
    {
      title: t.footer.services,
      links: t.footer.serviceLinks,
      hrefs: ["#servicos", "#servicos", "#servicos", "#servicos"],
    },
  ];

  const socialLinks = [
    { icon: Instagram, url: "https://instagram.com" },
    { icon: Facebook, url: "https://facebook.com" },
    { icon: Linkedin, url: "https://linkedin.com" },
    { icon: MessageCircle, url: WHATSAPP_URL },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/25 pt-16 pb-8">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,color-mix(in_oklab,var(--brand)_14%,transparent),transparent_70%)] blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo className="h-9" />
            <p className="mt-5 text-[0.72rem] font-semibold tracking-[0.24em] text-brand uppercase">
              {t.footer.descriptor}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t.footer.description}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-bold tracking-[0.16em] text-foreground uppercase">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l, i) => (
                    <li key={l}>
                      <a
                        href={col.hrefs[i] ?? "#contacto"}
                        className="text-sm text-muted-foreground transition-colors duration-300 hover:text-brand-soft"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Links */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.16em] text-foreground uppercase">
                {t.footer.contact}
              </h3>
              <div className="mt-4 flex gap-4">
                {socialLinks.map(({ icon: Icon, url }) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors duration-300 hover:text-brand"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
