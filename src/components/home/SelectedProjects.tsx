import Image from "next/image";
import Section from "@/components/layout/Section";
import Reveal from "@/components/ui/Reveal";
import Doodle from "@/components/ui/Doodle";
import SectionHeading from "./SectionHeading";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * SelectedProjects — an exhibition, not a grid.
 *
 * Four portfolio pieces inspired by real businesses, each art-directed as its
 * own artefact so the section reads like pages of a design annual assembled by
 * hand. Copy (names, blurbs, tags) is unchanged from the GHL reference; the
 * only added words are tiny handwritten margin notes, in character per piece:
 *
 *   № 1  Bahay Liwanag      — a travel journal spread: postcard, snapshot,
 *                             postage stamp, postmark, warm paper panel
 *   № 2  Casa Kape          — a recipe-notebook page: coffee ring, steam,
 *                             clipped menu, handwritten recommendation
 *   № 3  Purr Heaven        — an adoption poster: polaroid stack, paw trail,
 *                             blush paper
 *   № 4  Stephanie Center   — a wellness journal: ruled page, botanical
 *                             marks, quiet in-progress note
 *
 * All flourishes are decorative (aria-hidden / empty alt); screenshots are
 * the heroes and the copy stays exactly as specified.
 * ------------------------------------------------------------------------- */

/* Live sites --------------------------------------------------------------- */

const LINKS = {
  bahay: "https://heyitsabby.space/website/bahay-liwanag",
  casa: "https://heyitsabby.space/casa-kape",
  purr: "https://heyitsabby.space/website/purrheaven/home",
} as const;

/* Shared caption-plate bits ------------------------------------------------ */

/** Quiet editorial text link to the live site, tinted per piece. */
function VisitLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cx(
        "group/link mt-1 inline-flex items-center gap-1.5 self-start text-sm font-bold no-underline",
        className,
      )}
    >
      <span className="underline-offset-4 group-hover/link:underline">{children}</span>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
        <path
          d="M7 17 17 7M9 7h8v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 pt-1" aria-label="Project details">
      {tags.map((t) => (
        <li
          key={t}
          className="rounded-full border border-border bg-card/70 px-2.5 py-0.5 text-xs font-semibold text-muted-foreground"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

/* № 1 — Bahay Liwanag · travel journal ------------------------------------ */

function BahayLiwanag() {
  return (
    <article className="grain relative overflow-hidden rounded-[var(--radius-2xl)] border border-border bg-surface p-6 sm:p-10 lg:p-14">
      {/* A dashed travel route wandering the journal's margin */}
      <Doodle
        kind="route"
        className="absolute bottom-8 right-10 hidden w-28 -rotate-6 text-primary/25 xl:block"
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.16fr_0.84fr] lg:gap-14">
        {/* Postcard spread */}
        <figure className="relative pb-14 pr-4 sm:pr-8">
          {/* The postcard — main screenshot, links to the live site */}
          <div className="paper relative p-3 transition-transform duration-300 ease-[var(--ease-paper)] motion-safe:-rotate-1 motion-safe:hover:-translate-y-1.5 motion-safe:hover:rotate-0">
            <span aria-hidden className="tape tape-cream left-6 -top-3 -rotate-6 rounded-[2px]" />
            <a
              href={LINKS.bahay}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit the Bahay Liwanag website"
              className="group relative block aspect-[16/10] overflow-hidden rounded-[var(--radius-sm)] bg-muted"
            >
              <Image
                src="/images/bahay-liwanag/bahay-liwanag-homepage.png"
                alt="Bahay Liwanag — website homepage"
                fill
                className="object-cover object-top transition-transform duration-[600ms] ease-[var(--ease-paper)] motion-safe:group-hover:scale-[1.04]"
                sizes="(min-width: 1024px) 560px, 92vw"
              />
            </a>
            {/* Postage stamp + postmark */}
            <div aria-hidden className="stamp -right-3 -top-6 w-14 rotate-6 sm:w-16">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/bahay-liwanag/bahay-liwanag-booking-page.png"
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="64px"
                />
              </div>
            </div>
            <Doodle
              kind="waves"
              className="absolute -right-6 top-12 hidden w-10 rotate-12 text-primary/40 sm:block"
            />
          </div>

          {/* Snapshot tucked over the corner */}
          <div className="paper absolute bottom-0 right-0 w-[44%] p-2 pb-1 shadow-soft motion-safe:rotate-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-muted">
              <Image
                src="/images/bahay-liwanag/bahay-liwanag-experiences.png"
                alt=""
                aria-hidden="true"
                fill
                className="object-cover object-top"
                sizes="240px"
              />
            </div>
            <p aria-hidden className="hand py-1.5 text-center text-xl leading-none">
              wish you were here!
            </p>
          </div>
        </figure>

        {/* Journal entry */}
        <div className="flex flex-col gap-4">
          <span aria-hidden className="hand text-2xl">№ 1 — from the travel journal</span>
          <h3 className="text-3xl">Bahay Liwanag</h3>
          <p className="text-lg text-foreground/80">
            A serene site for a boutique resort — paired with a Make + Airtable
            pipeline that turns enquiries into booked reservations automatically.
          </p>
          <Tags tags={["Boutique resort", "Website", "Make + Airtable"]} />
          <VisitLink href={LINKS.bahay} className="text-primary">
            Visit Bahay Liwanag
          </VisitLink>
        </div>
      </div>
    </article>
  );
}

/* № 2 — Casa Kape · recipe notebook ---------------------------------------- */

function CasaKape() {
  return (
    <article className="relative">
      <div className="grid items-center gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16">
        {/* Note from the notebook */}
        <div className="flex flex-col gap-4">
          <span aria-hidden className="hand text-2xl text-accent-hover">
            № 2 — from the recipe notebook
          </span>
          <h3 className="text-3xl">Casa Kape</h3>
          <p className="text-lg text-foreground/80">
            A warm one-page site for a local café — menu, story, and a
            tap-to-message enquiry form that lands straight in the owner&apos;s inbox.
          </p>
          <Tags tags={["Local café", "One-page", "Enquiry form"]} />
          <VisitLink href={LINKS.casa} className="text-accent-hover">
            Visit Casa Kape
          </VisitLink>
        </div>

        {/* The kitchen table */}
        <figure className="relative pb-12">
          <span aria-hidden className="stain -left-8 -top-9 hidden sm:block" />
          <Doodle
            kind="steam"
            className="absolute right-12 -top-7 w-7 text-muted-foreground/70 motion-safe:animate-float" style={{ animationDuration: "5s" }}
          />

          {/* Main screenshot — taped photo on the page, links to the live site */}
          <div className="paper relative p-3 shadow-lg transition-transform duration-300 ease-[var(--ease-paper)] motion-safe:rotate-1 motion-safe:hover:-translate-y-1.5 motion-safe:hover:rotate-0">
            <span aria-hidden className="tape tape-peach right-8 -top-3 rotate-3 rounded-[2px]" />
            <a
              href={LINKS.casa}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit the Casa Kape website"
              className="group relative block aspect-[4/3] overflow-hidden rounded-[var(--radius-sm)] bg-muted"
            >
              <Image
                src="/images/casa-kape/casa-kape-homepage.png"
                alt="Casa Kape — website homepage"
                fill
                className="object-cover object-top transition-transform duration-[600ms] ease-[var(--ease-paper)] motion-safe:group-hover:scale-[1.04]"
                sizes="(min-width: 1024px) 560px, 92vw"
              />
            </a>
          </div>

          {/* Clipped menu page */}
          <div className="paper absolute -bottom-1 left-1 w-[32%] p-1.5 shadow-paper motion-safe:-rotate-6">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] bg-muted">
              <Image
                src="/images/casa-kape/casa-kape-menu.png"
                alt=""
                aria-hidden="true"
                fill
                className="object-cover object-top"
                sizes="180px"
              />
            </div>
          </div>

          {/* The recommendation */}
          <p
            aria-hidden
            className="hand absolute -bottom-2 right-4 rotate-[-4deg] text-2xl text-accent-hover"
          >
            order the bibingka! ☕
          </p>
        </figure>
      </div>
    </article>
  );
}

/* № 3 — Purr Heaven · adoption poster -------------------------------------- */

function PurrHeaven() {
  return (
    <article className="grain relative overflow-hidden rounded-[var(--radius-2xl)] border border-pink-deep/25 bg-pink/20 p-6 sm:p-10 lg:p-14">
      <div className="relative grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
        {/* Polaroid stack */}
        <figure className="relative pb-12">
          {/* Behind — the residents */}
          <div className="paper absolute right-0 top-6 z-0 w-[50%] p-2 pb-6 motion-safe:rotate-6">
            <div className="relative aspect-square overflow-hidden rounded-[2px] bg-muted">
              <Image
                src="/images/purr-heaven/purr-heaven-adoption.png"
                alt=""
                aria-hidden="true"
                fill
                className="object-cover object-top"
                sizes="240px"
              />
            </div>
          </div>

          {/* Front — the poster polaroid */}
          <div className="paper relative z-10 w-[78%] p-3 pb-2 shadow-lg transition-transform duration-300 ease-[var(--ease-paper)] motion-safe:-rotate-2 motion-safe:hover:-translate-y-1.5 motion-safe:hover:rotate-0">
            <span aria-hidden className="tape tape-pink left-1/2 -top-3 -translate-x-1/2 rotate-2 rounded-[2px]" />
            <a
              href={LINKS.purr}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit the Purr Heaven website"
              className="group relative block aspect-square overflow-hidden rounded-[2px] bg-muted"
            >
              <Image
                src="/images/purr-heaven/purr-heaven-homepage.png"
                alt="Purr Heaven — website homepage"
                fill
                className="object-cover object-top transition-transform duration-[600ms] ease-[var(--ease-paper)] motion-safe:group-hover:scale-[1.04]"
                sizes="(min-width: 1024px) 420px, 74vw"
              />
            </a>
            <p aria-hidden className="hand relative py-2 text-center text-2xl leading-none text-pink-deep">
              adopt, don&apos;t shop
            </p>
            {/* a drawn heart beside the caption */}
            <Doodle
              kind="heart"
              draw
              className="absolute -right-2 bottom-1 size-5 rotate-12 text-pink-deep/70"
            />
          </div>

          {/* Paw trail wandering off the poster — an occasional playful wiggle */}
          <Doodle kind="paw" className="absolute -bottom-1 left-10 size-5 rotate-12 text-pink-deep/80 motion-safe:animate-wiggle" />
          <Doodle kind="paw" className="absolute -bottom-5 left-24 size-4 -rotate-6 text-pink-deep/60 motion-safe:animate-wiggle" style={{ animationDelay: "1.2s" }} />
          <Doodle kind="paw" className="absolute -bottom-8 left-36 size-3.5 rotate-6 text-pink-deep/40 motion-safe:animate-wiggle" style={{ animationDelay: "2.4s" }} />
        </figure>

        {/* Poster copy */}
        <div className="flex flex-col gap-4">
          <span aria-hidden className="hand text-2xl text-pink-deep">№ 3 — the adoption poster</span>
          <h3 className="text-3xl">Purr Heaven</h3>
          <p className="text-lg text-foreground/80">
            A playful multi-page site for a cat adoption &amp; rescue group — an
            adoptable-cat gallery, enquiry forms, and friendly auto-replies
            through GoHighLevel.
          </p>
          <Tags tags={["Adoption group", "Multi-page", "GoHighLevel"]} />
          <VisitLink href={LINKS.purr} className="text-pink-deep">
            Visit Purr Heaven
          </VisitLink>
        </div>
      </div>
    </article>
  );
}

/* № 4 — Stephanie Center · wellness journal -------------------------------- */

function StephanieCenter() {
  return (
    <article className="ruled grain relative overflow-hidden rounded-[var(--radius-2xl)] border border-border bg-card p-6 sm:p-10 lg:p-14">
      {/* Botanical margin marks — the leaves ink themselves in on arrival,
          and a pressed blossom rests near the page corner */}
      <Doodle kind="leaf" draw className="absolute right-8 top-8 size-8 rotate-12 text-sage/70" />
      <Doodle kind="leaf" draw className="absolute bottom-10 left-8 size-6 -rotate-45 text-sage/50 [--draw-delay:0.9s]" />
      <Doodle
        kind="blossom"
        className="absolute bottom-8 right-12 hidden w-8 rotate-12 text-pink-deep/45 lg:block"
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Journal entry */}
        <div className="flex flex-col gap-4">
          <span aria-hidden className="hand text-2xl text-sage">
            № 4 — from the wellness journal
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-3xl">Stephanie Center Wellness</h3>
            <span aria-hidden className="hand text-xl text-muted-foreground">
              <span className="marker">In progress</span>
            </span>
          </div>
          <p className="text-lg text-foreground/80">
            Case study in progress — write-up coming soon.
          </p>
          <Tags tags={["Wellness studio"]} />
        </div>

        {/* Pressed page — softened while it grows */}
        <figure className="relative pb-8">
          <div className="paper relative p-3 transition-transform duration-300 ease-[var(--ease-paper)] motion-safe:rotate-[0.8deg] motion-safe:hover:-translate-y-1 motion-safe:hover:rotate-0">
            <span aria-hidden className="tape tape-sage left-8 -top-3 -rotate-3 rounded-[2px]" />
            <div className="relative aspect-[16/11] overflow-hidden rounded-[var(--radius-sm)] bg-muted">
              <Image
                src="/images/stephanie-center/steph-homepage.png"
                alt="Stephanie Center Wellness — website homepage"
                fill
                className="object-cover object-top opacity-[0.92] saturate-[0.85]"
                sizes="(min-width: 1024px) 560px, 92vw"
              />
            </div>
          </div>
          <p
            aria-hidden
            className="hand absolute -bottom-1 right-8 rotate-[-2deg] text-xl text-muted-foreground"
          >
            a quiet one — for now
          </p>
        </figure>
      </div>
    </article>
  );
}

/* Section ------------------------------------------------------------------ */

export default function SelectedProjects() {
  return (
    <Section id="projects" tone="default" aria-labelledby="projects-heading">
      <Reveal>
        <SectionHeading
          id="projects-heading"
          eyebrow="Selected work"
          title="A few things I've built lately"
          intro="Thoughtfully crafted projects inspired by real businesses — each designed, developed, and structured like a client engagement."
        />
      </Reveal>

      {/* Each piece settles onto the page with its own slight tilt */}
      <ul className="mt-16 space-y-20 sm:space-y-24">
        <Reveal as="li" rot={-1.2} y={20} className="list-none">
          <BahayLiwanag />
        </Reveal>
        <Reveal as="li" delay={100} rot={1.2} y={20} className="list-none">
          <CasaKape />
        </Reveal>
        <Reveal as="li" rot={-1.4} y={20} className="list-none">
          <PurrHeaven />
        </Reveal>
        <Reveal as="li" delay={100} rot={1} y={20} className="list-none">
          <StephanieCenter />
        </Reveal>
      </ul>
    </Section>
  );
}
