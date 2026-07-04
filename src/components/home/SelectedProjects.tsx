import Section from "@/components/layout/Section";
import Stack from "@/components/layout/Stack";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "./SectionHeading";

/* ---------------------------------------------------------------------------
 * SelectedProjects — portfolio pieces inspired by real businesses, each
 * structured like a client project. Blurbs for the three finished pieces come
 * verbatim-in-spirit from the GHL reference; Stephanie Center has no source
 * copy yet, so it is shown honestly as in-progress rather than invented.
 * Cover images aren't hydrated, so each card leads with a tinted monogram.
 * ------------------------------------------------------------------------- */

type Project = {
  name: string;
  monogram: string;
  tint: string;
  tags: string[];
  blurb: string;
  status?: "in-progress";
};

const PROJECTS: Project[] = [
  {
    name: "Bahay Liwanag",
    monogram: "BL",
    tint: "bg-lavender-tint text-plum-ink",
    tags: ["Boutique resort", "Website", "Make + Airtable"],
    blurb:
      "A serene site for a boutique resort — paired with a Make + Airtable pipeline that turns enquiries into booked reservations automatically.",
  },
  {
    name: "Casa Kape",
    monogram: "CK",
    tint: "bg-peach/25 text-primary",
    tags: ["Local café", "One-page", "Enquiry form"],
    blurb:
      "A warm one-page site for a local café — menu, story, and a tap-to-message enquiry form that lands straight in the owner's inbox.",
  },
  {
    name: "Purr Heaven",
    monogram: "PH",
    tint: "bg-pink/40 text-plum-ink",
    tags: ["Adoption group", "Multi-page", "GoHighLevel"],
    blurb:
      "A playful multi-page site for a cat adoption & rescue group — an adoptable-cat gallery, enquiry forms, and friendly auto-replies through GoHighLevel.",
  },
  {
    name: "Stephanie Center Wellness",
    monogram: "SC",
    tint: "bg-muted text-primary",
    tags: ["Wellness studio"],
    blurb: "Case study in progress — write-up coming soon.",
    status: "in-progress",
  },
];

export default function SelectedProjects() {
  return (
    <Section id="projects" tone="surface" aria-labelledby="projects-heading">
      <SectionHeading
        id="projects-heading"
        eyebrow="Selected work"
        title="A few things I've built lately"
        intro="Thoughtfully crafted projects inspired by real businesses — each designed, developed, and structured like a client engagement."
      />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal as="li" key={p.name} delay={(i % 3) * 90} className="list-none">
            <Card
              as="article"
              padding="none"
              className="h-full overflow-hidden"
              interactive
            >
              <div className={`flex h-32 items-center justify-center ${p.tint}`}>
                <span className="font-serif text-4xl font-semibold" aria-hidden>
                  {p.monogram}
                </span>
              </div>
              <div className="p-6">
                <Stack gap="sm" align="start">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl">{p.name}</h3>
                    {p.status === "in-progress" && (
                      <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                        In progress
                      </span>
                    )}
                  </div>
                  <p className="text-foreground/75">{p.blurb}</p>
                  <ul className="flex flex-wrap gap-2 pt-1" aria-label="Project details">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </Stack>
              </div>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
