import Image from "next/image";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";

/* ---------------------------------------------------------------------------
 * About — the explanation. Not a "how I became a developer" story; instead,
 * how operations experience shaped the way the work gets built (per CONTENT.md).
 * Placed after the proof so it reads as explanation, not justification. The
 * portrait isn't hydrated yet, so a scrapbook monogram frame stands in.
 * ------------------------------------------------------------------------- */

export default function About() {
  return (
    <Section id="about" tone="default" aria-labelledby="about-heading">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
        {/* Real portrait in a scrapbook paper mount */}
        <figure className="relative mx-auto w-full max-w-xs" aria-label="Portrait of Abby">
          <span aria-hidden className="tape left-8 -top-3 -rotate-6 rounded-[2px]" />
          <div className="paper p-3 motion-safe:-rotate-2">
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
        </figure>

        {/* Narrative */}
        <Stack gap="md" align="start">
          <span className="hand text-2xl sm:text-3xl">About</span>
          <h2 id="about-heading">Operations taught me what software has to survive</h2>

          <p className="text-lg text-foreground/80">
            For more than six years, I helped businesses improve operations,
            manage systems, and streamline workflows — living inside the tools
            teams depend on every day.
          </p>
          <p className="text-lg text-foreground/80">
            As my responsibilities grew, I wanted to build the tools I was
            managing, not just operate them. That led me into modern web
            development and automation.
          </p>
          <p className="text-lg text-foreground/80">
            Today I combine that operations experience with software engineering
            to build products that are both technically sound and genuinely
            practical for real businesses.
          </p>
        </Stack>
      </div>
    </Section>
  );
}
