import Image from "next/image";
import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Button from "@/components/ui/Button";
import Doodle from "@/components/ui/Doodle";
import BrowserFrame from "@/components/ui/BrowserFrame";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * Hero — the claim. Carries the page's single <h1>.
 * Leads with the product-builder positioning (web developer · AI automation
 * builder · GoHighLevel specialist) in the warm voice, and filters visitors
 * toward the work or a conversation. Sits on the homepage-wide scrapbook
 * photo background (public/images/homepage-background.webp, mounted once
 * in src/app/page.tsx — see that file's doc comment) rather than carrying
 * its own copy of it. At lg+ the right side is a small scrapbook desk on
 * top of it: the pinned Bahay Liwanag polaroid (the star, proof it ships),
 * a real GoHighLevel pipeline board, a torn code
 * snippet of the automation that actually fires on that pipeline, a sticky
 * note, a folder tab, a cursor tag, and a workflow-arrow doodle — real
 * artefacts of the work, not stickers, overlapping and layered like they
 * landed there by hand rather than aligned to a grid.
 *
 * Motion: a soft staggered entrance on the copy, then every workspace prop
 * keeps its own slow, independent clock (translate/rotate only, different
 * durations and delays per element — see the animate-* tokens in
 * globals.css) so the desk reads as continuously, quietly alive rather than
 * a single group moving together or a hover-only effect. All CSS-driven
 * (motion-safe:), all fully stilled under prefers-reduced-motion — the
 * resting tilt of each prop is baked into its static rotate utility, so
 * reduced motion just holds the same composition still rather than
 * flattening it. The background photo itself never animates — static paper,
 * living desk.
 * ------------------------------------------------------------------------- */

const STACK = [
  "Next.js",
  "TypeScript",
  "Supabase",
  "n8n",
  "Make",
  "Zapier",
  "Claude Code",
];

/* The real Bahay Liwanag reservation pipeline — six stages currently
 * configured in GHL (Settings → Pipelines → Bahay Liwanag Reservations).
 * Cancelled is a real stage, not just an opportunity status — kept muted
 * here too. Keep this in sync with the live pipeline, not the older list
 * documented on the case-study page. */
const PIPELINE_STAGES: { label: string; muted?: boolean }[] = [
  { label: "New Reservation" },
  { label: "Booking Confirmed" },
  { label: "Ready for Check-In" },
  { label: "Check-In" },
  { label: "Stay Completed" },
  { label: "Cancelled", muted: true },
];

export default function Hero() {
  return (
    <Section
      id="top"
      tone="default"
      contained={false}
      className="!bg-transparent bg-none relative overflow-hidden pt-14 sm:pt-20"
    >
      {/* No background layer here — the Hero sits on the homepage-wide
          scrapbook environment (`<Background />`, mounted once in
          src/app/page.tsx behind the whole page). One background image,
          one source of truth; this Section is transparent so it shows
          through. `overflow-hidden` stays only as a safety net for the
          workspace's own small ambient-motion amplitudes below. */}

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
              className="mt-2 flex w-full max-w-2xl flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/70 pt-6"
              aria-label="Core tools"
            >
              {STACK.map((tool, i) => (
                <li
                  key={tool}
                  className="animate-fade-up rounded-full border border-border bg-card px-3 py-0.5 text-xs font-semibold text-muted-foreground shadow-xs transition-[color,background-color,border-color,translate] duration-200 hover:border-primary hover:bg-muted hover:text-foreground motion-safe:hover:-translate-y-px"
                  style={{ animationDelay: `${380 + i * 60}ms` }}
                >
                  {tool}
                </li>
              ))}
            </ul>
          </Stack>
        </div>

        {/* The desk — a corner of the actual workspace (lg+ only). The
            polaroid stays the star; the pipeline board and code snippet are
            real supporting artefacts placed around it, never over the copy.
            The wrapper is aria-hidden, so everything inside inherits that —
            decoration carries no meaning a screen reader would miss. Below
            lg the whole composition drops rather than stacking into
            clutter; personality still carries through the hand/marker type
            in the copy column. */}
        <div
          aria-hidden
          className="relative hidden animate-fade-in lg:block"
          style={{ animationDelay: "300ms" }}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            {/* Sticky note — tucked top-left, behind everything else; a
                short handwritten aside rather than another stat or tag. */}
            <div className="absolute left-0 top-0 z-0 w-[30%] rotate-[4deg] motion-safe:animate-note-sway">
              <span aria-hidden className="tape tape-sage left-1/2 -top-2 -translate-x-1/2 -rotate-3 rounded-[2px]" />
              <div className="sticky-note sticky-sage p-3 pt-4">
                <p className="hand text-lg leading-tight text-primary/80">
                  it&apos;s live ✓
                </p>
              </div>
            </div>

            {/* GHL pipeline board — a real browser/UI fragment (the shared
                BrowserFrame chrome) showing the actual Bahay Liwanag
                reservation stages, not invented ones. A folder tab labels
                which project it belongs to, same trick as the snippet's
                file tab below. Its own slow, independent float — never the
                same clock as the polaroid. Narrow enough, and far enough
                right, that the snippet card never crosses into its stage
                labels. */}
            <div
              className="absolute right-0 top-0 z-0 w-[56%] rotate-3 transition-shadow duration-300 ease-[var(--ease-soft)] motion-safe:animate-card-drift hover:shadow-xl"
              style={{ animationDelay: "0.8s" }}
            >
              <span
                aria-hidden
                className="label-tab tab-peach absolute -top-3 left-4 z-10 motion-safe:animate-tab-sway"
                style={{ animationDelay: "3.1s" }}
              >
                /bahay-liwanag
              </span>
              <BrowserFrame url="app.gohighlevel.com/pipeline" className="shadow-lg">
                <div className="p-3">
                  <p className="hand text-base leading-none text-primary/80">
                    Reservations pipeline
                  </p>
                  <ol className="mt-2 flex flex-col gap-0.5">
                    {PIPELINE_STAGES.map((stage, i) => (
                      <li key={stage.label} className="flex items-stretch gap-1.5">
                        <span aria-hidden className="flex w-2 flex-col items-center">
                          <span
                            className={cx(
                              "mt-1 size-1.5 shrink-0 rounded-full",
                              stage.muted ? "bg-border-strong" : "bg-primary",
                            )}
                          />
                          {i < PIPELINE_STAGES.length - 1 && (
                            <span className="mt-0.5 w-px flex-1 border-l border-dashed border-border-strong" />
                          )}
                        </span>
                        <span
                          className={cx(
                            "rounded-full border px-2 py-[0.1rem] font-mono text-[0.58rem] font-bold",
                            stage.muted
                              ? "border-border text-muted-foreground line-through decoration-1"
                              : "border-primary/25 bg-primary/5 text-primary",
                          )}
                        >
                          {stage.label}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </BrowserFrame>
            </div>

            {/* Workflow arrow — a small, faint gesture from the note toward
                the pipeline, the one doodle that's actually about flow. */}
            <Doodle
              kind="arrow"
              className="absolute left-[24%] top-[9%] z-0 w-8 -rotate-[10deg] text-primary/20 motion-safe:animate-drift-slow"
              style={{ animationDelay: "4.2s" }}
            />

            {/* Automation snippet — the workflow rule that actually fires
                on that pipeline (verified: Ready for Check-In → pre-arrival
                email). A file tab up top, like an open editor tab. Its own
                small bob/rock, on a different clock than the board. Sized
                and placed so its right edge stays clear of the pipeline's
                stage labels — it can still tuck under the polaroid below,
                just never over real data. */}
            <div
              className="absolute left-0 top-[27%] z-10 w-[46%] -rotate-[4deg] motion-safe:animate-snippet-bob"
              style={{ animationDelay: "1.6s" }}
            >
              <span aria-hidden className="pin pin-peach left-5 -top-1.5" />
              <span aria-hidden className="label-tab tab-peach relative -mb-px ml-3 -translate-y-px">
                automation.ts
              </span>
              <div className="snippet text-[0.62rem]">
                <span className="tok-dim">{"// on stage change"}</span>
                <br />
                <span className="tok-key">if</span> (stage ===
                <br />
                &nbsp;&nbsp;<span className="tok-str">&quot;Ready for Check-In&quot;</span>)
                <br />
                &nbsp;&nbsp;send(<span className="tok-str">&quot;pre-arrival email&quot;</span>)
              </div>
            </div>

            {/* Bahay Liwanag polaroid — the star, pinned front-left. Floats
                and drifts on its own clock; hover only ever touches scale,
                never rotate/translate, so the two can never fight. */}
            <div className="absolute bottom-0 left-0 z-20 w-[76%] -rotate-2 transition-[scale] duration-300 ease-[var(--ease-soft)] motion-safe:animate-hero-float motion-safe:hover:scale-[1.015]">
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

              {/* Collaborator cursor — "made in a tool, by a person", the
                  developer counterpart to a hand-pressed flower. Its own
                  tiny float, but still a child of the polaroid, so it stays
                  attached rather than roaming the desk on its own. */}
              <div
                className="absolute -right-3 bottom-4 z-30 flex items-start gap-1 motion-safe:animate-tag-float"
                style={{ animationDelay: "1.1s" }}
              >
                <Doodle kind="cursor" className="size-4 text-lavender-deep drop-shadow-sm" />
                <span className="cursor-tag mt-2.5">shipped</span>
              </div>
            </div>

            {/* Hand-placed warmth: a sparkle at rest, a workflow node drifts —
                each on its own delay, never in step with the props above. */}
            <Doodle
              kind="sparkle"
              className="absolute -right-1 bottom-10 z-20 size-7 text-accent motion-safe:animate-twinkle"
              style={{ animationDelay: "0.9s" }}
            />
            <Doodle
              kind="node"
              className="absolute -left-5 bottom-8 z-20 w-9 text-lavender-deep/50 motion-safe:animate-drift"
              style={{ animationDelay: "2.7s" }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}