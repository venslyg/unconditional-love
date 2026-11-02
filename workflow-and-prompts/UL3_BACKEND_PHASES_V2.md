# Unconditional Love 3 — Backend & Launch Phases (V2: Visual Seats, 10-Minute Holds, QR Check-in)

> Companion to the completed frontend phases and `README.md`. Copy this file to `docs/BACKEND_PHASES.md` in the existing Next.js repository. Implement **one phase at a time**; review and approve each before continuing.

## 1. Project facts

| Item | Confirmed information |
| --- | --- |
| Name | Unconditional Love 3 |
| Theme | Bring One Another |
| Purpose | A Christian youth gathering to experience God's love |
| Date | Wednesday, January 20, 2027 |
| Venue | Avenra Gangaara, Wennappuwa, Sri Lanka |
| Program | 2:30 PM – 9:30 PM (Sri Lanka time) |
| On-site registration/check-in opens | 2:00 PM (Sri Lanka time) |
| Entrance fee | LKR 1,000 per attendee |
| Planned capacity | Approximately 500 attendees; configure and confirm the actual sellable cap |
| Current state | Frontend phases F1–F7 completed |

**Important:** The on-site registration/check-in opening time of 2:00 PM is not the same as the date when *online booking sales* open. The online booking launch date has not yet been specified. Display it only after organizers decide.

## 2. Stack and ownership

- Existing **Next.js App Router + TypeScript + Tailwind CSS** app remains the sole web application.
- **Next.js Route Handlers / server-only modules** handle registration, checkout initiation, payment callbacks, ticket verification and admin operations. Do not add a separate Express server without a concrete need.
- **Supabase PostgreSQL** stores events, bookings, individual attendees, payment records, tickets, check-ins and logs.
- **Supabase Auth** authenticates organizers; participants should be able to register without creating accounts unless organizers explicitly choose otherwise.
- **Resend** sends transactional email after a verified booking is confirmed.
- A **Sri Lankan payment gateway** (merchant approval and final provider TBD) handles card/payment information via hosted checkout. Never process or store raw card details.
- Use the chosen supported Next.js host (Netlify or suitable paid Vercel plan) to deploy **both frontend and Next.js server functions**. No second backend host is required.
- Keep local, staging and production environments separate wherever practical.

### Non-negotiable business rules

1. Price is **LKR 1,000 × attendee quantity**. Calculate amounts on the server. Never trust a price sent by the browser.
2. Capacity is by **attendees**, not bookings. A group booking of 4 consumes 4 seats and generates 4 individual QR passes.
3. Every booking has a unique booking reference and state. Use database-level constraints and atomic changes to prevent overselling, including simultaneous bookings for the final seat.
4. Booking states may include `pending`, `confirmed`, `failed`, `expired`, `cancelled`, `refunded`. Define permitted transitions explicitly.
5. A payment success redirect **never** confirms a booking. Verify the provider's signed/validated server notification (or a verified server-to-server status inquiry) and ensure the amount, currency, merchant and booking reference match.
6. Duplicate callbacks must not create duplicate tickets, payments or emails. Use idempotency and unique provider transaction IDs.
7. Every interactive seat selection creates a **server-authoritative 10-minute hold** (configurable) with an exact `expires_at`. The client displays a countdown but cannot extend or enforce the hold itself. Pending seat holds are released safely. If a delayed successful payment arrives after a hold expires, reconcile inventory atomically and escalate/refund if no capacity remains.
8. The public must not be able to enumerate registrations, view private data, create tickets, alter payment status, or access admin functions.
9. The QR token should be random and unguessable; it must not embed personal data. Check-in must be authenticated and idempotent.
10. Data collection must be limited to what is necessary. If minors attend, agree consent and guardian workflows with organizers before collecting sensitive details.
11. All online payment messages, email receipts, and site policies must be truthful. Simulated payment flows in staging must be clearly marked as tests.
12. Write critical database and authorization changes as **versioned migrations and tests**, not manual dashboard-only edits.
13. A visually selected seat or zone must correspond to genuine inventory from an organizer-approved venue layout. Never show fictitious rows or numbered seats as real. If seating is unassigned, use **zone-based allocation** instead of promising individual seat numbers.
14. The map is only an interface: server/database locking is authoritative. Hold and confirm all seats in a group booking atomically. Limit speculative holds to prevent malicious blocking.

## 3. Decisions for the organizing committee

These should be settled early but should not block frontend integration scaffolding:

- Can one person buy multiple tickets? If yes, max people per booking and per-person required fields.
- Is online registration mandatory, or are there walk-ins? Are complimentary/sponsored seats permitted?
- Exact capacity available for public ticket sales (500 assumed, but confirm organizers/volunteer allocations).
- Refund and transfer policy; if the event is cancelled, who handles refunds?
- Which church/association bank account and merchant legal entity will receive funds?
- Which Sri Lankan payment provider supports that merchant entity and the event use case?
- Must confirmations be emailed only, or is WhatsApp automation mandatory?
- Required attendee fields, age requirements, accessibility requests and data retention date.
- Initial opening date/time of **online** registration.
- Does Avenra Gangaara have fixed assigned chairs/rows, reserved zones, or open standing/first-come seating? Obtain a finalized floor plan and capacity per zone, accessible seats, entrances, stage orientation and any seats excluded for crew.
- Should customers select a precise seat, only a preferred zone, or a combination? Can one purchaser select adjacent seats for a group?
- Confirm 10-minute seat holds and explicit behavior for last-minute payments, abandoned checkout and temporarily disconnected users.

## 4. Proposed database model

Implement with SQL migrations in `supabase/migrations/`, not as ad-hoc untracked schema edits.

| Table | Purpose | Important columns / constraints |
| --- | --- | --- |
| `events` | Event configuration | id, title, date/time, price_lkr, capacity, registration flags, hold_duration_seconds (default 600) |
| `zones` | Venue sections (optional if all individual seats) | id, event_id FK, name, display_order, capacity, geometry/label |
| `seats` | Organizer-approved selectable places | id, event_id FK, zone_id FK, public_label, row_label, x/y display coordinates, is_accessible, active; UNIQUE(event_id, public_label) |
| `seat_claims` | Current authoritative hold or assignment of individual seats | seat_id PRIMARY KEY, booking_id FK, hold_expires_at, confirmed_at, state; all claims must be changed atomically; retain historical actions in an audit table |
| `bookings` | One checkout/cart | id, booking_code UNIQUE, purchaser contact, quantity, amount_lkr, status, held_until, timestamps |
| `participants` | Each attending person | id, booking_id FK, name, minimal requested fields; one ticket each |
| `payments` | Payment attempts + reconciliation | id, booking_id, provider, provider_reference UNIQUE where present, amount_lkr, currency, status, verified_at, safe metadata |
| `tickets` | Per-attendee admission | id, participant_id UNIQUE, public ticket reference, securely generated token digest UNIQUE, issued_at, status |
| `check_ins` | Gate admission audit | ticket_id UNIQUE, checked_in_at, checked_in_by FK |
| `organizer_memberships` | Organizer access controls | auth_user_id UNIQUE, role, active |
| `email_deliveries` | Notification status and retries | id, booking_id, template, provider_message_id, delivery status, last error, attempts |
| `payment_events` | Dedup/audit of callbacks | provider, immutable provider event ID UNIQUE (when supported), booking ID, status, received_at |
| `seat_claim_events` | Optional seat claim audit trail | booking_id, seat_id, action, changed_at, actor type |

### Database and security expectations

- Enforce referential integrity, appropriate `NOT NULL`, `CHECK`, unique constraints and indexes.
- Implement **Row Level Security (RLS)** and explicit grants on any table accessible through Supabase's exposed API. Default-deny all private registration/payment tables for anonymous users.
- Use server-only privileged credentials solely inside trusted Next.js backend code (never client bundles, browser fetch responses or Git).
- Check organizer role on the server for every sensitive action; do not rely on hiding dashboard buttons.
- Never query confidential booking information using only a sequential/predictable booking code. Ticket retrieval requires proof (such as verified emailed link/token).
- Test both allowed and denied access using Supabase's recommended pgTAP/RLS testing tools.
- For accurate seat allocation, use a Postgres transaction/function that obtains appropriate locks and counts **confirmed plus active holds**, or maintain an atomic bounded reserved-seats counter. Do not calculate capacity by a non-atomic client-side `SELECT COUNT` followed by `INSERT`.
- For **exact assigned seats**, acquire a transaction lock or equivalent on the selected seat claims, check for non-expired claims or confirmed assignments, and atomically claim the complete requested set or none. Ensure one active claim per seat.
- For **zone-only** seating, use atomic per-zone capacity reservations instead of inventing individual seat numbers. The event-wide 500-seat maximum must still hold.
- A claim expires 600 seconds after authoritative server creation. A client countdown is informative only; the database enforces expiration on every claim/checkout operation, with scheduled cleanup as an optimization.
- Define clear treatment of expired holds, seat selection changes, explicit release, stale/duplicate requests, multi-tab use, payment provider checkout lasting beyond 10 minutes, and late verified payments.
- Store time in UTC in the database, display in **Asia/Colombo**.

Official references:
- Supabase SSR quickstart: https://supabase.com/docs/guides/auth/quickstarts/nextjs
- Supabase RLS: https://supabase.com/docs/guides/database/postgres/row-level-security
- Supabase RLS testing: https://supabase.com/docs/guides/database/postgres/testing-row-level-security
- Next.js Route Handlers: https://nextjs.org/docs/app/api-reference/file-conventions/route
- Resend for Next.js: https://resend.com/nextjs

## 4A. Required feature extension — interactive seats, 10-minute timer, and QR admission

**All three features are required for the intended experience.** Prior versions already included QR tickets/check-in (B5/B6) and generic temporary holds (B3), but did **not** specify the artistic seat map or an exact 10-minute client countdown.

### Interactive seat/zone map

- Begin by verifying the **real Avenra Gangaara seating plan** with the venue and event committee. Decide between individual reserved seats, reserved zones, or general admission; don't implement a false physical seat plan.
- For an approved seat map, render a stage orientation, labeled zones, rows and numbered selectable chairs. Support keyboard/touch, a zoomable/mobile-friendly view, colors **plus** text/icon labels for available, selected, held-by-another, booked and accessible/blocked seats.
- Use the artistic theme in backgrounds, borders and transitions without sacrificing clear contrast or tap targets. Provide a searchable text-based selection alternative for accessibility.
- The `GET /api/seats` or equivalent gives public **availability only**, not participant identity; the server refuses selection of blocked/booked/actively held chairs. Do not trust client-reported availability.
- For group registration, select the requested number of seats and **hold all or none**, with one common booking hold deadline. On selection changes, atomically release replaced seats and claim new seats where possible.
- If only zones can be guaranteed, display interactive visual **zones** with remaining capacity, then assign/confirm zones rather than exact chairs.

### Ten-minute hold and real-time checkout countdown

- When a user commits a seat selection, call a rate-limited server endpoint to create a reservation with `expires_at = server_now + 10 minutes`. Return the official expiry timestamp, server time and a short-lived unguessable reservation credential.
- The UI starts the **10:00** timer from authoritative times. Refresh availability periodically or via realtime subscriptions where warranted; never rely on browser time or browser timers for exclusivity.
- At 0:00, the interface clearly marks the reservation expired, disables the existing payment action and asks the participant to select seats again. Server-side expiration is enforced even if the browser remains open or offline.
- Expire/release holds during all seat operations and through scheduled cleanup as backup. Do not require cron to run exactly at the ten-minute boundary for correctness.
- Prevent users holding hundreds of seats using per-session/cart quantity limits, rate limits and bot protection. Never silently reset the 10-minute clock on refresh.
- Define provider-specific treatment when a real checkout is still pending at 10 minutes. Verify any late success with the gateway; reconcile inventory atomically and arrange a refund/manual review when that exact seat can no longer be honored. Do not assume a cancelled timer cancels a completed payment.

### QR receipt and check-in on ordinary smartphones

- B5 generates **one unique secure QR admission pass per participant**, including each attendee in a group booking, only after verified payment.
- QR codes should encode a short secure HTTPS ticket-check URL or opaque random ticket token — **never names, phone numbers or payment secrets**.
- Staff in the `check_in` role can open a protected mobile check-in page, scan QR codes with a built-in browser scanner, or use the phone's normal camera to follow a ticket URL that asks for staff sign-in before admission action.
- Display valid / already checked in / cancelled / invalid states. On admission, perform one authorized atomic check-in; scanning twice must never count as two attendees.
- Provide manual ticket lookup and a low-connectivity fallback procedure; a QR image alone does not automatically register attendance.

### Definition of done for the three features

- Venue-approved map matches inventory; 500-seat or per-zone constraints never exceed approved caps.
- Two concurrent browsers attempting the last chair: exactly one claim wins.
- Visual availability synchronizes to actual server state; no private user data is exposed.
- A seat expires after exactly 600 server-side seconds and can be held by someone else afterward.
- Group holds are all-or-nothing; stale tabs and slow payments cannot cause duplicates or oversells.
- A confirmed attendee gets exactly one usable QR; staff can successfully check in and reject repeat scans.

## 5. Implementation phases — do not skip ahead

### B0 — Audit frontend and prepare backend architecture

**Goal:** Make a safe implementation plan without breaking the finished frontend.

Deliverables:
- Inspect the actual codebase and preserve all frontend design, pages, routing and content.
- Inventory existing registration fields, UI components, form states, route structure and dependencies.
- Document decisions and unknowns, and create `docs/BACKEND_DECISIONS.md`.
- Install only needed backend packages: `@supabase/supabase-js`, `@supabase/ssr`, `zod`; add more later.
- Prepare `.env.example` with **placeholder** public Supabase URL/publishable key and server-only secrets. Keep `.env.local` in `.gitignore`.
- Define typed event configuration and a server-side LKR 1,000 price constant with tests.
- Document planned API endpoints and DB schema, including seat/zone layout, exact-seat vs zone-only decision, 10-minute hold transitions, registration and payment statuses.
- Inspect whether the current frontend registration page has a seat-selection component; plan a visually matching seat map, countdown and accessibility fallback without redesigning completed unrelated pages.
- Verify `npm run build`, TypeScript and ESLint remain green.

**Acceptance criteria:** no production backend connected; frontend not visually regressed; no secrets committed; developer can follow the planned implementation order.

**Agent prompt:**
> Read root `README.md` and `docs/FRONTEND_PHASES.md` (if present) and inspect the entire existing Next.js application. Implement **B0 only** from `docs/BACKEND_PHASES.md`: audit the finished frontend, prepare type-safe backend integration boundaries, documentation, validation dependency, `.env.example` and event pricing constants. Do not connect a live database, take payments or rebuild the UI. Run TypeScript, lint and production build; summarize changes, known decisions and blockers, then stop for approval.

### B1 — Supabase + schema + security migrations

**Goal:** A reproducible, secure database foundation.

Deliverables:
- Create a Supabase project and obtain public URL/publishable key, then configure local `.env.local` privately.
- Set up Supabase clients appropriate for Next.js server/browser cookie sessions, plus a separately scoped privileged server-only client.
- Add migrations for the tables in Sections 4 and 4A (including zones, seats, claims and audit trail), relation keys, indexes and constraints.
- Seed a clearly marked **fictional test layout only for development** until the actual venue plan is approved. Never present it as the final physical venue layout.
- Implement RLS/grants with default-deny access to private booking/payment records.
- Add test fixtures, DB unit tests and RLS allow/deny tests (anonymous, organizer, inactive organizer).
- Provide schema documentation and migration instructions.

**Acceptance criteria:** migrations apply from scratch; tests pass; an unauthenticated user cannot read other participants/payments; no secret key reaches the browser.

**Agent prompt:**
> Implement **B1 only** from `docs/BACKEND_PHASES.md`. Set up the Supabase client utilities, SQL migrations, minimal seed/test fixtures, foreign keys, indexes, roles/grants, RLS, and reproducible database tests. Do not connect public registration or implement checkout yet. Protect private data by default. Show test results and stop for approval.

### B2 — Organizer authentication and access control

**Goal:** Secure admin access, independent of public registration.

Deliverables:
- Organizer-only sign-in using Supabase Auth and cookie-based sessions.
- Verify sessions and organizer membership server-side for `/admin` and all sensitive API routes.
- Implement roles such as `super_admin`, `finance`, `check_in` with least privilege.
- Safe sign-out, unauthorized/expired-session states, and no open public organizer self-registration.
- Test direct API requests by logged-out and unauthorized users.

**Acceptance criteria:** anonymous users cannot reach admin data; staff permissions are enforced on backend endpoints, not only UI.

**Agent prompt:**
> Implement **B2 only**: organizer-only Supabase Auth and server-side role checking for the existing admin interface, without changing its visual design. Test anonymous, unauthorized and authorized requests; do not build public booking/payment flows yet. Stop after checks.

### B3 — Real participant booking with safe seat holds

**Goal:** Public registration works without accepting real payment.

Deliverables:
- Connect the existing registration UI to a validated server endpoint.
- Create `bookings` + `participants` atomically, including an accurate attendee count.
- Generate unique booking references; support multiple participants per booking if approved.
- Implement configurable sellable capacity, **the organizer-approved interactive seat or zone map**, transaction-safe multi-seat claims, exactly **10-minute server-side holds**, cancellation/expiry, basic spam/rate limits and robust error states.
- Add an accessible seat map to the existing registration UI, with selected/held/booked/accessible legends, server-backed availability refresh, a 10:00 checkout countdown, and an expiry/reselect state. Keep the existing artistic style.
- Return only safe registration data to public clients.
- Use a staging-only test operation for *simulating* success; do not allow an unverified client action to mark a payment as real.

**Acceptance criteria:** after 500 confirmed/held seats (or the configured cap), further bookings cannot take capacity; two users selecting the same chair cannot both win; group selection holds all seats or none; holds last exactly 600 server-side seconds, UI countdown is accurate and expires visibly; abandoned holds expire; accessible fallback and existing design remain usable.

**Agent prompt:**
> Implement **B3 only**: integrate the public registration UI with Zod-validated Next.js Route Handlers, Supabase transaction-safe booking creation and **visual venue-approved seat/zone selection**. Implement all-or-nothing multi-seat claims, 600-second server-authoritative reservations, a live 10:00 countdown, clear expiry/reselect UX, refresh-safe state and rate limits. Provide a text-based accessible selection alternative. Test concurrent attempts for the final exact seat and invalid inputs. Keep payment confirmation disabled/simulated. Preserve the artistic design, then stop for approval.

### B4 — Gateway sandbox checkout and verification

**Goal:** Convert pending bookings to confirmed bookings on verified payments.

Deliverables:
- Confirm merchant eligibility, terms, gateway test credentials and exact provider before writing a production adapter.
- Introduce a gateway adapter with server-side charge creation using immutable server-priced LKR amounts.
- Integrate provider-hosted sandbox checkout, verified provider callback/webhook/status inquiry, strict amount/currency/reference checks.
- Persist payment attempts and deduplicated callbacks.
- Handle successful, failed, duplicate, delayed, cancelled, abandoned and unknown transactions; ensure capacity reconciliation and refund/escalation when required.
- Check the selected seat claim and its authoritative expiration before checkout initiation. Define safe behavior for payment initiated near the timeout and late verified success, including manual review/refund if selected chairs are no longer available.
- Introduce a safe pending confirmation page that polls/checks the server, not one that trusts URL query parameters.
- Test real provider sandbox callbacks against a publicly reachable staging URL.

**Acceptance criteria:** only verified success transitions a booking to confirmed; duplicate/delayed callbacks don't duplicate tickets; amount mismatches fail safely; finance can reconcile provider references.

**Agent prompt:**
> Implement **B4 only** using the gateway provider and *sandbox credentials* that the organizers have explicitly selected. Do not make up endpoint names or signature formulas: follow the provider's official documents. Implement hosted checkout, verified callbacks, idempotency, transaction auditing and robust failure handling. Never accept client-declared payment success. Test in staging and stop for approval.

### B5 — Email receipts and secure QR tickets

**Goal:** Every confirmed participant gets a usable admission pass.

Deliverables:
- Generate one securely randomized, non-guessable ticket token per participant after verified payment.
- Create a responsive, artistic branded HTML email using Resend.
- Include the attendee name, event date/time, venue, booking reference and individual admission QR (or secure view-ticket link).
- Send only after confirmation; log delivery outcomes and provide safe retries for transient failure.
- Implement verified email-based ticket retrieval/reissue with appropriate abuse limits.
- Use a verified sending domain and proper SPF/DKIM/DMARC when going live.

**Acceptance criteria:** one ticket per attendee, no duplicate issues on repeated callbacks, no personal data embedded in QR payload, email failure does not roll back a paid booking.

**Agent prompt:**
> Implement **B5 only**: create unique QR admission tokens and branded transactional confirmation emails for confirmed bookings. Include a secure way to retrieve/reissue a ticket. Use a test sender/domain in development, prevent duplicates, log and retry email failures, and stop after tests.

### B6 — Admin operations and event-day QR check-in

**Goal:** Organizers can operate the event reliably.

Deliverables:
- Dashboard for confirmed/pending/failed bookings, seat inventory, paid totals, attendee search and approved exports.
- Finance-only payment reconciliation and manual review; never let an ordinary check-in volunteer change payment status.
- Mobile-friendly QR scanning/lookup for staff with authenticated, idempotent check-in endpoints. Support both an in-page scanner and scanning a ticket URL from a normal phone camera; require staff authentication before marking admission.
- Duplicate scan behavior returns a clear 'already checked in' state with existing time.
- Manual lookup and an explicit contingency plan for weak venue connectivity.
- Reports limited to necessary data; audit critical organizer changes.

**Acceptance criteria:** no unauthorized private data access, no double check-ins, accurate attendee count, consistent finance summary, usable on phones.

**Agent prompt:**
> Implement **B6 only**: connect the existing admin UI to verified booking/payment/ticket records, add role-based admin functions, safe CSV exports, and mobile-friendly authenticated QR check-in. Test duplicate check-ins and role boundaries. Do not alter gateway verification logic. Stop for approval.

### B7 — Staging deployment, quality, security and recoverability

**Goal:** Validate the entire system end-to-end before live sales.

Deliverables:
- Deploy Next.js with server functions enabled, not a static-only export. Configure a staging URL for actual sandbox webhooks.
- Separate staging and production secrets, gateway credentials, email sender config and databases (if available).
- Verify delivery policies, refund/terms/privacy pages, rate limiting, log redaction, RLS and admin session expiry.
- Create backup and restore runbooks; test a restore using nonproduction data.
- Load/concurrency test burst traffic, booking the final exact seat/zone, multi-seat all-or-nothing claims, 600-second expiry, stale clients, and delayed gateway payments.
- Test verified success/failure/duplicate/refund events and emails; verify gate check-in on multiple phones.
- Set up simple alerts/monitoring for payment callback failures, email failures and capacity anomalies.

**Acceptance criteria:** full registration → checkout → verified confirmation → email QR → gate check-in passes in staging; security tests pass; rollback and support plan documented.

**Agent prompt:**
> Implement **B7 only**: deploy a staging environment with functioning Next.js server routes, run end-to-end tests for booking/payment/email/QR, harden security, document backup and restore, and add observability. Use only sandbox credentials and test participants. Provide a concrete go-live checklist; stop for organizer approval.

### B8 — Production launch and event operations

**Goal:** Launch safely and support the actual gathering.

Deliverables:
- Confirm the merchant account, deposit/settlement bank account, gateway fees, public pricing, and approved refund policy.
- Complete production domain, HTTPS, secrets, live webhook URL and verified sending domain.
- Run a controlled real-payment test with approval and verify bank settlement/reconciliation.
- Open **online** bookings at the committee-approved time; do not confuse this with the **2:00 PM January 20 on-site check-in**.
- Monitor seats, support emails, checkout failures and admin access daily.
- Train check-in staff; have a documented manual fallback and offline contact/export procedure.
- After the event, reconcile finances, export approved reports, revoke temporary staff privileges and handle retention/deletion securely.

**Acceptance criteria:** organizer signs off on live payment flow, confirmed inventory and check-in process; no unresolved severe security, payment or data-integrity bugs.

**Agent prompt:**
> Perform **B8 go-live preparation only**. Produce and execute the approved production checklist, but **do not enable live payment capture, charge cards, publish registration, or change production settings without explicit organizer authorization**. Confirm live merchant details, environment security, monitoring, settlement and backup readiness. Report go/no-go status and stop.

## 6. Suggested API shape (adjust to existing codebase)

```text
GET    /api/seats                  Read public seat/zone availability only, rate-limited
POST   /api/seats/hold             Atomic selection + 600-second hold; returns expiry
POST   /api/seats/release          Release own held seats when changing/cancelling
POST   /api/bookings               Complete pending booking using a valid seat hold
GET    /api/bookings/status        Limited status via proof/secret token
POST   /api/payments/create        Create hosted checkout from server-priced booking
POST   /api/payments/webhook       Receive and verify gateway notification
GET    /api/tickets/[token]        Securely retrieve admission view (no PII leakage)
POST   /api/admin/check-in         Authorized single-ticket check-in
GET    /api/admin/bookings         Paginated authorized participant list
GET    /api/admin/reports          Finance/admin-only report
```

A webhook endpoint should use the parsing/verification required by the selected provider. Do not rely on CSRF tokens for genuine provider callbacks; instead verify signatures, merchant identity and expected values, and keep other public endpoints protected against CSRF/abuse as appropriate.

## 7. Test matrix required before registration opens

- Correct fee: 1 attendee = LKR 1,000; 3 attendees = LKR 3,000.
- 500 seats are reserved/confirmed according to the configured counting rule, never 501.
- Two purchasers race to book the last **specific chair**: only one succeeds.
- A user selecting 3 seats receives an atomic 3-seat hold or no hold; released/expired seats return to availability.
- Two open tabs and a page refresh do not reset 10-minute hold expiry.
- A 10-minute countdown is synchronized with server expiry; after 600 seconds checkout is blocked server-side.
- A seat-map user cannot inspect other attendees' identities or select inaccessible/disabled seats.
- An abandoned payment expires and releases the hold.
- Payment success redirect without valid webhook **does not** confirm booking.
- Replayed/duplicate webhook creates **no** duplicate payment/tickets/emails.
- Callback with wrong amount, currency, merchant or booking reference is rejected.
- Delayed real success after expired hold follows an explicit reconciliation path.
- Every participant in a group gets a unique pass.
- Two volunteers scan same QR: exactly one check-in record is created.
- An ordinary camera QR URL opens ticket verification, but does not mark admission without authorized staff action.
- Unauthorized staff cannot download attendee/finance data.
- Private participant records cannot be listed by anonymous users.
- Sending email fails: paid booking remains confirmed and email retries can recover.
- A registration form error doesn't expose raw DB/provider error details.
- Admin session expires and access is revoked when organizer role is removed.
- A cancelled/refunded ticket is rejected by the gate check-in flow.
- Event times are formatted in Asia/Colombo; no time-zone shifts.
- Tests run in CI or via a documented reproducible local workflow.

## 8. Suggested execution schedule (planning guidance)

From November 2, 2026 until the event on January 20, 2027 is about 11 weeks. An achievable target if the frontend is already ready:

- **Week 1:** B0 + merchant onboarding inquiry.
- **Week 2:** B1, schema/RLS tests.
- **Week 3:** B2 + B3 core registration.
- **Week 4:** B3 concurrency, expiry and form error handling.
- **Weeks 5–6:** B4 checkout sandbox and verification.
- **Week 7:** B5 email/QR.
- **Week 8:** B6 dashboard/check-in.
- **Weeks 9–10:** B7 staging hardening and complete testing.
- **Final period:** B8 approved go-live/operations and volunteer readiness.

**Do not use this schedule as a reason to rush payment or security testing.** Move to live payments only once merchant approval, safety checks and organizer sign-off are complete.

## 9. Commands to begin B0

```bash
# At the root of your existing Next.js project:
git status
npm install @supabase/supabase-js @supabase/ssr zod
npm run build
```

Do not create a new Next.js project; the frontend already exists. Verify that `.env.local` is ignored. Add `.env.example` with harmless placeholders. Install other packages (Resend, QR scanning, test runners, provider SDK) only when reaching their phase.

## 10. Master coding agent instruction

```text
Read README.md, docs/FRONTEND_PHASES.md (if available), and docs/BACKEND_PHASES.md.
The artistic frontend is complete (frontend phases 1–7): preserve its design and content.

The event is Unconditional Love 3 — Bring One Another on January 20, 2027
at Avenra Gangaara. Program: 2:30 PM–9:30 PM. On-site check-in starts at
2:00 PM. Ticket: LKR 1,000 per person. Capacity: approximately 500.

We are implementing the backend one phase at a time. Start with B0 only.
Inspect the real repository before coding and follow the existing conventions.
Do not implement another phase, connect a live payment gateway, expose secrets,
change event facts, or refactor finished frontend pages unnecessarily.

Before editing, briefly state the B0 plan. After edits, run relevant type-check,
lint and production build checks. List changed files, outcomes, blockers,
and next-phase prerequisites. Then STOP and await approval.
```

---

**Priority:** B0 → B1 → B2 → B3 → B4 → B5 → B6 → B7 → B8. In parallel, arrange merchant eligibility and bank/payment details, policies, and organizer decisions. No production payment capture until explicit approval.
