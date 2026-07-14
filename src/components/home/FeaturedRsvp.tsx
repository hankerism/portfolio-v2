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
 * FeaturedRsvp — the second product band, KATHA's sibling. Same editorial
 * treatment (a launch, not a thumbnail), mirrored composition so the two
 * bands read as facing gallery walls: scene left, copy right, warmed by an
 * ivory-and-gold wash that echoes the wedding's own palette.
 *
 * Facts are drawn from the hazel-and-jhonel codebase (verifiable), not
 * invented: Supabase Auth + RLS, config-driven RSVP flow with duplicate
 * protection, couple's dashboard with stats/status workflow/CSV export,
 * tracked transactional email. Live at hazel-and-jhonel.vercel.app.
 * ------------------------------------------------------------------------- */

const LIVE = "https://hazel-and-jhonel.vercel.app/";
const REPO = "https://github.com/hankerism/hazel-and-jhonel";

const HIGHLIGHTS = [
  "Supabase Auth — password & magic-link sign-in for the couple",
  "Postgres with row-level security as the real write boundary",
  "Config-driven RSVP flow — validation & duplicate protection",
  "Couple's dashboard: live stats, guest statuses & CSV export",
  "Confirmation & notification emails, tracked per guest",
  "Next.js 16 App Router · TypeScript · Tailwind v4 · Vercel",
];

export default function FeaturedRsvp() {
  return (
    <Section
      id="rsvp-platform"
      tone="default"
      contained={false}
      aria-labelledby="rsvp-heading"
      className="relative overflow-hidden"
    >
      {/* Ivory-and-gold wash — the wedding's palette, in the scrapbook's light */}
      <div
        aria-hidden
        className="grain pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-surface via-background to-background"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <span className="absolute -left-12 top-20 hidden size-64 rounded-full bg-peach/15 blur-3xl lg:block" />
        <span className="absolute right-[6%] bottom-8 hidden size-56 rounded-full bg-lavender-tint/50 blur-3xl lg:block" />
      </div>

      <Container size="lg" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Cinematic layered scene — the invitation suite, pinned and taped */}
          <figure
            className="relative order-2 mx-auto w-full max-w-xl lg:order-1 lg:mx-0 lg:max-w-none"
            aria-label="Hazel & Jhonel wedding platform screenshots"
          >
            <Reveal delay={140} rot={-1.2} y={22}>
            <div className="relative aspect-[7/6] w-full sm:aspect-[8/6]">
              {/* Reply card — the dark ink band, peeking from behind, left */}
              <div className="absolute -left-1 top-0 z-0 w-[52%] -rotate-2">
                <span aria-hidden className="tape tape-cream left-1/2 -top-2.5 h-6 w-16 -translate-x-1/2 -rotate-2 rounded-[2px]" />
                <div className="paper overflow-hidden p-2 shadow-paper">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-sm)] bg-muted">
                    <Image
                      src="/images/hazel-and-jhonel/hj-rsvp.png"
                      alt=""
                      aria-hidden="true"
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 300px, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* The invitation — hero in a browser frame, the star */}
              <div className="paper-stack absolute bottom-0 right-0 z-10 w-[85%] rounded-[var(--radius-xl)] rotate-1">
                <span aria-hidden className="tape tape-peach right-8 -top-3 z-10 rotate-[4deg] rounded-[2px]" />
                <BrowserFrame url="hazel-and-jhonel.vercel.app" className="shadow-lg">
                  <div className="relative aspect-[16/10] w-full bg-muted">
                    <Image
                      src="/images/hazel-and-jhonel/hj-hero.png"
                      alt="The Hazel & Jhonel wedding invitation — names, date, and countdown over a full-bleed photograph"
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 520px, 82vw"
                    />
                  </div>
                </BrowserFrame>
              </div>

              {/* Mobile invitation — slipped in front, bottom-left */}
              <div className="absolute -bottom-5 left-4 z-20 w-[22%] -rotate-6 sm:w-[20%]">
                <div className="paper overflow-hidden rounded-[var(--radius-lg)] p-1.5 shadow-lg">
                  <div className="relative aspect-[390/700] overflow-hidden rounded-[var(--radius-sm)] bg-muted">
                    <Image
                      src="/images/hazel-and-jhonel/hj-mobile.png"
                      alt=""
                      aria-hidden="true"
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 130px, 20vw"
                    />
                  </div>
                </div>
              </div>

              {/* Drawn marks — a small human hand on the composition */}
              <Doodle
                kind="heart"
                draw
                className="absolute right-2 top-4 z-20 size-6 -rotate-12 text-pink-deep/60"
              />
              <Doodle
                kind="sparkle"
                className="absolute -right-2 bottom-14 z-20 size-6 text-accent"
              />
            </div>
            </Reveal>

            <figcaption
              aria-hidden
              className="hand mt-10 text-center text-2xl text-primary/70 motion-safe:rotate-1"
            >
              <Reveal as="span" delay={320} className="inline-block">
                the invitation, the reply card — real guests RSVP here ✦
              </Reveal>
            </figcaption>
          </figure>

          {/* Copy */}
          <Reveal className="order-1 lg:order-2">
            <Stack gap="md" align="start">
            <span className="hand text-2xl text-primary sm:text-3xl">The second product</span>

            <h2 id="rsvp-heading" className="relative">
              Wedding RSVP Platform — built for Hazel &amp; Jhonel
            </h2>

            <p className="text-lg text-foreground/80">
              A luxury guest experience for a real wedding: an editorial,
              single-page invitation with a two-step reply card out front — and
              a private couple&rsquo;s dashboard behind it, where RSVPs are
              reviewed, confirmed, and answered by email. Live on Vercel,
              taking real RSVPs today.
            </p>

            <ul className="grid gap-2.5 sm:grid-cols-2">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <span aria-hidden className="mt-1 size-1.5 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>

            <Stack direction="row" gap="sm" wrap align="center" className="pt-1">
              <Button href="/projects/wedding-rsvp" variant="primary">
                Read the case study
              </Button>
              <Button
                href={LIVE}
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
                Visit the live site
              </Button>
              <a
                href={REPO}
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

            {/* Quiet exit to the full collection, mirroring the flagship band */}
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
        </div>
      </Container>
    </Section>
  );
}
