import Section from "@/components/layout/Section";
import Reveal from "@/components/ui/Reveal";
import Doodle from "@/components/ui/Doodle";
import SectionHeading from "./SectionHeading";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * AutomationSystems — "Set it once, let it run".
 * Tells the automation story as a four-step flow (from the GHL reference),
 * framed around the business problem it solves rather than a tool list.
 *
 * Art direction: the four steps are pastel sticky notes on the aged-paper
 * band — torn from the pad, each its own colour and rest angle, linked by
 * hand-drawn arrows (lg+) — a workflow sketched on a desk, not a feature
 * grid. Copy is unchanged.
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

export default function AutomationSystems() {
  return (
    <Section id="automation" tone="surface" aria-labelledby="automation-heading">
      <SectionHeading
        id="automation-heading"
        eyebrow="Automation & systems"
        title="Set it once, let it run"
        intro="This is where I save the most time — little workflows that catch a new enquiry, reply, book it in, and let you know, all while you're doing something else."
      />

      <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
        {STEPS.map((step, i) => (
          <Reveal as="li" key={step.n} delay={i * 90} className="relative list-none">
            <div className={cx("sticky-note h-full p-6 pt-8", NOTES[i].color, NOTES[i].tilt)}>
              <span aria-hidden className={cx("hand text-3xl", NOTES[i].num)}>
                {step.n}
              </span>
              <h3 className="mt-2 text-xl">{step.title}</h3>
              <p className="mt-2 text-foreground/75">{step.body}</p>
            </div>
            {i < STEPS.length - 1 && (
              <Doodle
                kind="arrow"
                className={cx(
                  "absolute top-1/2 -right-9 z-10 hidden w-11 text-primary/40 lg:block",
                  i % 2 === 0 ? "-rotate-6" : "rotate-[14deg] -scale-y-100",
                )}
              />
            )}
          </Reveal>
        ))}
      </ol>

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
      </div>
    </Section>
  );
}
