import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import BrowserFrame from "@/components/ui/BrowserFrame";
import { cx } from "@/lib/cx";

/* ---------------------------------------------------------------------------
 * /work/bahay-liwanag — the Bahay Liwanag business-systems case study.
 *
 * Written as an operations design document for engineering reviewers, in the
 * same evidence discipline as /work/katha. Every claim on this page is
 * sourced from the live system itself: the published funnel pages
 * (heyitsabby.space/website/bahay-liwanag), the form definition served by
 * GoHighLevel's public widget endpoint, and copy published on the booking
 * page. Where a subsystem lives behind the GHL/Make/Airtable login and can't
 * be verified from outside, this page says so explicitly and marks the slot —
 * see docs/BAHAY_LIWANAG_EVIDENCE.md for the capture checklist. Nothing here
 * is invented.
 * ------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Bahay Liwanag — Business Systems Case Study",
  description:
    "How a boutique-resort booking operation was designed and implemented on GoHighLevel: the funnel, the form, the CRM field schema, the manual-confirmation operating model, and the Make + Airtable pipeline behind it.",
};

const LIVE = "https://heyitsabby.space/website/bahay-liwanag";
const BOOK = "https://heyitsabby.space/website/bahay-liwanag/book-now";
const FORM_ENDPOINT =
  "api.leadconnectorhq.com/widget/form/7x9H9qxsWG9HkRmGMdHv";

/* Verified system facts — read from the live funnel and its form payload. */
const FACTS = [
  { n: "6", label: "funnel pages" },
  { n: "8", label: "form fields" },
  { n: "5", label: "custom fields" },
  { n: "3", label: "villas" },
  { n: "2", label: "required fields" },
  { n: "0", label: "on-site payments" },
];

const TOC = [
  ["overview", "Overview"],
  ["problem", "The business problem"],
  ["architecture", "System architecture"],
  ["intake", "Funnel & booking form"],
  ["crm", "CRM structure & custom fields"],
  ["automation", "The automation layer"],
  ["decisions", "Automation decisions & trade-offs"],
  ["evidence", "Evidence & what's next"],
] as const;

/* The five custom fields, verbatim from the live form definition. */
const CUSTOM_FIELDS = [
  {
    label: "Check-In Date",
    key: "contact.checkin_date",
    type: "DATE",
    detail: "date picker · optional",
  },
  {
    label: "Check-out Date",
    key: "contact.checkout_date",
    type: "DATE",
    detail: "date picker · optional",
  },
  {
    label: "Number of Guests",
    key: "contact.number_of_guests",
    type: "NUMERICAL",
    detail: "numeric input · optional",
  },
  {
    label: "Preferred Villa",
    key: "contact.preferred_villa",
    type: "SINGLE_OPTIONS",
    detail:
      "dropdown — No Preference · Villa Sampaguita · Villa Narra · Villa Amihan",
  },
  {
    label: "Special Requests",
    key: "contact.special_requests",
    type: "LARGE_TEXT",
    detail: "free text — preferences, celebrations, dietary requirements",
  },
];

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

/** A verbatim excerpt from the live system — the system speaking for itself. */
function Evidence({ source, children }: { source: string; children: ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card shadow-xs">
      <figcaption className="flex items-center gap-2 border-b border-border bg-surface/70 px-4 py-2 font-mono text-xs font-semibold text-muted-foreground">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-3.5">
          <path
            d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z M14 3v5h5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
        {source}
      </figcaption>
      <blockquote className="not-italic border-0 p-4 font-mono text-[0.8rem] leading-relaxed text-foreground/85 sm:px-5">
        {children}
      </blockquote>
    </figure>
  );
}

/**
 * A deliberately empty evidence slot: a back-office artefact that exists
 * behind the GHL/Make/Airtable login and is queued for annotated capture.
 * Rendered honestly as "pending" rather than faked with a mockup.
 */
function PendingCapture({ items }: { items: string[] }) {
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
        Annotated screenshots — queued for capture from the workspace
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

function Shot({
  src,
  alt,
  url,
  caption,
  aspect = "aspect-[16/10]",
  priority = false,
}: {
  src: string;
  alt: string;
  url: string;
  caption: string;
  aspect?: string;
  priority?: boolean;
}) {
  return (
    <figure>
      <BrowserFrame url={url} className="shadow-soft">
        <div className={cx("relative w-full bg-muted", aspect)}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover object-top"
            sizes="(min-width: 1024px) 900px, 94vw"
          />
        </div>
      </BrowserFrame>
      <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>
    </figure>
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
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <header className="border-b border-border bg-gradient-to-b from-lavender-tint/50 to-background">
          <Container size="md" className="py-16 sm:py-20">
            <p className="hand text-2xl text-primary sm:text-3xl">Case study</p>
            <h1 className="mt-2 text-balance">
              Bahay Liwanag — engineering a booking operation on GoHighLevel
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/80">
              A boutique three-villa resort with a single job to be done: turn a
              scattered, conversational booking process into one structured
              intake path — website, CRM, and automations built as one system.
              This page explains how it is put together and why, using only
              what the live system itself can verify.
            </p>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-border/70 pt-6">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Role</dt>
                <dd className="text-sm font-semibold">Systems design &amp; implementation, end to end</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Stack</dt>
                <dd className="text-sm font-semibold">GoHighLevel · Make · Airtable</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Status</dt>
                <dd className="text-sm font-semibold">Live — booking flow operational</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={LIVE} target="_blank" rel="noreferrer" variant="primary">
                Visit the live site
              </Button>
              <Button href={BOOK} target="_blank" rel="noreferrer" variant="outline">
                Try the booking flow
              </Button>
            </div>
          </Container>
        </header>

        {/* ── Fact strip — live-system truths, no estimates ─────────────────── */}
        <section aria-label="Live system facts" className="border-b border-border bg-surface">
          <Container size="lg">
            <dl className="grid grid-cols-3 gap-6 py-8 sm:grid-cols-6">
              {FACTS.map((f) => (
                <div key={f.label} className="text-center">
                  <dt className="order-2 text-xs font-semibold text-muted-foreground">{f.label}</dt>
                  <dd className="font-serif text-3xl font-semibold text-primary">{f.n}</dd>
                </div>
              ))}
            </dl>
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

        {/* ── 01 Overview ──────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="overview" index="01" title="Overview">
              <p>
                Bahay Liwanag is a modern Filipino villa resort in the Tagaytay
                Highlands — three villas, each with its own positioning: Villa
                Sampaguita (the romantic escape, sleeps 2), Villa Narra (the
                family retreat, sleeps 4–5), and Villa Amihan (the signature
                stay). It is a portfolio project built the way a real client
                engagement would be — and the live site says so itself, in the
                footer and beside the booking form. That honesty is part of the
                design: the <em>system</em> is real and operational even though
                the resort is a demonstration.
              </p>
              <p>
                Where the <Link href="/work/katha">KATHA case study</Link>{" "}
                proves product engineering in code, this one proves the second
                pillar: designing an <strong>operational system</strong> — CRM,
                intake, and automations — that reduces manual work. Everything
                below is verifiable against the{" "}
                <a href={LIVE} target="_blank" rel="noreferrer">live funnel</a>{" "}
                and the form definition GoHighLevel serves publicly for the
                booking page.
              </p>
            </SectionHeader>

            <Shot
              src="/images/bahay-liwanag/bahay-liwanag-homepage.png"
              alt="The Bahay Liwanag homepage: hero over the Tagaytay hills, the three featured villas, experiences, and guest stories"
              url="heyitsabby.space/website/bahay-liwanag"
              caption="The production homepage on GoHighLevel — brand, villas, experiences, and a single reservation call-to-action repeated down the page."
              priority
            />
          </Container>
        </section>

        {/* ── 02 The business problem ──────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="problem" index="02" title="The business problem">
              <p>
                The brief I set for this build is the one every small
                hospitality business actually has. Bookings arrive as{" "}
                <em>conversations</em> — a form fill here, a DM there, a phone
                call — and every enquiry then needs the same manual dance:
                copy the details somewhere, check availability, reply, follow
                up, remember to send arrival information. Nothing is lost until
                the day something is.
              </p>
              <p>
                The system&rsquo;s job is therefore not &ldquo;a website.&rdquo;
                It is: <strong>one intake path</strong> that captures every
                enquiry as structured data, <strong>one record</strong> per
                guest that the whole operation reads from, and{" "}
                <strong>automation around the human decision</strong> — because
                with three villas, the availability call itself should stay
                human. The published booking flow makes that operating model a
                guest-facing promise:
              </p>
            </SectionHeader>

            <Evidence source="bahay-liwanag/book-now — “What happens next”, published page copy">
              &ldquo;<span className="text-primary">1 · Submit your request</span> — Send the form — no payment
              needed yet. <span className="text-primary">2 · Confirmation email</span> — You&rsquo;ll hear from
              us right away that we&rsquo;ve got it.{" "}
              <span className="text-primary">3 · We review your dates</span> — We check availability and hold
              your villa. <span className="text-primary">4 · Stay details &amp; payment</span> — We send arrival
              info and how to settle the balance.&rdquo;
            </Evidence>

            <div className="max-w-2xl space-y-4 text-lg text-foreground/80">
              <p>
                Steps 1, 2, and the record-keeping underneath them are the
                machine&rsquo;s job. Step 3 is deliberately a person&rsquo;s.
                That split — automate the capture, the acknowledgement, and the
                logging; keep the judgement call manual — is the central design
                decision of the whole system, and §07 returns to why.
              </p>
            </div>
          </Container>
        </section>

        {/* ── 03 System architecture ───────────────────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="architecture" index="03" title="System architecture">
              <p>
                One platform hosts the guest-facing surface and the CRM:
                GoHighLevel serves the funnel, renders the form, and stores the
                resulting contact. From there the data fans out — per the
                system&rsquo;s design, a Make scenario carries each enquiry
                into an Airtable log, a calendar invite, and a notification.
              </p>
              <p>
                Reading the diagram: <strong>solid boxes</strong> are
                verifiable from the live system today (this page cites the
                evidence). <strong>Dashed boxes</strong> live behind the
                workspace login; their annotated captures are queued in §08.
              </p>
            </SectionHeader>

            <figure aria-label="System architecture flow" className="mx-auto max-w-2xl">
              <div className="space-y-0 text-center text-sm">
                {[
                  {
                    name: "Guest — the funnel",
                    desc: "6 GoHighLevel pages (Home · Villas · Experiences · Gallery · Book Now · Thank You); every CTA routes to /book-now",
                    verified: true,
                  },
                  {
                    name: "Booking form",
                    desc: "“Bahay Liwanag Booking Form” — 8 fields, no payment step, redirect to the branded thank-you page",
                    verified: true,
                  },
                  {
                    name: "CRM contact record",
                    desc: "GHL contact + 5 custom fields in the contact.* namespace (schema in §05)",
                    verified: true,
                  },
                  {
                    name: "Workflow layer",
                    desc: "confirmation email & team notification — the form-level auto-responder is off, so messaging responsibility sits here",
                    verified: false,
                  },
                  {
                    name: "Make scenario",
                    desc: "carries the enquiry out of GoHighLevel into the operational tools",
                    verified: false,
                  },
                  {
                    name: "Airtable log · calendar invite · notification",
                    desc: "the reservations log and the “booked in / you're notified” tail of the published flow",
                    verified: false,
                  },
                  {
                    name: "Human decision — availability review",
                    desc: "“We check availability and hold your villa” — deliberately manual; then arrival info & payment settle off-platform",
                    verified: true,
                  },
                ].map((node, i, arr) => (
                  <div key={node.name}>
                    <div
                      className={cx(
                        "rounded-[var(--radius-md)] bg-card px-4 py-3 shadow-xs",
                        node.verified
                          ? "border border-border"
                          : "border-2 border-dashed border-border-strong/70",
                      )}
                    >
                      <p className="font-serif text-base font-semibold text-primary">
                        {node.name}
                        {!node.verified && (
                          <span className="ml-2 align-middle font-mono text-[0.6rem] font-semibold uppercase tracking-wider text-muted-foreground">
                            capture queued
                          </span>
                        )}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{node.desc}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <p aria-hidden className="py-1 text-muted-foreground">↓</p>
                    )}
                  </div>
                ))}
              </div>
              <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                Solid: verifiable from the live funnel and its public form definition. Dashed: back-office subsystems, documented in §06 and queued for annotated capture in §08.
              </figcaption>
            </figure>
          </Container>
        </section>

        {/* ── 04 Funnel & booking form ─────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="intake" index="04" title="Funnel & booking form">
              <p>
                The funnel is intentionally shallow: five public pages plus a
                thank-you page, with a single job — move a guest from
                &ldquo;which villa?&rdquo; to the reservation form. The form
                itself is a GoHighLevel form embedded on{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">/book-now</code>;
                its full definition is served publicly by the widget endpoint,
                which is what makes this section verifiable:
              </p>
            </SectionHeader>

            <Evidence source={`${FORM_ENDPOINT} — live form definition (excerpt)`}>
              &ldquo;name&rdquo;: &ldquo;<span className="text-primary">Bahay Liwanag Booking Form</span>&rdquo; ·{" "}
              &ldquo;payment&rdquo;: <span className="text-primary">null</span> ·{" "}
              &ldquo;redirectUrl&rdquo;: &ldquo;<span className="text-primary">…/bahay-liwanag/thank-you</span>&rdquo; ·{" "}
              &ldquo;autoResponder&rdquo;: <span className="text-primary">false</span> ·{" "}
              &ldquo;emailNotifications&rdquo;: <span className="text-primary">false</span>
            </Evidence>

            <div className="max-w-2xl space-y-4 text-lg text-foreground/80">
              <p>
                Three intake decisions are legible in that payload and on the
                page:
              </p>
              <ul className="list-disc space-y-3 ps-5 text-base leading-relaxed">
                <li>
                  <strong>Only email and phone are required.</strong> Names,
                  dates, party size, and villa preference are all optional — a
                  guest who doesn&rsquo;t know their dates yet is still a
                  captured lead, not an abandoned form.
                </li>
                <li>
                  <strong>No payment step, by design.</strong>{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">&quot;payment&quot;: null</code>{" "}
                  in the form definition matches the promise printed beside the
                  form — &ldquo;no payment is taken here&rdquo; — because
                  charging before a human confirms availability would be the
                  wrong order of operations for three villas.
                </li>
                <li>
                  <strong>The form sends nothing itself.</strong> Its
                  auto-responder and email notifications are switched off at
                  the form level, so acknowledgement and alerting are the
                  workflow layer&rsquo;s responsibility — one place to change
                  messaging, instead of two competing senders.
                </li>
              </ul>
            </div>

            {/* Annotated booking page — portrait crop so the form is visible */}
            <figure className="mx-auto max-w-2xl">
              <div className="relative">
                <BrowserFrame url="heyitsabby.space/website/bahay-liwanag/book-now" className="shadow-soft">
                  <div className="relative aspect-[3/4] w-full bg-muted">
                    <Image
                      src="/images/bahay-liwanag/bahay-liwanag-booking-page.png"
                      alt="The Bahay Liwanag booking page: the reservation request form beside the villa options and the four-step “what happens next” card"
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 672px, 94vw"
                    />
                  </div>
                </BrowserFrame>
                {/* Callout: the form */}
                <div
                  aria-hidden
                  className="absolute hidden rounded-[var(--radius-sm)] border-2 border-accent/80 sm:block"
                  style={{ left: "25%", top: "27%", width: "30%", height: "50%" }}
                />
                <p
                  aria-hidden
                  className="hand absolute hidden -rotate-3 text-lg text-accent-hover sm:block"
                  style={{ left: "2%", top: "48%", maxWidth: "22%" }}
                >
                  8 fields, no payment step →
                </p>
                {/* Callout: the published operating model */}
                <div
                  aria-hidden
                  className="absolute hidden rounded-[var(--radius-sm)] border-2 border-primary/60 sm:block"
                  style={{ left: "55.5%", top: "27.5%", width: "20%", height: "22%" }}
                />
                <p
                  aria-hidden
                  className="hand absolute hidden rotate-1 text-lg text-primary sm:block"
                  style={{ left: "56%", top: "52%", maxWidth: "26%" }}
                >
                  ↑ the operating model, published to guests
                </p>
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                The booking page in production. Left: the embedded GoHighLevel form. Right: the villa options and the four-step flow quoted in §02 — the system&rsquo;s contract with the guest, printed where they can hold it to account.
              </figcaption>
            </figure>

            <Shot
              src="/images/bahay-liwanag/bahay-liwanag-accommodations.png"
              alt="The Villas page: Villa Sampaguita, Villa Narra, and Villa Amihan, each with positioning, capacity, features, and its own reserve button"
              url="heyitsabby.space/website/bahay-liwanag/villas"
              caption="Upstream of the form, each villa is positioned for a distinct guest — couples, families, the signature stay — and every reserve button lands on the same single intake path."
            />
          </Container>
        </section>

        {/* ── 05 CRM structure & custom fields ─────────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="crm" index="05" title="CRM structure & custom fields">
              <p>
                A booking enquiry is more than a name and an email, so the CRM
                schema is extended with five custom fields — all in
                GoHighLevel&rsquo;s{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">contact.*</code>{" "}
                namespace, meaning the stay data lands directly on the guest&rsquo;s
                contact record. These are not described from memory; they are
                read from the live form definition, keys and all:
              </p>
            </SectionHeader>

            <figure aria-label="Custom field schema" className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-border text-left">
                    <th scope="col" className="py-2.5 pe-4 font-semibold">Field</th>
                    <th scope="col" className="py-2.5 pe-4 font-semibold">Key</th>
                    <th scope="col" className="py-2.5 pe-4 font-semibold">Type</th>
                    <th scope="col" className="py-2.5 font-semibold">Behaviour</th>
                  </tr>
                </thead>
                <tbody>
                  {CUSTOM_FIELDS.map((f) => (
                    <tr key={f.key} className="border-b border-border/60 align-top">
                      <th scope="row" className="py-2.5 pe-4 text-start font-semibold text-primary">
                        {f.label}
                      </th>
                      <td className="py-2.5 pe-4 font-mono text-[0.75rem] text-foreground/80">{f.key}</td>
                      <td className="py-2.5 pe-4 font-mono text-[0.75rem] text-foreground/80">{f.type}</td>
                      <td className="py-2.5 text-muted-foreground">{f.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                The five custom fields as served by the live form endpoint. Standard contact fields (full name, email, phone) complete the eight-field form; email and phone are the two required fields.
              </figcaption>
            </figure>

            <Evidence source={`${FORM_ENDPOINT} — “Preferred Villa” field, verbatim`}>
              &#123; &ldquo;label&rdquo;: &ldquo;<span className="text-primary">Preferred Villa</span>&rdquo;,
              &ldquo;fieldKey&rdquo;: &ldquo;<span className="text-primary">contact.preferred_villa</span>&rdquo;,
              &ldquo;dataType&rdquo;: &ldquo;<span className="text-primary">SINGLE_OPTIONS</span>&rdquo;,
              &ldquo;picklistOptions&rdquo;: [&ldquo;No Preference&rdquo;, &ldquo;Villa Sampaguita - Romantic
              Escape&rdquo;, &ldquo;Villa Narra - Family Retreat&rdquo;, &ldquo;Villa Amihan - Signature
              Stay&rdquo;] &#125;
            </Evidence>

            <div className="max-w-2xl space-y-4 text-lg text-foreground/80">
              <p>
                Two details worth noticing. The villa dropdown mirrors the
                marketing positioning word for word — the CRM speaks the same
                language as the website, so a record is readable without a
                lookup table. And every custom field declares a{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">hiddenFieldQueryKey</code>{" "}
                (e.g.{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">villa_name</code>),
                so a villa-specific CTA could pre-select the guest&rsquo;s villa
                from the URL — a capability wired into the form definition,
                though today&rsquo;s villa buttons all route to the plain
                booking page.
              </p>
            </div>

            <PendingCapture
              items={[
                "GHL Opportunities view — the reservations pipeline and its stages, from new request through confirmed stay",
                "GHL contact record — a submitted enquiry with the five custom fields populated",
                "Tags / smart lists used to segment enquiries, if configured",
              ]}
            />
          </Container>
        </section>

        {/* ── 06 The automation layer ──────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="automation" index="06" title="The automation layer">
              <p>
                Once the contact record exists, the machine takes over the
                busywork. The system&rsquo;s design — as published on this
                portfolio&rsquo;s homepage and promised to guests on the booking
                page — runs each enquiry through four automated moves:
              </p>
            </SectionHeader>

            <figure aria-label="Automation flow" className="overflow-x-auto">
              <div className="mx-auto grid min-w-[560px] max-w-3xl grid-cols-4 gap-3 text-center text-xs sm:text-sm">
                {[
                  ["New enquiry arrives", "a form fill lands as a CRM contact"],
                  ["Saved & sorted", "details logged neatly in Airtable"],
                  ["Booked in", "calendar invite sent automatically"],
                  ["You're notified", "a tidy summary pings the phone"],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-[var(--radius-md)] border border-border bg-card px-3 py-2.5 shadow-xs">
                    <p className="font-semibold text-primary">{title}</p>
                    <p className="mt-0.5 text-[0.7rem] leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                ))}
              </div>
              <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                The four-step flow, as it is described on this portfolio&rsquo;s homepage — GoHighLevel captures, Make carries, Airtable and the calendar receive.
              </figcaption>
            </figure>

            <div className="max-w-2xl space-y-4 text-lg text-foreground/80">
              <p>
                The division of labour: <strong>GoHighLevel</strong> owns the
                guest-facing surface and the contact record.{" "}
                <strong>Make</strong> is the courier — it moves each enquiry
                out of the CRM and into the operational tools without anyone
                re-typing anything. <strong>Airtable</strong> is the
                reservations log the team actually works from: one row per
                enquiry, in a tool built for scanning, filtering, and marking
                things done.
              </p>
              <p>
                One verifiable breadcrumb of this layer is visible from
                outside: because the form&rsquo;s own auto-responder is
                disabled (§04) while the booking page still promises
                &ldquo;you&rsquo;ll hear from us right away,&rdquo; the
                confirmation email demonstrably belongs to the workflow layer
                rather than the form. The internals — trigger configuration,
                the Make scenario&rsquo;s modules and field mapping, the
                Airtable base schema — live behind the workspace login, and
                this page won&rsquo;t reconstruct them from memory. They are
                the next captures:
              </p>
            </div>

            <PendingCapture
              items={[
                "GHL Workflows list + the enquiry workflow canvas — trigger, confirmation email step, and any internal notification",
                "The confirmation email template a guest receives after submitting",
                "Make scenario canvas — modules end to end, with the GHL→Airtable field mapping panel open",
                "Make error handling / execution history — what happens when a run fails",
                "Airtable reservations base — table schema and the views the team works from",
                "The notification destination — where the “tidy summary” actually lands (email, SMS, or app)",
              ]}
            />
          </Container>
        </section>

        {/* ── 07 Automation decisions & trade-offs ─────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="decisions" index="07" title="Automation decisions & trade-offs">
              <p>
                Every operational system is a set of judgement calls about what
                to automate, what to keep manual, and where the data should
                live. These are the calls this system makes — with their costs
                stated plainly:
              </p>
            </SectionHeader>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  t: "Manual confirmation, not instant booking",
                  buys:
                    "No double-booking risk across three villas, no payment/PCI surface on the site, and room for the human touch a boutique stay is sold on. The flow is published to guests, so the expectation is set honestly.",
                  costs:
                    "A guest waits for a person before their dates are certain — this model would not survive a 50-room property.",
                },
                {
                  t: "Booking data on the contact record",
                  buys:
                    "Zero-friction operations: open the contact, see the stay. No joins, no second system needed to answer “who is arriving and when?”",
                  costs:
                    "A contact field holds one value — a returning guest's new request overwrites the last stay's details. The durable per-stay history is exactly why the design routes every enquiry into an Airtable log as well.",
                },
                {
                  t: "Only email + phone required",
                  buys:
                    "Nobody bounces off the form because they don't know their dates yet; every submission is at minimum a reachable lead.",
                  costs:
                    "Incomplete requests arrive and someone (or a follow-up sequence) must collect the rest before the availability call can happen.",
                },
                {
                  t: "A platform, not a codebase",
                  buys:
                    "Site, forms, CRM, and workflows shipped from one GoHighLevel workspace — no hosting, no deploys, and the client can edit copy without a developer.",
                  costs:
                    "Builder lock-in and coarser control over markup and performance than hand-written code — the KATHA case study is the other side of that trade.",
                },
              ].map((c) => (
                <div key={c.t} className="rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-xs">
                  <p className="font-serif text-lg font-semibold text-primary">{c.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    <span className="font-bold text-sage">Buys:</span> {c.buys}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    <span className="font-bold text-accent-hover">Costs:</span> {c.costs}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── 08 Evidence & what's next ────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="evidence" index="08" title="Evidence & what's next">
              <p>
                This case study holds itself to the same rule as the KATHA
                write-up: claims must be checkable. What you have just read is
                built from the live funnel, the public form definition, and
                copy published on the booking page. The back-office internals —
                pipeline, workflows, the Make scenario, the Airtable base — are
                real, but they sit behind logins, so their annotated
                screenshots are being captured and added section by section
                (the dashed slots above mark exactly where each one lands).
              </p>
              <p>
                What the page already demonstrates, evidence in hand: a
                complete intake system on GoHighLevel, a deliberate CRM field
                schema, an operating model that automates around a human
                decision, and the trade-offs those choices accept.
              </p>
            </SectionHeader>

            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <Button href={LIVE} target="_blank" rel="noreferrer" variant="primary">
                  Visit the live site
                </Button>
                <Button href="/work/katha" as={Link} variant="outline">
                  Read the KATHA case study
                </Button>
                <Button href="/#contact" variant="ghost">
                  Get in touch
                </Button>
              </div>
              <Link href="/#projects" className="text-sm font-semibold">
                ← Back to all work
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
