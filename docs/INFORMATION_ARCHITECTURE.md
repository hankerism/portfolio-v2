# Portfolio v2.0 — Information Architecture & Content Strategy

**Phase:** 1 (Blueprint — no implementation)
**Date:** 2026-07-04
**Author role:** UX strategy / product design
**Status:** Draft for review — contains open inputs (see "Input Gaps" and "Open Questions")

---

## Inputs Used — and Input Gaps

This document was asked to draw on four inputs. Their actual state at time of writing:

| Input | State | How it was used |
|---|---|---|
| `docs/AUDIT.md` | ✅ Complete (Phase 0) | Primary input — findings, positioning goals, and roadmap constraints are carried forward. |
| `docs/PROJECT.md` | ⚠️ **Empty file (0 bytes)** | Not usable. Positioning is taken from the Phase 0 brief instead. |
| `docs/ROADMAP.md` | ⚠️ **Empty file (0 bytes)** | Not usable. Phase mapping follows the roadmap proposed in AUDIT.md. |
| `docs/reference/ghl-homepage.html` | ⚠️ **Empty file (0 bytes)** — the export captured no content | Not usable. Decisions that depend on the current GoHighLevel homepage (what copy/sections/testimonials already exist and perform) are explicitly marked **[GHL input needed]** below. Re-export the page (e.g., browser → View Source → Save, or GHL funnel export) and this document should be revisited in one pass. |

Nothing in this blueprint is invented from the missing files. Where a decision needs a fact that isn't verifiable yet (metrics, testimonials, exact copy from the current site), it is marked as an open input rather than assumed.

---

## 1. Strategic Foundation

### The one-sentence positioning

> **Abby builds complete digital products and business systems — the product, the operations behind it, and the automation that connects them.**

Everything in this IA exists to make a visitor believe that sentence within 30 seconds, then prove it within 3 minutes.

### The narrative arc (why this ordering works)

Most developer portfolios say "I write code." Most VA/ops profiles say "I support businesses." The rare, valuable position is the intersection: **someone who has run business operations for 6+ years and can now engineer the systems she used to operate.** The IA is built as a story in three beats:

1. **Claim** — "I build complete products and business systems" (Hero)
2. **Proof** — KATHA (a real, complete product) + systems/automation work (real business infrastructure)
3. **Explanation** — the operations→engineering background that makes the combination credible (About)

…closing with a single, unambiguous conversion point (Contact).

### Audiences, in priority order

| # | Audience | What they need to see | Deciding moment |
|---|---|---|---|
| 1 | **Recruiters / hiring managers** (product engineer, automation, ops-technical roles) | Real shipped work, modern stack, engineering discipline | "Would a recruiter immediately understand what I actually build?" — answered by Hero + first proof section, above the fold or one scroll below it |
| 2 | **SMB owners / founders** (freelance systems & automation work) | Business fluency: CRM, workflows, GHL — someone who speaks operator, not just developer | The systems section + plain-language copy throughout |
| 3 | **Peers / collaborators** | Craft, taste, writing | Case study depth |

The homepage must serve audience 1 and 2 simultaneously **without splitting into two websites**. The unifying frame: *products* (what gets built) and *systems* (what makes them run). Recruiters read it as range; founders read it as full-service capability.

### Primary conversion goal

One goal per page: **start a conversation** (contact). Secondary goal: **read the KATHA case study**. Every section's CTA must point at one of these two — no competing CTAs (newsletter, socials-first, etc.).

---

## 2. Site Map (v2 scope)

```
/                      Homepage (Phase 2)
/work/katha            Flagship case study (Phase 3)
/work/[future]         Case study template — future automation/systems studies (Phase 4)
/about                 Optional standalone — only if homepage About outgrows itself (Phase 4, decide later)
```

Deliberately small. A portfolio earns depth per page, not page count. Navigation therefore stays flat: **Work · About · Contact** (About and Contact may be homepage anchors until/unless they become routes).

---

## 3. Homepage — Section-by-Section Blueprint

Order is intentional and load-bearing. Rationale follows each section.

---

### 3.1 Navbar

- **Purpose:** Orientation and one-click access to conversion. Establish the brand mark ("Abby.") as identity, not decoration.
- **Key message:** "This is a designed product, and you can reach the important things from anywhere."
- **Visitor takeaway:** *I know where I am and how to act.*
- **Suggested components:** `Navbar` (exists — needs real links per AUDIT H6), brand mark as link-to-top (not a heading), anchor links (Work, Systems, About), one visually distinct `Button` (variant: primary) for **Contact**. Mobile: collapse to minimal menu — with only 3–4 links, prefer a compact inline row over a hamburger if space allows.
- **Future improvements:** Active-section indication on scroll; hide-on-scroll-down/reveal-on-scroll-up behavior; command-palette style quick nav (only if it demonstrably serves the "I build products" story — resist gimmicks).

*Rationale:* AUDIT H6 flagged the current `<nav>` as an empty landmark with an `<h2>` brand. This section fixes purpose, not just markup.

---

### 3.2 Hero — The Claim

- **Purpose:** Land the positioning sentence and filter the visitor into the right proof path within one viewport.
- **Key message:** *"I build complete digital products and business systems."* Explicitly **not** "I build beautiful websites with code" (current copy — the exact framing the project brief retires; AUDIT H3).
- **Visitor takeaway:** *This person ships whole things — product, operations, automation — not just pages.* A recruiter should be able to repeat back what Abby does after reading only this section.
- **Suggested components:**
  - `Hero` (exists — full rewrite of content)
  - Headline: the claim, in plain words, no jargon, no "passionate about"
  - Subhead: the credibility compression — product engineering × 6+ years operations & automation (exact phrasing is CONTENT.md work)
  - Two CTAs max: `Button` primary → "See KATHA" (anchor/route to flagship proof); `Button` secondary → "Get in touch". Note AUDIT H7: CTAs are navigation — render as links styled as buttons, not `<button>` elements.
  - Optional supporting element: a restrained visual token of "systems" (e.g., a small diagram motif or product screenshot) — decide in Phase 2 design, not here.
- **Future improvements:** Rotating or context-aware subhead (recruiter vs. founder phrasing) — only after analytics exist; subtle motion on entry respecting `prefers-reduced-motion`.

*Rationale:* The claim must come before any proof, because proof without a frame reads as "misc projects."

---

### 3.3 Credibility Strip (optional, small)

- **Purpose:** Sub-second scan of scope: core stack and systems tooling in one quiet row. Bridges the claim to the proof without a full section's weight.
- **Key message:** "The toolbox spans both worlds — Next.js/TypeScript *and* CRM/workflow/automation platforms."
- **Visitor takeaway:** *She's fluent in my world's tools* (whichever world the visitor is from).
- **Suggested components:** `CredibilityStrip` or extend `Hero` footer area — text-only list or small monochrome logo row (Next.js, TypeScript, Tailwind, GoHighLevel, [CRM/automation tools — **to confirm from resume, do not guess**]). No progress bars, no percentage skills — those undermine senior positioning.
- **Future improvements:** Replace tool names with outcome numbers when they exist (years, projects shipped, workflows automated) — **[data needed, do not invent]**.

*Rationale:* Optional because it must stay one line tall; if it grows, it's doing the Skills section's job badly and should be cut.

---

### 3.4 Flagship Work — KATHA (Proof #1)

- **Purpose:** The single strongest, fully verifiable proof of "builds complete digital products." One project, treated like a product launch — not a grid of six thumbnails.
- **Key message:** "KATHA is a complete publishing platform — designed, engineered, and shipped end to end."
- **Visitor takeaway:** *This is real production work with real engineering depth — and there's a full case study if I want it.*
- **Suggested components:**
  - `FeaturedWork` section wrapper with editorial-style header
  - `CaseStudyCard` (large format): cover imagery from the product, one-paragraph summary, 3–4 fact bullets drawn from verifiable build history (e.g., full-stack Next.js bookstore/publishing platform; authentication with user/author roles; client-side search engine with result highlighting; cover-management studio and editorial design system — all verifiable in the KATHA repo)
  - `Button` secondary → "Read the case study" (`/work/katha`)
- **Future improvements:** Second and third `CaseStudyCard` instances as more product work ships; light interaction preview (short looping capture of the product) once performance budget is set.

*Rationale:* AUDIT identified KATHA as the flagship asset. Leading proof with the deepest artifact sets the quality bar for everything below it.

---

### 3.5 What I Build — Capabilities Frame

- **Purpose:** Generalize from one flagship to a repeatable offering. This is the section that makes the two audiences converge: it names the *categories* of work.
- **Key message:** "Three connected capabilities: **digital products** (web apps, platforms), **business systems** (CRM, pipelines, client operations), **automation** (workflows that remove manual work)."
- **Visitor takeaway:** Recruiter: *range beyond feature tickets.* Founder: *she can own my whole stack, not one slice.*
- **Suggested components:** `Capabilities` section with three `CapabilityCard`s — each: name, two-sentence plain-language description, representative tools/examples. No prices, no service-menu tone; framed as "what I build," not "what you can buy."
- **Future improvements:** Each card links to a filtered work listing or relevant case study as the portfolio grows; micro-illustrations per capability in the site's design language.

*Rationale:* Placed after the flagship, not before — categories are believable once one concrete example has been seen.

---

### 3.6 Systems & Automation in Practice (Proof #2)

- **Purpose:** Prove the second half of the claim with operational work: the GoHighLevel builds, CRM configurations, and workflow automations. This is the section recruiters for automation/ops-technical roles and founder-clients weight most heavily.
- **Key message:** "Business systems are built product work too — here's real infrastructure I've designed and run."
- **Visitor takeaway:** *She has actually operated and automated businesses — this isn't theoretical.*
- **Suggested components:**
  - `SystemsShowcase` section; 1–3 `SystemCard`s, each structured as **Problem → System built → What it removed/enabled** (an operations-native format that doubles as case-study seeds)
  - Candidate content: the GoHighLevel funnel/quiz build (form logic, scoring workflow, automated follow-up) — **[GHL input needed:** re-export `ghl-homepage.html` and gather workflow specifics so this content is documented, not remembered**]**
  - Outcome numbers only where real — **do not fabricate metrics; mark gaps in CONTENT.md**
- **Future improvements:** Promote the strongest system into a full `/work/` case study with diagrams (Phase 4); anonymized architecture diagrams for client work that can't be shown directly.

*Rationale:* Separating product proof (3.4) from systems proof (3.6) keeps each sharp; the capabilities frame (3.5) between them explains why both belong on one site.

---

### 3.7 About — The Explanation

- **Purpose:** Resolve the "how does one person do both?" question with the actual story: 6+ years in operations and virtual assistance → workflow design → automation → modern web development. The narrative *is* the differentiator; this section makes the unusual combination feel inevitable rather than scattered.
- **Key message:** "I engineer systems well because I've run them. Operations taught me what software has to survive."
- **Visitor takeaway:** *The breadth is coherent — and I'd want to work with this person.*
- **Suggested components:** `About` section — short first-person narrative (3–5 short paragraphs max, written in CONTENT.md phase), one real photo (not stock), optionally a compact `Timeline` (Ops → Workflow/CRM → Automation → Product engineering). CTA at end: quiet link to Contact.
- **Future improvements:** Expand to `/about` route if the story needs more room (Phase 4 decision); pull-quote styling for the thesis line.

*Rationale:* Placed after all proof deliberately — biography before proof reads as justification; after proof it reads as explanation.

---

### 3.8 Contact — The Conversion

- **Purpose:** One clear, low-friction way to start a conversation. The page has been building to exactly one action; this is it.
- **Key message:** "If you're building something — a product, a system, or both — let's talk."
- **Visitor takeaway:** *Reaching out is easy and will be answered.*
- **Suggested components:** `ContactCTA` section — headline, one sentence of invitation, primary `Button` (mailto or contact form), plus plain-text email and LinkedIn/GitHub links for people who won't click buttons. If a form is used later, keep it ≤3 fields; forms are a Phase 4+ enhancement, `mailto:`/direct email is v2-sufficient. (AUDIT H7: this is where the old "Hire Me" dead button's job actually gets done — as a link.)
- **Future improvements:** Scheduling link (Calendly-style) if inbound volume justifies it; a GHL-powered form + workflow — which would itself be portfolio-worthy ("this contact form runs on a pipeline I built") **[GHL input needed]**.

*Rationale:* Single conversion point at the bottom, echoed by the persistent navbar Contact button — standard, effective, honest.

---

### 3.9 Footer

- **Purpose:** Clean landing. Identity echo, minimal link set, no surprises below it (the Phase 0 audit of the GHL site found stray UI below the footer — the v2 rule is: **nothing renders after the footer, ever**).
- **Key message:** "Finished product, down to the last pixel."
- **Visitor takeaway:** *Complete and cared-for.*
- **Suggested components:** `Footer` (exists) — brand mark, computed year (AUDIT M4), links: email, GitHub, LinkedIn. Optionally a quiet "Built with Next.js — view source" link (engineering-discipline signal).
- **Future improvements:** Colophon line (typefaces, stack) as a craft signal.

---

## 4. KATHA Case Study Page (`/work/katha`) — IA Preview

Full treatment is Phase 3; the IA skeleton is fixed now so the homepage card links into a known structure:

1. **Hero** — product name, one-line definition, role ("designed & built end-to-end"), stack line
2. **Context** — what KATHA is and why it was built
3. **The build** — 3–5 subsections matching real engineering arcs from the repo history (auth & user/author model; search engine & highlighting; cover studio & editorial system; polish/production pass)
4. **Design system** — the editorial visual language, with artifacts
5. **What I'd do next** — honest forward look (senior signal)
6. **Next/Contact footer** — route to conversation or next case study

Each future case study (including a GHL systems study) reuses this template — **Purpose: consistency compounds credibility.**

---

## 5. What This Blueprint Feeds

| Downstream doc/phase | What it takes from here |
|---|---|
| `docs/CONTENT.md` (next) | Section-by-section copy briefs: headline + subhead per section, About narrative, KATHA fact bullets, capability descriptions. Also owns the **fact-checklist** (years, tools, metrics — all to be confirmed, none invented). |
| Phase 2 (Homepage build) | Section order 3.1–3.9 is the build order; component names here are the component inventory. |
| Phase 3 (KATHA case study) | Section 4 skeleton. |
| `docs/PROJECT.md` (empty — should be written) | The Strategic Foundation (§1) is a draft of what PROJECT.md should ratify: positioning sentence, audiences, conversion goal. |
| `docs/ROADMAP.md` (empty — should be written) | AUDIT.md's phase plan + this doc's phase notes are the raw material. |

---

## 6. Open Questions & Required Inputs

1. **Re-export the GoHighLevel homepage** — `docs/reference/ghl-homepage.html` is an empty file. Until it exists, the v2 IA cannot honor the "keep what is already strong" principle against the current production site: existing copy, testimonials, section order, and any performing elements are unknown here. *(Also worth capturing while in GHL: the quiz funnel structure — form → scoring → workflow → redirect — both as a systems case-study source and because it's active production work.)*
2. **Fact inventory** — exact tools (CRMs, automation platforms), years per skill area, any real metrics (workflows built, hours saved, clients served). Needed before CONTENT.md; nothing in this blueprint assumes them.
3. **Contact channel decision** — direct email vs. form (recommendation: email for v2 launch; form later).
4. **Photo/visual identity assets** — does a personal photo / logo mark beyond "Abby." exist?
5. **Domain & deployment target** — unresolved from AUDIT (TD5); affects metadata and OG work in Phase 5, not this IA.

---

*Blueprint ends. No source files were modified; this document and its analysis are the complete Phase 1 deliverable pending the open inputs above.*
