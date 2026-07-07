import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Reveal from "@/components/ui/Reveal";
import Doodle from "@/components/ui/Doodle";
import SectionHeading from "./SectionHeading";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * FeaturedSystem — "Set it once, let it run" + the flagship business system.
 *
 * Phase B (IA v2 §4.1): the old AutomationSystems section and the Bahay
 * Liwanag project spread merge into one Featured Business System section —
 * the systems mirror of the KATHA flagship band above it. The narrative:
 * the four-step flow shows the pattern, the Bahay Liwanag postcard shows it
 * deployed for real, and the case study carries the evidence. Copy is
 * unchanged from the two sections it merges.
 *
 * Art direction: the pastel sticky notes stay (torn from the pad, linked by
 * hand-drawn arrows at lg+), and the travel-journal postcard settles in
 * below them as the proof. Keeps id="automation" so the navbar's interim
 * Business Systems anchor and old deep links still land here.
 * ------------------------------------------------------------------------- */

const STEPS = [
  { n: "01", title: "New enquiry arrives", body: "A form fill or DM lands in the inbox." },
  { n: "02", title: "Saved & sorted", body: "Details logged neatly in Airtable." },
  { n: "03", title: "Booked in", body: "Calendar invite sent automatically." },
  { n: "04", title: "You're notified", body: "A tidy summary pings your phone." },
] as const;

/* One personality per note: colour, rest angle, number tint. */
const NOTES = [
  { color: "sticky-lavender", tilt: "motion-safe:-rotate-2", num: "text-primary" },
  { color: "sticky-peach", tilt: "motion-safe:rotate-1", num: "text-accent-hover" },
  { color: "sticky-pink", tilt: "motion-safe:-rotate-1", num: "text-pink-deep" },
  { color: "sticky-sage", tilt: "motion-safe:rotate-2", num: "text-sage" },
] as const;

const TOOLS = ["GoHighLevel", "Airtable", "Make", "Zapier", "CRM & pipelines"];

const LIVE = "https://heyitsabby.space/website/bahay-liwanag";

export default function FeaturedSystem() {
  return (
    <Section id="automation" tone="surface" aria-labelledby="automation-heading">
      <Reveal>
        <SectionHeading
          id="automation-heading"
          eyebrow="Business systems"
          title="Set it once, let it run"
          intro="This is where I save the most time — little workflows that catch a new enquiry, reply, book it in, and let you know, all while you're doing something else."
        />
      </Reveal>

      {/* The pattern — four sticky notes on the desk */}
      <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
        {STEPS.map((step, i) => (
          <Reveal
            as="li"
            key={step.n}
            delay={i * 110}
            rot={i % 2 === 0 ? -3 : 3}
            y={18}
            className="relative list-none"
          >
            <div
              className={cx(
                "sticky-note h-full p-6 pt-8 transition-transform duration-300 ease-[var(--ease-paper)] motion-safe:hover:-translate-y-1",
                NOTES[i].color,
                NOTES[i].tilt,
              )}
            >
              <span aria-hidden className={cx("hand text-3xl", NOTES[i].num)}>
                {step.n}
              </span>
              <h3 className="mt-2 text-xl">{step.title}</h3>
              <p className="mt-2 text-foreground/75">{step.body}</p>
            </div>
            {/* No z-index on the arrow: its head tucks beneath the next
                note's edge instead of drawing over it */}
            {i < STEPS.length - 1 && (
              <Doodle
                kind="arrow"
                draw
                className={cx(
                  "absolute top-1/2 -right-8 hidden w-10 text-primary/40 lg:block",
                  i % 2 === 0 ? "-rotate-6" : "rotate-[14deg] -scale-y-100",
                )}
              />
            )}
          </Reveal>
        ))}
      </ol>

      {/* The proof — the flagship system, postcard and all */}
      <Reveal rot={-0.8} y={22} className="mt-16 sm:mt-20">
        <article className="grain relative overflow-hidden rounded-[var(--radius-2xl)] border border-border bg-card p-6 sm:p-10">
          {/* Right-margin ephemera, pressed into the page */}
          <span
            aria-hidden
            className="absolute right-6 top-10 hidden rotate-[8deg] rounded-md border-2 border-dashed border-primary/35 p-1.5 opacity-90 mix-blend-multiply lg:block"
          >
            <Doodle kind="mountains" className="w-10 text-primary/45" />
          </span>
          <Doodle
            kind="leaf"
            draw
            className="absolute right-9 top-28 hidden size-7 rotate-45 text-sage/50 lg:block"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            {/* The postcard — proof it runs somewhere real */}
            <figure className="relative">
              <div
                className={cx(
                  "paper curl relative p-3 motion-safe:-rotate-[0.6deg]",
                  "transition-transform duration-300 ease-[var(--ease-paper)] motion-safe:hover:-translate-y-1.5 motion-safe:hover:rotate-0",
                )}
              >
                <span aria-hidden className="tape tape-cream left-10 -top-3 -rotate-6 rounded-[2px]" />
                <a
                  href={LIVE}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit the Bahay Liwanag website"
                  className="group relative block aspect-[16/9] overflow-hidden rounded-[var(--radius-sm)] bg-muted"
                >
                  <Image
                    src="/images/bahay-liwanag/bahay-liwanag-homepage.png"
                    alt="Bahay Liwanag — website homepage"
                    fill
                    className="object-cover object-top transition-transform duration-[600ms] ease-[var(--ease-paper)] motion-safe:group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 620px, 92vw"
                  />
                </a>
              </div>
              <p
                aria-hidden
                className="hand absolute -bottom-4 right-6 rotate-[-3deg] text-2xl font-medium"
              >
                wish you were here!
              </p>
            </figure>

            {/* The journal entry */}
            <div className="flex flex-col gap-4">
              <span aria-hidden className="hand text-2xl text-primary">
                the featured system
              </span>
              <h3 className="text-3xl">Bahay Liwanag</h3>
              <p className="text-lg text-foreground/80">
                A serene site for a boutique resort — paired with a Make +
                Airtable pipeline that turns enquiries into booked reservations
                automatically.
              </p>
              <ul className="flex flex-wrap gap-2 pt-1" aria-label="Project details">
                {["Boutique resort", "GoHighLevel", "Make + Airtable"].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-surface/70 px-2.5 py-0.5 text-xs font-semibold text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-x-6">
                <Link
                  href="/projects/bahay-liwanag"
                  className="group/cs mt-1 inline-flex items-center gap-1.5 self-start text-sm font-bold text-primary no-underline"
                >
                  <span className="underline-offset-4 group-hover/cs:underline">
                    Read the case study
                  </span>
                  <span aria-hidden className="transition-transform group-hover/cs:translate-x-0.5">
                    →
                  </span>
                </Link>
                <a
                  href={LIVE}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link mt-1 inline-flex items-center gap-1.5 self-start text-sm font-bold text-primary no-underline"
                >
                  <span className="underline-offset-4 group-hover/link:underline">
                    Visit Bahay Liwanag
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
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
              </div>
            </div>
          </div>
        </article>
      </Reveal>

      {/* The toolbox — one quiet row */}
      <div className="mt-12 flex flex-wrap items-center gap-3">
        <span className="text-sm font-semibold text-foreground">Built with</span>
        {TOOLS.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-border bg-card px-3 py-1 text-sm font-semibold text-muted-foreground"
          >
            {tool}
          </span>
        ))}
        {/* one small reward in the leftover space */}
        <Doodle
          kind="flower"
          className="ml-1 size-4 text-lavender motion-safe:animate-drift" style={{ animationDelay: "1s" }}
        />
      </div>
    </Section>
  );
}
