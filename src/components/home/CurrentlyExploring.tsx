import Section from "@/components/layout/Section";
import Reveal from "@/components/ui/Reveal";
import Doodle from "@/components/ui/Doodle";
import SectionHeading from "./SectionHeading";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * CurrentlyExploring — the "Current focus" section: the open notebook page.
 * Sits after How I Work: the method, then the direction. The intro carries
 * where the work is heading (production apps on Next.js + Supabase, systems
 * for real businesses, AI-assisted engineering as daily practice); the torn
 * sticky notes carry the curiosity feeding it.
 *
 * Honesty rule holds: these are things actively being learned and used, not
 * claimed expertise — the copy says so out loud.
 * ------------------------------------------------------------------------- */

const TOPICS = [
  {
    title: "AI agents",
    body: "Workflows with judgement — agents that plan, call tools, and see a task through.",
  },
  {
    title: "MCP",
    body: "Model Context Protocol — wiring AI assistants into the tools I already work in.",
  },
  {
    title: "Supabase",
    body: "Shipped for the wedding platform — Postgres, Auth, RLS. KATHA's backend is next.",
  },
  {
    title: "Advanced Next.js",
    body: "Server components, caching, and the App Router's deeper corners.",
  },
  {
    title: "AI-assisted engineering",
    body: "Building with Claude Code every day — much faster, still craft-first.",
  },
] as const;

/* One personality per note, echoing the Featured System's pad. */
const NOTES = [
  { color: "sticky-lavender", tilt: "motion-safe:-rotate-2" },
  { color: "sticky-peach", tilt: "motion-safe:rotate-1" },
  { color: "sticky-pink", tilt: "motion-safe:-rotate-1" },
  { color: "sticky-sage", tilt: "motion-safe:rotate-2" },
  { color: "sticky-lavender", tilt: "motion-safe:rotate-1" },
] as const;

export default function CurrentlyExploring() {
  return (
    // surface tone keeps the About → method → focus → contact rhythm
    // alternating: surface / default / surface / muted
    <Section id="exploring" tone="surface" aria-labelledby="exploring-heading">
      <Reveal>
        <SectionHeading
          id="exploring-heading"
          eyebrow="on my desk right now"
          title="Current focus"
          intro="The direction is set: production-grade applications on Next.js and Supabase, systems that run real businesses, and AI-assisted engineering as a daily practice rather than a novelty. These notes are what's feeding that — things I'm actively studying and already folding into how I build."
        />
      </Reveal>

      <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {TOPICS.map((topic, i) => (
          <Reveal
            as="li"
            key={topic.title}
            delay={i * 90}
            rot={i % 2 === 0 ? -3 : 3}
            y={18}
            className="list-none"
          >
            <div
              className={cx(
                "sticky-note h-full p-6 pt-7 transition-transform duration-300 ease-[var(--ease-paper)] motion-safe:hover:-translate-y-1",
                NOTES[i].color,
                NOTES[i].tilt,
              )}
            >
              <h3 className="text-xl">{topic.title}</h3>
              <p className="mt-2 text-foreground/75">{topic.body}</p>
            </div>
          </Reveal>
        ))}

        {/* The pad's last slot: a small handwritten aside instead of a sixth
            note — the grid breathes and the section stays honest about being
            a work in progress. */}
        <Reveal as="li" delay={5 * 90} y={18} className="hidden list-none lg:block">
          <div className="flex h-full items-center justify-center p-6">
            <p aria-hidden className="hand -rotate-2 text-center text-2xl text-muted-foreground">
              always one more note… ✎
            </p>
          </div>
        </Reveal>
      </ul>

      {/* one quiet flourish, matching the section's calm close */}
      <Doodle kind="sprig" draw className="mt-10 w-8 text-sage/50" />
    </Section>
  );
}
