import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import EvidenceBlock from "@/components/case-study/EvidenceBlock";
import ShotFigure from "@/components/case-study/ShotFigure";
import ProcessFlow from "@/components/case-study/ProcessFlow";
import TableOfContents from "@/components/case-study/TableOfContents";
import EvidenceGallery from "@/components/case-study/EvidenceGallery";

/* ---------------------------------------------------------------------------
 * /projects/bahay-liwanag — the Bahay Liwanag business-systems case study.
 *
 * Written as an operations design document for engineering reviewers, in the
 * same evidence discipline as /projects/katha. Every claim on this page is
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
  ["executive-summary", "Executive Summary"],
  ["business-problem", "Business Problem"],
  ["goals", "Goals"],
  ["responsibilities", "My Responsibilities"],
  ["discovery", "Discovery & Planning"],
  ["architecture", "System Architecture"],
  ["stack", "Technical Stack"],
  ["workflow", "Workflow & Automation"],
  ["decisions", "Design Decisions"],
  ["challenges", "Challenges"],
  ["solution", "Solution"],
  ["impact", "Business Impact"],
  ["lessons", "Lessons Learned"],
  ["future", "Future Improvements"],
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

function PlaceholderEvidence({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <div className="rounded-[var(--radius-lg)] border-2 border-dashed border-border-strong/70 bg-surface/60 p-5">
      <p className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-sm text-foreground/75">{description}</p>
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
        <CaseStudyHero
          breadcrumbLabel="← All projects"
          eyebrow="Case study"
          title="Bahay Liwanag — engineering a booking operation on GoHighLevel"
          intro="A boutique three-villa resort with a single job to be done: turn a scattered, conversational booking process into one structured intake path — website, CRM, and automations built as one system. The foundation narrative explains the business need, the system design, and the technical choices behind it."
          meta={[
            { label: "Role", value: "Systems design & implementation, end to end" },
            { label: "Stack", value: "GoHighLevel · Make · Airtable" },
            { label: "Status", value: "Live — booking flow operational" },
          ]}
          primaryCta={{ label: "Visit the live site", href: LIVE, target: "_blank", rel: "noreferrer", variant: "primary" }}
          secondaryCta={{ label: "Try the booking flow", href: BOOK, target: "_blank", rel: "noreferrer", variant: "outline" }}
        />

        <section aria-label="Live system facts" className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-[var(--spacing-gutter)]">
            <dl className="grid grid-cols-3 gap-6 py-8 sm:grid-cols-6">
              {FACTS.map((f) => (
                <div key={f.label} className="text-center">
                  <dt className="order-2 text-xs font-semibold text-muted-foreground">{f.label}</dt>
                  <dd className="font-serif text-3xl font-semibold text-primary">{f.n}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <TableOfContents items={TOC.map(([id, label]) => ({ id, label }))} />

        <section className="py-16 sm:py-20">
          <CaseStudySection id="executive-summary" index="01" title="Executive Summary">
            <p>
              Bahay Liwanag is a built-for-purpose booking operation, not a generic brochure site. The project was designed around one hard requirement: turn a fragmented guest inquiry flow into a disciplined intake system that captures information, creates a clear next step, and keeps the human review decision in the right place.
            </p>
            <p>
              The live funnel, booking form, and CRM structure all work together to reduce manual re-entry and keep the guest experience honest. The key design decision is simple: gather the inquiry, acknowledge it quickly, record it consistently, and leave the availability review to a human without creating unnecessary friction.
            </p>
          </CaseStudySection>
        </section>

        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <CaseStudySection id="business-problem" index="02" title="Business Problem">
            <p>
              Small hospitality operations usually fail not because the business lacks demand, but because the booking process is scattered across forms, messages, calls, and spreadsheets. A guest inquiry arrives in one place, details get copied elsewhere, and follow-up depends on someone remembering who was contacted, what dates were discussed, and what the next step was.
            </p>
            <p>
              This is especially problematic for a boutique property with multiple room types and a human-led availability review. The project needed to create one intake path that captured the right data once, kept it visible to the team, and preserved the hospitality touch without letting the coordination work consume the whole operation.
            </p>
          </CaseStudySection>
        </section>

        <section className="border-t border-border py-16 sm:py-20">
          <CaseStudySection id="goals" index="03" title="Goals">
            <p>
              The system was designed to meet a few clear business goals:
            </p>
            <ul className="list-disc space-y-3 ps-5 text-base leading-relaxed text-foreground/80">
              <li>
                Create a single booking entry point that feels simple for the guest and structured for the business.
              </li>
              <li>
                Store and surface the right data in the CRM without requiring manual re-entry.
              </li>
              <li>
                Acknowledge the inquiry immediately and keep the human review step clear and intentional.
              </li>
              <li>
                Keep the availability check human-led while automating the repetitive operational work around it.
              </li>
            </ul>
          </CaseStudySection>
        </section>

        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <CaseStudySection id="responsibilities" index="04" title="My Responsibilities">
            <p>
              The work covered the full decision path rather than a single surface area. My responsibilities included:
            </p>
            <ul className="list-disc space-y-3 ps-5 text-base leading-relaxed text-foreground/80">
              <li>
                Defining the guest journey and the operational flow behind it.
              </li>
              <li>
                Designing the booking funnel so each page had a clear purpose and a single destination.
              </li>
              <li>
                Structuring the GoHighLevel form and custom field schema to match the actual business use case.
              </li>
              <li>
                Mapping the handoff between the booking intake and the operational layer, including how the response is logged and reviewed.
              </li>
              <li>
                Choosing the stack and tooling based on the operational constraints rather than a generic “automation” preference.
              </li>
            </ul>
          </CaseStudySection>
        </section>

        <section className="border-t border-border py-16 sm:py-20">
          <CaseStudySection id="discovery" index="05" title="Discovery & Planning">
            <p>
              The discovery phase focused on the booking lifecycle, not the visual polish. The work started by tracing how a guest inquiry actually moved from first click to final confirmation and where information was lost or duplicated. That review surfaced three core constraints: the process needed to be easy for guests, easy for the operation to manage, and honest about where a human decision was required.
            </p>
            <p>
              From there, the plan centered on one intake path, one CRM record, and a clear distinction between automation and human review. The system was designed around those responsibilities instead of around a more complex “everything is automated” model that would have been harder to trust and maintain.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              This is the starting point for the system design: the booking flow was mapped around real operational needs, not around an idealized guest experience that would later break under review.
            </p>
            <div className="mt-6">
              <PlaceholderEvidence
                label="Placeholder — screenshot pending: Discovery workbook"
                description="Operational evidence: this location will hold the workshop notes, guest journey map, and booking flow diagram once the final evidence asset is captured."
              />
            </div>
          </CaseStudySection>
        </section>

        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <CaseStudySection id="architecture" index="06" title="System Architecture">
            <p>
              The system architecture keeps the guest-facing experience simple while pushing the operational complexity behind the scenes. The design makes the booking funnel public, stores the lead in GoHighLevel, and then moves the inquiry into a workflow and logging layer that supports the human review stage.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              This is the foundation that makes the rest of the operating model viable: the public experience is intentionally light, while the internal process is structured enough to keep the business coherent.
            </p>
            <div className="mt-8">
              <ProcessFlow
                nodes={[
                  { label: "Guest", description: "A visitor lands on the site and begins the booking intent" },
                  { label: "Booking Form", description: "The guest submits structured enquiry details without a payment step" },
                  { label: "GoHighLevel", description: "The record is captured in the CRM and stored in the right contact schema" },
                  { label: "Workflow", description: "The inquiry is acknowledged and routed into the operational process" },
                  { label: "Airtable", description: "The business keeps a working record for review and follow-up" },
                  { label: "Human Review", description: "The team confirms availability and decides the next action" },
                  { label: "Booking Confirmation", description: "The guest receives a clear follow-up and a confirmed next step" },
                ]}
              />
            </div>
          </CaseStudySection>
        </section>

        <section className="border-t border-border py-16 sm:py-20">
          <CaseStudySection id="stack" index="07" title="Technical Stack">
            <p>
              The stack was chosen to solve a business problem, not to demonstrate tool breadth. Every tool had a clear operational role:
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              The architecture above is only useful if the tooling supports the same operating model. This stack was selected to keep the public funnel simple, the CRM structured, and the business review process usable.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="font-serif text-xl font-semibold text-primary">GoHighLevel</p>
                <p className="mt-2 text-base leading-relaxed text-foreground/80">
                  This was the right foundation because it combined the guest-facing funnel, form capture, and CRM in one workspace. That reduced handoff complexity and made the booking flow easier to manage without introducing a separate custom app for a small operation.
                </p>
              </div>

              <div>
                <p className="font-serif text-xl font-semibold text-primary">Make</p>
                <p className="mt-2 text-base leading-relaxed text-foreground/80">
                  Make was chosen to move the lead out of the form and into the rest of the operational system without manual re-entry. It is a good match when the real goal is to create a fast, reliable handoff between a capture layer and the business workflow.
                </p>
              </div>

              <div>
                <p className="font-serif text-xl font-semibold text-primary">Airtable</p>
                <p className="mt-2 text-base leading-relaxed text-foreground/80">
                  Airtable was selected as the operational log because the team needs a readable, reviewable record rather than a buried CRM detail page. It gives the business a place to track, filter, and follow up on bookings in a way that is easier to scan than a contact record alone.
                </p>
              </div>

              <div>
                <p className="font-serif text-xl font-semibold text-primary">Editorial web pages</p>
                <p className="mt-2 text-base leading-relaxed text-foreground/80">
                  The public web pages are intentionally straightforward. They are designed to sell the experience, support the booking journey, and route traffic into one conversion path without overbuilding the front end. This keeps the front-end layer focused on clarity and conversion instead of becoming the business system itself.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <EvidenceBlock source="Tool-selection rationale — why these tools were chosen">
                The design decision was to keep the system simple: one public intake layer, one CRM source of truth, one operational log, and a clearly defined human review step. Each tool does a specific job instead of trying to win the whole workflow. That keeps the system understandable, maintainable, and easier to trust.
              </EvidenceBlock>
            </div>

            <div className="mt-8">
              <ShotFigure
                src="/images/bahay-liwanag/bahay-liwanag-homepage.png"
                alt="Placeholder: landing-page screenshot to be inserted for the technical stack and intake context"
                url="heyitsabby.space/website/bahay-liwanag"
                caption="Placeholder asset: homepage screenshot to be inserted here once the final evidence capture is ready. This is a structural placeholder, not a fabricated business metric or mockup."
              />
            </div>
          </CaseStudySection>
        </section>

        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <CaseStudySection id="workflow" index="08" title="Workflow & Automation">
            <p>
              The booking flow is intentionally simple for the guest and disciplined behind the scenes. The public intake captures the enquiry, the CRM stores the structured record, and the workflow handles acknowledgement and routing before a human checks availability and confirms the next step.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              This is the same operating model introduced in the system architecture above, applied to the day-to-day booking process the business depends on.
            </p>

            <div className="mt-8 space-y-4">
              <PlaceholderEvidence
                label="Placeholder — screenshot pending: GoHighLevel Workflow Canvas"
                description="Operational evidence: insert the workflow canvas once the final GHL evidence is captured. This slot will show the automation trigger, acknowledgement email, and internal notification flow."
              />
              <PlaceholderEvidence
                label="Placeholder — screenshot pending: Make Scenario"
                description="Operational evidence: insert the Make scenario once the automation is captured. This slot will show the route from GoHighLevel into Airtable, calendar, and notification elements."
              />
              <PlaceholderEvidence
                label="Placeholder — screenshot pending: Airtable Reservation Log"
                description="Operational evidence: insert the Airtable reservations table once the operational workspace is captured. This is the working log the team uses after the enquiry is submitted."
              />
              <PlaceholderEvidence
                label="Placeholder — screenshot pending: Contact Record"
                description="Verified in live implementation: insert the contact record once the live CRM record is captured. This slot will show how the form fields land in the contact schema."
              />
            </div>

            <div className="mt-8 max-w-2xl text-lg text-foreground/80">
              <p>
                The automated pieces are the intake capture, acknowledgement, and movement of the enquiry into the operational log. The intentionally manual step is the availability review itself. That split is deliberate: it keeps the business process honest, prevents double-booking risk across multiple villas, and preserves the human judgement that boutique hospitality depends on.
              </p>
            </div>
          </CaseStudySection>
        </section>

        <section className="border-t border-border py-16 sm:py-20">
          <CaseStudySection id="decisions" index="09" title="Design Decisions">
            <p>
              These are the most important business decisions that shaped the system. Each one reflects a trade-off between simplicity, guest experience, and operational control.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Human review before payment",
                  why: "The guest should not be charged before availability is confirmed, especially when the property is managing multiple villas and limited dates.",
                  tradeoff: "This adds a manual step to the flow, but it protects the business from double-booking and keeps the transaction honest.",
                },
                {
                  title: "Structured custom fields instead of free-text submissions",
                  why: "The business needs fields like check-in date, preferred villa, and guest count to make follow-up and review practical.",
                  tradeoff: "The form is a bit more structured than a chat-style inquiry, but the result is a cleaner dataset and a much easier handoff to the operational workflow.",
                },
                {
                  title: "Airtable as the operational workspace",
                  why: "The team needed a readable log for statuses, follow-ups, and review rather than a single CRM record alone.",
                  tradeoff: "This creates another system in the process, but it gives operations a place to work quickly and scan data without digging through contact details.",
                },
                {
                  title: "GoHighLevel as the CRM and intake layer",
                  why: "The public site, form capture, and CRM lived in the same platform, which reduced friction and simplified the system boundary.",
                  tradeoff: "It limits some flexibility compared with a fully custom app, but it fits the size and needs of the project without unnecessary complexity.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-xs">
                  <p className="font-serif text-lg font-semibold text-primary">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                    <span className="font-bold text-sage">Why:</span> {item.why}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    <span className="font-bold text-accent-hover">Trade-off:</span> {item.tradeoff}
                  </p>
                </div>
              ))}
            </div>
          </CaseStudySection>
        </section>

        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <CaseStudySection id="challenges" index="10" title="Challenges">
            <p>
              The project faced a few practical constraints that shaped the design. These are not abstract problems; they are real product and operational trade-offs that had to be resolved in the booking model.
            </p>

            <ul className="mt-8 list-disc space-y-3 ps-5 text-base leading-relaxed text-foreground/80">
              <li>
                <strong>Operational complexity without overbuilding the platform.</strong> The business needed a transaction path that handled enquiries, timing, and review without creating a full custom application.
              </li>
              <li>
                <strong>Human review required before final confirmation.</strong> Because the property manages limited villa inventory, an automated booking decision would create unnecessary risk and reduce trust in the process.
              </li>
              <li>
                <strong>Limited surface area on the form.</strong> The guest-facing booking experience needed to be simple, and the public form reflects that by keeping the intake clear without forcing a full payment or trip-planning flow.
              </li>
              <li>
                <strong>Need for a clean operational record.</strong> A CRM contact alone was not enough; the team needed a working reservations log where the enquiry could be followed and reviewed in context.
              </li>
              <li>
                <strong>Platform constraints within GoHighLevel.</strong> The project had to work inside the constraints of the platform while still designing a defensible business process rather than a purely aesthetic funnel.
              </li>
            </ul>
          </CaseStudySection>
        </section>

        <section className="border-t border-border py-16 sm:py-20">
          <CaseStudySection id="solution" index="11" title="Solution">
            <p>
              The implemented solution ties the business journey together in one sequence: the guest reaches the booking form, the enquiry is stored in the CRM, the workflow handles acknowledgement and routing, and the operational team reviews the request before confirming the booking.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              This is the same booking model introduced earlier in the system architecture: the customer-facing path stays simple, while the operational layer remains structured and reviewable.
            </p>

            <div className="mt-8 max-w-2xl text-lg text-foreground/80">
              <p>
                This addresses the original business problem by turning an unstructured, manual booking process into a predictable intake workflow. The result is a clearer guest experience, a better operational record, and a business process that respects the human decision point without making the team do unnecessary admin work.
              </p>
            </div>
          </CaseStudySection>
        </section>

        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <CaseStudySection id="impact" index="12" title="Business Impact">
            <p>
              The project improved the business by creating a more structured reservation process without turning the guest experience into a heavy operational interface. The core value was operational clarity: the intake path, CRM record, and follow-up workflow all align around the same booking decision.
            </p>
            <p>
              Qualitatively, the system reduces manual duplication, makes the booking process easier to review, and gives the operation a clearer internal path from enquiry to confirmation. It also improves maintainability by separating the customer-facing experience from the internal process, and it makes the customer journey easier to follow because the next step is always explicit.
            </p>
          </CaseStudySection>
        </section>

        <section className="border-t border-border py-16 sm:py-20">
          <CaseStudySection id="lessons" index="13" title="Lessons Learned">
            <p>
              A few lessons were especially important on this project:
            </p>
            <ul className="mt-8 list-disc space-y-3 ps-5 text-base leading-relaxed text-foreground/80">
              <li>
                <strong>CRM structure matters.</strong> If the form fields are not aligned to the operating model, the business can end up with a clean website and a messy back end. The schema has to support the way the team actually reviews and responds to bookings.
              </li>
              <li>
                <strong>Workflow design has to respect the business decision.</strong> Not everything should be automated. This project showed that the right automation is the repetitive administrative work around the enquiry, while the availability decision should remain human-led.
              </li>
              <li>
                <strong>UX decisions shape operational success.</strong> A simple intake form is not just a frontend choice; it changes how reliable and useful the whole system becomes. Fewer obstacles in front of the guest means more consistent data behind the scenes.
              </li>
              <li>
                <strong>Operational systems need different thinking from marketing websites.</strong> The real work was not just making the site look polished. It was designing a repeatable business flow that could support guest experience and internal clarity at the same time.
              </li>
              <li>
                <strong>Trade-offs should be explicit.</strong> Choosing a platform-first system created simplicity in delivery, but it also created platform constraints. Being clear about those trade-offs is part of engineering maturity.
              </li>
            </ul>
          </CaseStudySection>
        </section>

        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <CaseStudySection id="evidence-gallery" index="14" title="Evidence Gallery">
            <p>
              This gallery packages the live-system evidence that supports the narrative. It is intentionally explicit about what is already verified and what still needs a final capture pass before publication. Nothing here is presented as a screenshot or workflow artifact that has not been documented as part of the evidence checklist.
            </p>

            <div className="mt-8">
              <EvidenceGallery
                items={[
                  {
                    title: "Booking form settings",
                    description: "The public booking intake is shaped around a narrow set of fields that match the real guest decision path.",
                    whyItMatters: "This keeps the form short enough for conversion while still collecting the operational information the business needs.",
                    placeholderLabel: "Booking Form Settings",
                    alt: "Placeholder: booking form settings screenshot to be captured from the live GoHighLevel form builder",
                    url: "booking-form-settings",
                    annotation: "Live form schema",
                  },
                  {
                    title: "Live booking page",
                    description: "This is the public-facing reservation experience used to route a guest into the enquiry flow.",
                    whyItMatters: "It establishes the actual customer journey and shows how the funnel turns marketing interest into a booking inquiry.",
                    placeholderLabel: "Live Booking Page",
                    alt: "Placeholder: public booking page screenshot to be captured from the live funnel",
                    url: "bahay-liwanag-book-now",
                    annotation: "Public funnel",
                  },
                  {
                    title: "GoHighLevel workflow canvas",
                    description: "The workflow layer is responsible for acknowledgment and routing once the enquiry is submitted.",
                    whyItMatters: "This is where the business turns the intake event into a coordinated response rather than a lost message.",
                    placeholderLabel: "GoHighLevel Workflow Canvas",
                    alt: "Placeholder: workflow canvas screenshot to be captured from the GoHighLevel automation editor",
                    url: "ghl-workflow-canvas",
                    annotation: "Automation trigger and response path",
                    fullWidth: true,
                  },
                  {
                    title: "Make scenario",
                    description: "The Make path moves the enquiry from the CRM layer into the operational record used by the team.",
                    whyItMatters: "It reflects the chosen architecture: one intake signal, then a structured handoff into a reviewable operational log.",
                    placeholderLabel: "Make Scenario",
                    alt: "Placeholder: Make automation scenario to be captured from the internal workflow builder",
                    url: "make-scenario",
                    annotation: "Bridge to records and notifications",
                  },
                  {
                    title: "Airtable reservation log",
                    description: "The reservations table is the operational workspace where the team can review, filter, and follow up on new enquiries.",
                    whyItMatters: "A single CRM record is not enough for the business; the operation needs a readable working log for the booking pipeline.",
                    placeholderLabel: "Airtable Reservation Log",
                    alt: "Placeholder: Airtable reservations table screenshot to be captured from the operational workspace",
                    url: "airtable-reservation-log",
                    annotation: "Operational review table",
                  },
                  {
                    title: "Contact record",
                    description: "The collected fields land in the contact schema so the business can read and act on the real booking intent.",
                    whyItMatters: "The quality of the system depends on clean field mapping and consistent data capture from the first enquiry.",
                    placeholderLabel: "Contact Record",
                    alt: "Placeholder: GHL contact record screenshot to be captured from the CRM entry",
                    url: "contact-record",
                    annotation: "CRM source of truth",
                  },
                  {
                    title: "Funnel map",
                    description: "The funnel explains how the marketing pages guide the guest into a single conversion path.",
                    whyItMatters: "This is the public architecture that keeps the user journey simple and the internal process easy to reason about.",
                    placeholderLabel: "Funnel Map",
                    alt: "Placeholder: funnel overview to be captured from the published website structure",
                    url: "funnel-map",
                    annotation: "Public journey architecture",
                  },
                  {
                    title: "Pipeline snapshot",
                    description: "The booking intake is surfaced as a simple operational pipeline rather than a vague, unstructured backlog.",
                    whyItMatters: "This makes the inquiry path legible to the team and keeps momentum between enquiry, review, and response.",
                    placeholderLabel: "Pipeline Snapshot",
                    alt: "Placeholder: operational pipeline view to be captured from the management workflow",
                    url: "pipeline-snapshot",
                    annotation: "Review pipeline",
                  },
                  {
                    title: "Confirmation email",
                    description: "The response layer gives the guest a clear acknowledgment and sets expectations without forcing an instant payment flow.",
                    whyItMatters: "Quick acknowledgment is a practical part of the customer experience and keeps the system feeling responsive.",
                    placeholderLabel: "Confirmation Email",
                    alt: "Placeholder: confirmation email screenshot to be captured from the live automation template",
                    url: "confirmation-email",
                    annotation: "Guest acknowledgement",
                  },
                  {
                    title: "Booking form close-up",
                    description: "The form fields are intentionally limited to the details that matter for the actual booking decision.",
                    whyItMatters: "This is the design boundary that keeps the experience clear while preserving useful operational data.",
                    placeholderLabel: "Booking Form Close-up",
                    alt: "Placeholder: close-up of the live booking form fields",
                    url: "booking-form-close-up",
                    annotation: "Field clarity",
                  },
                  {
                    title: "Workflow decision branch",
                    description: "The workflow includes a deliberate human-review branch rather than a fully automated completion path.",
                    whyItMatters: "This protects the operation from incorrect booking assumptions and keeps the review step visible in the system design.",
                    placeholderLabel: "Workflow Decision Branch",
                    alt: "Placeholder: automation branch screenshot to be captured from the workflow editor",
                    url: "workflow-decision-branch",
                    annotation: "Human review decision",
                  },
                  {
                    title: "Public process card",
                    description: "The guest-facing process is distilled into a clear action path that is simple to understand and easy to trust.",
                    whyItMatters: "The business design is clearer when the public-facing story matches the actual operational logic behind the booking flow.",
                    placeholderLabel: "Public Process Card",
                    alt: "Placeholder: public process card or booking guidance screenshot",
                    url: "public-process-card",
                    annotation: "Customer-facing clarity",
                  },
                ]}
              />
            </div>
          </CaseStudySection>
        </section>

        <section className="border-t border-border py-16 sm:py-20">
          <CaseStudySection id="future" index="15" title="Future Improvements">
            <p>
              The current system is intentionally focused on a clear intake path and human review flow. A few realistic improvements would strengthen the operation further, but they are not implied to exist yet.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="font-serif text-xl font-semibold text-primary">Implemented</p>
                <ul className="mt-3 list-disc space-y-2 ps-5 text-base leading-relaxed text-foreground/80">
                  <li>Single booking intake flow</li>
                  <li>Structured CRM field capture</li>
                  <li>Operational handoff into the review workflow</li>
                  <li>Human-led confirmation step</li>
                </ul>
              </div>

              <div>
                <p className="font-serif text-xl font-semibold text-primary">Planned</p>
                <ul className="mt-3 list-disc space-y-2 ps-5 text-base leading-relaxed text-foreground/80">
                  <li>Calendar synchronization to keep reservation timing more visible</li>
                  <li>Availability management to support clearer booking decisions</li>
                  <li>Automated reminder workflow for follow-up or confirmation stages</li>
                </ul>
              </div>

              <div>
                <p className="font-serif text-xl font-semibold text-primary">Future possibilities</p>
                <ul className="mt-3 list-disc space-y-2 ps-5 text-base leading-relaxed text-foreground/80">
                  <li>Reporting dashboard for reservation patterns and lead flow</li>
                  <li>Reservation analytics to support inventory decisions and staffing</li>
                  <li>Internal operations dashboard for team visibility across new enquiries and confirmed stays</li>
                </ul>
              </div>
            </div>
          </CaseStudySection>
        </section>
      </main>

      <Footer />
    </>
  );
}
