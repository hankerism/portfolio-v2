import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Doodle from "@/components/ui/Doodle";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * /projects/stephanie-center — the Stephanie Center Wellness case study.
 *
 * Business systems in healthcare/wellness — the third pillar proof (KATHA =
 * product engineering; Bahay Liwanag = systems in hospitality; this = systems
 * in functional medicine). Same evidence discipline as the other two.
 *
 * ATTRIBUTION IS LOAD-BEARING HERE. This was built for a real client. Every
 * claim on this page is scoped to what Abby personally built, migrated,
 * integrated, or configured inside GoHighLevel. The brand, the copy, the
 * medical program (CALM · RESTORE · REGROW / the Hair Growth Accelerator),
 * the quiz's diagnostic content, the testimonials, and Stephanie's own bio
 * are the CLIENT's — this page says so explicitly and never blurs the line.
 *
 * Evidence base: the client-approved project brief (authoritative for scope,
 * role, and the platforms used) + three screenshots of pages Abby built
 * (homepage, quiz funnel, guides landing). The GoHighLevel back office (CRM
 * fields, pipelines, workflow/trigger logic), the AWeber and Practice Better
 * integration internals, metrics, and a public URL are NOT in evidence — the
 * page marks those as gaps rather than inventing them (see the dashed nodes
 * and the capture list; full checklist in docs/STEPHANIE_CENTER_EVIDENCE.md).
 * ------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Stephanie Center Wellness — Business Systems Case Study",
  description:
    "Rebuilding a functional-medicine practice's education-first funnel inside GoHighLevel — preserving the brand identity and the existing AWeber and Practice Better stack, and connecting lead capture to the CRM. An honest account of what I built and what the client already owned.",
};

const BUSINESS_SYSTEMS = "/business-systems";

/* Project at a glance — qualitative, no invented metrics. */
const FACTS: { label: string; value: string }[] = [
  { label: "Industry", value: "Functional medicine · women's hair health" },
  { label: "Platform", value: "GoHighLevel" },
  { label: "Preserved stack", value: "AWeber · Practice Better" },
  { label: "My role", value: "Rebuild, migration & integration" },
];

const TOC = [
  ["problem", "The business problem"],
  ["journey", "The customer journey"],
  ["architecture", "System architecture"],
  ["decisions", "Technical decisions"],
  ["system", "The business system"],
  ["trade-offs", "Trade-offs"],
  ["lessons", "What it reinforced"],
] as const;

/* ── Local building blocks ────────────────────────────────────────────────── */

function SectionHeader({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-sm font-semibold tracking-widest text-accent-hover">
        {index}
      </p>
      <h2 id={id} className="mt-1 scroll-mt-24">
        {title}
      </h2>
      {children && <div className="mt-4 space-y-4 text-lg text-foreground/80">{children}</div>}
    </div>
  );
}

/** A screenshot presented as a pinned artefact (no faux address bar — there
 *  is no public URL to imply). The captured pages are the client's; the
 *  caption says what was built, not who wrote the words. */
function Plate({
  src,
  alt,
  caption,
  tape = "tape-cream",
  rotate = "motion-safe:-rotate-[0.6deg]",
  aspect = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  caption: string;
  tape?: string;
  rotate?: string;
  aspect?: string;
}) {
  return (
    <figure>
      <div className={cx("paper curl relative p-3", rotate)}>
        <span aria-hidden className={cx("tape left-10 -top-3 -rotate-6 rounded-[2px]", tape)} />
        <div className={cx("relative w-full overflow-hidden rounded-[var(--radius-sm)] bg-muted", aspect)}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 900px, 94vw"
          />
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

/** The evidence slots that live behind the client's logins, queued for
 *  annotated capture rather than reconstructed from memory. */
function PendingCapture({ title, items }: { title: string; items: string[] }) {
  return (
    <aside
      aria-label="Evidence queued for capture"
      className="rounded-[var(--radius-lg)] border-2 border-dashed border-border-strong/70 bg-surface/60 p-5"
    >
      <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4">
          <path
            d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
        </svg>
        {title}
      </p>
      <ul className="mt-3 space-y-1.5 text-sm text-foreground/75">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default function StephanieCenterCaseStudy() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-sm)] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <header className="border-b border-border bg-gradient-to-b from-lavender-tint/50 to-background">
          <Container size="md" className="py-16 sm:py-20">
            <Link
              href="/projects"
              className="text-sm font-semibold text-foreground/70 no-underline hover:text-primary"
            >
              ← All projects
            </Link>
            <p className="hand mt-6 text-2xl text-primary sm:text-3xl">Case study</p>
            <h1 className="mt-2 text-balance">
              Stephanie Center Wellness — a functional-medicine funnel, rebuilt in GoHighLevel
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/80">
              A women&rsquo;s hair-health practice with a working marketing
              ecosystem needed its website rebuilt and improved inside
              GoHighLevel — without losing the brand it had already built, and
              without tearing out the email and consultation tools that already
              worked. This is an account of the system I implemented, and a
              careful line between what was mine to build and what was the
              client&rsquo;s to begin with.
            </p>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-border/70 pt-6">
              {FACTS.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {f.label}
                  </dt>
                  <dd className="text-sm font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </header>

        {/* ── Attribution — the load-bearing note ──────────────────────────── */}
        <section aria-labelledby="attribution-heading" className="border-b border-border bg-surface">
          <Container size="md" className="py-10">
            <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-xs">
              <p id="attribution-heading" className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-accent-hover">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4">
                  <path d="M12 3v18M5 8l7-5 7 5M4 21h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                What was mine, and what was the client&rsquo;s
              </p>
              <div className="mt-3 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="font-serif text-base font-semibold text-primary">My work</p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                    Rebuilding and implementing the pages inside GoHighLevel —
                    the responsive build, the landing pages, connecting lead
                    capture, integrating the marketing forms, and wiring the
                    site into the existing stack. The engineering and
                    implementation, not the message.
                  </p>
                </div>
                <div>
                  <p className="font-serif text-base font-semibold text-sage">The client&rsquo;s</p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                    The brand, the voice, and every word of copy. The medical
                    program and its framework, the quiz&rsquo;s diagnostic
                    content, the testimonials, and Stephanie&rsquo;s own story
                    and credentials. I presented her work well; I didn&rsquo;t
                    write it.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Contents ─────────────────────────────────────────────────────── */}
        <nav aria-label="Case study contents" className="border-b border-border">
          <Container size="md" className="py-6">
            <ol className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {TOC.map(([id, label], i) => (
                <li key={id}>
                  <a href={`#${id}`} className="font-semibold text-foreground/70 no-underline hover:text-primary">
                    <span className="font-mono text-xs text-accent-hover">{String(i + 1).padStart(2, "0")}</span>{" "}
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </Container>
        </nav>

        {/* ── 01 The business problem ──────────────────────────────────────── */}
        <section className="py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="problem" index="01" title="The business problem">
              <p>
                Stephanie Center Wellness helps women get to the root cause of
                hair loss — a functional-medicine practice, not a quick-fix
                brand. The customer is a woman who has been told her labs are
                &ldquo;normal&rdquo; and is still losing hair, and who needs to
                be <em>educated</em> before she&rsquo;s ready to invest in a
                program.
              </p>
              <p>
                The practice already had the hard parts: a distinct brand, an
                email list on AWeber, and consultations running through Practice
                Better. What it needed wasn&rsquo;t a reinvention — it was a
                website rebuilt and improved inside GoHighLevel, so the whole
                funnel could live on one platform and feed one CRM, while the
                tools that already worked stayed exactly where they were.
              </p>
              <p>
                So this was a migration and implementation job, not a redesign.
                The brief was to preserve the visual identity, rebuild the pages
                properly (responsive, mobile-first), and connect the
                lead-generation the practice runs on — without disrupting the
                marketing ecosystem already in place.
              </p>
            </SectionHeader>

            <Plate
              src="/images/stephanie-center/steph-homepage.png"
              alt="The Stephanie Center Wellness homepage, rebuilt in GoHighLevel — an education-first page presenting the client's root-cause hair-growth program"
              caption="The homepage as rebuilt in GoHighLevel. Everything it says — the program, the framework, the promise — is the client's; the build, the responsive layout, and the page assembly are mine."
              aspect="aspect-[4/3]"
            />
          </Container>
        </section>

        {/* ── 02 The customer journey ──────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="journey" index="02" title="The customer journey">
              <p>
                The funnel is built to teach before it asks for anything. A
                visitor meets the practice through education, trades an email for
                something genuinely useful, gets nurtured over time, and only
                then is invited to a consultation and the program. Here is that
                path — with an honest mark on which parts I can show you and
                which run behind the scenes.
              </p>
            </SectionHeader>

            <figure aria-label="Customer journey" className="mx-auto max-w-2xl">
              <div className="space-y-0 text-center text-sm">
                {[
                  { name: "Visitor arrives", desc: "Education-first — the homepage teaches the root-cause idea before it sells anything", shown: true },
                  { name: "Guide · quiz · cheat sheet", desc: "A free lead magnet or the Hair Loss Type Quiz — a reason to raise a hand", shown: true },
                  { name: "Lead capture", desc: "An email form on the page — the low-friction first step", shown: true },
                  { name: "Email nurture — AWeber", desc: "The practice's existing email tool, kept in place, carries the follow-up", shown: false },
                  { name: "Consultation booked", desc: "A “Book a Call” / Root Cause Assessment invitation — the human step", shown: true },
                  { name: "Practice Better", desc: "The client's existing consultation, portal, and appointment tool", shown: false },
                  { name: "Hair Growth Accelerator program", desc: "Enrollment in the client's root-cause program", shown: true },
                ].map((node, i, arr) => (
                  <div key={node.name}>
                    <div
                      className={cx(
                        "rounded-[var(--radius-md)] bg-card px-4 py-3 shadow-xs",
                        node.shown ? "border border-border" : "border-2 border-dashed border-border-strong/70",
                      )}
                    >
                      <p className="font-serif text-base font-semibold text-primary">
                        {node.name}
                        {!node.shown && (
                          <span className="ml-2 align-middle font-mono text-[0.6rem] font-semibold uppercase tracking-wider text-muted-foreground">
                            behind the scenes
                          </span>
                        )}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{node.desc}</p>
                    </div>
                    {i < arr.length - 1 && <p aria-hidden className="py-1 text-muted-foreground">↓</p>}
                  </div>
                ))}
              </div>
              <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                Solid: pages I built and can show. Dashed: the email and consultation tools the practice already ran on — integrated, but their internals aren&rsquo;t mine to screenshot here (§05).
              </figcaption>
            </figure>
          </Container>
        </section>

        {/* ── 03 System architecture ───────────────────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="architecture" index="03" title="System architecture">
              <p>
                The shape of the decision was: put the <em>web layer</em> on one
                platform, and leave the <em>tools that already worked</em>
                alone. GoHighLevel became the site, the pages, the forms, and the
                place leads land. AWeber and Practice Better — both already part
                of the practice — stayed, and the build connected out to them
                rather than replacing them.
              </p>
            </SectionHeader>

            <figure aria-label="System architecture" className="mx-auto max-w-3xl">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[var(--radius-md)] border border-border bg-card p-5 shadow-xs sm:col-span-3">
                  <p className="font-serif text-lg font-semibold text-primary">GoHighLevel — the web layer & CRM</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Website, landing pages, the quiz and guide funnels, the lead-capture forms, and the contact record they land in. The one platform the rebuild consolidated onto. <span className="font-semibold">Why:</span> one place for the site and the leads it generates.
                  </p>
                </div>
                <p aria-hidden className="text-center text-muted-foreground sm:col-span-3">↓ leads flow out to the tools the practice already ran on ↓</p>
                <div className="rounded-[var(--radius-md)] border-2 border-dashed border-border-strong/70 bg-card p-5 shadow-xs">
                  <p className="font-serif text-base font-semibold text-primary">
                    AWeber
                    <span className="ml-2 align-middle font-mono text-[0.6rem] font-semibold uppercase tracking-wider text-muted-foreground">preserved</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Email marketing &amp; nurture. <span className="font-semibold">Why kept:</span> the list and the sequences already lived here — replacing it would have thrown away working infrastructure.
                  </p>
                </div>
                <div className="rounded-[var(--radius-md)] border-2 border-dashed border-border-strong/70 bg-card p-5 shadow-xs">
                  <p className="font-serif text-base font-semibold text-primary">
                    Practice Better
                    <span className="ml-2 align-middle font-mono text-[0.6rem] font-semibold uppercase tracking-wider text-muted-foreground">integrated</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Consultation, client portal, appointments. <span className="font-semibold">Why kept:</span> the clinical side of the practice already ran here — the site connects to it, not around it.
                  </p>
                </div>
                <div className="rounded-[var(--radius-md)] border-2 border-dashed border-border-strong/70 bg-card p-5 shadow-xs">
                  <p className="font-serif text-base font-semibold text-primary">
                    CRM back office
                    <span className="ml-2 align-middle font-mono text-[0.6rem] font-semibold uppercase tracking-wider text-muted-foreground">not shown</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Contacts, pipelines, workflows, calendars. Prepared and supported as part of the build — but the internals aren&rsquo;t evidenced on this page, so they aren&rsquo;t detailed (§06).
                  </p>
                </div>
              </div>
              <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                Solid: the platform I built on. Dashed: existing tools the build respected and connected to, plus back-office work whose internals aren&rsquo;t shown here.
              </figcaption>
            </figure>
          </Container>
        </section>

        {/* ── 04 Technical decisions ───────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="decisions" index="04" title="Technical decisions">
              <p>
                Each of these is something I did in the build, and the reason it
                was the right call for this practice:
              </p>
            </SectionHeader>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  t: "Rebuild inside GoHighLevel",
                  b: "Consolidate the website, landing pages, forms, and CRM onto the one platform the practice was moving to — so the funnel and the leads it captures live in the same place.",
                },
                {
                  t: "Preserve the visual identity",
                  b: "Keep the client's editorial brand — its serif typography (Playfair Display, Crimson Pro, Montserrat, Merriweather Italic) and warm, premium tone — intact through the rebuild. A migration, not a restyle.",
                },
                {
                  t: "Responsive & mobile-first implementation",
                  b: "Build the pages to hold up on the phones most of this audience actually reads on — the mobile experience treated as the primary one, not an afterthought.",
                },
                {
                  t: "Keep AWeber, don't replace it",
                  b: "Respect the working email stack. The nurture sequences and subscriber list stayed on AWeber; the build fed it rather than forcing a risky migration.",
                },
                {
                  t: "Integrate Practice Better",
                  b: "Point consultations at the tool the practice already used for its client portal and appointments, instead of rebuilding clinical scheduling from scratch.",
                },
                {
                  t: "Move toward native GoHighLevel forms",
                  b: "Shift lead capture toward native GHL forms so a new lead lands directly in the CRM — the first step in tightening the path from form to follow-up.",
                },
              ].map((d) => (
                <div key={d.t} className="rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-xs">
                  <p className="font-serif text-lg font-semibold text-primary">{d.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{d.b}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── 05 The business system ───────────────────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="system" index="05" title="The business system">
              <p>
                The point of the build isn&rsquo;t the pages — it&rsquo;s the
                path they make. Education earns trust, trust makes a small ask
                (an email) easy, and the CRM turns that email into someone the
                practice can actually follow up with. Two of the pages carry
                most of that weight.
              </p>
            </SectionHeader>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
              <Plate
                src="/images/stephanie-center/steph-quiz-page.png"
                alt="The Hair Loss Type Quiz funnel page, built in GoHighLevel — a nine-question quiz that returns a primary and secondary root-cause driver"
                caption="The quiz funnel: a nine-question “Hair Loss Type Quiz” across five root-cause drivers. The diagnostic idea is the client's; the funnel page and its capture are the build."
                tape="tape-peach"
                rotate="motion-safe:rotate-[0.6deg]"
                aspect="aspect-[3/4]"
              />
              <Plate
                src="/images/stephanie-center/steph-cheating-seet-landing-page.png"
                alt="The guides and resources landing page — a free lab cheat sheet with email capture, a paid guide, and a root-cause assessment booking CTA"
                caption="The guides landing page: a free “Hair Growth Lab Cheat Sheet” (email capture), a paid guide, and a Root Cause Assessment booking — three doors onto the same journey."
                tape="tape-sage"
                rotate="motion-safe:-rotate-[0.5deg]"
                aspect="aspect-[16/11]"
              />
            </div>

            <div className="max-w-2xl space-y-4 text-lg text-foreground/80">
              <p>
                Both pages do the same job in different registers: give
                something genuinely useful, ask only for an email, and drop the
                new lead into the CRM where the follow-up can begin. The quiz
                trades a result for a contact; the cheat sheet trades a
                reference for one. From there the path is nurture (AWeber) →
                consultation (Practice Better) → program.
              </p>
              <p>
                What I can show ends at the page. The parts that make it a
                <em> system</em> rather than a set of pages — how contacts are
                organised, the pipeline a lead moves along, the workflows that
                fire — are real work but live in the client&rsquo;s GoHighLevel
                account. Rather than describe them from memory, here&rsquo;s
                exactly what would evidence them:
              </p>
            </div>

            <PendingCapture
              title="Back-office evidence — queued for capture from the client account"
              items={[
                "GoHighLevel forms → the native lead-capture forms and where each submission lands",
                "GoHighLevel contacts & pipeline → how leads are organised and the stages they move through",
                "GoHighLevel workflows → the automations prepared/supported, trigger to action",
                "AWeber → how site lead capture connects to the existing list and nurture",
                "Practice Better → how a booked consultation flows into the client portal",
                "A public URL, if the client site is one I'm cleared to link",
              ]}
            />
          </Container>
        </section>

        {/* ── 06 Trade-offs ────────────────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="trade-offs" index="06" title="Trade-offs">
              <p>
                The honest decisions — what stayed manual, what was left in
                place on purpose, and what a next phase would tackle:
              </p>
            </SectionHeader>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  t: "The consultation stays human",
                  b: "The funnel automates the teaching and the capture, but the step into the program runs through a real consultation — a booked call and a Root Cause Assessment. In a clinical practice that human step isn't a bottleneck to remove; it's the point.",
                },
                {
                  t: "Two tools kept, not consolidated",
                  b: "Email stayed on AWeber and consultations on Practice Better instead of being rebuilt natively in GoHighLevel. The cost is more surfaces to keep in sync; the gain is not breaking infrastructure the practice already depends on.",
                },
                {
                  t: "Toward native forms, not all at once",
                  b: "Lead capture was moved toward native GoHighLevel forms so leads land straight in the CRM — a direction the build started, not a wholesale switch flipped in one go.",
                },
                {
                  t: "Back office not documented here",
                  b: "The pipeline, workflows, and integration wiring are real but unshown on this page. That's a deliberate limit of what I'll claim without evidence — captured as a checklist (§05) rather than described from memory.",
                },
              ].map((c) => (
                <div key={c.t} className="rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-xs">
                  <p className="font-serif text-lg font-semibold text-primary">{c.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{c.b}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── 07 What it reinforced ────────────────────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="lessons" index="07" title="What it reinforced">
              <p>
                This project didn&rsquo;t teach me a new philosophy — it tested
                the one I already hold against a different industry, and it held
                up.
              </p>
            </SectionHeader>

            <div className="max-w-2xl space-y-4 text-lg text-foreground/80">
              <p>
                <strong>Fitting the business beat showing off the tool.</strong>{" "}
                The most valuable decision here was restraint: <em>not</em>{" "}
                rebuilding AWeber and Practice Better inside GoHighLevel just
                because it was possible. The practice runs on those tools; a good
                system bends around how the business already works, not the other
                way around.
              </p>
              <p>
                <strong>The human step belongs to the human.</strong> Just like
                a boutique resort keeps the availability call with a person, a
                functional-medicine practice keeps the consultation with a
                practitioner. Automate the teaching and the capture; leave the
                judgement — clinical, here — to a person, on purpose.
              </p>
              <p>
                <strong>Same spine, different industry.</strong> A hospitality
                booking flow and a healthcare education funnel look nothing
                alike on the surface, and underneath they&rsquo;re the same
                system: teach, capture once, keep it somewhere findable, and
                route to the human at exactly the right moment. That the pattern
                carried from a resort to a wellness practice is the whole point.
              </p>
              <p className="text-base">
                The thinking behind all of this lives on the{" "}
                <Link href={BUSINESS_SYSTEMS} className="font-semibold text-primary">
                  business systems page
                </Link>{" "}
                — this project is one place it met the real world.
              </p>
            </div>
          </Container>
        </section>

        {/* ── Closing links ────────────────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md">
            <div className="flex flex-col items-start gap-6">
              <h2 className="max-w-xl">Systems that fit the business they&rsquo;re built for</h2>
              <p className="max-w-xl text-lg text-foreground/80">
                Product engineering, a resort booking pipeline, a wellness
                funnel — the same systems thinking, adapted to each. Have a look
                at how it&rsquo;s put together, or let&rsquo;s talk.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button href={BUSINESS_SYSTEMS} as={Link} variant="primary">
                  How I think about systems
                </Button>
                <Button href="/projects" as={Link} variant="outline">
                  All projects
                </Button>
                <Button href="/#contact" variant="ghost">
                  Get in touch
                </Button>
              </div>
              <div className="flex w-full flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-6">
                <Link href="/projects/bahay-liwanag" className="text-sm font-semibold">
                  ← Previous: Bahay Liwanag
                </Link>
                <Link href="/projects/katha" className="text-sm font-semibold">
                  Next project: KATHA →
                </Link>
              </div>
              {/* one quiet flourish, in the margin */}
              <Doodle kind="sprig" className="size-6 text-sage/50" />
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
