import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function LangSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();
  const opts: Lang[] = ["pt", "en"];
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border/80 bg-surface/60 p-0.5 text-xs font-semibold tracking-wide",
        compact && "text-[0.7rem]",
      )}
    >
      {opts.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => setLang(o)}
          aria-pressed={lang === o}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors duration-300",
            lang === o
              ? "bg-brand/15 text-brand shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--brand)_40%,transparent)]"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#inicio", label: t.nav.home },
    { href: "#servicos", label: t.nav.services },
    { href: "#processo", label: t.nav.how },
    { href: "#solucoes", label: t.nav.solutions },
    { href: "#parceiros", label: t.nav.partners },
    { href: "#contacto", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#inicio" aria-label="KwanzaSites">
          <Logo className="h-9" />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {l.label}
              <span className="absolute inset-x-3.5 bottom-1 h-px scale-x-0 bg-brand/70 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LangSwitch />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LangSwitch compact />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.menu}
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-surface/60 text-foreground"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-96 border-t opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col gap-1 px-5 pb-6 pt-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
