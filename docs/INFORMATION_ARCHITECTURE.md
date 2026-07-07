# Portfolio v2.0 — Information Architecture, Version 2

**Status:** ✅ Approved direction (2026-07-07) — implementation gated on final sign-off of this document
**Supersedes:** IA Version 1 (2026-07-04, the one-page-site blueprint — preserved in git history)
**Author role:** UX architecture
**Scope:** Sitemap, navigation, user journeys, internal linking, page responsibilities. No visual redesign; no implementation in this phase.

---

## 0. Why a Version 2 exists

Version 1 designed a **landing page with one case study**. That site shipped, and then outgrew the premise: the homepage now carries two complete case studies' worth of teasers, four editorial project spreads, and a capability section — destination content living inline. The portfolio has evolved from a landing page into a **portfolio application**.

The governing shift in one line:

> **The homepage is no longer the destination. It is the introduction. Every major section leads to deeper evidence.**

Version 1's core assets are carried forward unchanged: the positioning sentence, the audiences, the claim → proof → explanation → conversion arc, and the evidence discipline (nothing published that can't be verified). What changes is *where things live* and *how visitors move*.

---

## 1. Strategic foundation (carried forward, journey-first)

### Positioning (unchanged)

> **Abby builds complete digital products and business systems — the product, the operations behind it, and the automation that connects them.**

### The primary goal: two recruiter journeys

The entire IA is judged by whether these two paths feel natural — every navigation and linking decision below exists to serve one or both:

```
Engineering Manager                    Founder / Operations Leader

Home                                   Home
 ↓                                      ↓
Projects                               Business Systems
 ↓                                      ↓
KATHA Case Study                       Automation Philosophy
 ↓                                      ↓
GitHub                                 Bahay Liwanag System
 ↓                                      ↓
Interview                              Interview
```

Journey 1 travels the **Projects** pillar; journey 2 travels the **Business Systems** pillar. The two pillars cross-reference each other (§7.4) because the intersection *is* the positioning.

### Naming decisions (approved)

| Old name | New name | Why |
|---|---|---|
| Work / Projects (split) | **Projects** (single) | One word, one container, one nav item. The v1 split ("Work" = KATHA anchor, "Projects" = the other four) cost a nav slot and blurred the site's cleanest word. |
| Automation | **Business Systems** | The value is broader than automation: Abby designs *systems*; automation is one capability inside systems thinking. The page name should claim the larger territory. |

---

## 2. Route audit — current state vs. target

### As of 2026-07-07

| Route | State | Disposition |
|---|---|---|
| `/` | 6 anchor-linked sections; nav is `/#anchor`-based | Slims to a curated overview (§4.1); nav becomes route-based |
| `/work/katha` | ✅ Complete engineering case study | **Moves to `/projects/katha`** — permanent redirect from `/work/katha` |
| `/work/bahay-liwanag` | ✅ Complete business-systems case study | **Moves to `/projects/bahay-liwanag`** — permanent redirect |
| `/resume.pdf` | ⛔ **Broken** — linked from header + footer on every page, file does not exist | Fixed in the same phase: real PDF + `/resume` page |
| `/style-guide` | Internal design reference | Keep, unlisted |

### Known internal references to migrate (implementation checklist, not IA)

- Navbar links (4 anchor links → route links; Resume link target)
- Hero CTAs (`#work`, `#contact` → the two journey entrances, §4.1)
- `FeaturedProject` → `/work/katha` → `/projects/katha`
- `SelectedProjects` Bahay spread → `/work/bahay-liwanag` → `/projects/bahay-liwanag`
- Bahay case study internals: link to `/work/katha`, "← Back to all work" → `/#projects`
- KATHA case study internals: "← Back to all work" → `/#projects`
- Footer link set
- `docs/BAHAY_LIWANAG_EVIDENCE.md` references `/work/bahay-liwanag`

Redirect rule: `/work/:slug → /projects/:slug` (permanent). No `/work` index ever shipped, so only the two case-study URLs need redirects.

---

## 3. Sitemap (approved)

```
/                          Homepage — curated overview & introduction
/projects                  Index of everything built — editorial table of contents
  /projects/katha            ✅ Engineering case study (exists; migrates from /work/)
  /projects/bahay-liwanag    ✅ Business-systems case study (exists; migrates from /work/)
  /projects/casa-kape        Future — created only when real evidence exists
  /projects/purr-heaven      Future — created only when real evidence exists
  /projects/stephanie-center Future — created only when real evidence exists
/business-systems          Capability page — systems thinking (NOT a project page)
/about                     The full story
/resume                    Resume page + Download PDF (/resume.pdf)
/contact                   Contact options
```

**Empty-page rule (approved):** future project routes are **not created** until a verifiable case study exists. Until then, those projects appear on `/projects` with honest link states (§4.2). No dead routes, no placeholder pages, no fabricated content — ever.

---

## 4. Page responsibilities

Each page has one job, a defined content set, and defined exits. "Exits" are the internal-linking contract (§7).

### 4.1 `/` — Homepage: the introduction

**Job:** introduce who Abby is and convince the visitor to keep exploring. Tease the portfolio; never replace it.

**Sections (approved order):**

1. **Hero** — the claim. Two CTAs = the two journey entrances: primary → `/projects`, secondary → `/business-systems`. (Contact stays one click away via the persistent navbar button.)
2. **Featured Project — KATHA** — flagship product proof. Exits: Read the case study → `/projects/katha`; quiet "All projects →" → `/projects`.
3. **Featured Business System — Bahay Liwanag** — flagship systems proof, elevated out of the old Selected Projects wall to mirror the KATHA section (the homepage now *shows* both pillars, in order). Exits: Read the case study → `/projects/bahay-liwanag`; "How I think about systems →" → `/business-systems`.
4. **Featured Projects Preview** — 2–3 of the remaining spreads (Casa Kape, Purr Heaven, Stephanie Center) in the existing scrapbook style, **kept visually rich** — this is a curated sample, not the collection. Exit: **"View all projects" CTA → `/projects`**.
5. **About Preview** — photo/thesis + 2–3 sentences. Exit: "More about me →" → `/about`.
6. **Contact Preview** — the existing CTA band, **direct email intact** (§4.7). Exit: `/contact` for options, `mailto:` for action.

**What leaves the homepage:** destination-weight content only — the full four-spread project wall (its weight moves to `/projects`), the full automation flow detail (moves to `/business-systems`), long-form about (moves to `/about`). The visual identity of every section stays.

### 4.2 `/projects` — the index of everything built

**Job:** the evidence index. Everything Abby has built, one page, scannable in under a minute.

**Form (approved):** *not* a typical portfolio grid — an **editorial table of contents**: magazine contents page / museum exhibition guide / curated collection. Numbered entries, generous whitespace, the scrapbook language (paper, tape, handwritten margin notes) doing wayfinding work: the page should read like the contents spread of the book the case studies are chapters of.

**Every entry carries:**

- Title
- Category (e.g., "Product engineering" / "Business system" / "Website")
- Short description (existing verified blurbs)
- Technologies
- **Available links only, stated honestly:**
  - `Read case study →` (KATHA, Bahay Liwanag)
  - `Live demo →` / `Live site →` (where a live URL exists)
  - `Source →` (KATHA's public repo; others have no public source — the link simply doesn't appear)
  - Projects without a case study yet carry a quiet, honest marker (the existing "case study in progress" pattern) — **never a dead link, never a fabricated one**

**Order:** KATHA first, Bahay Liwanag second (the two pillars, matching homepage order), then the rest.

**Exits:** each entry → its case study / live site; end-of-page → contact band ("seen enough to talk?").

### 4.3 `/projects/katha` and `/projects/bahay-liwanag` — existing case studies

**Job:** unchanged — the deep evidence. Content does not change in this phase; only the URL (with redirects) and the connective tissue:

- Breadcrumb: `← All projects` → `/projects` (top of page, consistent position)
- End-of-page adds **Next project →** (the lateral ring, §7.3)
- **Approved constraint:** Bahay Liwanag's automation content **remains a chapter inside the project case study**. `/business-systems` deep-links into it (e.g., `#automation`, `#crm`); it is not moved or duplicated.

### 4.4 `/business-systems` — the capability page

**Job:** demonstrate how Abby thinks about business systems. This is **not another project page** — it is the systems-thinking hub of the second journey.

**Content (approved scope):**

1. **Philosophy / operational thinking** — the principles (in Abby's words — input needed, §8): automate around the human decision, capture everything as structured data, one source of truth, systems the owner can actually run.
2. **The capabilities, as architecture roles** — CRM architecture, pipelines, workflow design; GoHighLevel (surface + CRM), Make.com (the courier between tools), Airtable (the operational log). Explained as *roles in a system*, not a logo wall.
3. **Systems I've built** — each in operations-native format (Problem → System built → What it removed), and each **deep-linking into the project where it's proven**:
   - Bahay Liwanag booking system → `/projects/bahay-liwanag` (→ `#automation`, `#crm` chapters) — *"Read the full project case study"*
   - Stephanie Center quiz funnel → its future case study, once evidence exists (until then: described only to the extent verifiable, or held back)
4. **Cross-pillar close** — products need systems, systems need products → `/projects` + contact.

**Evidence constraint:** sections 1–2 are Abby's thinking (safe to author with her input). Section 3 claims only what a linked case study evidences — the case studies remain the single source of proof.

### 4.5 `/about` — the full story

**Job:** expand the homepage preview into the real narrative: 6+ years operations → workflow/CRM → automation → product engineering, and why that arc makes the two pillars one practice. Content authored from Abby's input (§8) — not invented.

**Exits:** "See it in practice" → `/projects` · `/resume` · contact.

### 4.6 `/resume` — the credentials page

**Job:** the recruiter's reflex-scan destination. HTML resume (scannable, linkable, SEO-visible) + **Download PDF** → a real `/resume.pdf` (fixing today's broken header/footer link). Content from Abby's actual resume — dates, titles, tools confirmed, none guessed.

**Exits:** Download PDF · contact.

### 4.7 `/contact` — the conversion page

**Job:** make starting a conversation easy, and set expectations. Email first and biggest, then LinkedIn/GitHub; later, optionally, a GHL-powered form (itself portfolio-worthy — "this form runs on a pipeline I built").

**Approved friction rule:** the homepage keeps its contact preview, and **no extra click is ever forced before contacting** — every existing `mailto:` stays a `mailto:`. `/contact` adds options and context; it does not interpose a step.

**Exits:** none. This page is the terminal — email, LinkedIn, GitHub only.

---

## 5. Navigation (approved)

```
[Abby.]        Home · Projects · Business Systems · About · Resume        [Get in touch]
```

- **Items:** Home, Projects, Business Systems, About, Resume, Contact — all real routes. Contact renders as the persistent primary button (existing pattern); the brand mark also links home.
- **No dropdowns.** Six items is within scan range; the `/projects` index does the disclosure work a dropdown would badly.
- **Active-route indication** — the strongest single "this is an application" signal, now possible because items are routes, not anchors. (The v1 anchor nav threw visitors back to the homepage from any case study; that failure mode disappears.)
- **Mobile:** same set in the existing disclosure menu, Contact button included.
- **Footer:** brand + email/GitHub/LinkedIn + a compact sitemap column (the six routes) — the safety net for footer-navigators. Resume link points at `/resume` (page), which offers the PDF.

### Breadcrumbs

Depth-aware, minimal:

- Top-level pages (`/projects`, `/business-systems`, `/about`, `/resume`, `/contact`): **no breadcrumb** — at depth 1 the navbar *is* the breadcrumb.
- Case studies (depth 2): a single consistent `← All projects` at the top of the page (formalizing the existing "back to all work" courtesy link into a location convention).
- Full `Home / Projects / KATHA` trails: **no** in the UI (chrome without orientation gain at this scale); **yes** as BreadcrumbList structured data at implementation time (SEO only).

---

## 6. User journeys — mapped to mechanisms

Every step of both journeys names the UI that carries it. If a mechanism is missing at build time, the journey is broken — this table is the acceptance test.

### Journey 1 — Engineering Manager

| Step | Carried by |
|---|---|
| Home → Projects | Hero primary CTA · nav "Projects" · KATHA section's "All projects →" · Featured Projects Preview's "View all projects" |
| Projects → KATHA | First entry in the table of contents, `Read case study →` |
| KATHA → GitHub | In-page proof buttons (hero + closing section — already exist) |
| GitHub → Interview | Case-study closing contact CTA · navbar "Get in touch" (persistent, so the return path from GitHub lands anywhere and still converts) |

### Journey 2 — Founder / Operations Leader

| Step | Carried by |
|---|---|
| Home → Business Systems | Hero secondary CTA · nav "Business Systems" · Featured Business System section's "How I think about systems →" |
| Business Systems → Philosophy | It's the page's opening chapter — no navigation needed |
| Philosophy → Bahay Liwanag system | "Systems I've built" card → `/projects/bahay-liwanag` (deep-link into `#automation`/`#crm`) |
| Bahay Liwanag → Interview | Case-study closing contact CTA · navbar button |

### Secondary paths (supported, not optimized)

- Curiosity path: Home → About → Projects → Resume → Contact (§7 chains)
- Direct-evaluation path: `/resume` reached from the header at any depth
- Cross-pillar hop: KATHA ↔ Bahay Liwanag ("the other side of the trade" links — §7.4)

---

## 7. Internal linking strategy

### 7.1 The rule

**Every page ends by suggesting the next step. No dead ends anywhere except `/contact` (the terminal).**

### 7.2 Next-step blocks, per page

| Page | End-of-page exits |
|---|---|
| `/` | Sections exit to their pillars throughout; final section is the contact preview |
| `/projects` | Contact band ("seen enough to talk?") |
| Case studies | Proof buttons (GitHub / live) · **Next project →** · contact CTA |
| `/business-systems` | Deep links into evidencing case studies · contact |
| `/about` | → `/projects` · → `/resume` · contact |
| `/resume` | Download PDF · contact |
| `/contact` | Terminal — email, LinkedIn, GitHub |

Which mirrors the approved chains: Home → Projects → Business Systems → Contact · Projects → Case study → GitHub → Next project → Contact · Business Systems → Relevant project → Contact · About → Projects → Resume → Contact.

### 7.3 The lateral ring

Case studies link to the **next project** (…→ KATHA → Bahay Liwanag → KATHA… while there are two; future studies join the ring in `/projects` order). Purpose: a visitor who finishes one chapter never has to climb back up to descend again.

### 7.4 Cross-pillar bridges

KATHA and Bahay Liwanag explicitly reference each other as the two sides of one trade (custom code vs. platform — the links already exist in both studies and are kept deliberate). `/business-systems` bridges into `/projects/*`; project pages with systems content mention `/business-systems` as the thinking behind them. These bridges are the positioning sentence expressed as links.

### 7.5 Honesty rules for links (approved)

- A link renders only if its destination exists (no dead `Source →` on closed-source projects; no case-study links before the case study).
- Missing evidence is stated, not styled around ("case study in progress" — the existing Stephanie Center pattern).
- External links (GitHub, live sites) are visibly external; internal navigation stays client-side.

---

## 8. Required inputs before the dependent pages are written

Per the standing evidence rule (nothing invented), these pages block on Abby's input:

1. **`/resume`** — the actual resume: dates, titles, tools, education. Also unblocks the broken `/resume.pdf`.
2. **`/about`** — the long-form story beats; whether a personal photo exists.
3. **`/business-systems` §1–2** — the philosophy in Abby's words (bullets suffice; structure is my job, principles are hers).
4. **Next case study** — decision + evidence for Casa Kape / Purr Heaven / Stephanie Center. Recommendation: **Stephanie Center** next — its quiz-funnel assets (quiz page, landing page screenshots already in the repo) make it the strongest future anchor for the Business Systems pillar, using the `docs/BAHAY_LIWANAG_EVIDENCE.md` capture-checklist pattern.

Pages that need **no** new input: `/projects` (verified blurbs + links exist), route/nav migration, homepage restructure (reuses existing content as previews), `/contact` (email/LinkedIn/GitHub exist — plus, optional, a response-time expectation line from Abby).

---

## 9. Design continuity (approved constraints)

- **No homepage redesign.** Sections become previews; their visual identity is untouched.
- **The scrapbook/editorial language is the system:** paper, tape, grain, handwritten notes, pressed leaves, editorial layouts, premium whitespace.
- **New pages are chapters of the same book, not separate websites.** `/projects` reads as a contents spread; `/business-systems`, `/about`, `/resume`, `/contact` inherit the case studies' established chapter anatomy (hand-written eyebrow, serif display, evidence blocks, generous margins).
- Case-study pages already share an anatomy (hero → fact strip → contents → numbered sections → closing links); new top-level pages adopt compatible rhythm without cargo-culting the fact strip where no facts exist.

---

## 10. Phasing (build order after sign-off)

| Phase | Scope | Why this order |
|---|---|---|
| **A — Skeleton & migration** | `/projects` index · `/work/* → /projects/*` redirects · route-based nav with active states · fix `/resume.pdf` + `/resume` (needs input #1) · `/contact` | The moment nav items are routes, the application feel lands; the broken resume link dies the same day |
| **B — Homepage as introduction** | Featured Business System section · Featured Projects Preview (2–3 + View all) · About/Contact previews slimmed | Homepage can only become a teaser once `/projects` exists to receive the weight |
| **C — Business Systems page** | `/business-systems` (needs input #3) | Journey 2's hub; deep-links into the already-migrated Bahay study |
| **D — About** | `/about` (needs input #2) | Lowest journey-criticality of the new pages |
| **E — Next case study** | `/projects/stephanie-center` (recommended; needs input #4) | Grows the Business Systems pillar with its second proof |

Each phase runs the standing workflow: Plan → Research → Implement → Build → Lint → Browser verification → Commit → Stop.

---

## 11. Approval gate

This document is the Version 2 contract. **No implementation begins until it is signed off.** On approval, Phase A starts; changes after sign-off amend this document first, code second.
