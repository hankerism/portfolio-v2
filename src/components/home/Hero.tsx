import Image from "next/image";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Button from "@/components/ui/Button";
import Doodle from "@/components/ui/Doodle";

/* ---------------------------------------------------------------------------
 * Hero — the claim. Carries the page's single <h1>.
 * Leads with the product-builder positioning (web developer · AI automation
 * builder · GoHighLevel specialist) in the warm voice, and filters visitors
 * toward the work or a conversation. At
 * lg+ a single pinned polaroid of completed client work (Bahay Liwanag) sits
 * alongside, so "I build products" is proven the instant the page loads.
 *
 * Motion: a soft staggered entrance on the copy; the polaroid floats on its
 * own slow clock; blobs breathe; one star twinkles, one flower drifts. All
 * CSS-driven, all silenced by prefers-reduced-motion.
 * ------------------------------------------------------------------------- */

const STACK = ["Next.js", "TypeScript", "Supabase", "GoHighLevel", "Claude Code"];

export default function Hero() {
  return (
    <Section
      id="top"
      tone="default"
      contained={false}
      className="relative overflow-hidden pt-14 sm:pt-20 grain"
    >
      {/* Decorative scrapbook accents — purely ornamental */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <span className="absolute -right-10 top-24 hidden size-56 rounded-full bg-lavender-tint/70 blur-3xl motion-safe:animate-breathe sm:block" />
        <span
          className="absolute left-1/3 top-10 hidden size-28 rounded-full bg-pink/40 blur-2xl motion-safe:animate-breathe lg:block"
          style={{ animationDelay: "2.5s" }}
        />
        <span
          className="absolute -left-16 bottom-0 hidden size-44 rounded-full bg-peach/10 blur-3xl motion-safe:animate-breathe lg:block"
          style={{ animationDelay: "5s" }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-[var(--spacing-gutter)] lg:grid-cols-[1.04fr_0.96fr] lg:gap-8">
        {/* The claim — staggered soft entrance */}
        <div className="relative z-10 max-w-2xl">
          {/* lg-only: below that the collage is gone and the star would float
              orphaned in empty whitespace */}
          <Doodle
            kind="star"
            className="absolute right-2 top-0 hidden size-4 text-accent/80 motion-safe:animate-twinkle lg:block"
          />

          <Stack gap="md" align="start">
            {/* Demoted: a quiet personal aside, not the lead statement */}
            <span className="hand animate-fade-up text-xl text-foreground/70 sm:text-2xl">
              Hi, I&apos;m Abby 👋
            </span>

            {/* The lead statement — sets the professional identity before
                anything else on the page competes for it */}
            <p
              className="animate-fade-up font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm"
              style={{ animationDelay: "60ms" }}
            >
              Web Developer · Product Builder
            </p>

            <h1
              className="animate-fade-up text-balance"
              style={{ animationDelay: "140ms" }}
            >
              I build{" "}
              <span className="marker">
                web applications and business systems
              </span>{" "}
              with code.
            </h1>

            <p
              className="max-w-2xl animate-fade-up text-lg leading-relaxed text-foreground/80 sm:text-xl"
              style={{ animationDelay: "220ms" }}
            >
              From polished web apps to CRM pipelines, I build the tools
              businesses actually run on.
            </p>

            {/* The two journey entrances (IA v2 §6): products and systems.
                Contact stays one click away via the persistent navbar button. */}
            <Stack
              direction="row"
              gap="sm"
              wrap
              className="animate-fade-up pt-2"
              style={{ animationDelay: "300ms" }}
            >
              <Button href="/projects" size="lg" variant="primary">
                View case studies
              </Button>
              <Button href="/business-systems" size="lg" variant="outline">
                How I build systems
              </Button>
            </Stack>

            {/* Tooling — quiet credibility strip, set off by a hairline.
                Each pill carries its own fade-up + delay (consistent with
                every other piece of hero copy above) so they cascade in
                individually instead of the whole row appearing at once. */}
            <ul
              className="mt-2 flex w-full max-w-2xl flex-wrap items-center gap-x-5 gap-y-2 border-t border-border/70 pt-6"
              aria-label="Core tools"
            >
              {STACK.map((tool, i) => (
                <li
                  key={tool}
                  className="animate-fade-up rounded-full border border-border bg-card/70 px-2.5 py-0.5 text-xs font-semibold text-muted-foreground transition-[color,background-color,border-color,translate] duration-200 hover:border-primary hover:bg-muted hover:text-foreground motion-safe:hover:-translate-y-px"
                  style={{ animationDelay: `${380 + i * 60}ms` }}
                >
                  {tool}
                </li>
              ))}
            </ul>
          </Stack>
        </div>

        {/* Product peek — a hand-pinned polaroid of completed client work (lg+ only) */}
        <div
          aria-hidden
          className="relative hidden animate-fade-in lg:block"
          style={{ animationDelay: "300ms" }}
        >
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* Bahay Liwanag polaroid — the star, pinned front-left.
                Hover only touches scale/rotate/shadow — hero-float only
                ever touches translate, so the two can never fight. */}
            <div className="absolute bottom-2 left-0 z-10 w-[82%] -rotate-2 transition-[scale,rotate] duration-300 ease-[var(--ease-soft)] motion-safe:animate-hero-float motion-safe:hover:scale-[1.015] motion-safe:hover:rotate-[-1deg]">
              <span className="tape left-10 -top-3 -rotate-6 rounded-[2px]" />

              <div className="paper p-3 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] bg-muted">
                  <Image
                    src="/images/bahay-liwanag/bahay-liwanag-homepage.png"
                    alt=""
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 360px, 0px"
                  />
                </div>

                <p className="hand mt-2 pl-1 text-2xl text-primary">
                  A project I&apos;m proud of ✨
                </p>
              </div>
            </div>

            {/* Hand-placed warmth: a sparkle, a pressed flower — at rest */}
            <Doodle
              kind="sparkle"
              className="absolute -right-1 bottom-10 z-20 size-7 text-accent motion-safe:animate-twinkle"
              style={{ animationDelay: "1.2s" }}
            />
            <Doodle
              kind="flower"
              className="absolute -left-5 bottom-8 z-20 size-5 text-pink-deep/60 motion-safe:animate-drift"
              style={{ animationDelay: "0.6s" }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}