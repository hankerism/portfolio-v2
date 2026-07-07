import Container from "@/components/layout/Container";
import Link from "next/link";
import Doodle from "@/components/ui/Doodle";

/* ---------------------------------------------------------------------------
 * Footer — a clean landing. Brand echo, real links only (section anchors +
 * email), and a build-time year. Nothing renders after it. Social links are
 * intentionally omitted until real handles are available (no invented URLs).
 * ------------------------------------------------------------------------- */

/* Route-based sitemap column (IA v2 §5). Business Systems and About point at
 * their homepage sections until their routes ship (Phases C and D). */
const NAV = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#automation", label: "Business Systems" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const EMAIL = "blujayabby@gmail.com";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <Container size="lg">
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-xs">
            <Link href="/" className="font-serif text-2xl font-semibold text-primary no-underline">
              Abby<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Product engineer &amp; automation specialist — building complete
              digital products and business systems.
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
              {/* Resume rejoins as /resume once real resume content lands
                  (IA v2 §8 input 1) — the old /resume.pdf href was dead.
                  LinkedIn joins the moment the real URL is provided —
                  no invented links (Phase 8A working rule). */}
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
