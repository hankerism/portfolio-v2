import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Doodle from "@/components/ui/Doodle";
import Reveal from "@/components/ui/Reveal";

/* ---------------------------------------------------------------------------
 * /business-systems — the capability page (IA v2 §4.4, Phase C).
 *
 * NOT another case study — this is how Abby thinks about systems. All copy is
 * the approved source of truth in docs/BUSINESS_SYSTEMS_PHILOSOPHY.md: the
 * opening story, the seven principles (verbatim, approved — do not reword
 * here without editing the doc first), and capability roles grounded in the
 * Bahay Liwanag build. The one worked example deep-links into its case study;
 * nothing is claimed that a linked case study can't back up.
 * ------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Business Systems",
  description:
    "How I think about business systems: take the busywork not the decisions, capture information once, keep it findable, and build something the owner can actually run — lessons from six years in operations.",
};

const EMAIL = "blujayabby@gmail.com";
const BAHAY = "/projects/bahay-liwanag";

/* The seven principles — verbatim from BUSINESS_SYSTEMS_PHILOSOPHY.md §2.
 * Approved copy; edit the doc first, then mirror here. */
const PRINCIPLES: { title: string; body: string }[] = [
  {
    title: "Start with the work you do over and over.",
    body: "The small stuff — copying details from an email into a spreadsheet, retyping the same reply — never feels big in the moment. But it's where the hours actually go. That's the first place I look.",
  },
  {
    title: "Take the busywork, not the decisions.",
    body: "I'm not trying to replace anyone. The system catches the enquiry, files it, and sends the “got it” — so the person is free for the part that needs a human. With Bahay Liwanag, everything runs automatically right up to the actual “yes, those dates are free.” That call stays with a person, on purpose.",
  },
  {
    title: "Ask once, then don't ask again.",
    body: "If someone's already told you their dates, nothing in the system should make them repeat it. One form, and the details land where they're needed — no re-asking, no re-typing.",
  },
  {
    title: "Keep it somewhere you can actually find it.",
    body: "Automations only help if what they leave behind is easy to look at later. One clear record per person, in a place built for scanning — not scattered across an inbox, a chat, and three sticky notes.",
  },
  {
    title: "Build it so the owner can run it without me.",
    body: "Whoever's left with the system has to be able to open it, understand it, and change a line of copy without calling me. Something clever that only I understand isn't a gift — it's a problem I handed them.",
  },
  {
    title: "Be honest about what it does.",
    body: "Bahay's booking page tells guests exactly what happens: send the form, we'll confirm by email, no payment yet. No fake “instantly booked!” when a person still needs to check. People trust a system that's straight with them about its own steps.",
  },
  {
    title: "Fit the business, not the tool.",
    body: "I don't start from “what can GoHighLevel do.” I start with how the business actually works — who does what, where things get stuck — and pick the tools to fit that. The tool bends around the way they already work, not the other way around.",
  },
];

/* Capabilities as jobs, not logos (doc §4). Grounded in the Bahay build. */
const TOOLS: { name: string; role: string; body: string }[] = [
  {
    name: "GoHighLevel",
    role: "The front desk and the customer list",
    body: "The website, the forms, and every contact live in one place — the first thing a visitor touches, and the record that remembers them afterwards.",
  },
  {
    name: "Pipelines & workflows",
    role: "The steps a job moves through",
    body: "Turning a new enquiry into a booking is a handful of steps. A pipeline makes those steps visible; a workflow quietly does the ones that don't need a person.",
  },
  {
    name: "Make",
    role: "The runner between tools",
    body: "When two tools need to talk, Make carries the information across — so the same details never get typed a second time.",
  },
  {
    name: "Airtable",
    role: "The tidy list you work from",
    body: "A clean, filterable list of everything that came in — built for scanning, sorting, and marking things done.",
  },
];

/* ── Local building block ─────────────────────────────────────────────────── */

function SectionHeader({
  id,
  index,
  eyebrow,
  title,
  children,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm font-semibold tracking-widest text-accent-hover">
          {index}
        </span>
        <span className="hand text-2xl text-primary sm:text-3xl">{eyebrow}</span>
      </div>
      <h2 id={id} className="mt-2 scroll-mt-24">
        {title}
      </h2>
      {children && <div className="mt-4 space-y-4 text-lg text-foreground/80">{children}</div>}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default function BusinessSystemsPage() {
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
        {/* ── Hero — the opening story (doc §1) ────────────────────────────── */}
        <header className="border-b border-border bg-gradient-to-b from-lavender-tint/50 to-background">
          <Container size="md" className="py-16 sm:py-20">
            <p className="hand text-2xl text-primary sm:text-3xl">Business systems</p>
            <h1 className="mt-2 text-balance">
              The systems a business quietly runs on
            </h1>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-foreground/80">
              <p>
                Before I became a web developer, I spent more than six years
                working in operations and as a virtual assistant. I noticed I
                was spending a lot of time moving the same information between
                emails, spreadsheets, CRMs, and different tools. None of it was
                difficult — it was just repetitive. That&rsquo;s what made me
                interested in automation.
              </p>
              <p>
                Today, I build systems that take care of that repetitive work,
                so people can spend more time making decisions, helping
                customers, and running their business.
              </p>
            </div>
          </Container>
        </header>

        {/* ── 01 The philosophy — the seven principles ─────────────────────── */}
        <section className="py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader
              id="how-i-think"
              index="01"
              eyebrow="what the work taught me"
              title="How I think about it"
            >
              <p>
                None of this came from a course. It came from being the person
                doing the repetitive work — and slowly learning what&rsquo;s
                worth handing to a machine, and what isn&rsquo;t.
              </p>
            </SectionHeader>

            <ol className="space-y-0">
              {PRINCIPLES.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.title}
                  delay={i * 70}
                  y={14}
                  className="grid list-none gap-x-6 gap-y-1 border-b border-border/60 py-7 last:border-0 last:pb-0 first:pt-0 sm:grid-cols-[auto_1fr]"
                >
                  <span
                    aria-hidden
                    className="hand text-3xl text-primary/70 sm:text-4xl"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="max-w-2xl">
                    <h3 className="text-xl sm:text-2xl">{p.title}</h3>
                    <p className="mt-2 text-foreground/80">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </Container>
        </section>

        {/* ── 02 The tools, and the job each one does ──────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader
              id="tools"
              index="02"
              eyebrow="not a logo wall"
              title="The tools, and the job each one does"
            >
              <p>
                People ask which tools I use, but the tools matter less than the
                job each one is doing. Here&rsquo;s how I think about the ones I
                reach for most — as roles in how a business runs.
              </p>
            </SectionHeader>

            <div className="grid gap-5 sm:grid-cols-2">
              {TOOLS.map((t, i) => (
                <Reveal
                  key={t.name}
                  delay={i * 80}
                  y={16}
                  className="rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-xs"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {t.name}
                  </p>
                  <h3 className="mt-1 font-serif text-xl text-primary">{t.role}</h3>
                  <p className="mt-2 text-foreground/80">{t.body}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ── 03 Systems I've built ────────────────────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader
              id="systems"
              index="03"
              eyebrow="from statements to something real"
              title="Systems I've built"
            >
              <p>
                The clearest way to show what all of that looks like in practice
                is the booking system I built for Bahay Liwanag, a boutique
                resort — so here it is, in three plain steps.
              </p>
            </SectionHeader>

            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
              <ol className="space-y-6">
                {[
                  {
                    label: "What was slow",
                    body: "Bookings arrived as conversations — a form here, a message there. Every one meant copying the details somewhere, checking the dates, replying, and remembering to follow up.",
                  },
                  {
                    label: "What I built",
                    body: "One booking form that captures everything at once and files it on the guest's record. An automatic “we've got your request” to the guest. The details logged neatly to a reservations list, and a nudge to the team. The one thing left to a person, on purpose: checking the dates and saying yes.",
                  },
                  {
                    label: "What it took off their plate",
                    body: "The copying, the re-typing, the “did we ever reply?” — gone. What's left is the part that actually needs a human: the decision.",
                  },
                ].map((step, i) => (
                  <Reveal
                    as="li"
                    key={step.label}
                    delay={i * 90}
                    y={14}
                    className="list-none"
                  >
                    <p className="hand text-xl text-accent-hover">{step.label}</p>
                    <p className="mt-1 text-lg text-foreground/80">{step.body}</p>
                  </Reveal>
                ))}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1">
                  <Link
                    href={BAHAY}
                    className="group/cs inline-flex items-center gap-1.5 text-sm font-bold text-primary no-underline"
                  >
                    <span className="underline-offset-4 group-hover/cs:underline">
                      Read the full case study
                    </span>
                    <span aria-hidden className="transition-transform group-hover/cs:translate-x-0.5">
                      →
                    </span>
                  </Link>
                  <Link
                    href={`${BAHAY}#automation`}
                    className="text-sm font-bold text-foreground/70 underline-offset-4 hover:text-primary hover:underline"
                  >
                    Jump to the automation chapter
                  </Link>
                </div>
              </ol>

              {/* The proof, pinned like a postcard */}
              <Reveal delay={120} rot={1.2} y={20}>
                <figure className="relative">
                  <div className="paper curl relative p-3 motion-safe:-rotate-[0.6deg]">
                    <span aria-hidden className="tape tape-cream left-10 -top-3 -rotate-6 rounded-[2px]" />
                    <Link
                      href={BAHAY}
                      aria-label="Read the Bahay Liwanag case study"
                      className="group relative block aspect-[16/11] overflow-hidden rounded-[var(--radius-sm)] bg-muted"
                    >
                      <Image
                        src="/images/bahay-liwanag/bahay-liwanag-booking-page.png"
                        alt="Bahay Liwanag — the booking page, where the enquiry form captures everything at once"
                        fill
                        className="object-cover object-top transition-transform duration-[600ms] ease-[var(--ease-paper)] motion-safe:group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 420px, 92vw"
                      />
                    </Link>
                  </div>
                  <Doodle
                    kind="arrow"
                    draw
                    className="absolute -left-6 top-8 hidden w-10 -rotate-[18deg] text-primary/35 lg:block"
                  />
                  <figcaption className="hand mt-3 text-center text-xl text-muted-foreground">
                    one form, captured once
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            {/* Second example — same thinking, a different industry */}
            <Reveal y={16} className="rounded-[var(--radius-lg)] border border-border bg-card p-6 sm:p-8">
              <p className="hand text-xl text-sage">and in a different industry</p>
              <h3 className="mt-1 text-2xl">Stephanie Center Wellness</h3>
              <p className="mt-2 max-w-2xl text-lg text-foreground/80">
                A functional-medicine practice for women&rsquo;s hair health. I
                rebuilt its education-first funnel inside GoHighLevel — and the
                sharpest decision was what <em>not</em> to touch: the email tool
                and the consultation software the practice already ran on stayed
                exactly where they were. Same spine as the resort — teach,
                capture once, and route to the human at the right moment — fitted
                to a very different business.
              </p>
              <Link
                href="/projects/stephanie-center"
                className="group/cs mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-sage no-underline"
              >
                <span className="underline-offset-4 group-hover/cs:underline">
                  Read the full case study
                </span>
                <span aria-hidden className="transition-transform group-hover/cs:translate-x-0.5">
                  →
                </span>
              </Link>
            </Reveal>
          </Container>
        </section>

        {/* ── 04 Close — products + systems ────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md">
            <div className="flex flex-col items-start gap-5">
              <p aria-hidden className="hand text-2xl text-primary">two halves of one job</p>
              <h2 className="max-w-xl">Products need systems, and systems need products</h2>
              <p className="max-w-2xl text-lg text-foreground/80">
                A good product still needs the quiet machinery behind it — and a
                good system deserves a product worth running. I build both. If
                any of this sounds like your problem, I&rsquo;d love to hear
                about it.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button href="/projects" as={Link} variant="primary">
                  See the projects
                </Button>
                <Button href={`mailto:${EMAIL}`} variant="outline">
                  Start a conversation
                </Button>
                <Button href="/contact" as={Link} variant="ghost">
                  All contact options
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
