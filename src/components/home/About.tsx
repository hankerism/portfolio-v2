import Image from "next/image";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Doodle from "@/components/ui/Doodle";
import Reveal from "@/components/ui/Reveal";

/* ---------------------------------------------------------------------------
 * About — the explanation. Not a "how I became a developer" story; instead,
 * how operations experience shaped the way the work gets built (per CONTENT.md).
 * Placed after the proof so it reads as explanation, not justification.
 *
 * Art direction: the portrait is a keepsake — a photo mounted on stacked
 * paper, held by two mismatched pieces of tape, with a small inked heart in
 * the margin; the thesis heading carries a hand-drawn underline. Quietly
 * personal, never scrapbook-noisy.
 * ------------------------------------------------------------------------- */

export default function About() {
  return (
    <Section id="about" tone="surface" aria-labelledby="about-heading">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
        {/* Real portrait in a scrapbook paper mount — settles in, straightens
            politely when greeted */}
        <Reveal rot={-2} y={20}>
        <figure className="relative mx-auto w-full max-w-xs" aria-label="Portrait of Abby">
          <div className="paper-stack paper p-3 shadow-lg transition-transform duration-300 ease-[var(--ease-paper)] motion-safe:-rotate-2 motion-safe:hover:rotate-0">
            <span aria-hidden className="tape tape-pink left-8 -top-3 z-10 -rotate-6 rounded-[2px]" />
            <span aria-hidden className="tape tape-cream -right-4 bottom-16 z-10 h-6 w-14 rotate-[80deg] rounded-[2px]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] bg-muted">
              <Image
                src="/images/abby-portrait.jpg"
                alt="Abby"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 340px, 70vw"
              />
            </div>
            <figcaption className="hand mt-3 text-center text-2xl text-primary">
              that&apos;s me — Abby
            </figcaption>
          </div>
          <Doodle
            kind="heart"
            draw
            className="absolute -left-5 bottom-8 size-6 -rotate-12 text-pink-deep/70"
          />
        </figure>
        </Reveal>

        {/* Narrative */}
        <Reveal delay={120}>
        <Stack gap="md" align="start">
          <span className="hand text-2xl sm:text-3xl">About</span>
          <div className="relative">
            <h2 id="about-heading">Operations taught me what software has to survive</h2>
            <Doodle kind="underline" draw className="mt-2 w-44 text-accent" />
            <Doodle
              kind="flower"
              className="absolute -bottom-2 left-48 size-4 text-pink-deep/50"
            />
          </div>

          <p className="text-lg text-foreground/80">
            I spent more than six years as an operations specialist — managing
            CRM systems, streamlining workflows, and living inside the tools
            teams depend on every day.
          </p>
          <p className="text-lg text-foreground/80">
            As my responsibilities grew, I wanted to build the tools I was
            managing, not just operate them. That led me into modern web
            development — and into GoHighLevel, where operations and
            engineering meet.
          </p>
          <p className="text-lg text-foreground/80">
            Today I build real products: web applications like KATHA, client
            systems on GoHighLevel, and AI-assisted workflows that change how
            fast I can design, code, and ship. The operations years are why
            everything I build survives contact with a real business.
          </p>
        </Stack>
        </Reveal>
      </div>
    </Section>
  );
}
