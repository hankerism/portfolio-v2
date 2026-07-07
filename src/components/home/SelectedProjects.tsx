import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Doodle from "@/components/ui/Doodle";
import SectionHeading from "./SectionHeading";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * SelectedProjects — the Featured Projects Preview (IA v2 §4.1): a curated
 * sample of three magazine spreads that teases the collection and hands off
 * to /projects. (Bahay Liwanag's spread was promoted to the Featured
 * Business System section in Phase B; KATHA has the flagship band.)
 *
 * Composition first, decoration second: in every spread the FIRST thing the
 * eye lands on is the screenshot; the props are supporting actors placed in
 * the margins. No two layouts repeat, and the rhythm alternates —
 *
 *   № 1  Casa Kape        — DENSE (the strongest): oversized taped photo,
 *                           recipe notecard overlapping it, receipt tucked
 *                           behind, paperclipped menu, coffee ring, steam
 *   № 2  Purr Heaven      — SIMPLE: two big polaroids on blush paper, one
 *                           note, an elegant paw trail — nothing else
 *   № 3  Stephanie Center — CALM: the most breathing room; ruled paper,
 *                           bookmark ribbon, one leaf, one pressed blossom
 *
 * Copy (names, blurbs, tags) is unchanged; the only added words are the tiny
 * handwritten margin notes. All flourishes are decorative (aria-hidden /
 * empty alt) and every animation respects prefers-reduced-motion.
 * ------------------------------------------------------------------------- */

/* Live sites --------------------------------------------------------------- */

const LINKS = {
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

/* Paper mats share one hover gesture: lifted and straightened in hand. */
const MAT_HOVER =
  "transition-transform duration-300 ease-[var(--ease-paper)] motion-safe:hover:-translate-y-1.5 motion-safe:hover:rotate-0";

/* № 1 — Casa Kape · editorial food magazine, oversized photo ---------------- */

function CasaKape() {
  return (
    <article className="relative">
      {/* The kitchen table — a near-full-bleed photo the notecard rests on */}
      <figure className="relative pb-12 lg:ml-auto lg:w-[72%]">
        <span aria-hidden className="stain -left-8 -top-9 hidden sm:block" />
        <Doodle
          kind="steam"
          className="absolute right-12 -top-7 w-7 text-muted-foreground/70 motion-safe:animate-float" style={{ animationDuration: "5s" }}
        />

        {/* Main screenshot — taped photo, links to the live site */}
        <div className={cx("paper curl relative p-3 shadow-lg motion-safe:rotate-1", MAT_HOVER)}>
          <span aria-hidden className="tape tape-peach right-8 -top-3 rotate-3 rounded-[2px]" />
          <a
            href={LINKS.casa}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit the Casa Kape website"
            className="group relative block aspect-[16/10] overflow-hidden rounded-[var(--radius-sm)] bg-muted"
          >
            <Image
              src="/images/casa-kape/casa-kape-homepage.png"
              alt="Casa Kape — website homepage"
              fill
              className="object-cover object-top transition-transform duration-[600ms] ease-[var(--ease-paper)] motion-safe:group-hover:scale-[1.04]"
              sizes="(min-width: 1024px) 780px, 92vw"
            />
          </a>
        </div>

        {/* Paperclipped menu page */}
        <div className="paper absolute -bottom-1 -left-3 w-[26%] p-1.5 shadow-paper motion-safe:-rotate-6 sm:-left-6">
          <Doodle
            kind="paperclip"
            className="absolute -top-4 left-3 z-10 w-4 text-ink-soft/70"
          />
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

      {/* Recipe notecard — overlaps the photo's edge on lg */}
      <div className="mt-10 lg:absolute lg:left-0 lg:top-1/2 lg:z-10 lg:mt-0 lg:w-[34%] lg:-translate-y-1/2">
        <div className="paper-stack paper relative flex flex-col gap-4 p-6 motion-safe:-rotate-1 sm:p-8">
          {/* Receipt slip tucked behind the card corner */}
          <span aria-hidden className="receipt absolute -right-7 -top-9 hidden h-24 w-16 rotate-6 lg:block" />
          <span aria-hidden className="hand text-2xl text-accent-hover">
            № 1 — from the recipe notebook
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
      </div>
    </article>
  );
}

/* № 2 — Purr Heaven · adoption board, simplified ----------------------------- */

function PurrHeaven() {
  return (
    <article className="grain relative overflow-hidden rounded-[var(--radius-2xl)] border border-pink-deep/25 bg-pink/20 p-6 sm:p-10 lg:p-14">
      <div className="relative grid items-center gap-12 lg:grid-cols-[1.62fr_1fr] lg:gap-14">
        {/* Polaroid pair — big, layered, nothing else on them */}
        <figure className="relative pb-12">
          {/* Behind — the residents */}
          <div className="paper absolute right-0 top-2 z-0 w-[56%] p-2 pb-6 motion-safe:rotate-6">
            <div className="relative aspect-square overflow-hidden rounded-[2px] bg-muted">
              <Image
                src="/images/purr-heaven/purr-heaven-adoption.png"
                alt=""
                aria-hidden="true"
                fill
                className="object-cover object-top"
                sizes="340px"
              />
            </div>
          </div>

          {/* Front — the poster polaroid */}
          <div className={cx("paper relative z-10 w-[86%] p-3 pb-2 shadow-lg motion-safe:-rotate-2", MAT_HOVER)}>
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
                sizes="(min-width: 1024px) 560px, 86vw"
              />
            </a>
            <p aria-hidden className="hand relative py-2 text-center text-2xl leading-none text-pink-deep">
              adopt, don&apos;t shop
            </p>
          </div>

          {/* An elegant paw trail, arcing quietly toward the words */}
          <Doodle kind="paw" className="absolute -bottom-2 left-[46%] size-5 rotate-12 text-pink-deep/70 motion-safe:animate-wiggle" />
          <Doodle kind="paw" className="absolute -bottom-6 left-[62%] size-4 -rotate-3 text-pink-deep/50 motion-safe:animate-wiggle" style={{ animationDelay: "1.2s" }} />
          <Doodle kind="paw" className="absolute -bottom-8 left-[78%] size-3.5 rotate-12 text-pink-deep/35 motion-safe:animate-wiggle" style={{ animationDelay: "2.4s" }} />
        </figure>

        {/* Poster copy */}
        <div className="flex flex-col gap-4">
          <span aria-hidden className="hand text-2xl text-pink-deep">№ 2 — the adoption poster</span>
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

/* № 3 — Stephanie Center · wellness planner, calmest page -------------------- */

function StephanieCenter() {
  return (
    <article className="ruled grain relative overflow-hidden rounded-[var(--radius-2xl)] border border-border bg-card p-6 sm:p-12 lg:p-16">
      {/* Planner furniture: bookmark ribbon, one leaf, one pressed blossom */}
      {/* h-12 keeps the ribbon's tail clear of the photo mat's top edge */}
      <span
        aria-hidden
        className="absolute right-14 top-0 h-12 w-7 bg-lavender-deep/50 shadow-sm"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 84%, 0 100%)" }}
      />
      <Doodle kind="leaf" draw className="absolute left-8 top-8 size-6 -rotate-12 text-sage/60" />
      <Doodle
        kind="blossom"
        className="absolute bottom-8 left-10 hidden w-8 -rotate-12 text-pink-deep/45 lg:block"
      />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        {/* Journal entry */}
        <div className="flex flex-col gap-4">
          <span aria-hidden className="hand text-2xl text-sage">
            № 3 — from the wellness journal
          </span>
          <h3 className="text-3xl">Stephanie Center Wellness</h3>
          <p className="text-lg text-foreground/80">
            A women&rsquo;s hair-health practice — its education-first funnel
            rebuilt inside GoHighLevel, preserving the brand and the existing
            AWeber &amp; Practice Better stack.
          </p>
          <Tags tags={["Functional medicine", "GoHighLevel", "Business system"]} />
          <Link
            href="/projects/stephanie-center"
            className="group/cs mt-1 inline-flex items-center gap-1.5 self-start text-sm font-bold text-sage no-underline"
          >
            <span className="underline-offset-4 group-hover/cs:underline">
              Read the case study
            </span>
            <span aria-hidden className="transition-transform group-hover/cs:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        {/* Pressed page */}
        <figure className="relative pb-8">
          <div className={cx("paper relative p-3 motion-safe:rotate-[0.8deg]", MAT_HOVER)}>
            <span aria-hidden className="tape tape-sage left-8 -top-3 -rotate-3 rounded-[2px]" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-sm)] bg-muted">
              <Image
                src="/images/stephanie-center/steph-homepage.png"
                alt="Stephanie Center Wellness — website homepage rebuilt in GoHighLevel"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 660px, 92vw"
              />
            </div>
          </div>
          <p
            aria-hidden
            className="hand absolute -bottom-1 right-8 rotate-[-2deg] text-xl font-medium text-muted-foreground"
          >
            systems, in healthcare
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
          intro="A curated sample from the collection — each project designed, developed, and structured like a client engagement."
        />
      </Reveal>

      {/* Each piece settles onto the page with its own slight tilt. The gaps
          are curated, not metronomic: extra air after the dense Casa spread,
          and the longest exhale before the calm closing page. */}
      <ul className="mt-16">
        <Reveal as="li" rot={1.2} y={20} className="list-none">
          <CasaKape />
        </Reveal>
        <Reveal as="li" delay={100} rot={-1.4} y={20} className="mt-20 list-none sm:mt-24">
          <PurrHeaven />
        </Reveal>
        <Reveal as="li" rot={1} y={20} className="mt-24 list-none sm:mt-32">
          <StephanieCenter />
        </Reveal>
      </ul>

      {/* The hand-off — this wall is the preview; /projects is the collection
          (IA v2 §4.1: tease the portfolio, never replace it) */}
      <Reveal delay={80} y={16}>
        <div className="mt-16 flex flex-col items-center gap-3 text-center sm:mt-20">
          <p aria-hidden className="hand text-2xl text-muted-foreground">
            there&rsquo;s more where these came from
          </p>
          <Button href="/projects" as={Link} variant="primary">
            View all projects
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
