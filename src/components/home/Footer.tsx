import Container from "@/components/layout/Container";
import Link from "next/link";
import Doodle from "@/components/ui/Doodle";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * Footer — a clean landing. Brand echo, real links only (section anchors +
 * email), and a build-time year. Nothing renders after it. Social links are
 * intentionally omitted until real handles are available (no invented URLs).
 * ------------------------------------------------------------------------- */

/* Route-based sitemap column (IA v2 §5). About points at its homepage
 * section until its route ships (Phase D). */
const NAV = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/business-systems", label: "Business Systems" },
  { href: "/social-designs", label: "Designs" },
  { href: "/#about", label: "About" },
  { href: "/resume", label: "Résumé" },
  { href: "/contact", label: "Contact" },
];

const EMAIL = "blujayabby@gmail.com";
const LIVE_PORTFOLIO = "https://www.heyitsabby.space/";

/* Latest updates — understated, newest first, never a blog. */
const RECENTLY = [
  { when: "Jul 2026", what: "Wedding RSVP Platform case study published" },
  { when: "Jul 2026", what: "Portfolio v3 — final presentation pass" },
  { when: "Jul 2026", what: "KATHA v2.0 released" },
  { when: "Jul 2026", what: "Microsoft Clarity analytics added" },
];

export interface FooterProps {
  /** Override the resting bg-surface — used on the homepage, where the
   *  scrapbook page background needs to stay visible all the way to the
   *  bottom, not fade into a flat surface band. @default '' */
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={cx("mt-auto border-t border-border bg-surface", className)}>
      <Container size="lg">
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <Link href="/" className="font-serif text-2xl font-semibold text-primary no-underline">
              Abby<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Web developer &amp; AI automation builder — from polished web
              apps to the CRM systems working behind them.
            </p>
          </div>

          {/* Column labels are styled text, not headings — they'd otherwise
              rank beside the page's section headings in the document outline */}
          <nav aria-label="Footer">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Explore
            </p>
            <ul className="grid gap-2">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-foreground/80 no-underline hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Get in touch
            </p>
            <ul className="grid gap-2">
              <li>
                <a href={`mailto:${EMAIL}`} className="text-sm font-semibold text-primary no-underline hover:underline">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hankerism"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-foreground/80 no-underline hover:text-primary"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abigailmarte/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-foreground/80 no-underline hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              {/* The canonical live address — so shares, prints, and local
                  copies always carry the way back to the current site. */}
              <li>
                <a
                  href={LIVE_PORTFOLIO}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-foreground/80 no-underline hover:text-primary"
                >
                  heyitsabby.space
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Recently
            </p>
            <ul className="grid gap-2">
              {RECENTLY.map((r) => (
                <li key={r.what} className="text-sm text-foreground/80">
                  {r.what}
                  <span className="ml-1.5 text-xs text-muted-foreground">· {r.when}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Abby. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with Next.js &amp; Tailwind CSS.
            <Doodle kind="heart" className="size-3.5 text-pink-deep/70" />
          </p>
        </div>
      </Container>
    </footer>
  );
}
