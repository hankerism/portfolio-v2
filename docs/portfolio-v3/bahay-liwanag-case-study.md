# Bahay Liwanag Case Study

## Executive Summary

Bahay Liwanag is a boutique resort project built to show how a simple booking website can become a real operational system. The core problem was not simply “create a website.” The problem was to turn a fragmented booking experience into one structured workflow that could collect guest requests, log them in a consistent way, and move them toward a human availability review without creating unnecessary manual work.

The website and booking flow are served through GoHighLevel, with structured fields on the booking form and a clear operating model in the published “What happens next” flow. The system is intentionally designed to automate the intake and acknowledgement stages while preserving the human decision point: checking villa availability and confirming the stay. That is the central business logic of the project.

This case study demonstrates both product thinking and system thinking. The public-facing experience is polished and clear, but the real value is in the underlying system: a booking intake path, a clearly defined contact schema, a logic-first process, and an operational model that keeps the business moving without forcing manual re-entry at every step.

### Business problem
The business problem was a classic hospitality issue: enquiry requests were at risk of being scattered, inconsistent, and difficult to manage. A guest might submit a form, ask in a message, or call directly, and the business still needed a way to capture the same information in a structured way. Without that structure, lead handling becomes inconsistent and time-consuming.

### Technical challenge
The challenge was to build a booking system that could capture the right information, store it in a way the business could understand, and maintain a clean flow without introducing a payment step before the staff had reviewed availability. That meant designing for both the guest experience and the internal operational process.

### My thinking
I approached the work as a systems problem, not a visual design problem. The most important question was not “How do we make the page look good?” but “How does a booking enquiry move from interest to a usable record, and what parts of that should be automated without removing human judgement?”

### Why I made these decisions
I chose a workflow that automates the capture, acknowledgment, and logging of the enquiry while preserving the availability review as a manual step. This keeps the process realistic for a boutique resort, where trust and personal review matter. It also avoids creating a fragile system that looks efficient but actually adds friction.

### Implementation
The site is organized as a clear public funnel: landing page, villa pages, experiences, gallery, booking page, and thank-you page. The booking form captures the key reservation details without requiring a payment step. The form is stripped of auto-responder and form-level email notification settings so the workflow layer owns the acknowledgement and routing logic instead of the form itself.

### Business value
This system creates a more maintainable and easier-to-manage booking intake flow. It centralizes reservation information, helps structure the front end, and supports a cleaner handoff into operational review. The value is qualitative: streamlined booking management, centralized reservation workflow, improved maintainability, and a better guest experience.

### What I learned
The most important lesson was that operational clarity is often more valuable than visual complexity. A good booking system isn’t only a nice page—it is a reliable process that keeps both the guest and the business aligned. That principle carried through the rest of the portfolio work.

---

## Project Overview

Bahay Liwanag is a boutique villa resort concept with three villa offerings and a guest journey built around a clear reservation path. The project includes a public brand presence, villa-specific pages, guest-facing storytelling, and a reservation form designed to capture a request before the guest is asked to commit to payment.

This case study is useful because it demonstrates a different kind of engineering value than a pure frontend build. It shows how a polished experience can be paired with a structured operational system that supports a real booking workflow.

### Business problem
The business challenge was to create a straightforward path from “I’m interested in a stay” to “the request is captured and reviewed.” In real guest operations, that path can easily become messy if there are too many channels, too many manual steps, or unclear follow-up logic.

### Technical challenge
The challenge was to keep the front end simple while allowing the back-end logic to be structured and maintainable. The system needed to feel lightweight and user-friendly to the guest but still preserve enough detail to support the business’s internal review process.

### My thinking
I treated the website as a front door to an internal system rather than as a standalone marketing page. That made the booking form and the guest journey central to the design, rather than secondary details after the visual work.

### Why I made these decisions
I decided to keep the public funnel simple and the reservation intake focused. This reduces friction for the guest and ensures the booking path does not become bloated or confusing. The system is designed to be clear, organized, and easy for a business to handle without requiring manual copy/paste processes.

### Implementation
The project is structured into stages: homepage, villa presentation, guest experience pages, gallery, booking page, and thank-you page. The booking page is the operational anchor because it captures all the information needed to route an enquiry into the proper stage of the guest journey.

### Business value
The business value is a cleaner guest journey and a more maintainable intake process. Instead of a fragmented reservation process, the project creates a single path for requests and a clear way for the business to reason about them.

### What I learned
A reservation flow is not just a form—it is a business system. The better the intake logic is designed, the easier it is to operate and the less manual work is required later.

---

## Business Problem

The business problem behind Bahay Liwanag is the classic hospitality challenge of converting interest into a real stay request without creating a cumbersome intake process. A boutique resort often needs to gather dates, villa preferences, guest count, and preferences while still making the experience feel simple and low-friction.

### Business problem
The risk is that enquiries become inconsistent across channels, and the staff ends up doing repetitive admin work to reconstruct the same information. Without a structured enquiry system, the booking process can become slow, confusing, and difficult to maintain.

### Technical challenge
The technical challenge was to capture the information in a controlled, structured way without making the experience feel heavy or over-processed. A reservation request should not require a payment step before availability is confirmed, and it should not require a guest to do extra work just to enquire.

### My thinking
I focused on creating a system that could support the business without making the guest feel like they were submitting a database form. The first goal was to make the request easy to send, and the second goal was to keep that request structured enough to be useful to the operation.

### Why I made these decisions
The public form is intentionally simple: it gathers the essentials and preserves enough detail for the business to review the enquiry without overwhelming the guest. The decision to keep payment off the form is important because it preserves the trust and review process that should happen before any monetary commitment.

### Implementation
The booking form includes fields for dates, guest count, villa preference, and special requests, alongside required email and phone fields. The public structure says “no payment yet,” which aligns with the operating model of a boutique stay: gather the request, confirm availability, then move forward with payment and logistics.

### Business value
This creates a clearer, more maintainable booking intake process and a more coherent guest experience. It reduces unnecessary friction and keeps the path from inquiry to review simple and consistent.

### What I learned
The most effective systems are not the ones that ask for every possible detail upfront. They are the ones that ask for the right details at the right time and keep the flow realistic for both the guest and the business.

Evidence Needed:
- Before/after screenshots of the booking flow and the published “What happens next” card
- A screenshot of the live booking page showing the exact flow and field layout

---

## Goals

The project had a clear goal: create a booking journey that feels polished to the guest and structured for the business. The goal was not to maximize contact volume or claim growth; it was to make the enquiry process clearer, easier to manage, and easier to operate.

### Business problem
The problem was that manual booking management can create friction and inconsistency. If the enquiry process is not structured well, the business wastes time reconstructing information and handling follow-ups in an ad hoc way.

### Technical challenge
The technical challenge was to build a front-end flow and internal workflow that together formed one coherent system. That required balancing the guest experience with operational logic.

### My thinking
I thought in terms of “intake clarity,” “operational maintainability,” and “human decision-making.” The project needed to reduce unnecessary admin, not just make the site look cleaner.

### Why I made these decisions
The public flow is intentionally simple, and the reservation form is intentionally limited. That keeps the guest-facing experience low-friction while leaving the more detailed operational work to the internal system and manual review step.

### Implementation
The GoHighLevel funnel and booking form create the front-end funnel, while the internal structure supports the operational side. The stack keeps the system accessible and easy to maintain, and the design decisions reinforce the same principle across every stage of the journey.

### Business value
The value is cleaner inquiry handling, less repetition, and a more coherent system for the business to work within. That is a meaningful operational improvement without needing to invent performance metrics.

### What I learned
Clear goals are important because they prevent a project from turning into a generic marketing page. If the goal is a working reservation system rather than just a homepage, then every decision should support that outcome.

Evidence Needed:
- A project brief or planning note showing intended goals if available
- A screenshot of the funnel structure from the public site

---

## My Responsibilities

In this project, my responsibilities were aligned with the role I was taking: systems designer, frontend builder, and operational workflow architect. I was not just creating a landing page; I was designing an intake journey and tying it to an operational model.

### Business problem
The problem required both front-end execution and systems thinking. A booking page is not useful if it only looks good; it must support the business process behind it.

### Technical challenge
The challenge was to build the public pages and the booking experience while also thinking about how the data would be processed and handled after submission.

### My thinking
I considered the whole project as a product experience with operational depth. That meant the work included both what the guest sees and what the business needs to do after the guest submits the form.

### Why I made these decisions
I focused on the parts of the project that would actually affect the business: the intake flow, the CRM field structure, the messaging model, and the reduced manual work around the follow-up process.

### Implementation
I created the front-end funnel and the public booking path, then aligned the process to the real operational pattern of a hospitality enquiry: gather the request, confirm it, and human-check availability before committing to the next step.

### Business value
This work creates a more structured and maintainable system, which is an important business capability even when the site itself is still a boutique concept. It helps the business work more intentionally instead of manually re-processing every enquiry.

### What I learned
A project like this requires a broader skill set than “build pages.” The value comes from understanding the system behind the customer touchpoint and designing for both the visitor and the operator.

Evidence Needed:
- A responsibility matrix or project notes naming the scope of work
- Screenshots showing the public page build and how the flow connects to the booking form

---

## Discovery & Planning

Discovery for Bahay Liwanag centered on a very practical question: what does the booking process actually need to do, and what can be automated without removing the human decision? The answer was straightforward: collect the initial reservation request, capture key context, and route it into a process that is readable and manageable.

### Business problem
The business problem was not a lack of design ambition; it was a lack of a structured process. Guests were expected to communicate interest, but the system did not yet provide a consistent intake model for the business to manage.

### Technical challenge
The technical challenge was to translate a real hospitality process into a digital flow without overengineering it. This required identifying what information matters most and what should remain deliberately manual.

### My thinking
I planned the system around practical operational clarity. I did not want to build a complex automation that hid the real decision point. Instead, I wanted a simple flow that handled the repetitive pieces while keeping the availability review where it belonged: with a person.

### Why I made these decisions
The human decision-making step is a deliberate design feature. It preserves the quality and trust of the hospitality experience and avoids automating the part of the process that should remain thoughtful.

### Implementation
The public pages and the booking form were designed to embody that process. The clear “What happens next” card is a crucial planning artifact because it makes the flow visible to the user and clarifies the guest’s expectations.

### Business value
This reduces confusion for the guest and creates a more organized system for the business. It allows the booking process to be managed more consistently without adding unnecessary technical complexity.

### What I learned
Good discovery is not just learning the business problem; it is identifying the clean boundary between automation and human judgement. That boundary is the difference between a system that helps a business and one that creates operational overhead.

Evidence Needed:
- A planning diagram or process map showing how the booking flow was intended to work
- A screenshot of the “What happens next” card in context

---

## System Architecture

The architecture behind Bahay Liwanag is deliberately simple but grounded in real operational logic. The public layer is GoHighLevel, the intake form is embedded into the funnel, and the system then routes the enquiry into a workflow and operational storage layer.

### Business problem
The business problem required a system that could capture and handle enquiries without becoming messy or manual. The architecture is built to support that goal.

### Technical challenge
The challenge was to connect the guest-facing experience with the business-operational layer without creating unnecessary complexity or overreliance on a single tool. The system has to support both the user journey and the internal booking workflow.

### My thinking
I used a layered approach: the front-end and CRM are the visible system, while the workflow and logging tools handle the operational movement. That separation keeps the guest experience clean while making the employee-side process more manageable.

### Why I made these decisions
A layered architecture is easier to reason about and easier to maintain. It also creates clearer boundaries between the public experience, the contact record, and the working operational layer.

### Implementation
The live system consists of a public six-page funnel in GoHighLevel, a booking form with structured custom fields, and the workflow layer that handles acknowledgement and operational routing. This design separates the customer-facing booking experience from the internal process of managing it.

### Business value
The architecture supports clearer business operations, better maintainability, and a more robust booking workflow. It reduces manual, repetitive work while keeping the business process understandable.

### What I learned
A system does not need to be highly complex to be effective. It needs to reflect the real business flow and keep the responsibilities of each layer clear.

Evidence Needed:
- Architecture diagram showing GoHighLevel, workflow, and operational layers
- Screenshot of the funnel structure or workspace layout

---

## Technical Stack

The project uses GoHighLevel as the primary platform for the public funnel, form, and CRM layer. The workflow layer and operational tools sit on top of that with system logic designed to move the enquiry into the next stage without requiring manual re-entry.

### Business problem
The business problem required a system that could be usable by a real operational team without adding too much rigidity or complexity. The stack choice supports that by keeping the flow practical and actionable.

### Technical challenge
The challenge was not just “what tools exist,” but “what tools fit the business process and how do they work together?” This is an important distinction between a tool stack and a functional system.

### My thinking
I chose a platform-first approach because the project needed to be operational and maintainable with a real-world business flow. The decision was to keep the system rooted in the tools the business already uses, while making sure the public experience still looked intentional and premium.

### Why I made these decisions
The stack is intentionally aligned with the workflow: GoHighLevel handles the front-end experience and contact capture; the workflow layer handles messaging and routing; and the operational layer consolidates the enquiry in a manageable format. This is a practical design for a small hospitality business with a clear operational process.

### Implementation
The public site and form are in the GoHighLevel funnel, while the operational layer is designed to follow the enquiry into structured tracking and a human review step. The resulting system is simple, coherent, and aligned with the actual business process.

### Business value
The stack supports maintainability and reduces operational friction. It makes the booking flow easier to manage without overcomplicating the business with too many disconnected tools.

### What I learned
The best stack is not the most technically impressive one. It is the one that most clearly fits the real process and can be operated by the actual business in a reliable way.

Evidence Needed:
- Screenshot of the workflow and operational tool view
- Diagram of the tool stack and how the data flows between layers

---

## Workflow & Automation

The workflow layer is where the system demonstrates real operational thinking. The key pattern is simple: capture the enquiry, acknowledge it, route it into the operational process, and leave the final availability check with a person.

### Business problem
The booking process was at risk of becoming a manual, repeated admin task. The goal was to automate the repetitive steps without automating away the human judgement that matters in a hospitality context.

### Technical challenge
The challenge was to design an automated flow that still respects the actual business logic. The system needed to move enquiries forward while keeping the decision around availability and guest fit intact.

### My thinking
I saw the workflow as a business-process layer, not as mere automation for its own sake. The important question was: which actions are repetitive, which are operationally useful, and which should remain human-managed?

### Why I made these decisions
The system intentionally avoids a payment step before confirmation. That is critical because the human review step should happen before any commitment is accepted. The workflow is designed to keep the business process structured and useful while preserving trust.

### Implementation
The booking form is configured to capture the needed details and then pass the request to the workflow layer. The public flow explicitly says the guest will receive confirmation and then the business will review dates. The automation is therefore set to support the operational process instead of replacing it.

### Business value
This creates a more streamlined booking management flow, a centralized reservation workflow, and clearer follow-up. It reduces manual steps while preserving a proper review stage.

### What I learned
Automation is most effective when it removes repetition, not when it tries to eliminate judgement. The strongest systems know which part of the process needs to be human and protect that boundary.

Evidence Needed:
- Workflow screenshot from GoHighLevel showing the trigger and actions
- Make scenario screenshot with field mapping and module flow
- Airtable screenshot showing the reservation log

---

## Design Decisions

The design decisions behind Bahay Liwanag are about clarity, trust, and operational flow. The visual design is polished, but the more important decisions are the ones that shape the guest’s confidence and the business’s ability to manage the reservation process.

### Business problem
The business needed a booking flow that was easy to understand and low-friction, but still captured the information necessary for a human review. The design had to support both trust and operational clarity.

### Technical challenge
The challenge was to design an experience that looks premium while still remaining operationally honest. It needed to keep the business process visible without making the flow feel heavy or inaccessible.

### My thinking
I wanted the experience to feel deliberate, not decorative. That means the booking form and flow are designed to tell the guest what happens next in plain language instead of hiding the process behind vague or complicated UX.

### Why I made these decisions
The “What happens next” card is a strong example. It makes the process legible: request, confirmation, availability review, then settlement details. That clarity is not just good UX; it is operational design.

### Implementation
The project uses villa positioning, a clear booking CTA, and a structured public flow that leads the user to the reservation form. The system teaches the user what to expect without turning the booking journey into a complicated technical process.

### Business value
This improves the guest experience, builds trust, and gives the business a cleaner operational protocol. The design does not just make the site look good—it makes the process understandable and easier to maintain.

### What I learned
Good design in a business system is not surface-level decoration. It is the way the process becomes transparent, understandable, and trustworthy to both the guest and the operator.

Evidence Needed:
- Screenshot of the booking flow with the “What happens next” card visible
- Before/after design comparisons if available

---

## Challenges

The biggest challenge with Bahay Liwanag was striking the right balance between guest experience and business operations. It was easy to overcomplicate the process, but the project needed to stay simple enough for a guest to complete and structured enough for a business to manage.

### Business problem
The business challenge was operational discipline: making sure each enquiry is captured cleanly and becomes actionable without extra manual interpretation.

### Technical challenge
The technical challenge was to fit an operational problem into a guest-facing system without generating friction. The no-payment, manual-confirmation model is a direct response to that challenge.

### My thinking
I focused on designing the process around business reality rather than technical abstraction. A system that is too automated can remove the nuance the business still needs. A system that is too manual creates churn. The best middle ground is a system that automates the repetitive steps and protects the human decision point.

### Why I made these decisions
The decision to keep the availability review human is the clearest expression of this thinking. It preserves trust and operational control while still making the intake and acknowledgement flow efficient.

### Implementation
This is reflected across the experience: a simple front-end journey, a structured form, and an operational model built around acknowledgement and review instead of immediate transaction completion.

### Business value
This creates a more sustainable operational model: less confusion, clearer workflow, and less demand for manual re-entry and process repair.

### What I learned
The most difficult design decisions are often the ones that restrict automation. The strongest systems know where not to automate.

Evidence Needed:
- Workflow or planning notes describing the manual-review decision
- Screenshots showing the public promise and the internal operational boundary

---

## Solution

The solution is a booking experience and operational workflow built to convert interest into structured action without forcing the guest into an overly technical or transactional process. It is a system that combines a clear public funnel with an intentional operational model.

### Business problem
The business needed a real intake process that reduced friction and made the guest’s next step obvious. The solution does that by keeping the flow simple: request, confirmation, review, and next steps.

### Technical challenge
The challenge was to connect a polished site with a structured underlying process. The solution keeps the public journey accessible while making the inside of the system more organized and maintainable.

### My thinking
I designed the system around two principles: the guest experience should feel simple, and the business process should feel structured. Those principles are what make the project useful rather than only attractive.

### Why I made these decisions
The system’s choices follow from that logic: the form is clean, the customer-facing flow is clear, the business review remains human, and the automation handles the repetitive tasks rather than the judgement call.

### Implementation
This is visible in the staged funnel, the structured contact fields, the confirmation flow, and the clear expectation set in the public “What happens next” card. The resulting product is a real operational system disguised as a clean hospitality experience.

### Business value
This is valuable because it reduces manual admin, creates a better user experience, and establishes a maintainable flow around reservation enquiries. Those are practical business benefits without making unsupported claims about conversion or revenue.

### What I learned
The strongest solutions are the ones that make the underlying process feel obvious to the user. Clarity is not a cosmetic decision; it is part of the operational design.

Evidence Needed:
- Screenshot of the booking pipeline or operational workflow
- Architecture or process diagram showing the full journey

---

## Business Impact

The business impact of Bahay Liwanag is not expressed in invented metrics. The impact is qualitative and directly tied to what the project is designed to improve: streamlined booking management, centralized reservation workflow, improved maintainability, and better user experience.

### Business problem
The business needed a cleaner way to receive and process enquiries without duplicating effort or losing details. The project addresses that by creating a structured, manageable intake flow.

### Technical challenge
The challenge was to design a booking process that feels light for guests but disciplined for the business. This required a system that would support quick intake and more organized operational handling.

### My thinking
I considered the impact in terms of process quality rather than marketing metrics. A better booking flow is valuable because it reduces friction and makes the business easier to run.

### Why I made these decisions
I wanted the system to be useful in practice, not just impressive in presentation. A reservation process that is clear to the guest and manageable for the business is more valuable than an overly complicated system with no real operational clarity.

### Implementation
The design supports a clear reservation intake, a structured guest record, and a defined review step. That means the business has a more coherent process for handling enquiries.

### Business value
The business value is practical and specific: less manual overhead, more consistent information capture, clearer operational flow, and a better guest experience. Those are all legitimate qualitative outcomes without requiring invented numbers.

### What I learned
Business impact should be described honestly. In systems work, the value often lies in clarity, maintainability, and reduced friction rather than in numerical claims that cannot be proven.

Evidence Needed:
- Any internal operational note or screenshot that shows how the booking request is reviewed
- Before/after comparison of the manual process vs the structured intake process

---

## Lessons Learned

This project taught me that the value of a booking system is often in what it prevents: messy enquiries, duplicate manual data entry, unclear follow-ups, and overloaded operational steps. The best systems make the guest’s next step obvious while also protecting the business’s decision-making process.

### Business problem
The business challenge was not purely technical; it was operational and relational. The project needed to preserve trust and simplicity while also making the intake process more usable.

### Technical challenge
The technical challenge was to find a limit between friction and structure. Too much friction kills conversion; too little structure creates confusion for the business. The system has to sit in that middle ground.

### My thinking
I learned to design around the real human flow of the operation rather than around the idea of a perfect technical automation. That is what makes the system more durable and more useful.

### Why I made these decisions
The manual review stage is a clear example of that maturity. I did not try to automate away the business judgement; instead, I built a process that gives the business the information it needs to make the right decision without forcing the guest through extra steps.

### Implementation
This lesson is reflected in the booking flow design, the contact data structure, and the decision to preserve a human review. The result is a system that is realistic, maintainable, and true to the actual hospitality workflow.

### Business value
The value is not just a more appealing interface. It is a more sustainable operation that reduces repetitive admin and makes the booking process easier to manage and understand.

### What I learned
The strongest systems are the ones that respect the true boundaries of the business process. They do not automate away the work that needs human judgement; they make the rest easier.

Evidence Needed:
- Team notes or design rationale that explain the manual review decision
- Internal process notes showing how the workflow was expected to operate

---

## Future Improvements

The project already demonstrates a strong operating model, but there are still natural areas to improve. The next step would not be to make the system more complicated for the sake of complexity. It would be to deepen the operational quality of the system.

### Business problem
The main future improvement would be refining how the business handles follow-up, availability review, and stay-specific continuity once a guest enquiry becomes a booking.

### Technical challenge
The challenge is to expand the system without breaking the clarity that makes it useful. The system should become more robust, not more opaque.

### My thinking
I would improve the operational workflow by tightening how the data is stored, how the review is communicated, and how repeat enquiries or stay-related follow-ups are handled over time.

### Why I made these decisions
The system is already solid at intake, but there is value in making the operational layer more explicit and more maintainable as the project grows. That is a product-minded improvement, not a random expansion of features.

### Implementation
Potential improvements include deeper automation around the follow-up and review process, a clearer operational view in the data layer, and stronger alignment between the public booking system and the internal reservation workflow.

### Business value
This would improve maintainability, make the process easier to scale, and strengthen the business’s ability to manage bookings without manual overhead.

### What I learned
A good system is not finished when it works once. It is finished when it can be used reliably, understood clearly, and improved intentionally over time.

Evidence Needed:
- Future-state workflow diagram
- Prototype or mockup showing how the operational layer could expand over time

---

## Hiring Manager Review

### Technical Depth: 8.5/10
This project demonstrates real systems thinking and a clear understanding of how a booking flow can be structured. The strongest technical element is the architecture and process logic, particularly the separation between public funnel, CRM contact record, and the workflow/operational layer. The project would score even higher if the back-office workflow, Make mapping, and Airtable base were fully captured in annotated screenshots.

### Business Thinking: 9/10
This is one of the strongest parts of the case study. The project is not framed as a pretty website; it is framed as a real operational need. The decision to keep the availability review human is a strong sign of mature business thinking. It shows that the system is designed around a realistic business process, not around technical elegance alone.

### Communication: 8.5/10
The case study is clear and structured. It explains the problem, the system, and the trade-offs without losing the reader. The writing is grounded in actual project patterns and stays honest about what is verified versus what still needs evidence capture. A bit more explicit emphasis on the operational handoff would make it even stronger.

### Credibility: 9/10
The project is credible because it is anchored in real, verifiable facts from the live funnel and form definition. It is careful not to invent business metrics or outcomes. The only reason it is not a 10 is that some of the workflow and operational internals still need their final annotated captures to be fully evidenced.

### Visual Evidence: 7.5/10
The project already has strong public-facing visual proof, including the homepage, booking page, and villa pages. However, the strongest visual proof still needs to be captured from the internal operational layer: workflow screenshots, CRM structure, Make mapping, and Airtable view. Those are the visual elements that would elevate the case study from good to excellent.

### Overall assessment
This is a strong first portfolio case study because it shows a clear business problem, a thoughtful system design, and an honest operational model. It demonstrates that the work is about more than visual polish. It is about making business processes clearer, more maintainable, and easier to operate.

---

## Final Recommendation

This case study is a strong foundation for the portfolio because it proves a different kind of value: operational clarity, business-process design, and elegant system thinking. It is especially effective as a portfolio entry because it shows the project is not just a marketing site; it is a functioning operational system built around a real guest journey.

The strongest next step is to add the missing evidence from the back-office layer: workflow screenshots, CRM pipeline view, Make scenario mapping, and Airtable reservations table. Once those are captured and annotated, this will become one of the clearest pieces of systems proof in the portfolio.
