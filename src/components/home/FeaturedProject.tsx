import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Stack from "@/components/layout/Stack";
import Button from "@/components/ui/Button";
import BrowserFrame from "@/components/ui/BrowserFrame";
import Doodle from "@/components/ui/Doodle";
import Reveal from "@/components/ui/Reveal";

/* ---------------------------------------------------------------------------
 * FeaturedProject — KATHA, the flagship. One project treated like a launch,
 * not a thumbnail. It gets its own richer, plum-washed band (distinct from the
 * lighter Selected Projects grid) and a cinematic, layered screenshot scene:
 * the live homepage in a browser frame, the reader view peeking behind, and the
 * book cover floating free — pinned with tape and drawn marks. Facts are drawn
 * from the KATHA codebase (verifiable), not invented.
 * ------------------------------------------------------------------------- */

const HIGHLIGHTS = [
  "Immersive reader — type size, width & light/sepia/dark themes",
  "Membership with free previews and a reader → author path",
  "Author Studio: drafts, autosave & a full publishing workflow",
  "Custom search engine with fuzzy matching & highlighted results",
  "Paragraph-precise bookmarks, reading history & continue reading",
  "Next.js 16 App Router · TypeScript · Tailwind v4 design system",
];

export default function FeaturedProject() {
  return (
    <Section
      id="work"
      tone="default"
      contained={false}
      aria-labelledby="work-heading"
      className="relative overflow-hidden"
    >
      {/* Distinct flagship band — a soft plum wash settling into aged paper */}
      <div
        aria-hidden
        className="grain pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-lavender-tint/70 via-background to-surface"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <span className="absolute right-[8%] top-16 hidden size-72 rounded-full bg-lavender/20 blur-3xl lg:block" />
        <span className="absolute -left-10 bottom-10 hidden size-56 rounded-full bg-peach/10 blur-3xl lg:block" />
      </div>

      <Container size="lg" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Copy */}
          <Reveal>
            <Stack gap="md" align="start">
            {/* No "01" chip: it implied a numbered series that never continues,
                and clashed with the projects' "№ n" hand style */}
            <span className="hand text-2xl text-primary sm:text-3xl">The flagship</span>

            <h2 id="work-heading" className="relative">
              KATHA — a complete reading &amp; publishing platform
            </h2>

            <p className="text-lg text-foreground/80">
              A calm, premium home for Filipino literature — headlined by the
              serialized novel Table for Two. Designed, engineered, and shipped
              end to end: the reading experience, the membership, and the
              author studio where drafts become published books.
            </p>

            <ul className="grid gap-2.5 sm:grid-cols-2">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <span aria-hidden className="mt-1 size-1.5 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>

            {/* Proof-first CTA order: the case study is the conversion for
                engineering reviewers; the live product and source back it up */}
            <Stack direction="row" gap="sm" wrap align="center" className="pt-1">
              <Button href="/projects/katha" variant="primary">
                Read the case study
              </Button>
              <Button
                href="https://katha-sigma.vercel.app/"
                target="_blank"
                rel="noreferrer"
                variant="outline"
                rightIcon={
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M7 17 17 7M9 7h8v8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              >
                Visit KATHA
              </Button>
              <a
                href="https://github.com/hankerism/katha"
                target="_blank"
                rel="noreferrer"
                className="group/src inline-flex items-center gap-1.5 px-1 text-sm font-bold no-underline"
              >
                <span className="underline-offset-4 group-hover/src:underline">Source</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover/src:-translate-y-0.5 group-hover/src:translate-x-0.5"
                >
                  <path
                    d="M7 17 17 7M9 7h8v8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Stack>

            {/* Quiet exit to the full collection (IA v2 §4.1) */}
            <Link
              href="/projects"
              className="group/all inline-flex items-center gap-1.5 text-sm font-bold text-foreground/70 no-underline hover:text-primary"
            >
              <span className="underline-offset-4 group-hover/all:underline">
                All projects
              </span>
              <span aria-hidden className="transition-transform group-hover/all:translate-x-0.5">
                →
              </span>
            </Link>
            </Stack>
          </Reveal>

          {/* Cinematic layered scene — settles into place on reveal, then rests */}
          <figure className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none" aria-label="KATHA product screenshots">
            <Reveal delay={140} rot={1.2} y={22}>
            {/* reserve height for the absolutely-placed layers */}
            <div className="relative aspect-[7/6] w-full sm:aspect-[8/6]">
              {/* Reader view — peeking up from behind, right */}
              <div className="absolute -right-1 top-0 z-0 w-[42%] rotate-3 sm:w-[40%]">
                <span aria-hidden className="tape tape-sage left-1/2 -top-2.5 h-6 w-16 -translate-x-1/2 rotate-2 rounded-[2px]" />
                <div className="paper overflow-hidden p-2 shadow-paper">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-sm)] bg-muted">
                    <Image
                      src="/images/katha/katha-reader-mode.png"
                      alt=""
                      aria-hidden="true"
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 220px, 40vw"
                    />
                  </div>
                </div>
              </div>

              {/* Live homepage — the star, in a browser frame on stacked paper */}
              <div className="paper-stack absolute bottom-0 left-0 z-10 w-[85%] rounded-[var(--radius-xl)] -rotate-1">
                <span aria-hidden className="tape left-8 -top-3 z-10 -rotate-[4deg] rounded-[2px]" />
                <BrowserFrame url="katha-sigma.vercel.app" className="shadow-lg">
                  <div className="relative aspect-[16/11] w-full bg-muted">
                    <Image
                      src="/images/katha/katha-homepage.png"
                      alt="The KATHA homepage — a calm, editorial reading experience with the featured novel Table for Two"
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 520px, 82vw"
                    />
                  </div>
                </BrowserFrame>
              </div>

              {/* Book cover — pinned free, bottom-right */}
              <div className="absolute -bottom-4 right-3 z-20 w-[30%] rotate-6 sm:w-[27%]">
                <div className="paper overflow-hidden rounded-[var(--radius-lg)] p-1.5 shadow-lg">
                  <Image
                    src="/images/katha/katha-cover.png"
                    alt=""
                    aria-hidden="true"
                    width={322}
                    height={462}
                    className="w-full rounded-[var(--radius-sm)]"
                    sizes="(min-width: 1024px) 150px, 26vw"
                  />
                </div>
              </div>

              {/* Drawn marks — a little human hand on the composition */}
              <Doodle
                kind="sparkle"
                className="absolute left-2 top-2 z-20 size-6 text-accent"
              />
              <Doodle
                kind="arrow"
                draw
                className="absolute -left-2 bottom-16 z-20 hidden w-12 rotate-[8deg] text-primary/60 lg:block"
              />
            </div>

            </Reveal>

            {/* Exhibition plate — a handwritten gallery caption under the scene.
                Direct child of <figure> (figcaption must be first/last child);
                the inner Reveal span keeps its fade-in choreography. */}
            <figcaption
              aria-hidden
              className="hand mt-10 text-center text-2xl text-primary/70 motion-safe:-rotate-1"
            >
              <Reveal as="span" delay={320} className="inline-block">
                the homepage, the reader — and Table for Two ✦
              </Reveal>
            </figcaption>
          </figure>
        </div>
      </Container>
    </Section>
  );
}
