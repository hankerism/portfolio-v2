"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * Navbar — sticky top navigation.
 * Semantic <nav> landmark with a real link set (fixes the audit's empty-nav
 * finding). The brand is a link to top, NOT a heading, so the page keeps a
 * single <h1> in the hero. On small screens the links collapse into an
 * accessible disclosure menu (aria-expanded/controls, Escape to close, closes
 * on navigation). The Contact CTA stays visible at every width.
 * ------------------------------------------------------------------------- */

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#automation", label: "Automation" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md"
    >
      <Container size="lg">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#top" className="logo-link font-serif text-2xl font-semibold text-primary no-underline">
            Abby<span className="text-accent">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-sm font-semibold text-foreground/80 no-underline transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {/* Resume — the one evidence link recruiters reflex-scan the header
                for. (The PDF ships separately; see Phase 8A.1 notes.) */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden text-sm font-semibold text-foreground/80 no-underline transition-colors hover:text-primary md:block"
            >
              Resume
            </a>
            <div className="hidden md:block">
              <Button href="#contact" size="sm" variant="primary">
                Get in touch
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] text-foreground hover:bg-muted md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-6">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={cx("md:hidden", open ? "block" : "hidden")}
      >
        <Container size="lg">
          <ul className="flex flex-col gap-1 border-t border-border py-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-[var(--radius-sm)] px-3 py-2 font-semibold text-foreground no-underline hover:bg-muted"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-[var(--radius-sm)] px-3 py-2 font-semibold text-foreground no-underline hover:bg-muted"
              >
                Resume
              </a>
            </li>
            <li className="mt-2 px-1">
              <Button href="#contact" fullWidth onClick={() => setOpen(false)}>
                Get in touch
              </Button>
            </li>
          </ul>
        </Container>
      </div>
    </nav>
  );
}
