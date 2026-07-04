import Image from "next/image";
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
 * Each card leads with a real homepage screenshot (next/image, cropped to the
 * hero via object-top).
 * ------------------------------------------------------------------------- */

type Project = {
  name: string;
  image: string;
  tags: string[];
  blurb: string;
  status?: "in-progress";
};

const PROJECTS: Project[] = [
  {
    name: "Bahay Liwanag",
    image: "/images/bahay-liwanag/bahay-liwanag-homepage.png",
    tags: ["Boutique resort", "Website", "Make + Airtable"],
    blurb:
      "A serene site for a boutique resort — paired with a Make + Airtable pipeline that turns enquiries into booked reservations automatically.",
  },
  {
    name: "Casa Kape",
    image: "/images/casa-kape/casa-kape-homepage.png",
    tags: ["Local café", "One-page", "Enquiry form"],
    blurb:
      "A warm one-page site for a local café — menu, story, and a tap-to-message enquiry form that lands straight in the owner's inbox.",
  },
  {
    name: "Purr Heaven",
    image: "/images/purr-heaven/purr-heaven-homepage.png",
    tags: ["Adoption group", "Multi-page", "GoHighLevel"],
    blurb:
      "A playful multi-page site for a cat adoption & rescue group — an adoptable-cat gallery, enquiry forms, and friendly auto-replies through GoHighLevel.",
  },
  {
    name: "Stephanie Center Wellness",
    image: "/images/stephanie-center/steph-homepage.png",
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
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
                <Image
                  src={p.image}
                  alt={`${p.name} — website homepage`}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
                />
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
