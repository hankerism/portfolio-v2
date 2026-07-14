import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Container from "@/components/layout/Container";
import PrintButton from "@/components/ui/PrintButton";
import Doodle from "@/components/ui/Doodle";

/* ---------------------------------------------------------------------------
 * /resume — a chapter of the portfolio book, not a generic CV.
 *
 * Reuses the established language exactly: Navbar/Footer, Container, the
 * case-study numbered-section rhythm, the hand eyebrow + Fraunces titles,
 * the tokens and spacing scale. No new visual vocabulary.
 *
 * Evidence discipline holds here too — it's a resume. Every line traces to a
 * verified source: name (repo/git author), title, summary (Abby's own approved
 * copy), work history (employers + dates supplied by Abby; responsibilities
 * adapted only from the portfolio and verified info, never invented), the tech
 * list (the portfolio's real stack), Selected Work (the three shipped case
 * studies), and Education. Contact URLs are her real, published handles.
 *
 * "Download PDF" prints the page; the print stylesheet (globals.css §8)
 * renders one clean A4 page with nav, footer, and decoration stripped.
 * ------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Résumé — Abigail Marte",
  // Template appends "· Abby", so the full name reads as the distinguisher.
  description:
    "Abigail Marte — Web Developer, AI Automation Builder & GoHighLevel Specialist. Six years in operations, now designing and building complete digital products.",
};

const LINKS = {
  portfolio: "https://hankerism.vercel.app/",
  portfolioLabel: "hankerism.vercel.app",
  github: "https://github.com/hankerism",
  githubLabel: "github.com/hankerism",
  linkedin: "https://www.linkedin.com/in/abigailmarte/",
  linkedinLabel: "linkedin.com/in/abigailmarte",
  email: "blujayabby@gmail.com",
};

/* ── Local building blocks (per-page, matching the case-study pattern) ─────── */

function SectionHeader({
  id,
  index,
  eyebrow,
  title,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
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
    </div>
  );
}

/** A resume section: numbered header + content, on the shared vertical rhythm. */
function ResumeSection({
  id,
  index,
  eyebrow,
  title,
  tone = "default",
  children,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  tone?: "default" | "surface";
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className={
        tone === "surface"
          ? "resume-section border-t border-border bg-surface py-14 sm:py-20"
          : "resume-section border-t border-border py-14 sm:py-20"
      }
    >
      <Container size="md" className="space-y-8">
        <SectionHeader id={id} index={index} eyebrow={eyebrow} title={title} />
        {children}
      </Container>
    </section>
  );
}

/* ── Content (verified sources only) ──────────────────────────────────────── */

/* Verified work history (employers + dates supplied by Abby). Descriptions are
 * adapted only from the portfolio and previously verified information — no
 * invented responsibilities, metrics, or specifics. One tight line each. */
const EXPERIENCE = [
  {
    when: "2026–Present",
    role: "Web Developer & AI Automation Builder",
    org: "Independent Projects",
    body: "Building complete digital products with AI-assisted workflows — Next.js and TypeScript web apps like KATHA, and GoHighLevel systems wired to Make and Airtable.",
  },
  {
    when: "2024–2026",
    role: "Operations & Executive Virtual Assistant",
    org: "Control Your Audience",
    body: "Running systems, workflows, and executive operations across the business.",
  },
  {
    when: "2022–Present",
    role: "Project Manager",
    org: "Wedding PostHouse",
    body: "Coordinating projects, timelines, and communication to keep deliverables on track.",
  },
  {
    when: "2020–2023",
    role: "Scheduling & Operations Assistant",
    org: "Element Talent Agency",
    body: "Managing scheduling, coordination, and day-to-day operations.",
  },
];

const SELECTED_WORK = [
  {
    title: "KATHA",
    href: "/projects/katha",
    desc: "A complete publishing platform for Filipino literature — reader, membership, author studio, search, bookmarks, and reading history — designed and engineered end to end.",
    tech: "Next.js · TypeScript · Tailwind CSS",
  },
  {
    title: "Stephanie Center Wellness",
    href: "/projects/stephanie-center",
    desc: "A functional-medicine practice's full client journey in GoHighLevel — landing pages, funnels, CRM, and automations integrated with AWeber and Practice Better.",
    tech: "GoHighLevel · AWeber · Practice Better",
  },
  {
    title: "Bahay Liwanag",
    href: "/projects/bahay-liwanag",
    desc: "A boutique resort's booking system — a site paired with a Make + Airtable pipeline that turns enquiries into reservations.",
    tech: "GoHighLevel · Make · Airtable",
  },
];

const TECH = [
  { cat: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive design"] },
  { cat: "Backend", items: ["Next.js App Router", "API routes & webhooks", "Data modelling", "Supabase (exploring)"] },
  { cat: "AI & Automation", items: ["Claude Code", "AI-assisted development", "Make.com", "Zapier", "Workflow design"] },
  { cat: "CRM & Marketing", items: ["GoHighLevel", "CRM architecture", "Pipelines", "Funnels & landing pages", "Email automation"] },
  { cat: "Integrations", items: ["Airtable", "AWeber", "Practice Better", "Webhooks & API connections"] },
  { cat: "Developer Tools", items: ["Git & GitHub", "Vercel", "VS Code"] },
];

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default function ResumePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-sm)] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <div className="no-print">
        <Navbar />
      </div>

      <main id="main" className="resume">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <header className="resume-hero border-b border-border bg-gradient-to-b from-lavender-tint/50 to-background">
          <Container size="md" className="py-16 sm:py-20">
            <p className="hand text-2xl text-primary sm:text-3xl">Résumé</p>
            <h1 className="mt-2">Abigail Marte</h1>
            <p className="mt-2 font-serif text-xl text-foreground/80 sm:text-2xl">
              Web Developer <span className="text-border-strong">·</span> AI
              Automation Builder <span className="text-border-strong">·</span>{" "}
              GoHighLevel Specialist
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/80">
              I design, build, and automate complete digital products. After
              more than six years in operations and virtual assistance, I moved
              into modern web development and AI-assisted engineering — so I
              understand a business before I build for it, and I engineer the
              systems I used to run.
            </p>

            {/* Featured technologies — a two-second scan of the core stack. */}
            <p className="mt-4 text-sm font-semibold text-foreground/70">
              Next.js · React · TypeScript · Tailwind CSS · GoHighLevel ·
              Make.com · Claude Code
            </p>

            {/* Contact — readable handles so the printed page carries them too */}
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              {/* The live URL is the label: print strips link styling, so the
                  paper copy must carry the address itself. */}
              <li>
                <a href={LINKS.portfolio} target="_blank" rel="noreferrer" className="text-primary underline-offset-4 hover:underline">
                  {LINKS.portfolioLabel}
                </a>
              </li>
              <li>
                <a href={LINKS.github} target="_blank" rel="noreferrer" className="text-primary underline-offset-4 hover:underline">
                  {LINKS.githubLabel}
                </a>
              </li>
              <li>
                <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="text-primary underline-offset-4 hover:underline">
                  {LINKS.linkedinLabel}
                </a>
              </li>
              <li>
                <a href={`mailto:${LINKS.email}`} className="text-primary underline-offset-4 hover:underline">
                  {LINKS.email}
                </a>
              </li>
            </ul>
          </Container>
        </header>

        {/* ── 01 Experience ────────────────────────────────────────────────── */}
        {/* The standalone "About" section was cut in the final review — it
            restated the hero summary almost verbatim. The summary above now
            carries that job alone, so the page opens straight into evidence. */}
        <ResumeSection id="experience" index="01" eyebrow="the path here" title="Experience" tone="surface">
          <ol className="space-y-0">
            {EXPERIENCE.map((e) => (
              <li
                key={e.role}
                className="grid gap-x-8 gap-y-1 border-b border-border/60 py-6 last:border-0 last:pb-0 first:pt-0 sm:grid-cols-[8rem_1fr]"
              >
                <p className="font-mono text-sm font-semibold uppercase tracking-wider text-accent-hover sm:pt-1">
                  {e.when}
                </p>
                <div className="max-w-2xl">
                  <h3 className="text-xl sm:text-2xl">{e.role}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-foreground/70">{e.org}</p>
                  <p className="mt-2 text-foreground/80">{e.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </ResumeSection>

        {/* ── 02 Selected Work ─────────────────────────────────────────────── */}
        <ResumeSection id="work" index="02" eyebrow="a few things I've built" title="Selected work">
          <ol className="space-y-0">
            {SELECTED_WORK.map((w) => (
              <li
                key={w.title}
                className="grid gap-x-8 gap-y-2 border-b border-border/60 py-6 last:border-0 last:pb-0 first:pt-0 sm:grid-cols-[1fr_auto]"
              >
                <div className="max-w-2xl">
                  <h3 className="text-xl sm:text-2xl">{w.title}</h3>
                  <p className="mt-1.5 text-foreground/80">{w.desc}</p>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">{w.tech}</p>
                </div>
                <Link
                  href={w.href}
                  className="group/cs no-print inline-flex h-fit items-center gap-1.5 self-center text-sm font-bold text-primary no-underline"
                >
                  <span className="underline-offset-4 group-hover/cs:underline">View case study</span>
                  <span aria-hidden className="transition-transform group-hover/cs:translate-x-0.5">→</span>
                </Link>
              </li>
            ))}
          </ol>
        </ResumeSection>

        {/* ── 03 Technologies ──────────────────────────────────────────────── */}
        <ResumeSection id="tech" index="03" eyebrow="the toolbox" title="Technologies" tone="surface">
          <dl className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {TECH.map((group) => (
              <div key={group.cat}>
                <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {group.cat}
                </dt>
                <dd className="mt-2 font-serif text-lg leading-relaxed text-foreground/90">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </ResumeSection>

        {/* ── 04 Education ─────────────────────────────────────────────────── */}
        <ResumeSection id="education" index="04" eyebrow="where it started" title="Education">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl">Bachelor of Science in Business Management</h3>
            <p className="mt-1.5 text-foreground/80">Cavite State University</p>
          </div>
        </ResumeSection>

        {/* ── Closing — Download + links (screen only) ─────────────────────── */}
        <section aria-labelledby="resume-download" className="no-print border-t border-border py-16 sm:py-20">
          <Container size="md">
            <div className="flex flex-col items-start gap-5">
              <p aria-hidden className="hand text-2xl text-primary">take it with you</p>
              <h2 id="resume-download" className="max-w-xl">A copy for your records</h2>
              <p className="max-w-xl text-lg text-foreground/80">
                Save a clean one-page PDF, or reach me directly — whichever is
                easier.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <PrintButton variant="primary">Download PDF</PrintButton>
                <a href={`mailto:${LINKS.email}`} className="font-semibold text-primary underline-offset-4 hover:underline">
                  {LINKS.email}
                </a>
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-1 text-sm font-semibold">
                <li><a href={LINKS.portfolio} target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-primary">Portfolio</a></li>
                <li><a href={LINKS.github} target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-primary">GitHub</a></li>
                <li><a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-primary">LinkedIn</a></li>
              </ul>
              {/* one quiet flourish, screen only */}
              <Doodle kind="sprig" className="size-6 text-sage/50" />
            </div>
          </Container>
        </section>
      </main>

      <div className="no-print">
        <Footer />
      </div>
    </>
  );
}
