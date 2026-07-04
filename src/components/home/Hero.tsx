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
 * so "I build products" is proven the instant the page loads. The collage is
 * decorative depth — the copy stands alone on smaller screens.
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
        <span className="absolute -right-10 top-24 hidden size-56 rounded-full bg-lavender-tint/70 blur-3xl sm:block" />
        <span className="absolute left-1/3 top-10 hidden size-28 rounded-full bg-pink/40 blur-2xl lg:block" />
        <span className="absolute -left-16 bottom-0 hidden size-44 rounded-full bg-peach/10 blur-3xl lg:block" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-[var(--spacing-gutter)] lg:grid-cols-[1.04fr_0.96fr] lg:gap-8">
        {/* The claim */}
        <div className="relative z-10 max-w-2xl">
          <Stack gap="md" align="start">
            <span className="hand text-3xl text-primary sm:text-4xl">Hi, I&apos;m Abby 👋</span>

            <h1 className="text-balance">
              I build complete digital products and{" "}
              <span className="marker">business systems</span>.
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl">
              Product engineer and automation specialist with 6+ years in operations.
              I design, build, and automate the things businesses run on — organised
              behind the scenes, lovely out front.
            </p>

            <Stack direction="row" gap="sm" wrap className="pt-2">
              <Button href="#work" size="lg" variant="primary">
                See my work
              </Button>
              <Button href="#contact" size="lg" variant="outline">
                Start a project
              </Button>
            </Stack>

            {/* Tooling — quiet credibility strip, set off by a hairline */}
            <ul
              className="mt-2 flex w-full max-w-2xl flex-wrap items-center gap-x-5 gap-y-2 border-t border-border/70 pt-6"
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
        <div aria-hidden className="relative hidden lg:block">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* Book-cover token, tucked behind and up-right */}
            <div className="absolute right-2 top-0 z-0 w-[40%] motion-safe:rotate-6">
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
            <div className="absolute bottom-2 left-0 z-10 w-[82%] motion-safe:-rotate-2">
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

            {/* A drawn sparkle for hand-placed warmth */}
            <Doodle
              kind="sparkle"
              className="absolute -right-1 bottom-10 z-20 size-7 text-accent motion-safe:animate-[float_6s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
