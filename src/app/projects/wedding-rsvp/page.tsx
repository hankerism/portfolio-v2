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
 * /projects/wedding-rsvp — the Wedding RSVP Platform case study.
 *
 * Product first, wedding second: the page presents a production application
 * (Supabase auth + RLS, config-driven RSVP workflow, couple's dashboard,
 * transactional email) whose first deployment happens to be one real
 * wedding. Same evidence discipline as the KATHA case study: every claim is
 * sourced from the public repository (github.com/hankerism/hazel-and-jhonel)
 * — comments quoted verbatim in the Evidence blocks, facts counted from the
 * code. Known limits are stated, not styled around.
 * ------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Wedding RSVP Platform — Case Study",
  description:
    "How a premium wedding RSVP platform was designed and shipped for a real wedding: Supabase auth and row-level security, a config-driven RSVP workflow, a couple's dashboard with CSV export, and transactional email that never blocks a guest.",
};

const LIVE = "https://hazel-and-jhonel.vercel.app/";
const REPO = "https://github.com/hankerism/hazel-and-jhonel";

/* Verified repository facts (routes, schema, and package.json). */
const FACTS = [
  { n: "14", label: "routes" },
  { n: "8", label: "Postgres tables" },
  { n: "4", label: "SQL migrations" },
  { n: "6", label: "runtime dependencies" },
  { n: "4", label: "tagged releases" },
  { n: "1", label: "real wedding" },
];

const TOC = [
  ["overview", "Overview"],
  ["challenge", "The challenge"],
  ["solution", "The solution"],
  ["guest", "Guest experience"],
  ["admin", "Admin experience"],
  ["architecture", "Technical architecture"],
  ["pictures", "The product, in pictures"],
  ["results", "Results"],
  ["lessons", "Lessons learned"],
] as const;

/* ── Local building blocks (shared case-study pattern) ────────────────────── */

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

/** A verbatim excerpt from the repository — the codebase speaking for itself. */
function Evidence({ file, children }: { file: string; children: ReactNode }) {
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
        {file} — verbatim from the repository
      </figcaption>
      <blockquote className="not-italic border-0 p-4 font-mono text-[0.8rem] leading-relaxed text-foreground/85 sm:px-5">
        {children}
      </blockquote>
    </figure>
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

export default function WeddingRsvpCaseStudy() {
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
            <p className="hand mt-6 text-2xl text-primary sm:text-3xl">
              Case study · built for Hazel &amp; Jhonel
            </p>
            <h1 className="mt-2 text-balance">
              Wedding RSVP Platform — a premium guest experience with a real
              backend
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/80">
              A production application in two halves: a luxury single-page
              invitation that guests reply to in under a minute, and a private,
              Supabase-authenticated dashboard where the couple runs their
              guest list. Designed, built, and deployed end to end for a real
              wedding — this page explains how, using only what the repository
              itself can verify.
            </p>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-border/70 pt-6">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Role</dt>
                <dd className="text-sm font-semibold">Design &amp; engineering, end to end</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Stack</dt>
                <dd className="text-sm font-semibold">Next.js 16 · TypeScript · Tailwind CSS 4 · Supabase · Nodemailer</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Client</dt>
                <dd className="text-sm font-semibold">Hazel Jean &amp; Jhonel Rhey — November 2026</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Status</dt>
                <dd className="text-sm font-semibold">Live on Vercel — taking real RSVPs</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={LIVE} target="_blank" rel="noreferrer" variant="primary">
                Visit the live site
              </Button>
              <Button href={REPO} target="_blank" rel="noreferrer" variant="outline">
                Read the source
              </Button>
            </div>
          </Container>
        </header>

        {/* ── Fact strip — repository truths, no estimates ─────────────────── */}
        <section aria-label="Repository facts" className="border-b border-border bg-surface">
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
                This is two products sharing one system: a{" "}
                <strong>guest experience</strong> (invitation, story, details,
                schedule, gallery, FAQ, and a two-step reply card) and a{" "}
                <strong>couple&rsquo;s dashboard</strong> (live statistics, a
                guest list with a status workflow, CSV export, content editors,
                and email controls). Guests never create accounts; the couple
                signs in through real authentication. The boundary between the
                two halves is enforced in the database, not just the UI (§06).
              </p>
              <p>
                Everything below is verifiable: the product is{" "}
                <a href={LIVE} target="_blank" rel="noreferrer">live</a>, the{" "}
                <a href={REPO} target="_blank" rel="noreferrer">repository is public</a>,
                and the comments quoted here can be read in full.
              </p>
            </SectionHeader>

            <Shot
              src="/images/hazel-and-jhonel/hj-hero.png"
              alt="The invitation hero — the couple's names, date, venue, and a live countdown over a full-bleed photograph"
              url="hazel-and-jhonel.vercel.app"
              caption="The production invitation — names, date, venue, RSVP call-to-action, and a live countdown to the ceremony, over the couple's own photograph."
              priority
            />
          </Container>
        </section>

        {/* ── 02 The challenge ─────────────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="challenge" index="02" title="The challenge">
              <p>
                A real wedding is a project with a hard deadline. RSVPs
                collected over messages and paper cards scatter; guest counts,
                meal choices, and dietary notes end up in someone&rsquo;s
                notebook; and every &ldquo;are we confirmed?&rdquo; question
                costs the couple an evening. The brief, in product terms:
              </p>
            </SectionHeader>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  t: "Zero-friction for guests",
                  d: "Titas and grandparents reply on their phones. No accounts, no app, no PDF — a reply card that takes under a minute and confirms instantly.",
                },
                {
                  t: "One source of truth for the couple",
                  d: "Every response, guest count, meal choice, and dietary note in one place — reviewable, searchable, and exportable for the caterer and seating chart.",
                },
                {
                  t: "An admin that reads like a planner",
                  d: "The couple isn't technical. Editing the schedule, gallery, or FAQ must feel like filling in a wedding planner, not administering a database.",
                },
                {
                  t: "Luxury, not template",
                  d: "The invitation had to carry the wedding's own black-and-gold identity — editorial typography, a countdown, music — and still load fast on a phone signal.",
                },
              ].map((c) => (
                <div key={c.t} className="rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-xs">
                  <p className="font-serif text-lg font-semibold text-primary">{c.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{c.d}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── 03 The solution ──────────────────────────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="solution" index="03" title="The solution">
              <p>
                One Next.js application with a hard privacy line down the
                middle. The public half is a statically-regenerated,
                single-page invitation; the private half is a
                session-authenticated dashboard. Supabase Postgres is the
                single source of truth on both sides, and row-level security
                decides — in the database — what each side may do:
              </p>
            </SectionHeader>

            {/* System diagram — matches the route groups and RLS policies */}
            <figure aria-label="System overview" className="mx-auto max-w-3xl">
              <div className="grid gap-3 text-center text-sm sm:grid-cols-2">
                <div className="rounded-[var(--radius-md)] border border-border bg-card px-4 py-3 shadow-xs">
                  <p className="font-serif text-base font-semibold text-primary">Guests (anonymous)</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    read the invitation · submit one RSVP · download the .ics invite
                  </p>
                </div>
                <div className="rounded-[var(--radius-md)] border border-border bg-card px-4 py-3 shadow-xs">
                  <p className="font-serif text-base font-semibold text-primary">The couple (authenticated)</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    review &amp; confirm RSVPs · edit every content section · send email
                  </p>
                </div>
                <p aria-hidden className="text-muted-foreground sm:col-span-2">↓ Server Actions ↓</p>
                <div className="rounded-[var(--radius-md)] border border-border bg-card px-4 py-3 shadow-xs sm:col-span-2">
                  <p className="font-serif text-base font-semibold text-primary">Supabase Postgres — row-level security</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    anon: SELECT content, INSERT rsvps — nothing else · authenticated: manage content, read &amp; update rsvps (no delete)
                  </p>
                </div>
                <p aria-hidden className="text-muted-foreground sm:col-span-2">↓ after the response, never blocking it ↓</p>
                <div className="rounded-[var(--radius-md)] border border-border bg-card px-4 py-3 shadow-xs sm:col-span-2">
                  <p className="font-serif text-base font-semibold text-primary">Email — Nodemailer over SMTP</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    new-RSVP notification to the couple · confirmation to the guest, sent exactly once and tracked per row
                  </p>
                </div>
              </div>
              <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                The privacy boundary lives in Postgres policies, so even a bug in a route or action cannot widen what a request may touch.
              </figcaption>
            </figure>
          </Container>
        </section>

        {/* ── 04 Guest experience ──────────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="guest" index="04" title="Guest experience">
              <p>
                The guest journey is one page, top to bottom: hero and
                countdown, the couple&rsquo;s story, ceremony and reception
                details, the day&rsquo;s schedule, a gallery with a lightbox,
                FAQs, and finally the reply card — with a background music
                player that waits politely for a gesture and remembers being
                turned off. Every entrance animation respects{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">prefers-reduced-motion</code>.
              </p>
              <p>
                The RSVP itself is a <strong>two-step reply card</strong>:
                accept or decline first, then a form whose fields, labels,
                required flags, meal options, and guest-count limit all render
                from the couple&rsquo;s stored configuration (§05). Validation
                runs server-side; a duplicate email meets a friendly
                &ldquo;already on our list&rdquo; panel backed by a unique
                index on <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">lower(email)</code>;
                a successful reply gets a personalized thank-you with a drawn
                checkmark and a calendar download.
              </p>
            </SectionHeader>

            <Shot
              src="/images/hazel-and-jhonel/hj-rsvp.png"
              alt="The RSVP reply card — Joyfully Accepts or Regretfully Declines, on the dark ink band"
              url="hazel-and-jhonel.vercel.app/#rsvp"
              caption="Step one of the reply card — accept or decline, in the wedding's black-and-gold. Declining collapses the form to identity and a message; accepting reveals guest count, meal, and dietary fields."
              aspect="aspect-[48/25]"
            />

            <Evidence file="features/rsvp/actions.ts">
              &ldquo;Scheduled after the response so the guest never waits on
              SMTP, and the service swallows failures so the saved RSVP is
              never rolled back.&rdquo;
            </Evidence>

            <div className="max-w-2xl space-y-4 text-lg text-foreground/80">
              <p>
                What this proves: the guest path is treated as sacred. Email —
                the least reliable dependency in the system — is scheduled
                with Next&rsquo;s{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">after()</code>{" "}
                so a slow or failing SMTP server can never lose an RSVP or
                delay the thank-you on screen.
              </p>
            </div>
          </Container>
        </section>

        {/* ── 05 Admin experience ──────────────────────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="admin" index="05" title="Admin experience">
              <p>
                Behind <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">/login</code>{" "}
                sits the couple&rsquo;s dashboard — ten authenticated pages that
                run the wedding. Sign-in is Supabase Auth with two doors:
                password, or a <strong>magic link</strong> (sent only to
                existing accounts, so the form can&rsquo;t be used to probe for
                emails). There is deliberately no self-serve sign-up; the
                couple&rsquo;s accounts are provisioned directly.
              </p>
              <p>
                The overview greets them with live numbers — responses,
                accepted, declined, seats coming, pending review. The RSVP
                table is searchable and filterable with a detail drawer, a{" "}
                <strong>pending → confirmed / contacted</strong> status
                workflow, and one-click <strong>CSV export</strong> of the
                filtered list for the caterer. Every content section of the
                invitation — details, story, schedule, gallery, FAQs, and the
                RSVP form itself — is editable in place, with drag reordering
                where order matters.
              </p>
            </SectionHeader>

            <Shot
              src="/images/hazel-and-jhonel/hj-login.png"
              alt="The couple-dashboard sign-in — password and email-link tabs on an ivory card"
              url="hazel-and-jhonel.vercel.app/login"
              caption="The dashboard door — Supabase Auth with password and magic-link sign-in. The private half of the product lives behind it: overview, RSVPs, six content editors, and settings."
            />

            <Evidence file="features/dashboard/rsvps/actions.ts">
              &ldquo;Confirming an accepted RSVP automatically sends the
              confirmation email exactly once: if a previous send succeeded, it
              is NEVER auto-resent (only the dedicated resend action may). An
              email failure never rolls back the status change.&rdquo;
            </Evidence>

            <div className="max-w-2xl space-y-4 text-lg text-foreground/80">
              <p>
                What this proves: the workflow thinks about failure the way
                operations people do. The once-only rule reads tracking state{" "}
                <em>before</em> the update so it cannot race; the outcome of
                every send — sent, failed, message id, error — is recorded on
                the RSVP row itself; and a &ldquo;Send test email&rdquo;
                button in settings lets the couple verify delivery end to end
                before the invitations go out.
              </p>
            </div>
          </Container>
        </section>

        {/* ── 06 Technical architecture ────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="architecture" index="06" title="Technical architecture">
              <p>
                The production dependency list is six packages:{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">next</code>,{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">react</code>,{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">react-dom</code>,{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">@supabase/supabase-js</code>,{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">@supabase/ssr</code>, and{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">nodemailer</code>{" "}
                — no ORM, no component library, no form library. Reads and
                writes go through Server Actions; the public page regenerates
                on a one-hour ISR window so content edits appear without a
                deploy.
              </p>
              <p>
                Access control is layered three deep. The route proxy (Next
                16&rsquo;s middleware successor) redirects anonymous visitors
                away from{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">/dashboard/**</code>{" "}
                using a JWT-verified{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">getUser()</code>;
                the dashboard layout re-checks the session on render; and even
                if both were bypassed, the RLS policies below are what the
                database will actually permit. The schema is multi-wedding by
                design — every table hangs off{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">weddings.id</code>{" "}
                — and the migration is honest about what that does and
                doesn&rsquo;t yet mean:
              </p>
            </SectionHeader>

            <Evidence file="supabase/migrations/00002_dashboard.sql">
              &ldquo;The couple signs in via Supabase Auth; authenticated users
              manage content. NOTE for multi-wedding future: these grant every
              authenticated user access to every wedding. Before onboarding a
              second couple, add an ownership mapping (e.g.{" "}
              <span className="text-primary">wedding_members(wedding_id, user_id)</span>)
              and scope these policies to it.&rdquo;
            </Evidence>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-xs">
                <p className="font-serif text-lg font-semibold text-primary">The schema — 8 tables, 4 migrations</p>
                <ul className="mt-3 space-y-1.5 font-mono text-[0.8rem] text-foreground/80">
                  {[
                    "weddings — identity, palette, form settings, music",
                    "rsvps — responses + email tracking columns",
                    "story_milestones · schedule_items",
                    "gallery_images · faqs",
                    "meal_options · rsvp_form_fields",
                  ].map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  A unique index on <span className="font-mono">(wedding_id, lower(email))</span>{" "}
                  makes duplicate replies a database guarantee, not a UI hope.
                </p>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-xs">
                <p className="font-serif text-lg font-semibold text-primary">Resilience decisions</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/80">
                  <li>
                    <strong>Seed fallback:</strong> with no Supabase configured the
                    presentation layer renders from bundled seed content — but
                    RSVP writes require the live database and fail loudly, never
                    silently.
                  </li>
                  <li>
                    <strong>Config-driven form:</strong> the reply card renders
                    from <span className="font-mono">rsvp_form_fields</span> +{" "}
                    <span className="font-mono">meal_options</span>, with sensible
                    defaults if migrations lag.
                  </li>
                  <li>
                    <strong>Friendly failure:</strong> Postgres errors map to
                    human messages; SMTP errors are stripped of secrets before
                    they ever reach a screen.
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* ── 07 The product, in pictures ──────────────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="pictures" index="07" title="The product, in pictures">
              <p>
                The journey from invitation to reply, as guests actually see it
                — captured from the live deployment.
              </p>
            </SectionHeader>

            <div className="space-y-10">
              <Shot
                src="/images/hazel-and-jhonel/hj-details.png"
                alt="Wedding details — ceremony and reception cards with times, venue, directions, dress code, and palette"
                url="hazel-and-jhonel.vercel.app/#details"
                caption="The Where & The When — ceremony and reception cards with directions, alongside dress code, palette, and parking. Every word here is editable from the dashboard."
                aspect="aspect-[9/7]"
              />
              <Shot
                src="/images/hazel-and-jhonel/hj-schedule.png"
                alt="The wedding-day schedule — a timeline of the day's moments"
                url="hazel-and-jhonel.vercel.app/#schedule"
                caption="The day's schedule — a drag-reorderable timeline in the dashboard, a quiet editorial list for guests."
                aspect="aspect-[36/25]"
              />
              <Shot
                src="/images/hazel-and-jhonel/hj-gallery.png"
                alt="The gallery — a grid of the couple's photographs with a lightbox"
                url="hazel-and-jhonel.vercel.app/#gallery"
                caption="The gallery — a lightboxed grid the couple curates themselves."
                aspect="aspect-[36/25]"
              />

              {/* Mobile — the format most guests will actually use */}
              <figure className="mx-auto max-w-xs">
                <div className="overflow-hidden rounded-[var(--radius-xl)] border border-border shadow-soft">
                  <div className="relative aspect-[390/812] w-full bg-muted">
                    <Image
                      src="/images/hazel-and-jhonel/hj-mobile.png"
                      alt="The invitation on a phone — names, date, and RSVP call-to-action stacked for mobile"
                      fill
                      className="object-cover object-top"
                      sizes="320px"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                  The mobile invitation — where most RSVPs happen. Mobile-first
                  Tailwind throughout; no separate layouts.
                </figcaption>
              </figure>
            </div>
          </Container>
        </section>

        {/* ── 08 Results ───────────────────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="results" index="08" title="Results">
              <p>
                No invented metrics here — the honest results are operational,
                and they are the point:
              </p>
            </SectionHeader>

            <ul className="max-w-2xl space-y-4 text-lg text-foreground/80">
              {[
                <>The platform is <strong>live in production</strong>, collecting real RSVPs for a real wedding ahead of the November 2026 date — deployed on Vercel with Supabase as the system of record.</>,
                <>Guests reply <strong>without accounts</strong>, on their phones, and get an instant personalized confirmation plus a calendar file; duplicates are impossible by database constraint.</>,
                <>The couple runs the entire wedding — guest list, statuses, every content section, email — <strong>without a developer in the loop</strong>. The caterer's list is one CSV export away.</>,
                <>Operationally quiet by design: email failures cannot lose data, error messages never leak secrets, and content edits go live within the hour without a deploy.</>,
              ].map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* ── 09 Lessons learned ───────────────────────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="lessons" index="09" title="Lessons learned">
              <p>
                What this build taught — and, in the same evidence spirit, what
                it deliberately does not do yet:
              </p>
            </SectionHeader>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  t: "Put the boundary in the database",
                  d: "Route guards are UX; RLS is security. Writing the policies first made every later feature safe by default — a bug in an action can't widen what Postgres permits.",
                },
                {
                  t: "Never let email touch the critical path",
                  d: "Deferring sends with after(), swallowing failures, and tracking outcomes per row means the flakiest dependency in the system can't break the most important moment in it.",
                },
                {
                  t: "Configuration beats hardcoding — even for one client",
                  d: "The form fields, meal options, and limits live in the database. The payoff arrived immediately: the couple tunes their own form, and wedding number two is a data problem, not a rewrite.",
                },
                {
                  t: "Document the seams you're not crossing yet",
                  d: "Multi-wedding is schema-ready but the RLS scoping is honestly deferred — the migration says exactly what to add (wedding_members) before a second couple onboards. Known limits today: no per-wedding roles, image URLs rather than uploads, and no guest self-editing.",
                },
              ].map((c) => (
                <div key={c.t} className="rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-xs">
                  <p className="font-serif text-lg font-semibold text-primary">{c.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{c.d}</p>
                </div>
              ))}
            </div>

            <div className="max-w-2xl space-y-4 text-lg text-foreground/80">
              <p>
                Beside KATHA, this project closes a loop: KATHA proves the
                product craft with a deliberately deferred backend; this
                platform proves the backend — real authentication, real
                Postgres with row-level security, real email — shipped to
                production for people who are counting on it.
              </p>
            </div>
          </Container>
        </section>

        {/* ── Closing links ────────────────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md">
            <div className="flex flex-col items-start gap-6">
              <h2 className="max-w-xl">Read the code, then let&apos;s talk</h2>
              <p className="max-w-xl text-lg text-foreground/80">
                The repository is public and every claim on this page is
                checkable against it.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button href={REPO} target="_blank" rel="noreferrer" variant="primary">
                  GitHub repository
                </Button>
                <Button href={LIVE} target="_blank" rel="noreferrer" variant="outline">
                  Live site
                </Button>
                <Button href="/#contact" variant="ghost">
                  Get in touch
                </Button>
              </div>
              <div className="flex w-full flex-wrap items-center justify-between gap-3">
                <Link href="/projects" className="text-sm font-semibold">
                  ← All projects
                </Link>
                <Link href="/projects/bahay-liwanag" className="text-sm font-semibold">
                  Next project: Bahay Liwanag →
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
