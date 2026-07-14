import Section from "@/components/layout/Section";
import Reveal from "@/components/ui/Reveal";
import Doodle from "@/components/ui/Doodle";
import SectionHeading from "./SectionHeading";

/* ---------------------------------------------------------------------------
 * HowIWork — the method, between About (the story) and Current Focus (the
 * direction). Not soft skills: the actual workflow, told as a margin-dotted
 * list in the case-study timeline vocabulary. Step two carries the
 * technology-choice storytelling — why Next.js, Supabase, GoHighLevel — so
 * tools read as decisions, not a list.
 * ------------------------------------------------------------------------- */

const STEPS = [
  {
    title: "Understand the problem",
    body: "Six years in operations come first: how the business actually runs, who touches the system every day, and what breaks when nobody's watching. I build for that — not for the demo.",
  },
  {
    title: "Design the architecture",
    body: "Then choose tools for reasons. Next.js App Router for server-rendered speed and honest routing; Supabase when a product needs real auth and Postgres; GoHighLevel when the client lives in their CRM. The problem picks the stack, never the other way around.",
  },
  {
    title: "Build reusable systems",
    body: "Design tokens, shared components, pure domain modules with documented seams. The test: the second feature should cost less than the first, and the next developer — often future me — should find the reasoning written down.",
  },
  {
    title: "Ship",
    body: "To a URL, not a folder. Real deployments with real users are the only feedback that counts — every project here is live, and the case studies only claim what the repositories can prove.",
  },
  {
    title: "Refine",
    body: "Polish is scheduled work, not leftovers: accessibility sweeps, reduced-motion passes, copy edits, print stylesheets. The difference between finished and shipped-and-abandoned is this step.",
  },
] as const;

export default function HowIWork() {
  return (
    <Section id="how-i-work" tone="default" aria-labelledby="how-heading">
      <Reveal>
        <SectionHeading
          id="how-heading"
          eyebrow="the method"
          title="How I work"
          intro="The same five steps, whether it's a publishing platform or a booking pipeline."
        />
      </Reveal>

      <Reveal delay={120} y={18}>
        <ol className="relative mt-12 max-w-2xl space-y-0 border-s border-border ps-6">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative pb-7 last:pb-0">
              <span aria-hidden className="absolute -start-[1.85rem] top-1.5 size-2.5 rounded-full bg-accent" />
              <p className="font-serif text-xl font-semibold text-primary">
                <span aria-hidden className="font-mono text-sm font-bold text-accent-hover">
                  0{i + 1}&ensp;
                </span>
                {s.title}
              </p>
              <p className="mt-1.5 max-w-xl leading-relaxed text-foreground/80">{s.body}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* one small hand in the margin */}
      <Doodle kind="arrow" draw className="mt-8 w-10 rotate-[100deg] text-primary/30" />
      <p aria-hidden className="hand mt-1 text-2xl text-muted-foreground">
        …then back to step one, wiser
      </p>
    </Section>
  );
}
