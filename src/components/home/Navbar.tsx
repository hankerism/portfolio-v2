"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * Navbar — sticky top navigation (IA v2 §5: route-based, application-grade).
 * Semantic <nav> landmark; the brand is a link home, NOT a heading, so every
 * page keeps a single <h1>. Route items get active-route indication via
 * usePathname + aria-current — the clearest "this is an application" signal.
 * On small screens the links collapse into an accessible disclosure menu
 * (aria-expanded/controls, Escape to close, closes on navigation). The
 * Contact CTA stays visible at every width.
 *
 * Two states: at the very top the bar is transparent and reads as part of
 * the page; after ~8px of scroll (or with the mobile menu open, which needs
 * the backdrop for readability) it elevates — translucent cream, backdrop
 * blur, hairline border — and eases back when you return to the top.
 *
 * Interim states (per IA v2 phasing): About points at its homepage section
 * until /about (Phase D) ships. Resume is now a real page (/resume).
 * ------------------------------------------------------------------------- */

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/business-systems", label: "Business Systems" },
  { href: "/#about", label: "About" },
  { href: "/resume", label: "Résumé" },
] as const;

/** Route links highlight on their own subtree; anchor links never highlight. */
function isActive(pathname: string, href: string): boolean {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Elevate after a few pixels of scroll. The initial call covers loading
  // mid-page (hash links, restored scroll positions).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const elevated = scrolled || open;

  return (
    <nav
      aria-label="Primary"
      className={cx(
        "sticky top-0 z-50 border-b transition-all duration-300 ease-out",
        elevated
          ? "border-border/70 bg-background/85 shadow-[0_1px_10px_-6px_rgba(58,47,66,0.18)] backdrop-blur-md"
          : "border-transparent bg-transparent shadow-none",
      )}
    >
      <Container size="lg">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="logo-link font-serif text-2xl font-semibold text-primary no-underline">
            Abby<span className="text-accent">.</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => {
              const active = isActive(pathname, l.href);
              const Tag = l.href.includes("#") ? "a" : Link;
              return (
                <li key={l.href}>
                  <Tag
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={cx(
                      "relative text-sm font-semibold no-underline transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-full after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
                      active
                        ? "text-primary after:w-full"
                        : "text-foreground/80 after:w-0",
                    )}
                  >
                    {l.label}
                  </Tag>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            {/* Resume returns here as /resume when real resume content lands
                (IA v2 §8 input 1) — the previous /resume.pdf href was dead. */}
            <div className="hidden md:block">
              <Button href="/contact" as={Link} size="sm" variant="primary">
                Get in touch
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-[var(--radius-sm)] text-foreground hover:bg-muted md:hidden"
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
            {LINKS.map((l) => {
              const active = isActive(pathname, l.href);
              const Tag = l.href.includes("#") ? "a" : Link;
              return (
                <li key={l.href}>
                  <Tag
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cx(
                      "block rounded-[var(--radius-sm)] px-3 py-2 font-semibold no-underline hover:bg-muted",
                      active ? "bg-muted text-primary" : "text-foreground",
                    )}
                  >
                    {l.label}
                  </Tag>
                </li>
              );
            })}
            <li className="mt-2 px-1">
              <Button href="/contact" as={Link} fullWidth onClick={() => setOpen(false)}>
                Get in touch
              </Button>
            </li>
          </ul>
        </Container>
      </div>
    </nav>
  );
}
