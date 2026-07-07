# Stephanie Center Wellness Case Study — Evidence Register & Capture Checklist

**Page:** `/projects/stephanie-center` (Phase E)
**Rule:** the case study publishes nothing it cannot support. This was built for a **real client**, so attribution is strict — the page claims only what Abby personally built, migrated, integrated, or configured, and never implies she authored the client's brand, copy, medical program, or strategy. Missing evidence is listed here, not invented on the page.

---

## Attribution boundary (non-negotiable)

- **Abby (claimable):** rebuilding/implementing the pages inside GoHighLevel, the responsive/mobile build, landing pages, connecting lead capture, integrating marketing forms, preparing CRM workflows, supporting automations, UX improvements, basic SEO, preserving AWeber, integrating Practice Better, moving toward native GHL forms.
- **The client (NOT Abby):** the brand and visual identity, all copy, the medical program and its "CALM · RESTORE · REGROW" framework, the "Hair Growth Accelerator" program design, the quiz's diagnostic content, the testimonials, and Stephanie's bio/credentials. The page presents this work; it does not claim it.

---

## What is verified (evidence in hand, 2026-07-07)

**Source A — the client-approved project brief** (authoritative for scope, role, platforms):
- Project type: rebuild/migration + implementation inside GoHighLevel, preserving the existing visual identity and marketing ecosystem.
- Platforms: GoHighLevel (website, CRM, funnels, landing pages, forms, contacts, pipelines, automations, calendars); AWeber (email/nurture, preserved); Practice Better (consultation, portal, appointments).
- Role: the implementation list above.
- Visual identity: Playfair Display, Crimson Pro, Montserrat, Merriweather Italic; warm/editorial/premium/feminine tone.

**Source B — three screenshots of pages built** (`public/images/stephanie-center/`):
- `steph-homepage.png` — the education-first homepage (the client's "Hair Growth Accelerator" program, CALM·RESTORE·REGROW framework, modules, testimonials, About/bio, FAQ, email capture footer).
- `steph-quiz-page.png` — the "Hair Loss Type Quiz" funnel: nine questions ("QUESTION 1 OF 9"), five root-cause drivers (GI, Hormone, Autoimmune, Nutrient Depletion, Stress/Adrenal), result = primary + secondary driver. Footer reveals the site IA (Explore: About/Quiz/Contact; Work With Us: 1:1 Services/Group Program/Courses/Guides; Connect: Book a Call/Podcast/YouTube/Instagram).
- `steph-cheating-seet-landing-page.png` — the guides landing: free "Hair Growth Lab Cheat Sheet" (email capture), a $47 "Optimal Lab Ranges for Hair Growth Guide", and a "Book Your Hair Loss Root Cause Assessment" CTA.

These three pages corroborate the brief's funnel: education → lead capture (quiz/cheat sheet email forms) → nurture → consultation (Root Cause Assessment / Book a Call) → program.

---

## What is MISSING (evidence gaps — do not invent; capture to fill)

Slot: §05 "The business system" `PendingCapture`, and the dashed nodes in §02/§03.

1. **GoHighLevel forms** — the native lead-capture forms and where each submission lands.
2. **GoHighLevel contacts & pipeline** — how leads are organised; the pipeline stages a lead moves through.
3. **GoHighLevel workflows** — the automations prepared/supported (trigger → action). The page says "prepared/supported" and nothing more specific, because nothing more is evidenced.
4. **AWeber integration** — how on-site lead capture connects to the existing list and nurture sequences.
5. **Practice Better integration** — how a booked consultation flows into the client portal/appointments.
6. **Calendars** — the booking/calendar setup behind "Book a Call".
7. **A public URL** — no live link is recorded anywhere in the repo or brief. If the client site is public and Abby is cleared to link it, add it to the projects index entry and the case-study hero.
8. **Additional pages named in the brief but not screenshotted** — About, Contact, the Hair Growth Accelerator Waitlist, guide-download and thank-you pages. Screenshots would let the case study show more of the funnel it currently only names.
9. **Fonts confirmation** — the typography list comes from the brief; a GHL theme/settings screenshot would let the case study state it as shown, not stated.

---

## Assumptions deliberately NOT made

- No metrics of any kind (traffic, conversion, revenue, list size) — none were in evidence.
- No workflow/trigger logic, CRM field names, pipeline stage names, or segmentation described — the back office wasn't shown.
- No email sequence content described.
- No claim that Abby designed the quiz's diagnostic scoring, the program, or any copy.
- No invented live URL or domain (the BrowserFrame address bar was omitted for this project on purpose).

---

## When a capture arrives

Annotate (blur any real client/personal data first), export PNG at ~1920px to `public/images/stephanie-center/`, name it `steph-<subject>.png`, and replace the corresponding `PendingCapture` items in `src/app/projects/stephanie-center/page.tsx` with a `Plate`/annotated figure. Flip the matching §02/§03 dashed node to solid once its subsystem is evidenced. If a public URL is cleared, add `live` to the `/projects` index entry and a hero link.
