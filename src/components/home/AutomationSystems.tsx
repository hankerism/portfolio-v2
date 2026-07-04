import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "./SectionHeading";

/* ---------------------------------------------------------------------------
 * AutomationSystems — "Set it once, let it run".
 * Tells the automation story as a four-step flow (from the GHL reference),
 * framed around the business problem it solves rather than a tool list.
 * ------------------------------------------------------------------------- */

const STEPS = [
  { n: "01", title: "New enquiry arrives", body: "A form fill or DM lands in the inbox." },
  { n: "02", title: "Saved & sorted", body: "Details logged neatly in Airtable." },
  { n: "03", title: "Booked in", body: "Calendar invite sent automatically." },
  { n: "04", title: "You're notified", body: "A tidy summary pings your phone." },
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

      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <Reveal as="li" key={step.n} delay={i * 90} className="list-none">
            <Card padding="lg" tilt={i % 2 === 0 ? "left" : "right"} className="h-full">
              <Stack gap="sm" align="start">
                <span
                  aria-hidden
                  className="mb-1 flex size-12 items-center justify-center rounded-full bg-accent/15"
                >
                  <span className="hand text-2xl text-accent">{step.n}</span>
                </span>
                <h3 className="text-xl">{step.title}</h3>
                <p className="text-foreground/75">{step.body}</p>
              </Stack>
            </Card>
          </Reveal>
        ))}
      </ol>

      <div className="mt-10 flex flex-wrap items-center gap-3">
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
