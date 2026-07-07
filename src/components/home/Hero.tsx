import Image from "next/image";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Button from "@/components/ui/Button";
import Doodle from "@/components/ui/Doodle";

/* ---------------------------------------------------------------------------
 * Hero — the claim. Carries the page's single <h1>.
 * Leads with the elevated Product-Engineer positioning (per CONTENT.md) in the
 * warm GHL voice, and filters visitors toward the work or a conversation. At
 * lg+ a restrained scrapbook collage of the flagship (KATHA) sits alongside,
 * so "I build products" is proven the instant the page loads.
 *
 * Motion: a soft staggered entrance on the copy; the collage pieces float on
 * independent slow clocks; blobs breathe; one star twinkles, one flower
 * drifts. All CSS-driven, all silenced by prefers-reduced-motion.
 * ------------------------------------------------------------------------- */

const STACK = ["Next.js", "TypeScript", "GoHighLevel", "Make", "Airtable"];

export default function Hero() {
  return (
    <Section
      id="top"
      tone="default"
      contained={false}
      className="relative overflow-hidden pt-14 sm:pt-20"
    >
      {/* Decorative scrapbook accents — purely ornamental */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <span className="absolute -right-10 top-24 hidden size-56 rounded-full bg-lavender-tint/70 blur-3xl motion-safe:animate-breathe sm:block" />
        <span className="absolute left-1/3 top-10 hidden size-28 rounded-full bg-pink/40 blur-2xl motion-safe:animate-breathe lg:block" style={{ animationDelay: "2.5s" }} />
        <span className="absolute -left-16 bottom-0 hidden size-44 rounded-full bg-peach/10 blur-3xl motion-safe:animate-breathe lg:block" style={{ animationDelay: "5s" }} />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-[var(--spacing-gutter)] lg:grid-cols-[1.04fr_0.96fr] lg:gap-8">
        {/* The claim — staggered soft entrance */}
        <div className="relative z-10 max-w-2xl">
          {/* lg-only: below that the collage is gone and the star would float
              orphaned in empty whitespace */}
          <Doodle
            kind="star"
            className="absolute right-2 top-0 hidden size-4 text-accent/80 lg:block"
          />
          <Stack gap="md" align="start">
            <span className="hand animate-fade-up text-3xl text-primary sm:text-4xl">
              Hi, I&apos;m Abby 👋
            </span>

            <h1 className="animate-fade-up text-balance" style={{ animationDelay: "90ms" }}>
              I build complete digital products and{" "}
              <span className="marker">business systems</span>.
            </h1>

            <p className="max-w-2xl animate-fade-up text-lg leading-relaxed text-foreground/80 sm:text-xl" style={{ animationDelay: "180ms" }}>
              Product engineer and automation specialist with 6+ years in operations.
              I design, build, and automate the things businesses run on — organised
              behind the scenes, lovely out front.
            </p>

            {/* The two journey entrances (IA v2 §6): products and systems.
                Contact stays one click away via the persistent navbar button. */}
            <Stack direction="row" gap="sm" wrap className="animate-fade-up pt-2" style={{ animationDelay: "270ms" }}>
              <Button href="/projects" size="lg" variant="primary">
                See my work
              </Button>
              <Button href="/business-systems" size="lg" variant="outline">
                How I build systems
              </Button>
            </Stack>

            {/* Tooling — quiet credibility strip, set off by a hairline */}
            <ul
              className="mt-2 flex w-full max-w-2xl animate-fade-up flex-wrap items-center gap-x-5 gap-y-2 border-t border-border/70 pt-6" style={{ animationDelay: "360ms" }}
              aria-label="Core tools"
            >
              {STACK.map((tool) => (
                <li key={tool} className="text-sm font-semibold text-muted-foreground">
                  {tool}
                </li>
              ))}
            </ul>
          </Stack>
        </div>

        {/* Product peek — a hand-pinned collage of the flagship (lg+ only) */}
        <div aria-hidden className="relative hidden animate-fade-in lg:block" style={{ animationDelay: "300ms" }}>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* Book-cover token, tucked behind and up-right */}
            <div className="absolute right-2 top-0 z-0 w-[40%] rotate-6">
              <span className="tape tape-peach left-1/2 -top-2.5 h-6 w-16 -translate-x-1/2 rotate-3 rounded-[2px]" />
              <div className="paper overflow-hidden rounded-[var(--radius-lg)] p-1.5 shadow-soft">
                <Image
                  src="/images/katha/katha-cover.png"
                  alt=""
                  width={322}
                  height={462}
                  className="w-full rounded-[var(--radius-sm)]"
                  sizes="180px"
                />
              </div>
            </div>

            {/* Library polaroid — the star, pinned front-left */}
            <div className="absolute bottom-2 left-0 z-10 w-[82%] -rotate-2">
              <span className="tape left-10 -top-3 -rotate-6 rounded-[2px]" />
              <div className="paper p-3 shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] bg-muted">
                  <Image
                    src="/images/katha/katha-library.png"
                    alt=""
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 360px, 0px"
                  />
                </div>
                <p className="hand mt-2 pl-1 text-2xl text-primary">KATHA — my flagship</p>
              </div>
            </div>

            {/* Hand-placed warmth: a sparkle, a pressed flower — at rest */}
            <Doodle
              kind="sparkle"
              className="absolute -right-1 bottom-10 z-20 size-7 text-accent"
            />
            <Doodle
              kind="flower"
              className="absolute -left-5 bottom-8 z-20 size-5 text-pink-deep/60"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
