import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Doodle from "@/components/ui/Doodle";
import Reveal from "@/components/ui/Reveal";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * /projects — the index of everything built (IA v2 §4.2).
 *
 * Deliberately NOT a portfolio grid: an editorial table of contents — the
 * contents spread of the book the case studies are chapters of. One paper
 * sheet, numbered entries, dotted leaders to the links, hand notes in the
 * margins. Every link is real; missing evidence is stated, not styled around
 * (the standing no-fabrication rule).
 * ------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Projects — Abby",
  description:
    "Everything I've built: a production reading platform, a resort booking system on GoHighLevel, and client sites with the automations behind them — with full case studies where they exist.",
};

const EMAIL = "blujayabby@gmail.com";

type Entry = {
  n: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  caseStudy?: string;
  live?: { href: string; label: string };
  source?: string;
  /** Honest status marker when the write-up doesn't exist yet. */
  pending?: boolean;
  /** Handwritten margin note (decorative). */
  note?: string;
  accent: string;
};

/* Verified content only: blurbs and links carried over from the homepage
 * spreads and the two case studies. */
const ENTRIES: Entry[] = [
  {
    n: "01",
    title: "KATHA",
    category: "Product engineering",
    description:
      "A quiet, premium home for Filipino literature: a reading experience, a searchable catalogue, and an author studio — designed, built, and shipped as one product.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS 4"],
    caseStudy: "/projects/katha",
    live: { href: "https://katha-sigma.vercel.app/", label: "Live product" },
    source: "https://github.com/hankerism/katha",
    note: "start here — the flagship",
    accent: "text-primary",
  },
  {
    n: "02",
    title: "Bahay Liwanag",
    category: "Business system",
    description:
      "A serene site for a boutique resort — paired with a Make + Airtable pipeline that turns enquiries into booked reservations automatically.",
    tech: ["GoHighLevel", "Make", "Airtable"],
    caseStudy: "/projects/bahay-liwanag",
    live: {
      href: "https://heyitsabby.space/website/bahay-liwanag",
      label: "Live site",
    },
    note: "the systems chapter",
    accent: "text-accent-hover",
  },
  {
    n: "03",
    title: "Casa Kape",
    category: "Café website",
    description:
      "A warm one-page site for a local café — menu, story, and a tap-to-message enquiry form that lands straight in the owner's inbox.",
    tech: ["GoHighLevel", "One-page", "Enquiry form"],
    live: { href: "https://heyitsabby.space/casa-kape", label: "Live site" },
    pending: true,
    accent: "text-pink-deep",
  },
  {
    n: "04",
    title: "Purr Heaven",
    category: "Community website",
    description:
      "A playful multi-page site for a cat adoption & rescue group — an adoptable-cat gallery, enquiry forms, and friendly auto-replies through GoHighLevel.",
    tech: ["GoHighLevel", "Multi-page", "Auto-replies"],
    live: {
      href: "https://heyitsabby.space/website/purrheaven/home",
      label: "Live site",
    },
    pending: true,
    accent: "text-sage",
  },
  {
    n: "05",
    title: "Stephanie Center Wellness",
    category: "Business system · Functional medicine",
    description:
      "A women's hair-health practice, its education-first funnel rebuilt inside GoHighLevel — preserving the brand and the existing AWeber and Practice Better stack, and connecting lead capture to the CRM.",
    tech: ["GoHighLevel", "AWeber", "Practice Better"],
    caseStudy: "/projects/stephanie-center",
    note: "systems, in healthcare",
    accent: "text-sage",
  },
];

/** External-link arrow, matching the homepage VisitLink glyph. */
function ExtArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-3.5 transition-transform group-hover/plink:-translate-y-0.5 group-hover/plink:translate-x-0.5"
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EntryLinks({ e }: { e: Entry }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1">
      {e.caseStudy && (
        <Link
          href={e.caseStudy}
          className={cx(
            "group/plink inline-flex items-center gap-1.5 text-sm font-bold no-underline",
            e.accent,
          )}
        >
          <span className="underline-offset-4 group-hover/plink:underline">
            Read the case study
          </span>
          <span aria-hidden className="transition-transform group-hover/plink:translate-x-0.5">
            →
          </span>
        </Link>
      )}
      {e.live && (
        <a
          href={e.live.href}
          target="_blank"
          rel="noreferrer"
          className="group/plink inline-flex items-center gap-1.5 text-sm font-bold text-foreground/70 no-underline hover:text-primary"
        >
          <span className="underline-offset-4 group-hover/plink:underline">{e.live.label}</span>
          <ExtArrow />
        </a>
      )}
      {e.source && (
        <a
          href={e.source}
          target="_blank"
          rel="noreferrer"
          className="group/plink inline-flex items-center gap-1.5 text-sm font-bold text-foreground/70 no-underline hover:text-primary"
        >
          <span className="underline-offset-4 group-hover/plink:underline">Source</span>
          <ExtArrow />
        </a>
      )}
      {e.pending && (
        <span aria-hidden className="hand text-lg text-muted-foreground">
          <span className="marker">case study in progress</span>
        </span>
      )}
      {/* Screen-reader equivalent of the decorative marker note */}
      {e.pending && <span className="sr-only">Case study in progress.</span>}
    </div>
  );
}

export default function ProjectsIndex() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-sm)] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        {/* ── Header ─────────────────────────────────────────────────────────── */}
        <header className="border-b border-border bg-gradient-to-b from-lavender-tint/50 to-background">
          <Container size="md" className="py-16 sm:py-20">
            <p className="hand text-2xl text-primary sm:text-3xl">The collection</p>
            <h1 className="mt-2 text-balance">Projects</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/80">
              Everything I&rsquo;ve built, in one place — a production reading
              platform, a resort booking system, and the client sites with
              automations working quietly behind them. Read this page like a
              table of contents: two chapters are written in full, the rest are
              live and linkable.
            </p>
          </Container>
        </header>

        {/* ── The contents sheet ─────────────────────────────────────────────── */}
        <section aria-label="All projects" className="py-16 sm:py-20">
          <Container size="md">
            <div className="grain relative rounded-[var(--radius-2xl)] border border-border bg-surface p-6 sm:p-10 lg:p-14">
              {/* Sheet ephemera — pressed into the margins, never over text */}
              <span aria-hidden className="tape tape-cream left-12 -top-3 -rotate-3 rounded-[2px]" />
              <Doodle
                kind="sprig"
                draw
                className="absolute right-8 top-10 hidden w-8 rotate-12 text-sage/50 lg:block"
              />
              <Doodle
                kind="route"
                className="absolute bottom-10 right-10 hidden w-28 -rotate-2 text-primary/20 xl:block"
              />

              <p aria-hidden className="hand text-2xl text-muted-foreground">
                table of contents
              </p>

              <ol className="mt-6">
                {ENTRIES.map((e, i) => (
                  <Reveal
                    as="li"
                    key={e.n}
                    delay={i * 90}
                    y={16}
                    className="list-none border-b border-border/60 py-8 last:border-0 last:pb-0 first:pt-0 sm:py-10"
                  >
                    <article className="relative grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-8">
                      {/* Chapter number — the contents-page anchor */}
                      <p aria-hidden className={cx("hand text-3xl sm:text-4xl", e.accent)}>
                        {e.n}
                      </p>

                      <div className="max-w-2xl space-y-3">
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                          <h2 className="text-2xl sm:text-3xl">{e.title}</h2>
                          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            {e.category}
                          </p>
                          {e.note && (
                            <span aria-hidden className={cx("hand text-lg", e.accent)}>
                              {e.note}
                            </span>
                          )}
                        </div>

                        <p className="text-foreground/80">{e.description}</p>

                        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                          {e.tech.map((t) => (
                            <li
                              key={t}
                              className="rounded-full border border-border bg-card/70 px-2.5 py-0.5 text-xs font-semibold text-muted-foreground"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>

                        <EntryLinks e={e} />
                      </div>
                    </article>
                  </Reveal>
                ))}
              </ol>
            </div>
          </Container>
        </section>

        {/* ── Next step — the conversation ───────────────────────────────────── */}
        <section aria-labelledby="projects-contact-heading" className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md">
            <div className="flex flex-col items-start gap-5">
              <p aria-hidden className="hand text-2xl text-primary">seen enough?</p>
              <h2 id="projects-contact-heading" className="max-w-xl">
                If something here looks like your problem, let&rsquo;s talk
              </h2>
              <div className="flex flex-wrap items-center gap-3">
                <Button href={`mailto:${EMAIL}`} variant="primary">
                  Email me
                </Button>
                <Button href="/contact" as={Link} variant="ghost">
                  All contact options
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
