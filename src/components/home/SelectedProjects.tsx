import Image from "next/image";
import Section from "@/components/layout/Section";
import Reveal from "@/components/ui/Reveal";
import Doodle from "@/components/ui/Doodle";
import SectionHeading from "./SectionHeading";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * SelectedProjects — portfolio pieces inspired by real businesses, each
 * structured like a client project. Blurbs for the three finished pieces come
 * verbatim-in-spirit from the GHL reference; Stephanie Center has no source
 * copy yet, so it is shown honestly as in-progress rather than invented.
 *
 * Art direction: an asymmetric editorial spread, not a cloned grid. The
 * strongest piece (Bahay Liwanag) leads wide; the others alternate 5/7 widths
 * like a magazine layout. The screenshot is the hero of every card — a large,
 * hero-cropped image with a compact caption plate beneath — and each card is
 * hand-placed with its own tape hue, rest angle, and marks so no two feel
 * stamped from the same die, while sharing one paper-card system.
 * ------------------------------------------------------------------------- */

type Project = {
  name: string;
  image: string;
  tags: string[];
  blurb: string;
  status?: "in-progress";
  /** Column span at lg (the asymmetric rhythm). */
  span: string;
  /** Image crop ratio — wider for the featured rows. */
  aspect: string;
  /** Tape hue + placement, unique per card. */
  tape: string;
  /** Resting tilt (lg+), kept tiny so the spread still reads as one system. */
  tilt: string;
  /** Draw a sparkle on the lead card. */
  spark?: boolean;
};

const PROJECTS: Project[] = [
  {
    name: "Bahay Liwanag",
    image: "/images/bahay-liwanag/bahay-liwanag-homepage.png",
    tags: ["Boutique resort", "Website", "Make + Airtable"],
    blurb:
      "A serene site for a boutique resort — paired with a Make + Airtable pipeline that turns enquiries into booked reservations automatically.",
    span: "lg:col-span-7",
    aspect: "aspect-[16/10]",
    tape: "tape left-8 -top-3 -rotate-3",
    tilt: "lg:-rotate-[0.6deg]",
    spark: true,
  },
  {
    name: "Casa Kape",
    image: "/images/casa-kape/casa-kape-homepage.png",
    tags: ["Local café", "One-page", "Enquiry form"],
    blurb:
      "A warm one-page site for a local café — menu, story, and a tap-to-message enquiry form that lands straight in the owner's inbox.",
    span: "lg:col-span-5",
    aspect: "aspect-[4/3]",
    tape: "tape tape-peach right-8 -top-3 rotate-3",
    tilt: "lg:rotate-[0.8deg]",
  },
  {
    name: "Purr Heaven",
    image: "/images/purr-heaven/purr-heaven-homepage.png",
    tags: ["Adoption group", "Multi-page", "GoHighLevel"],
    blurb:
      "A playful multi-page site for a cat adoption & rescue group — an adoptable-cat gallery, enquiry forms, and friendly auto-replies through GoHighLevel.",
    span: "lg:col-span-5",
    aspect: "aspect-[4/3]",
    tape: "tape tape-pink left-8 -top-3 -rotate-2",
    tilt: "lg:-rotate-[0.8deg]",
  },
  {
    name: "Stephanie Center Wellness",
    image: "/images/stephanie-center/steph-homepage.png",
    tags: ["Wellness studio"],
    blurb: "Case study in progress — write-up coming soon.",
    status: "in-progress",
    span: "lg:col-span-7",
    aspect: "aspect-[16/10]",
    tape: "",
    tilt: "lg:rotate-[0.5deg]",
  },
];

function ProjectCard({ p }: { p: Project }) {
  const inProgress = p.status === "in-progress";
  return (
    <article
      className={cx(
        "paper group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)]",
        "transition-[transform,box-shadow] duration-[320ms] ease-[var(--ease-paper)]",
        "motion-safe:hover:-translate-y-1.5 hover:shadow-lg motion-safe:hover:rotate-0",
        p.tilt,
      )}
    >
      {p.tape && <span aria-hidden className={cx(p.tape, "rounded-[2px]")} />}

      {/* Screenshot — the hero of the card */}
      <div className={cx("relative overflow-hidden border-b border-border bg-muted", p.aspect)}>
        <Image
          src={p.image}
          alt={`${p.name} — website homepage`}
          fill
          className={cx(
            "object-cover object-top transition-transform duration-[600ms] ease-[var(--ease-paper)] motion-safe:group-hover:scale-[1.05]",
            inProgress && "opacity-[0.92] saturate-[0.9]",
          )}
          sizes="(min-width: 1024px) 640px, (min-width: 640px) 90vw, 100vw"
        />
        {p.spark && (
          <Doodle
            kind="sparkle"
            className="absolute right-4 top-4 size-6 text-accent drop-shadow-[0_1px_2px_rgba(75,66,87,0.35)]"
          />
        )}
      </div>

      {/* Caption plate */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-2.5">
          <h3 className="text-xl">{p.name}</h3>
          {inProgress && (
            <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">
              In progress
            </span>
          )}
        </div>
        <p className="text-foreground/75">{p.blurb}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-1" aria-label="Project details">
          {p.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function SelectedProjects() {
  return (
    <Section id="projects" tone="default" aria-labelledby="projects-heading">
      <SectionHeading
        id="projects-heading"
        eyebrow="Selected work"
        title="A few things I've built lately"
        intro="Thoughtfully crafted projects inspired by real businesses — each designed, developed, and structured like a client engagement."
      />

      <ul className="mt-14 grid gap-6 sm:gap-8 lg:grid-cols-12">
        {PROJECTS.map((p, i) => (
          <Reveal
            as="li"
            key={p.name}
            delay={(i % 2) * 110}
            className={cx("list-none", p.span)}
          >
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
