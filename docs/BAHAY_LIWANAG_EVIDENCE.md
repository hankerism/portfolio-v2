# Bahay Liwanag Case Study — Evidence Capture Checklist

**Page:** `/projects/bahay-liwanag` (Phase 8B; moved from `/work/bahay-liwanag` in Phase A)
**Rule:** the case study publishes nothing it cannot prove. Everything already on the page is sourced from the live funnel, the public form definition, or published page copy. The items below are the back-office artefacts that live behind logins — they must be captured by Abby from the real workspaces. **Do not reconstruct these from memory or invent placeholders.**

Each item lists where it slots into the page (the dashed `PendingCapture` blocks) so a capture can be dropped in with a one-line edit.

---

## What is already verified (no action needed)

Sourced 2026-07-07 from the live system:

- **Funnel:** 6 GHL pages — Home, Villas, Experiences, Gallery, Book Now, Thank You (`heyitsabby.space/website/bahay-liwanag/*`; LeadConnector funnel engine, media on `filesafe.space`, location `IZA5KmJ907pADwnjL7pz`).
- **Form:** "Bahay Liwanag Booking Form", id `7x9H9qxsWG9HkRmGMdHv`, served by `api.leadconnectorhq.com/widget/form/…`. 8 fields; email + phone required; `payment: null`; redirect to `/thank-you`; form-level `autoResponder: false`, `emailNotifications: false`.
- **Custom fields (verbatim keys):** `contact.checkin_date` (DATE), `contact.checkout_date` (DATE), `contact.number_of_guests` (NUMERICAL), `contact.preferred_villa` (SINGLE_OPTIONS — No Preference / Sampaguita / Narra / Amihan), `contact.special_requests` (LARGE_TEXT). Each declares a `hiddenFieldQueryKey` (e.g. `villa_name`); the villa-page buttons do **not** currently use query-string prefill.
- **Published operating model:** the 4-step "What happens next" card and the manual-confirmation disclaimer on `/book-now`.

## Captures needed — GoHighLevel

Slot: §05 "CRM structure & custom fields" `PendingCapture`.

1. **Opportunities / pipeline view** — the reservations pipeline with its real stage names visible (e.g. new request → confirmed). Full-window screenshot, one opportunity card per stage if possible.
2. **A contact record** with the five custom fields populated by a real submission (blur any real personal data).
3. **Tags / smart lists** used for enquiries, if configured. If none exist, note that — the page will say "segmentation is handled in Airtable" only if that is true.

Slot: §06 "The automation layer" `PendingCapture`.

4. **Workflows list** filtered to this location — names and trigger types visible.
5. **The enquiry workflow canvas** — trigger + every action node readable (confirmation email step, notification step, webhook/Make handoff if that's where it fires).
6. **The confirmation email template** as a guest receives it.

## Captures needed — Make

Slot: §06 `PendingCapture`.

7. **Scenario canvas** — all modules end to end, connection names visible.
8. **Field-mapping panel** of the Airtable module — showing GHL fields mapped to Airtable columns.
9. **Execution history** (one successful run expanded) and **error-handling** config (retries/breaks), if configured.

## Captures needed — Airtable

Slot: §06 `PendingCapture`.

10. **Reservations base** — grid view with column headers readable (blur guest data).
11. **Any working views** (filtered/grouped, e.g. "Pending review", calendar view) the team uses.

## Facts needed (short written answers, not screenshots)

- Where does the "tidy summary" notification land — email, SMS, or the GHL mobile app?
- Does the calendar invite come from GHL Calendars or from Make → Google Calendar?
- Trigger detail: does Make poll GHL, or does a GHL workflow/webhook push to Make?
- Any real numbers worth publishing (enquiries handled, minutes saved per booking) — only if actually measured.

## When a capture arrives

Annotate before publishing (arrows/labels on the screenshot itself or via the page's callout pattern), export PNG at 1920px width to `public/images/bahay-liwanag/`, name it `bahay-liwanag-<tool>-<subject>.png`, and replace the corresponding `PendingCapture` items in `src/app/projects/bahay-liwanag/page.tsx` with a `Shot`/annotated figure. Update the §03 architecture diagram node from dashed to solid once its subsystem is evidenced.
