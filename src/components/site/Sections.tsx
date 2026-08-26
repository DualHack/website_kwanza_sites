import {
  ArrowUpRight,
  Boxes,
  Building2,
  CheckCircle2,
  ChevronDown,
  Code2,
  Compass,
  Fingerprint,
  Gauge,
  Handshake,
  Layers,
  LineChart,
  Network,
  PenTool,
  Repeat,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  Store,
  TrendingUp,
  Unplug,
  Users,
  Workflow,
  Zap,
  Palette
} from "lucide-react";
import { Reveal } from "./Reveal";
import { useI18n } from "@/lib/i18n";
import { useState, type ComponentType } from "react";

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.2em] text-brand uppercase">
      <span className="h-px w-6 bg-brand/60" />
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="text-gradient max-w-3xl text-balance text-xl leading-[1.1] font-extrabold sm:text-2xl lg:text-2xl">
      {children}
    </h2>
  );
}

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="inicio"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="
          grid-bg
          pointer-events-none
          absolute
          inset-0
          opacity-30
          [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]
        "
      />

      {/* Main glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[1000px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(ellipse,color-mix(in_oklab,var(--brand)_20%,transparent),transparent_65%)]
          blur-3xl
          animate-glow-drift
        "
      />

      {/* Secondary glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[300px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-brand/10
          blur-[100px]
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-5xl
          flex-col
          items-center
          px-5
          text-center
          lg:px-8
        "
      >
        {/* Title */}
        <Reveal delay={80}>
          <h1
            className="
              mx-auto
              max-w-5xl
              text-balance
              text-3xl
              font-extrabold
              leading-[0.98]
              tracking-tight
              sm:text-4xl
              md:text-4xl
              lg:text-5xl
              animate-typing
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1]
            "
            style={{
              background: "linear-gradient(180deg, var(--foreground) 30%, color-mix(in oklab, var(--foreground) 55%, transparent))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {t.hero.title}
          </h1>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={220}>
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-2 sm:mt-10 sm:w-auto sm:flex-row sm:gap-6">
            {/* Left Button */}
            <a
              href="#contacto"
              className="group inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-lg border border-brand/60 bg-brand/10 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-brand hover:bg-brand/20 hover:text-brand underline-animate-hover sm:w-auto sm:max-w-none sm:justify-start sm:rounded-none sm:border-0 sm:bg-transparent sm:px-6 sm:py-3"
            >
              <span>{t.hero.primary}</span>
              <ArrowUpRight className="size-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* Arrow Divider */}
            <div className="hidden sm:flex items-center gap-3 text-muted-foreground">
              <span className="h-px w-8 bg-gradient-to-r from-muted-foreground to-transparent" />
              <ArrowUpRight className="size-4 rotate-90" />
              <span className="h-px w-8 bg-gradient-to-l from-muted-foreground to-transparent" />
            </div>

            {/* Right Button */}
             <a
              href="#contacto"
              className="group inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-lg border border-border bg-surface/50 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-brand/60 hover:bg-surface hover:text-brand underline-animate-hover sm:w-auto sm:max-w-none sm:justify-start sm:rounded-none sm:border-0 sm:bg-transparent sm:px-6 sm:py-3"
            >
              <span>{t.hero.secondary}</span>
              <ArrowUpRight className="size-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </Reveal>

        {/* Descriptor */}
        <Reveal delay={340}>
          <p
            className="
              mt-10
              max-w-2xl
              text-[0.68rem]
              font-semibold
              tracking-[0.32em]
              text-muted-foreground
              uppercase
              sm:text-xs
            "
          >
            {t.hero.descriptor}
          </p>
        </Reveal>

        {/* Decorative indicator */}
        <Reveal delay={450}>
          <div className="mt-12 flex items-center gap-3 opacity-60">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-brand/50" />
            <span className="size-1.5 rounded-full bg-brand shadow-[0_0_10px_var(--brand)]" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-brand/50" />
          </div>
        </Reveal>
        
      </div>
    </section>
  );
}



/* ---------------- Problems ---------------- */
export function Problems() {
  const { t } = useI18n();
  const icons: ComponentType<{ className?: string }>[] = [Repeat, Unplug, Compass, TrendingUp];
  return (
    <section className="relative border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionTitle>{t.problems.title}</SectionTitle>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.problems.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.t} delay={i * 90}>
                <article className="card-hover group h-full rounded-2xl border border-border bg-surface/50 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/8 text-brand transition-colors duration-300 group-hover:bg-brand/15">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-foreground">{item.t}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
export function Services() {
  const { t } = useI18n();
  const icons = [Code2, Zap, Network, Settings2];
  return (
    <section id="servicos" className="relative border-t border-border py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--brand)_14%,transparent),transparent_70%)] blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <Eyebrow>{t.services.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-5">
            <SectionTitle>{t.services.title}</SectionTitle>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.t} delay={i * 90}>
                <article className="card-hover group relative h-full overflow-hidden rounded-3xl border border-border bg-surface/50 p-8">
                  <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand/8 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-5">
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-brand/25 bg-brand/10 text-brand">
                      <Icon className="size-5.5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{item.t}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.d}
                      </p>
                    </div>
                  </div>
                  <span className="relative mt-7 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Software House ---------------- */
export function SoftwareHouse() {
  const { t } = useI18n();
  const icons = [Search, PenTool, Code2, ShieldCheck, Rocket, LineChart];
  return (
    <section
      id="solucoes"
      className="relative overflow-hidden border-t border-border py-24 lg:py-32"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>{t.house.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-5">
              <SectionTitle>{t.house.title}</SectionTitle>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-base text-muted-foreground">{t.house.text}</p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent lg:block" />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {t.house.steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <Reveal as="li" key={step} delay={i * 80} className="relative">
                  <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-2xl border border-brand/25 bg-background text-brand shadow-[0_0_0_6px_var(--background)]">
                    <Icon className="size-5" />
                  </span>
                  <p className="mt-4 text-sm font-bold text-foreground">{step}</p>
                  <p className="mt-1 text-xs tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */

export function Process() {
  const { t } = useI18n();

  const icons = [Search, Palette, Code2, Rocket, TrendingUp];

  return (
    <section
      id="processo"
      className="relative overflow-hidden border-t border-border py-24 lg:py-32"
    >
      {/* Ambient background */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(ellipse,color-mix(in_oklab,var(--brand)_8%,transparent),transparent_70%)]
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* Header */}
        <Reveal>
          <Eyebrow>{t.process.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-5 max-w-3xl">
            <SectionTitle>{t.process.title}</SectionTitle>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.items.map((item, i) => {
            const Icon = icons[i % icons.length];

            return (
              <Reveal key={item.t} delay={i * 90}>
                <article className="card-hover group h-full rounded-2xl border border-border bg-surface/50 p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/8 text-brand transition-colors duration-300 group-hover:bg-brand/15">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-foreground">{item.t}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why ---------------- */
export function Why() {
  const { t } = useI18n();
  const icons = [Fingerprint, CheckCircle2, Gauge, Handshake];
  return (
    <section className="relative border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <Eyebrow>{t.why.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-5">
            <SectionTitle>{t.why.title}</SectionTitle>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.t} delay={i * 90}>
                <article className="card-hover group h-full rounded-2xl border border-border bg-gradient-to-b from-surface/60 to-transparent p-6">
                  <Icon className="size-6 text-brand transition-transform duration-400 group-hover:-translate-y-0.5" />
                  <h3 className="mt-5 text-base font-bold text-foreground">{item.t}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Audience ---------------- */
export function Audience() {
  const { t } = useI18n();
  const icons = [Building2, Rocket, Layers, Store, Boxes, Users];
  return (
    <section className="relative border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>{t.audience.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-5">
                <SectionTitle>{t.audience.title}</SectionTitle>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {t.audience.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={item} delay={i * 70}>
                  <div className="card-hover flex items-center gap-3.5 rounded-xl border border-border bg-surface/40 px-4 py-4">
                    <Icon className="size-4.5 shrink-0 text-brand" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA band ---------------- */
export function CtaBand() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden border-t border-border py-24 lg:py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 animate-glow-drift rounded-full bg-[radial-gradient(ellipse,color-mix(in_oklab,var(--brand)_20%,transparent),transparent_65%)] blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="text-gradient text-balance text-2xl leading-[1.1] font-extrabold sm:text-3xl">
            {t.cta.title}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">{t.cta.text}</p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:text-brand underline-animate-hover"
            >
              {t.cta.primary}
              <ArrowUpRight className="size-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:text-brand underline-animate-hover"
            >
              {t.cta.secondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
const fieldClass =
  "w-full rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-300 focus:border-brand/60 focus:bg-surface focus:ring-2 focus:ring-brand/20";

export function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="relative border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>{t.contact.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-5">
                <SectionTitle>{t.contact.title}</SectionTitle>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-border bg-surface/40 p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold text-muted-foreground">
                    {t.contact.name}
                  </label>
                  <input required className={fieldClass} name="name" />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold text-muted-foreground">
                    {t.contact.company}
                  </label>
                  <input className={fieldClass} name="company" />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold text-muted-foreground">
                    {t.contact.email}
                  </label>
                  <input required type="email" className={fieldClass} name="email" />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold text-muted-foreground">
                    {t.contact.phone}
                  </label>
                  <input className={fieldClass} name="phone" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs font-semibold text-muted-foreground">
                    {t.contact.type}
                  </label>
                  <select required defaultValue="" className={fieldClass} name="type">
                    <option value="" disabled>
                      {t.contact.typePlaceholder}
                    </option>
                    {t.contact.options.map((o) => (
                      <option key={o} value={o} className="bg-surface-2">
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs font-semibold text-muted-foreground">
                    {t.contact.message}
                  </label>
                  <textarea rows={5} className={`${fieldClass} resize-none`} name="message" />
                </div>
              </div>

              <button
                type="submit"
                className="group mt-6 inline-flex w-full items-center gap-2 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:text-brand underline-animate-hover sm:w-auto"
              >
                {t.contact.submit}
                <ArrowUpRight className="size-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              {sent ? (
                <p className="mt-4 flex items-center gap-2 text-sm text-brand-soft">
                  <CheckCircle2 className="size-4" />
                  {t.contact.sent}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export { Workflow };
