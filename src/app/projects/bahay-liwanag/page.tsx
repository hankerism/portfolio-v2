import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import BrowserFrame from "@/components/ui/BrowserFrame";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import ShotFigure from "@/components/case-study/ShotFigure";
import ProcessFlow from "@/components/case-study/ProcessFlow";
import Reveal from "@/components/ui/Reveal";
import { BAHAY_LIWANAG_LIVE } from "@/lib/projectLinks";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * /projects/bahay-liwanag — hospitality booking experience + GoHighLevel CRM
 * and automation case study.
 *
 * Every fact on this page was re-verified directly inside the live GHL
 * sub-account on 2026-09-11 — not copied from an earlier draft. Where the
 * verified system differs from what an earlier version of this page (or the
 * original brief) assumed, this page follows what GHL actually shows:
 *
 * - The pipeline has 6 configured stages, including "Cancelled" as a real
 *   stage (Settings → Pipelines → Bahay Liwanag Reservations), not just an
 *   opportunity status.
 * - The lifecycle automation is ONE workflow — "Bahay Liwanag - Life Cycle" —
 *   with a default path plus three independent stage-triggered branches.
 *   Several older draft workflows (BL - New Reservation, BL - Reservation
 *   Lifecycle, Bahay Liwanag Reservation Lifecycle) exist in the account but
 *   are unpublished precursors, not part of the live system.
 * - The lead-welcome workflow ("BL - 10% Off Lead Welcome") is built and has
 *   been test-run once, but is currently in Draft — not yet published. The
 *   page says so plainly rather than implying it's live.
 * - Reservation lifecycle emails merge in CONTACT-level custom fields
 *   ({{contact.villa_name}}, {{contact.checkin_date}}, etc.), not opportunity
 *   fields.
 * - The Bahay Liwanag site itself (the booking experience) is static
 *   HTML/CSS/JavaScript on GitHub Pages — it is not a Next.js app. Next.js
 *   is what renders this portfolio page, not the case-study subject.
 * ------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Bahay Liwanag — Hospitality Booking, CRM & Automation System",
  description:
    "A boutique-resort booking experience connected end to end to a real GoHighLevel CRM: a 6-stage reservation pipeline, a published lifecycle-automation workflow, lead capture, and four branded emails — tested and verified live.",
};

const LIVE = BAHAY_LIWANAG_LIVE;

/* ── Verified system data (re-checked directly in GHL, 2026-09-11) ───────── */

const PIPELINE_STAGES = [
  { label: "New Reservation" },
  { label: "Booking Confirmed" },
  { label: "Awaiting Payment" },
  { label: "Ready for Check-In" },
  { label: "Stay Completed" },
  { label: "Cancelled", tone: "muted" as const },
];

const VILLAS = [
  { name: "Villa Sampaguita", tag: "The Romantic Escape", rate: "₱8,500", sleeps: "Sleeps up to 3", included: "2 guests included" },
  { name: "Villa Narra", tag: "The Family Retreat", rate: "₱11,000", sleeps: "Sleeps up to 5", included: "4 guests included" },
  { name: "Villa Amihan", tag: "The Signature Stay", rate: "₱14,500", sleeps: "Sleeps up to 3", included: "2 guests included" },
];

const MERGE_TAGS = [
  "{{contact.first_name}}",
  "{{contact.villa_name}}",
  "{{contact.checkin_date}}",
  "{{contact.check_out_date}}",
  "{{contact.number_of_guests}}",
  "{{contact.number_of_nights}}",
  "{{contact.booking_total}}",
];

const TEST_STEPS = [
  "Villa selection, pricing, and promo-code math across all three villas",
  "Date selection and guest-count controls, including extra-guest pricing",
  "Guest Details form and data persisting through to Confirmation",
  "GHL form submission → Contact + Opportunity created with fields populated",
  "Pipeline stage changed manually, as staff would, for each of the three stages",
  "Booking Confirmation, Pre-Arrival, and Thank You emails — merge tags resolved",
  "Lead popup trigger, suppression, and the 10% Off Welcome email",
  "Responsive layout on mobile for the booking flow and the lead popup",
];

/* ── Local building blocks ────────────────────────────────────────────────── */

/** A BrowserFrame placeholder for a screenshot not yet captured. */
function ShotPlaceholder({
  url,
  label,
  note,
  aspect = "aspect-[16/10]",
}: {
  url: string;
  label: string;
  note?: string;
  aspect?: string;
}) {
  return (
    <div className="min-w-0">
      <BrowserFrame url={url} className="shadow-soft">
        <div className={cx("relative w-full overflow-hidden bg-surface", aspect)}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(163,122,180,0.14),_transparent_45%),linear-gradient(135deg,_rgba(93,66,74,0.08),_transparent_68%)]" />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="relative z-10 max-w-md rounded-[var(--radius-md)] border border-border bg-background/75 px-4 py-3 text-center shadow-xs backdrop-blur-sm">
              <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Placeholder
              </p>
              <p className="mt-1.5 text-sm font-semibold text-foreground">{label}</p>
              {note && <p className="mt-1 text-xs text-foreground/70">{note}</p>}
            </div>
          </div>
        </div>
      </BrowserFrame>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default function BahayLiwanagCaseStudy() {
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
        {/* ── 01 Overview ──────────────────────────────────────────────────── */}
        <CaseStudyHero
          eyebrow="Case study"
          title="Bahay Liwanag"
          intro="A boutique-resort booking experience connected to a real GoHighLevel CRM — a reservation pipeline, a published lifecycle-automation workflow, lead capture, and four branded guest emails. Built, connected, and tested end to end."
          meta={[
            { label: "Role", value: "Web Development + GHL Automation" },
            { label: "Platform", value: "GoHighLevel + GitHub Pages" },
            { label: "Type", value: "Portfolio / Concept Project" },
          ]}
          primaryCta={{ label: "Visit the live site", href: LIVE, target: "_blank", rel: "noreferrer", variant: "primary" }}
          secondaryCta={{ label: "Try the booking flow", href: "https://lets.controlyouraudience.com/preview/HIHrGr20tLK7zGmx2Vop", target: "_blank", rel: "noreferrer", variant: "outline" }}
        />

        {/* ── 02 The Challenge ────────────────────────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <CaseStudySection id="challenge" index="01" title="The Challenge">
            <p>
              A booking page that looks good but goes nowhere isn&rsquo;t a
              booking system — it&rsquo;s a brochure. The goal was to design a
              polished, villa-by-villa booking experience and connect every
              submission to a structured reservation pipeline and CRM, so a
              guest inquiry becomes a trackable record, not an email that gets
              lost. And at each real moment in the stay — confirmed, about to
              arrive, checked out — the guest needed the right message, sent
              without someone having to remember to write it.
            </p>
          </CaseStudySection>
        </section>

        {/* ── 03 What I Built ─────────────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <CaseStudySection id="what-i-built" index="02" title="What I Built">
            <p>
              Three layers, working together: a custom booking interface with
              villa selection, dynamic pricing, and promo-code handling; a
              native GoHighLevel CRM record for every reservation; and an
              automation layer that reacts to the guest&rsquo;s progress
              through the stay.
            </p>
          </CaseStudySection>
          <Container size="lg" className="mt-10">
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  h: "Web experience",
                  items: ["Villa selection", "Dynamic pricing", "Date + guest selection", "Promo code handling", "Responsive booking flow"],
                },
                {
                  h: "CRM",
                  items: ["GHL reservation form", "Contact custom fields", "Opportunity pipeline (6 stages)", "One Contact + Opportunity per booking"],
                },
                {
                  h: "Automation",
                  items: ["Lead capture + tagging", "10% off welcome email", "Booking confirmation email", "Pre-arrival email", "Post-stay thank-you email"],
                },
              ].map((col) => (
                <div key={col.h} className="rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-xs">
                  <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-hover">{col.h}</p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                    {col.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="text-primary">·</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── 04 Booking Flow ──────────────────────────────────────────────── */}
        <section className="border-t border-border py-20 sm:py-24">
          <CaseStudySection id="booking-flow" index="03" title="Booking Flow">
            <p>
              Four steps, one purpose each. The guest picks a villa, dates,
              and guest count; submits their details through the native GHL
              form; passes through a demo payment step; and lands on a
              confirmation page. Reservation data — villa, dates, guests,
              promo code, running total — persists in the browser across all
              four steps, so nothing has to be re-entered.
            </p>
          </CaseStudySection>

          <Container size="lg" className="mt-12">
            <Reveal y={20}>
              <div className="min-w-0">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-accent-hover">
                  Step 1 · Booking Details
                </p>
                <ShotFigure
                  src="/images/bahay-liwanag/bahay-liwanag-booking-details.png"
                  alt="Booking Details page showing the three villa cards with pricing, a date and guest picker, and a promo-code field"
                  url="hankerism.github.io/bahay-liwanag/book-now"
                  caption="Villa cards, pricing, dates, guest count, and the BAHAY10 promo field — live."
                  priority
                />
              </div>
            </Reveal>
          </Container>

          <Container size="lg" className="mt-10">
            <div className="grid gap-6 sm:grid-cols-3">
              <Reveal y={12} delay={0}>
                <div className="min-w-0">
                  <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-accent-hover">
                    Step 2 · Guest Details
                  </p>
                  <ShotPlaceholder url="bahay-liwanag/book-now" label="Guest Details Form" note="Native GHL form — screenshot pending" />
                </div>
              </Reveal>
              <Reveal y={12} delay={90}>
                <div className="min-w-0">
                  <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-accent-hover">
                    Step 3 · Demo Payment
                  </p>
                  <ShotPlaceholder url="bahay-liwanag/book-now" label="Demo Payment Step" note="Portfolio demo — no real payment processor" />
                </div>
              </Reveal>
              <Reveal y={12} delay={180}>
                <div className="min-w-0">
                  <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-accent-hover">
                    Step 4 · Confirmation
                  </p>
                  <ShotPlaceholder url="bahay-liwanag/book-now" label="Reservation Confirmed" note="Screenshot pending" />
                </div>
              </Reveal>
            </div>
          </Container>

          {/* Villa pricing table */}
          <Container size="md" className="mt-10">
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card shadow-xs">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface/70 text-left">
                    <th scope="col" className="px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">Villa</th>
                    <th scope="col" className="px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">Rate</th>
                    <th scope="col" className="hidden px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:table-cell">Capacity</th>
                  </tr>
                </thead>
                <tbody>
                  {VILLAS.map((v) => (
                    <tr key={v.name} className="border-b border-border last:border-0">
                      <td className="px-4 py-3">
                        <p className="text-sm font-semibold text-foreground">{v.name}</p>
                        <p className="text-xs text-muted-foreground">{v.tag}</p>
                      </td>
                      <td className="px-4 py-3 text-sm text-foreground/85">{v.rate}<span className="text-xs text-muted-foreground">/night</span></td>
                      <td className="hidden px-4 py-3 text-xs text-muted-foreground sm:table-cell">{v.sleeps} · {v.included}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Pricing handles nights, base villa rate, included guests, extra-guest
              charges, subtotal, the BAHAY10 promo discount, and the final total.
            </p>
          </Container>
        </section>

        {/* ── 05 CRM + Automation ──────────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-20 sm:py-24">
          <CaseStudySection id="crm-automation" index="04" title="CRM &amp; Automation">
            <p>
              Submitting the booking form creates the guest as a Contact and
              the reservation as an Opportunity in the Bahay Liwanag
              Reservations pipeline. As staff move that Opportunity through
              its stages, the connected workflow reacts — sending the right
              email at the right moment, with real reservation details merged
              in.
            </p>
          </CaseStudySection>

          <Container size="lg" className="mt-12">
            <Reveal y={20}>
              <div className="min-w-0">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-accent-hover">
                  Bahay Liwanag Reservations — Pipeline
                </p>
                <ShotFigure
                  src="/images/bahay-liwanag/bahay-liwanag-ghl-pipeline-board.png"
                  alt="GoHighLevel Opportunities board for the Bahay Liwanag Reservations pipeline, showing six stages"
                  url="app.gohighlevel.com/opportunities"
                  caption="The real GHL Opportunities board — 6 configured stages, captured directly from the account."
                  aspect="aspect-[16/6]"
                />
              </div>
            </Reveal>
          </Container>

          <Container size="lg" className="mt-10">
            <div className="overflow-x-auto pb-2">
              <div className="flex min-w-max gap-2">
                {PIPELINE_STAGES.map((stage, i) => (
                  <div
                    key={stage.label}
                    className={cx(
                      "flex-shrink-0 rounded-[var(--radius-md)] border px-4 py-3 text-center",
                      stage.tone === "muted"
                        ? "border-dashed border-border-strong/70 bg-background/60"
                        : "border-border bg-card shadow-xs",
                    )}
                  >
                    <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">Stage {i + 1}</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">{stage.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Cancelled is a real, configured pipeline stage — not just an
              opportunity status — confirmed directly in the pipeline&rsquo;s
              stage settings.
            </p>
          </Container>

          <Container size="lg" className="mt-12">
            <Reveal y={20}>
              <div className="min-w-0">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-accent-hover">
                  Bahay Liwanag - Life Cycle Workflow
                </p>
                <ShotFigure
                  src="/images/bahay-liwanag/bahay-liwanag-ghl-lifecycle-workflow.png"
                  alt="GoHighLevel workflow canvas for Bahay Liwanag - Life Cycle, showing the form-submitted default path and three stage-changed email branches"
                  url="app.gohighlevel.com/workflows"
                  caption="The published Life Cycle workflow — one default path, three independent stage-triggered branches."
                />
              </div>
            </Reveal>
          </Container>

          <Container size="md" className="mt-8">
            <div className="space-y-3 text-sm text-foreground/80">
              <p>
                <span className="font-semibold text-foreground">Default path:</span>{" "}
                Form Submitted → Create Reservation Opportunity.
              </p>
              <p>
                <span className="font-semibold text-foreground">Three independent branches</span>{" "}
                fire only when staff change the Opportunity&rsquo;s stage:
                Booking Confirmed → confirmation email · Ready for Check-In →
                pre-arrival email · Stay Completed → thank-you email.
              </p>
            </div>
          </Container>
        </section>

        {/* ── 06 Automation Philosophy ─────────────────────────────────────── */}
        <section className="border-t border-border py-20 sm:py-24">
          <CaseStudySection id="automation-philosophy" index="05" title="Automation Philosophy">
            <p>
              The system does not decide when a reservation should become
              confirmed, ready for check-in, or completed — those stay
              human-controlled operational decisions. What&rsquo;s automated
              is the repetitive communication that follows each decision.
              That split is deliberate: it automates the part that&rsquo;s
              tedious and error-prone to do by hand, and leaves the part that
              still needs judgment to a person.
            </p>
          </CaseStudySection>

          <Container size="md" className="mt-10">
            <div className="space-y-4">
              {[
                { human: "Booking is confirmed.", automation: "Send booking confirmation email." },
                { human: "Guest is ready for check-in.", automation: "Send pre-arrival information." },
                { human: "Stay is completed.", automation: "Send thank-you email." },
              ].map((row) => (
                <div
                  key={row.human}
                  className="grid grid-cols-1 gap-3 rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-xs sm:grid-cols-[1fr_auto_1fr] sm:items-center"
                >
                  <div>
                    <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">Human</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">{row.human}</p>
                  </div>
                  <div className="hidden text-muted-foreground sm:block" aria-hidden>→</div>
                  <div>
                    <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">Automation</p>
                    <p className="mt-1 text-sm font-semibold text-primary">{row.automation}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              This is thoughtful automation, not automated decision-making —
              the system never guesses whether a guest actually checked in or
              a payment actually cleared. It only reacts once a person says so.
            </p>
          </Container>
        </section>

        {/* ── 07 Lead Generation ───────────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-20 sm:py-24">
          <CaseStudySection id="lead-generation" index="06" title="Lead Generation">
            <p>
              A tasteful on-site popup — cream background, forest green and
              terracotta accents, matching the site&rsquo;s own design system
              — offers 10% off a first stay. It appears after a short delay or
              scroll depth (never on load), submits to a native GHL form, and
              won&rsquo;t reappear once a visitor has seen it.
            </p>
          </CaseStudySection>

          <Container size="lg" className="mt-12">
            <Reveal y={20}>
              <div className="min-w-0">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-accent-hover">
                  10% Off Lead Popup
                </p>
                <ShotFigure
                  src="/images/bahay-liwanag/bahay-liwanag-lead-popup.png"
                  alt="Bahay Liwanag lead-generation popup offering 10% off a first stay, with First Name and Email fields"
                  url="hankerism.github.io/bahay-liwanag"
                  caption="The live popup — shown after a scroll/time trigger, suppressed after one view."
                  aspect="aspect-[16/11]"
                />
              </div>
            </Reveal>
          </Container>

          <Container size="md" className="mt-10">
            <Reveal y={16}>
              <ProcessFlow
                nodes={[
                  { label: "Visitor sees the offer", description: "Popup appears after ~5s or ~40% scroll — never on load" },
                  { label: "Submits email", description: "Native GHL form embedded in the popup" },
                  { label: "GHL contact created", description: "A Contact record is created from the submission" },
                  { label: "Lead tag applied", description: "\"BL - 10% Off Lead\" tag added to the Contact" },
                  { label: "Welcome email sent", description: "Delivers the BAHAY10 promo code" },
                ]}
              />
            </Reveal>
          </Container>

          <Container size="md" className="mt-8">
            <div className="rounded-[var(--radius-lg)] border-2 border-dashed border-border-strong/70 bg-background/60 p-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">Current status — verified in GHL</p>
              <p className="mt-2 text-sm text-foreground/80">
                The <strong>BL - 10% Off Lead Welcome</strong> workflow (Form
                Submitted → Add Tag → Send 10% Off Welcome Email → END) is
                built and has been test-run once. As of this writing it is
                still in <strong>Draft</strong> in GHL, not yet published — so
                real visitor submissions aren&rsquo;t triggering the welcome
                email in production yet. Flagging that honestly rather than
                describing it as fully live.
              </p>
            </div>
          </Container>
        </section>

        {/* ── 08 Email Automation ──────────────────────────────────────────── */}
        <section className="border-t border-border py-20 sm:py-24">
          <CaseStudySection id="email-automation" index="07" title="Email Automation">
            <p>
              Four branded HTML emails share one visual system — warm cream,
              deep forest green, terracotta accents, and editorial serif
              headings. The three reservation-lifecycle emails merge in real
              Contact fields, so every email reads as specific to that
              booking, not a generic template.
            </p>
          </CaseStudySection>

          <Container size="lg" className="mt-12">
            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal y={12} delay={0}>
                <div className="min-w-0">
                  <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-accent-hover">Booking Confirmation</p>
                  <ShotFigure
                    src="/images/bahay-liwanag/bahay-liwanag-email-booking-confirmation.png"
                    alt="Booking Confirmation email showing reservation details merged from contact fields"
                    url="GHL Email Builder"
                    caption="Sent when an Opportunity moves to Booking Confirmed."
                    aspect="aspect-[4/5]"
                  />
                </div>
              </Reveal>
              <Reveal y={12} delay={90}>
                <div className="min-w-0">
                  <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-accent-hover">Pre-Arrival</p>
                  <ShotFigure
                    src="/images/bahay-liwanag/bahay-liwanag-email-pre-arrival.png"
                    alt="Pre-Arrival email reminding the guest of their upcoming stay details"
                    url="GHL Email Builder"
                    caption="Sent when an Opportunity moves to Ready for Check-In."
                    aspect="aspect-[4/5]"
                  />
                </div>
              </Reveal>
              <Reveal y={12} delay={0}>
                <div className="min-w-0">
                  <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-accent-hover">Thank You</p>
                  <ShotFigure
                    src="/images/bahay-liwanag/bahay-liwanag-email-thank-you.png"
                    alt="Thank You email sent after a guest's stay is marked completed"
                    url="GHL Email Builder"
                    caption="Sent when an Opportunity moves to Stay Completed."
                    aspect="aspect-[4/5]"
                  />
                </div>
              </Reveal>
              <Reveal y={12} delay={90}>
                <div className="min-w-0">
                  <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-accent-hover">10% Off Welcome</p>
                  <ShotFigure
                    src="/images/bahay-liwanag/bahay-liwanag-email-10pct-welcome.png"
                    alt="10% Off Welcome email delivering the BAHAY10 promo code to a new lead"
                    url="GHL Email Builder"
                    caption="Sent by the lead-welcome workflow — currently in Draft (see Lead Generation)."
                    aspect="aspect-[4/5]"
                  />
                </div>
              </Reveal>
            </div>
          </Container>

          <Container size="md" className="mt-10">
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Verified merge tags (contact-level)
            </p>
            <pre className="overflow-x-auto rounded-[var(--radius-md)] border border-border bg-card px-4 py-3 font-mono text-sm leading-relaxed text-foreground/85">
              {MERGE_TAGS.join("\n")}
            </pre>
          </Container>
        </section>

        {/* ── 09 Testing & QA ──────────────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <CaseStudySection id="testing-qa" index="08" title="Testing &amp; QA">
            <p>
              The system was tested manually, end to end — not with an
              automated test suite. Real form submissions were pushed through
              the pipeline stage by stage, as staff would, and each resulting
              email was checked for correct data and correct trigger timing.
            </p>
          </CaseStudySection>
          <Container size="md" className="mt-8 space-y-6">
            <ul className="grid gap-2 sm:grid-cols-2">
              {TEST_STEPS.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground/80">
                  <span className="flex-shrink-0 font-mono text-xs font-semibold text-accent-hover">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              No automated test suite exists for this project — every item
              above was checked by hand. The lead-welcome path was verified
              working as a workflow, but since it&rsquo;s still in Draft in
              GHL, it hasn&rsquo;t yet been exercised by a real site visitor.
            </p>
          </Container>
        </section>

        {/* ── 10 Tech Stack ─────────────────────────────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <CaseStudySection id="tech-stack" index="09" title="Tech Stack">
            <p>
              The booking site itself is hand-built static HTML, CSS, and
              JavaScript, deployed on GitHub Pages — not a framework
              application. Next.js only renders this portfolio page, not
              Bahay Liwanag itself.
            </p>
          </CaseStudySection>
          <Container size="md" className="mt-8">
            <div className="flex flex-wrap gap-2">
              {[
                "HTML / CSS / JavaScript",
                "LocalStorage (booking-state persistence)",
                "GoHighLevel — Funnels",
                "GoHighLevel — Forms",
                "GoHighLevel — CRM / Opportunities",
                "GoHighLevel — Workflows",
                "GoHighLevel — Custom Fields",
                "GoHighLevel — Email Builder",
                "GitHub",
                "GitHub Pages",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground/85 shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Container>
        </section>

        {/* ── 11 CTA ──────────────────────────────────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <Container size="md">
            <div className="flex flex-col items-start gap-5">
              <p aria-hidden className="hand text-2xl text-primary">seen enough?</p>
              <h2 className="max-w-xl">Explore more projects</h2>
              <p className="max-w-xl text-foreground/80">
                Skills demonstrated: booking-flow UX, GoHighLevel funnel and
                form configuration, CRM/pipeline design, lifecycle workflow
                logic, branded responsive HTML email, lead capture, and
                hands-on end-to-end QA.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button href={LIVE} target="_blank" rel="noreferrer" variant="primary">
                  Visit the live site
                </Button>
                <Button href="/projects" as={Link} variant="outline">
                  All projects
                </Button>
                <Button href="/#contact" variant="ghost">
                  Get in touch
                </Button>
              </div>
              <div className="flex w-full flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-6">
                <a
                  href="https://hazel-and-jhonel.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-foreground/70 no-underline hover:text-primary"
                >
                  ← Wedding RSVP Platform
                </a>
                <a
                  href="https://stephaniecenterwellness.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-foreground/70 no-underline hover:text-primary"
                >
                  Stephanie Center Wellness →
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
