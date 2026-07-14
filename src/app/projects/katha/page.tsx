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
 * /projects/katha — the KATHA engineering case study.
 *
 * Written as a design document for engineering reviewers, not a portfolio
 * splash. Every claim on this page is sourced from the public repository
 * (github.com/hankerism/katha): module documentation, the route tree,
 * package.json, git history, and tagged releases. Where the codebase
 * documents its own reasoning, it is quoted directly (the Evidence blocks).
 * Nothing here is invented — no metrics, no retrofitted decisions.
 * ------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "KATHA — Engineering Case Study",
  description:
    "How KATHA, a complete reading and publishing platform, was designed and built end to end: architecture, data layer, identity model, search engine, and the trade-offs accepted along the way.",
};

const LIVE = "https://katha-sigma.vercel.app/";
const REPO = "https://github.com/hankerism/katha";

/* Verified repository facts (see commit history + package.json). */
const FACTS = [
  { n: "64", label: "commits" },
  { n: "2", label: "tagged releases" },
  { n: "17", label: "routes" },
  { n: "40", label: "components" },
  { n: "94", label: "TypeScript modules" },
  { n: "3", label: "runtime dependencies" },
];

const TOC = [
  ["overview", "Overview"],
  ["architecture", "Architecture"],
  ["ia", "Information architecture"],
  ["data", "The data layer"],
  ["identity", "Identity & roles"],
  ["reading-state", "The reading-state system"],
  ["search", "The search engine"],
  ["components", "Component & design system"],
  ["quality", "Accessibility & performance"],
  ["history", "Build history"],
  ["trade-offs", "Trade-offs & the road to v2"],
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

export default function KathaCaseStudy() {
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
            {/* Breadcrumb — the one depth-2 wayfinding link (IA v2 §5) */}
            <Link
              href="/projects"
              className="text-sm font-semibold text-foreground/70 no-underline hover:text-primary"
            >
              ← All projects
            </Link>
            <p className="hand mt-6 text-2xl text-primary sm:text-3xl">Case study</p>
            <h1 className="mt-2 text-balance">
              KATHA — engineering a reading &amp; publishing platform end to end
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/80">
              A quiet, premium home for Filipino literature: a reading experience,
              a searchable catalogue, and an author studio — designed, built, and
              shipped as one product. This page explains how it is put together
              and why, using only what the repository itself can verify.
            </p>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-border/70 pt-6">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Role</dt>
                <dd className="text-sm font-semibold">Design &amp; engineering, end to end</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Stack</dt>
                <dd className="text-sm font-semibold">Next.js 16 App Router · TypeScript · Tailwind CSS 4</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Status</dt>
                <dd className="text-sm font-semibold">v2.0.0 — live in production</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={LIVE} target="_blank" rel="noreferrer" variant="primary">
                Visit the live product
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
                KATHA is two products sharing one system: a <strong>reader</strong>{" "}
                (library, search, bookmarks, history, continue-reading) and an{" "}
                <strong>author studio</strong> (drafting, chapters, autosave,
                covers, publishing). Readers and authors are the same identity at
                different stages of a ladder — a modelling decision that shapes
                the whole architecture (§05).
              </p>
              <p>
                Everything below is verifiable: the product is{" "}
                <a href={LIVE} target="_blank" rel="noreferrer">live</a>, the{" "}
                <a href={REPO} target="_blank" rel="noreferrer">repository is public</a>,
                and the modules quoted here can be read in full.
              </p>
            </SectionHeader>

            <Shot
              src="/images/katha/katha-homepage.png"
              alt="The KATHA homepage: featured novel, curated shelves, genre browser, mission, and author directory"
              url="katha-sigma.vercel.app"
              caption="The production homepage — featured work, curated shelves, genre browsing, and the author directory, all served from the catalogue described in §04."
              priority
            />
          </Container>
        </section>

        {/* ── 02 Architecture ──────────────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="architecture" index="02" title="Architecture">
              <p>
                The dependency list <em>is</em> the first architectural decision:
                the production dependency tree is{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">next</code>,{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">react</code>,{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">react-dom</code>{" "}
                — nothing else. Search, persistence, the identity ladder, and the
                design system are pure TypeScript modules in the repo rather than
                imported packages. What it proves: features here are{" "}
                <em>implemented</em>, not assembled.
              </p>
              <p>
                The system is layered so that coupling only flows in one
                direction — UI knows selectors, selectors know domain modules,
                domain modules know nothing about React:
              </p>
            </SectionHeader>

            {/* Layer diagram — matches the module boundaries in /lib */}
            <figure aria-label="Architecture layers" className="mx-auto max-w-2xl">
              <div className="space-y-0 text-center text-sm">
                {[
                  ["Routes", "App Router — 17 pages in two route groups: (reader) and studio"],
                  ["Components", "40 shared components; interactivity isolated to \"use client\" islands"],
                  ["Selectors", "content-aware helpers (lib/*-selectors.ts) — the only layer allowed to join stored state with book content"],
                  ["Domain modules", "pure TypeScript — books, search, membership, bookmarks, history, continue-reading"],
                  ["Sources", "static in-memory catalogue · localStorage (pre-auth, per device)"],
                ].map(([name, desc], i, arr) => (
                  <div key={name}>
                    <div className="rounded-[var(--radius-md)] border border-border bg-card px-4 py-3 shadow-xs">
                      <p className="font-serif text-base font-semibold text-primary">{name}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{desc}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <p aria-hidden className="py-1 text-muted-foreground">↓</p>
                    )}
                  </div>
                ))}
              </div>
              <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                Dependency direction is one-way, top to bottom. The two sources at the base are the only impure edges in the system.
              </figcaption>
            </figure>
          </Container>
        </section>

        {/* ── 03 Information architecture ──────────────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="ia" index="03" title="Information architecture">
              <p>
                Two App Router route groups keep the reading product and the
                writing product cleanly separated — different navigation,
                different concerns, one codebase. The decision this proves:
                route groups as <em>product boundaries</em>, not folder
                decoration.
              </p>
            </SectionHeader>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-xs">
                <p className="font-serif text-lg font-semibold text-primary">(reader) — 11 routes</p>
                <ul className="mt-3 space-y-1.5 font-mono text-[0.8rem] text-foreground/80">
                  {[
                    "/",
                    "/library",
                    "/library/[slug]",
                    "/library/[slug]/read/[chapter]",
                    "/search",
                    "/authors",
                    "/authors/[slug]",
                    "/bookmarks",
                    "/history",
                    "/continue-reading",
                    "/join",
                  ].map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-xs">
                <p className="font-serif text-lg font-semibold text-primary">studio — 6 routes</p>
                <ul className="mt-3 space-y-1.5 font-mono text-[0.8rem] text-foreground/80">
                  {[
                    "/studio",
                    "/studio/new",
                    "/studio/works/[id]",
                    "/studio/works/[id]/chapters/[chapterId]",
                    "/studio/works/[id]/preview",
                    "/studio/works/[id]/preview/[chapterSlug]",
                  ].map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  The studio preview routes render chapters through the same
                  reader components — authors proof their work in exactly the
                  typography readers will get.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ── 04 Data layer ────────────────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="data" index="04" title="The data layer">
              <p>
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">lib/books.ts</code>{" "}
                is the single source of truth for book and chapter data —
                framework-agnostic by contract, shaped so a database can replace
                it without touching a single UI surface. The module documents
                this intent itself:
              </p>
            </SectionHeader>

            <Evidence file="lib/books.ts">
              &ldquo;Static sample data for now, shaped for a real source later …
              swapping <span className="text-primary">AUTHORED_BOOKS</span> for{" "}
              <span className="text-primary">JSON.parse(…)</span> or a query
              result is a one-line change … Every helper is a function over the
              record; call sites need no change when the bodies become{" "}
              <span className="text-primary">await prisma.book.*</span>.&rdquo;
            </Evidence>

            <div className="max-w-2xl space-y-4 text-lg text-foreground/80">
              <p>
                What this proves: the migration path to a real database was an
                explicit design constraint, not an afterthought. Derived fields
                (chapter numbers, reading time) are stamped by one transform —
                the same transform a loader would run on raw rows — so authored
                data can never drift from rendered data.
              </p>
            </div>
          </Container>
        </section>

        {/* ── 05 Identity & roles ──────────────────────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="identity" index="05" title="Identity & roles">
              <p>
                One identity, three states:{" "}
                <strong>guest → reader → author</strong>. The model separates the{" "}
                <em>person</em> (account) from the <em>pen</em> (public writing
                identity) — becoming an author links a profile to the same user
                rather than creating a second account, which is how pen names
                work in real publishing.
              </p>
              <p>
                Real authentication is deliberately deferred — but the{" "}
                <em>seam</em> for it is not. All role gating flows through one
                function, and the module names exactly where the future backend
                plugs in:
              </p>
            </SectionHeader>

            <Evidence file="lib/membership.ts">
              &ldquo;<span className="text-primary">getViewer()</span> remains THE
              authentication seam: with Supabase it derives the same Viewer from
              users + authors rows, and everything downstream is already
              correct.&rdquo;
            </Evidence>

            <div className="max-w-2xl space-y-4 text-lg text-foreground/80">
              <p>
                What this proves: knowing which decision to defer is itself an
                engineering decision. The whole onboarding ladder — join, become
                an author, complete the author profile, enter the studio — is
                walkable today, and swapping in sessions changes one derivation,
                not the product.
              </p>
            </div>
          </Container>
        </section>

        {/* ── 06 Reading-state system ──────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="reading-state" index="06" title="The reading-state system">
              <p>
                Bookmarks, reading history, and continue-reading are three
                features with one shared shape: a{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">ReadingLocation</code>{" "}
                — book → chapter → paragraph, plus the fields needed to render
                it. Each feature keeps its own independent storage; none of them
                is allowed to touch book content directly.
              </p>
            </SectionHeader>

            {/* Flow diagram — mirrors the actual module boundaries */}
            <figure aria-label="Reading-state data flow" className="overflow-x-auto">
              <div className="mx-auto grid min-w-[560px] max-w-3xl grid-cols-3 gap-3 text-center text-xs sm:text-sm">
                {["bookmarks", "history", "continue-reading"].map((f) => (
                  <div key={f} className="rounded-[var(--radius-md)] border border-border bg-card px-3 py-2.5 font-mono shadow-xs">
                    lib/{f}.ts
                    <p className="mt-0.5 font-sans text-[0.7rem] text-muted-foreground">pure persistence</p>
                  </div>
                ))}
                <p aria-hidden className="col-span-3 py-0.5 text-muted-foreground">↓ shared shape: lib/reading-location.ts ↓</p>
                <div className="col-span-3 rounded-[var(--radius-md)] border border-border bg-card px-3 py-2.5 font-mono shadow-xs">
                  lib/*-selectors.ts
                  <p className="mt-0.5 font-sans text-[0.7rem] text-muted-foreground">
                    the only layer that joins stored locations with book content
                  </p>
                </div>
                <p aria-hidden className="col-span-3 py-0.5 text-muted-foreground">↓</p>
                <div className="col-span-3 rounded-[var(--radius-md)] border border-border bg-card px-3 py-2.5 shadow-xs">
                  <span className="font-mono">ReadingLocationCard</span>
                  <p className="mt-0.5 text-[0.7rem] text-muted-foreground">
                    one card renders all three features&rsquo; entries
                  </p>
                </div>
              </div>
            </figure>

            <Evidence file="lib/bookmark-selectors.ts">
              &ldquo;Kept separate on purpose:{" "}
              <span className="text-primary">lib/bookmarks.ts</span> stays a pure
              persistence layer (safe to swap for an API / cloud sync), while all
              book-content coupling lives in the selector layer. UI consumes
              selectors, never lib/books.ts directly.&rdquo;
            </Evidence>

            <Shot
              src="/images/katha/katha-reader-mode.png"
              alt="The KATHA reader: chapter contents rail with reading progress and bookmark access beside long-form typography"
              url="katha-sigma.vercel.app/library/table-for-two/read"
              caption="The reader in production — chapter rail, reading progress, and bookmark access on the left; the captured positions feed the system diagrammed above."
              aspect="aspect-[16/10]"
            />
          </Container>
        </section>

        {/* ── 07 Search ────────────────────────────────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="search" index="07" title="The search engine">
              <p>
                Search is a pure function from{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">(query, books)</code>{" "}
                to ranked, grouped results — no React, no DOM, no storage, and no
                import of the catalogue itself, which makes the whole engine
                testable in isolation. Matching is deliberately forgiving; every
                query token must hit (AND semantics), and each token scores on a
                descending ladder:
              </p>
            </SectionHeader>

            <figure aria-label="Search match ladder" className="mx-auto max-w-xl">
              <ol className="space-y-2">
                {[
                  ["exact", "the token equals the text"],
                  ["prefix", "the text starts with the token"],
                  ["word-start", "any word starts with the token"],
                  ["substring", "the token appears anywhere"],
                  ["fuzzy word", "bounded edit distance — typo-tolerant, including word prefixes"],
                  ["subsequence", "in-order characters — the last resort"],
                ].map(([name, desc], i) => (
                  <li
                    key={name}
                    className="flex items-baseline gap-3 rounded-[var(--radius-md)] border border-border bg-card px-4 py-2.5 shadow-xs"
                    style={{ marginInlineStart: `${i * 4}%` }}
                  >
                    <span className="font-mono text-xs font-bold text-accent-hover">{i + 1}</span>
                    <span className="font-mono text-sm font-semibold text-primary">{name}</span>
                    <span className="text-sm text-muted-foreground">{desc}</span>
                  </li>
                ))}
              </ol>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Token scores are averaged, then weighted by field: book title &gt; author &gt; category &gt; chapter title. Diacritics are folded character-by-character so highlight ranges always align with the original text.
              </figcaption>
            </figure>

            <div className="max-w-2xl space-y-4 text-lg text-foreground/80">
              <p>
                One more deliberate boundary: clients search against{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">getSearchIndex()</code>{" "}
                — a minimal structural type — so chapter prose never ships in the
                browser bundle just to make titles searchable.
              </p>
            </div>
          </Container>
        </section>

        {/* ── 08 Component & design system ─────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="components" index="08" title="Component & design system">
              <p>
                Forty shared components, built server-first: 37 of the 94
                TypeScript modules opt into{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">&quot;use client&quot;</code>{" "}
                — interactivity (the reader&rsquo;s controls, bookmarking, the
                studio editor) is isolated to islands while everything else
                renders on the server. Reuse is visible in the git history
                itself: <em>&ldquo;reusable BookCard component&rdquo;</em>,{" "}
                <em>&ldquo;shared AuthorCard&rdquo;</em>,{" "}
                <em>&ldquo;loading skeletons for all dynamic routes&rdquo;</em>.
              </p>
              <p>
                The design system is typographically deliberate (documented in{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">docs/design/</code>):
                Cormorant Garamond for the brand, Literata for headings and
                long-form reading, Inter for UI — all self-hosted via{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">next/font</code>.
                The stated color philosophy: <em>&ldquo;KATHA should feel like
                walking into a quiet bookstore.&rdquo;</em>
              </p>
            </SectionHeader>

            <figure>
              <div className="relative">
                <BrowserFrame url="katha-sigma.vercel.app/library" className="shadow-soft">
                  <div className="relative aspect-[16/10] w-full bg-muted">
                    <Image
                      src="/images/katha/katha-library.png"
                      alt="The KATHA library: search field, genre filter chips, and shelves of BookCard components"
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 900px, 94vw"
                    />
                  </div>
                </BrowserFrame>
                {/* Callout: the reused primitive */}
                <div
                  aria-hidden
                  className="absolute left-[4%] top-[52%] hidden rounded-[var(--radius-sm)] border-2 border-accent/80 sm:block"
                  style={{ width: "20%", height: "34%" }}
                />
                <p
                  aria-hidden
                  className="hand absolute left-[26%] top-[70%] hidden text-xl text-accent-hover sm:block"
                >
                  ← BookCard — one component, every shelf
                </p>
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                The library in production: URL-driven genre filtering over the shared catalogue, rendered entirely with the BookCard primitive introduced in the project&rsquo;s first week.
              </figcaption>
            </figure>
          </Container>
        </section>

        {/* ── 09 Accessibility & performance ───────────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="quality" index="09" title="Accessibility & performance">
              <p>
                Quality work here is verifiable in the history rather than
                claimed: a dedicated{" "}
                <em>&ldquo;motion-safe sweep&rdquo;</em> pass,{" "}
                <em>&ldquo;next/font migration + motion consistency&rdquo;</em>,
                and <em>&ldquo;loading skeletons for all dynamic routes&rdquo;</em>{" "}
                all appear as commits in the v1.0 polish series. The global
                stylesheet carries explicit{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">prefers-reduced-motion</code>{" "}
                and{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">focus-visible</code>{" "}
                handling.
              </p>
              <p>
                On performance, the architecture does the work: a server-first
                component tree, self-hosted fonts with no render-blocking
                requests, a search index that keeps prose out of the bundle, and
                a dependency tree of exactly three packages. No third-party
                scripts, no client-side data fetching for the catalogue.
              </p>
            </SectionHeader>
          </Container>
        </section>

        {/* ── 10 Build history ─────────────────────────────────────────────── */}
        <section className="border-t border-border bg-surface py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="history" index="10" title="Build history">
              <p>
                64 commits, two tagged releases, one merged pull request — built
                in disciplined, named phases. A condensed arc, with subjects
                taken verbatim from the log:
              </p>
            </SectionHeader>

            <ol className="relative mx-auto max-w-2xl space-y-0 border-s border-border ps-6">
              {[
                ["Foundation", "chore: initialize KATHA project · docs: add KATHA design foundation"],
                ["Homepage", "reusable Button · responsive navbar · homepage hero · reusable BookCard · discovery sections"],
                ["Library", "Phases 1–3 — real catalogue · URL-driven genre filtering · home shelves consume the catalogue"],
                ["Reading state", "reading location architecture · bookmarks · reading-history persistence · Continue Reading"],
                ["Search", "Phases 1–3 — pure fuzzy query engine · search components · /search page (merged as PR #1)"],
                ["Authors", "Phases 1–3 — author domain · profile navigation · /authors index + shared AuthorCard"],
                ["v1.0 polish → v1.1.0", "launch blockers · search index · shared icons · next/font migration · motion-safe sweep · loading skeletons"],
                ["Studio", "Phases 1–4 — route groups + Work domain · the writer's desk · chapter editor with autosave · reader-quality preview"],
                ["Membership", "Phases 1–4 — viewer domain · /join · free-preview edge · the author ladder"],
                ["User/Author split", "the person and the pen · Complete Author Profile — where the pen name is born"],
                ["Editorial & covers", "editorial covers + cover/publishedAt model · Studio cover upload · the curated catalogue — 15 titles, 13 shelves, 14 voices"],
                ["Production → v2.0.0", "craftsmanship sprint · \"Museum pass: KATHA is production-ready\""],
              ].map(([phase, detail]) => (
                <li key={phase} className="relative pb-6 last:pb-0">
                  <span aria-hidden className="absolute -start-[1.85rem] top-1.5 size-2.5 rounded-full bg-accent" />
                  <p className="font-serif text-lg font-semibold text-primary">{phase}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* ── 11 Trade-offs & v2 ───────────────────────────────────────────── */}
        <section className="border-t border-border py-16 sm:py-20">
          <Container size="md" className="space-y-10">
            <SectionHeader id="trade-offs" index="11" title="Trade-offs & the road to v2">
              <p>
                Every architecture buys something by giving something up. These
                are the trades KATHA makes today — each one paired with the seam
                the codebase already documents for undoing it:
              </p>
            </SectionHeader>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  t: "localStorage persistence",
                  cost: "Reading data is per-device and clearable; there is no cross-device sync.",
                  seam: "The persistence modules are pure and, per their own docs, “safe to swap for an API / cloud sync.”",
                },
                {
                  t: "Static in-memory catalogue",
                  cost: "Content ships with deploys; adding a book is a commit, not a form.",
                  seam: "books.ts is shaped so a database or JSON payload satisfies it directly — “a one-line change” at the loader.",
                },
                {
                  t: "Deferred authentication",
                  cost: "Accounts are a local stub until sessions exist; there is no real sign-in.",
                  seam: "getViewer() is the single authentication seam; Supabase derives the same Viewer and “everything downstream is already correct.”",
                },
                {
                  t: "Client-side search",
                  cost: "The search index ships to the browser and scales with the catalogue.",
                  seam: "getSearchIndex() already minimises the payload (no prose); the pure engine could run server-side unchanged.",
                },
              ].map((c) => (
                <div key={c.t} className="rounded-[var(--radius-lg)] border border-border bg-card p-5 shadow-xs">
                  <p className="font-serif text-lg font-semibold text-primary">{c.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    <span className="font-bold text-accent-hover">Costs:</span> {c.cost}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    <span className="font-bold text-sage">The documented seam:</span> {c.seam}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-2xl space-y-4 text-lg text-foreground/80">
              <p>
                v2, therefore, is not a rewrite — it is filling seams the system
                was built around: real sessions via the getViewer() derivation, a
                database behind the books loader, and cloud sync behind the
                persistence modules. The UI layer does not change.
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
                The repository is public and every claim on this page is checkable
                against it.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button href={REPO} target="_blank" rel="noreferrer" variant="primary">
                  GitHub repository
                </Button>
                <Button href={LIVE} target="_blank" rel="noreferrer" variant="outline">
                  Live product
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
