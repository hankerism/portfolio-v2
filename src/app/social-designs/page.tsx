import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Background from "@/components/home/Background";
import Container from "@/components/layout/Container";
import Doodle from "@/components/ui/Doodle";
import DesignGallery from "@/components/social/DesignGallery";
import { SOCIAL_COLLECTIONS, TOTAL_FRAMES } from "@/lib/socialDesigns";

/* ---------------------------------------------------------------------------
 * /social-designs — the visual work, presented as projects rather than files.
 *
 * One tile per source folder; clicking one opens that whole folder as the
 * carousel it was designed to be. The page deliberately shows collections,
 * not every frame — the frames belong inside the opened gallery.
 *
 * Environment: the same universal scrapbook background the homepage uses
 * (`<Background />`, one shared master image — see src/app/page.tsx). This
 * page mounts that same component rather than carrying a background of its
 * own, so the whole portfolio reads as one continuous sheet of paper.
 * ------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Social Media Designs",
  description:
    "Social media design work presented as collections — launch campaigns, educational carousels, podcast series branding, and brand-strategy content across seven sets.",
};

export default function SocialDesignsPage() {
  return (
    <div className="relative flex min-h-full flex-col">
      <Background />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-sm)] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <Navbar />

      <main
        id="main"
        className="relative pb-[var(--spacing-section)] pt-14 sm:pt-20"
      >
        {/* Masthead */}
        <Container size="lg">
          <div className="relative max-w-2xl">
            <Doodle
              kind="sparkle"
              className="absolute -right-2 top-1 hidden size-5 text-accent motion-safe:animate-twinkle lg:block"
            />

            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
              Social Media Designs
            </p>
            <h1 className="mt-3 text-balance">
              Social media, <span className="marker">designed to be seen</span>.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              Campaign kits, educational carousels, and brand content — built as
              sequences, so each one opens as the carousel it was designed to
              be.
            </p>

            <ul
              className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/70 pt-5"
              aria-label="Summary"
            >
              {[
                `${SOCIAL_COLLECTIONS.length} collections`,
                `${TOTAL_FRAMES} designs`,
                "Campaign · Educational · Branding",
              ].map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-card px-3 py-0.5 text-xs font-semibold text-muted-foreground shadow-xs"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Container>

        {/* The project grid */}
        <Container size="lg">
          <div className="mt-14 sm:mt-16">
            <DesignGallery />
          </div>
        </Container>

        {/* Close */}
        <Container size="lg">
          <p className="mt-20 text-center text-lg text-foreground/75">
            Want something like this for your brand?{" "}
            <a
              href="/contact"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              Let&rsquo;s talk
            </a>
            .
          </p>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
