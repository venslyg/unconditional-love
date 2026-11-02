# Unconditional Love 3 — Bring One Another
## Complete Project Requirements, Technical Specification & Implementation Plan

> **Document type:** Master README / product requirements document (PRD) / development roadmap  
> **Status:** Planning baseline — committee decisions still required  
> **Prepared:** November 2, 2026  
> **Event:** Wednesday, **January 20, 2027**  
> **Venue:** **Avenra Gangaara, Wennappuwa, Sri Lanka**  
> **Entrance fee:** **LKR 1,000 per participant**  
> **Expected attendance:** approximately **500 people**  
> **Purpose:** A Christian youth gathering where young people come together to experience God's love and bring one another into community.  
> **Development:** Volunteer / in-house; exclude developer labor from operating costs.

**This is a SECOND README, separate from the frontend phase guide.** Recommended arrangement:

```text
README.md                      # This master project README
docs/FRONTEND_PHASES.md        # Previous UL3_FRONTEND_README.md
public/images/ul3-invitation-reference.jpg
```

If you prefer, keep the filename `UL3_FULL_PROJECT_README.md` alongside your existing frontend README. The important thing is that the coding agent knows which document defines the full product and which contains the detailed frontend-only tasks.

---

## 0. Executive summary

Build a **mobile-first, artistic event website and secure online registration system** for approximately 500 youth gathering attendees. Visitors can learn about the gathering, register, pay a fixed entrance fee, receive a verified digital confirmation/QR ticket, and check in at the venue. Authorized organizers can manage bookings, check payments, and monitor attendance.

### Recommended baseline stack

| Area | Decision | Why |
|---|---|---|
| Application | **Next.js App Router + TypeScript** | One codebase for UI, server-rendered pages, API Route Handlers and administrative pages. |
| Styling | **Tailwind CSS** | Fast responsive design and reusable artistic tokens. |
| UI enhancements | `lucide-react`, `motion` | Icons and subtle artistic animation; keep optional. |
| Database | **Supabase PostgreSQL** | Relational bookings, participants, payments and tickets; ACID transactions. |
| Organizer authentication | **Supabase Auth** | Restrict dashboard and check-in operations. |
| Payments | **One approved Sri Lankan gateway, to be chosen** | Hosted checkout for LKR card payments; integrate through a server-verified callback. |
| Transactional email | **Resend**, or Brevo if volume limits require | Receipt and ticket delivery. |
| Tickets | Server-generated unique QR verification tokens | Fast, auditable admission. |
| Hosting | **Vercel or Netlify** running full-stack Next.js | No VPS or separate Express server required. |
| Domain | Custom `.lk` / `.org.lk` domain | Public brand and sender email domain. |
| Version control | Git + GitHub | Review, rollback, automated deployments. |

**Working rule:** Develop locally and on free/staging services first. Decide the approved production hosting plan and payment provider **before accepting real payments**. Vercel Hobby is restricted to personal/non-commercial use, so do not assume it is suitable for a live paid-entry event without checking terms. Netlify has a free credit-based option, but production usage must be monitored. Supabase Free can pause after low activity; a paid production database and backup plan reduce risk.

### Business model and capacity

- Charge **LKR 1,000** for **one individual admission**.
- At **500 paid attendees**, gross event ticket collections would be **LKR 500,000**, **before** processing fees, refunds and service expenses.
- **500 is a planning estimate, not yet a confirmed enforced capacity.** Get the organizer/venue-approved capacity and store it in event configuration before live bookings open.
- The public site must **not claim live seat availability** until the capacity and inventory calculation are connected to the real database.
- **MVP assumption:** individual registration. Group checkout is a proposed enhancement and requires organizer confirmation.
- **MVP assumption:** one price tier and one event day. No assigned seating or seat map.

---

## 1. Confirmed facts, unconfirmed details and approvals

### 1.1 Confirmed facts — use exactly

| Field | Value |
|---|---|
| Official event name | **Unconditional Love 3** |
| Theme/subtitle | **Bring One Another** |
| Short message | A youth gathering to experience God's love |
| Event date | **January 20, 2027** |
| Venue | **Avenra Gangaara**, Wennappuwa |
| Country/currency | Sri Lanka / **LKR** |
| Base entrance fee | **LKR 1,000 per person** |
| Expected attendees | **~500** |
| Visual direction | Expressive, hand-painted/artistic theme based on provided invitation |

The supplied invitation is specifically for a **CORE TEAM MEMBERS MEETING**. It is **not** the public event invitation. Its November 1, 2026 meeting date and 4:30 PM meeting time must **never** be copied into the public event schedule. Reuse only its visual identity and any separately approved brand artwork.

### 1.2 Decisions needed from organizing committee

Before public registration opens, confirm and document:

- [ ] Final enforced admission capacity (`capacity`; can be different from ~500 expected).
- [ ] Registration opening/closing dates, event start/end times and check-in hours.
- [ ] Who is the legally/operationally authorized merchant and which bank account receives funds.
- [ ] Approved gateway, actual pricing, limits, refunds and provider acceptance of this church gathering.
- [ ] Whether a leader may pay for several participants in one booking.
- [ ] Whether there are free/sponsored seats, coupons, early-bird discounts or refund exceptions.
- [ ] Required registration fields; minimum age; minor/parental consent rules.
- [ ] Whether transport, meals, accommodation or clothing advice is offered.
- [ ] Approved organizers' names, roles, photos and contact information.
- [ ] Agenda, speakers, worship leaders, and venue location link.
- [ ] Final cancellation, refund, transfer and privacy/retention policies.
- [ ] Official support channel (email, WhatsApp Business, or phone).
- [ ] Who has finance, administration and check-in permissions.
- [ ] Exact database data-retention period after the event.

**Never invent missing facts.** In preview pages use clearly labeled placeholders; in production, either supply approved text or hide the incomplete section.

---

## 2. Goals, success criteria and release scope

### 2.1 Primary goals

1. Introduce the gathering and communicate its Christian message through the visual language of the invitation.
2. Let young people find details and complete registration easily on a mobile phone.
3. Collect the correct payment securely through a compliant hosted gateway.
4. Prevent overselling, duplicate paid bookings and duplicate QR admissions.
5. Deliver a clear confirmation and admission ticket by email.
6. Give organizers a useful private dashboard for registration, finance reconciliation and check-in.
7. Complete event-day operations and export/retain/delete data appropriately.

### 2.2 Release priorities

**P0 — Required for launch**

- Public event site, contact information and approved policies.
- Working individual registration with consent and validation.
- Authoritative seat capacity and temporary reservation mechanism.
- Approved gateway's real hosted payment checkout and verified callback.
- Confirmed booking state + unique ticket/token + email confirmation.
- Organizer login, booking search and attendee export.
- Check-in verification with one-time admission status.
- Monitoring, backup/recovery, and documented manual incident process.

**P1 — Useful if time permits**

- Group booking (multiple participants under one payment).
- Self-service ticket resend using one-time email verification.
- Automated expiration/retry handling and lightweight waiting list.
- Manual bank transfer with finance approval, if supported by organizers.
- Separate finance and check-in roles, if operations need them.

**P2 — Post-MVP / optional**

- WhatsApp Business API notifications.
- Curated digital art wall with moderation.
- Sponsored admission workflow.
- Participation analytics and richer ticket design.
- Multilingual content if approved (e.g. Sinhala/Tamil/English).
- Volunteer shift assignments and advanced reports.

**Not in scope for MVP:** live seat-number selection, accommodation management, social network, chat platform, recurring subscriptions, donations processed as event tickets, native iOS/Android apps, and a general-purpose CMS.

### 2.3 Non-functional quality targets

- **Responsive:** supports at least 360px mobile through desktop widths.
- **Accessible:** target WCAG 2.2 AA basics (contrast, semantic headings, keyboard flow, labels, errors, reduced motion).
- **Performance:** optimize artwork; aim for strong Core Web Vitals on representative Sri Lankan mobile connectivity; measure before launch.
- **Security:** no client-side secrets, controlled PII access, rate limiting, server validation and audit logging.
- **Consistency:** a payment cannot create a confirmed ticket without verified gateway success (except an audited organizer-approved complimentary registration).
- **Capacity:** successfully handle 500 registrations and concurrency at the last available seat; test bursts rather than assuming they will never occur.
- **Operational readiness:** accessible recovery steps if email fails, a participant loses the ticket, or venue connectivity is poor.
- **Observability:** errors visible to the development/organizing team without leaking private participant data.

---

## 3. User roles, journeys and permissions

### 3.1 Roles

| Role | Can do | Must not do |
|---|---|---|
| Visitor | Read public pages; view registration availability | Read participant list or private bookings |
| Participant | Register; pay; access own ticket via verified link | Change payment status or use another participant's ticket |
| Check-in volunteer | Search/scan ticket and mark attendance | Export finance/PII or mark bookings paid |
| Organizer/admin | Manage participant records, schedule, cancellations and support | Modify verified gateway records without an audit trail |
| Finance admin | Review gateway transactions; approve manual transfers/refunds (if enabled); export reconciliation | Bypass payment controls without recorded approval |
| Developer/owner | Deploy, monitor and maintain | Expose service-role keys or production data to the client |

For MVP, a small authorized admin group is sufficient, but do not rely solely on hiding buttons to enforce permissions. Validate roles **on every server operation and through database authorization**.

### 3.2 Visitor-to-admission journey

```text
View event website
       ↓
Open registration → enter contact details → accept policy
       ↓
Server validates fee/capacity and creates a pending booking + temporary hold
       ↓
Redirect to gateway-hosted payment page
       ↓
Provider sends authenticated server callback
       ↓
Server verifies signature + booking + currency + exact amount + payment state
       ↓
Atomically confirm booking and issue one unique QR ticket
       ↓
Send confirmation email; record send status
       ↓
Participant presents ticket at event → authorized check-in marks used
```

**Important:** The payment return page is only informational. Do **not** trust `?success=true`, browser responses, or screenshots as evidence that funds were collected. A gateway callback can arrive late, repeatedly, or out of order; build for those cases.

---

## 4. Public site requirements (frontend)

The separate `docs/FRONTEND_PHASES.md` provides detailed phase-by-phase prompts for the frontend. This section defines the complete site requirements.

### 4.1 Route list

| Route | Purpose | P0? |
|---|---|---|
| `/` | Illustrated hero, theme, CTA, highlights, logistics | Yes |
| `/about` | Purpose, faith-centered message, community | Yes |
| `/team` | Approved organizing team profiles or hidden pending content | Yes, only if content approved |
| `/schedule` | Approved event agenda or "Details coming soon" | Yes, if approved |
| `/register` | Real registration form, price summary, consent | Yes |
| `/contact` | Verified venue details, directions, approved support contact | Yes |
| `/faq` | Practical approved answers | Yes |
| `/privacy` | Approved privacy notice | Yes |
| `/terms` | Approved participation, cancellation and refund policy | Yes |
| `/booking/[reference]` | Non-sensitive booking status; full ticket only with verified access | Yes |
| `/admin` | Protected organizer dashboard | Yes |
| `/admin/bookings` | Protected registration management | Yes |
| `/admin/check-in` | Protected check-in scanner/manual lookup | Yes |

### 4.2 Design requirements — painting-inspired, not corporate

From the reference invitation:

- Hand-painted lakeside/tropical scene: trees, palms, water lilies and a warm gathering setting.
- Broad expressive **purple, coral/orange, gold and green** strokes.
- Warm paper-like background, artistic dividers and restrained layered textures.
- Expressive typography for short display text; highly readable text for long paragraphs.
- Artwork should complement—not obscure—titles and form fields.
- Use approved original artwork/high-resolution exports where possible; the reference JPEG is too small to stretch as a full-screen hero without looking blurred.
- Responsive layouts, visible call-to-action, clear LKR price, and attractive team cards.
- Motion should be subtle and respect `prefers-reduced-motion`.
- Respect consent for publishing identifiable organizer/participant photos.

**Suggested design tokens (creative starting points, not exact sampled flyer colors):**

```text
Canvas:         #F8F4EA
Ink:            #342944
Purple:         #7961A6
Sunset coral:   #DA8968
Gold:           #E6C56F
Leaf green:     #6F956B
Water blue:     #668C9D
```

### 4.3 Homepage sections, in order

1. Accessible header and navigation.
2. Large artistic hero with **Unconditional Love 3 — Bring One Another**.
3. Compact event details: **January 20, 2027 • Avenra Gangaara • Rs. 1,000**.
4. Countdown using Asia/Colombo timezone and the **approved start time**; until confirmed, show a date-only reminder (avoid inventing midnight as event start).
5. Short approved purpose and call to community.
6. “What to expect” section containing only approved activities.
7. Venue/directions and practical FAQs.
8. Organizing team preview only after names/images are approved.
9. Registration CTA and footer with policies/contact.

### 4.4 Frontend-only phase boundary

During initial UI development, registration is **preview-only**: never accept real participant data or display fake booking success. Do not activate public registration until the full backend and operational go-live gate are passed.

---

## 5. Functional requirements (full-stack)

Each requirement has an ID so an agent can refer to it during implementation.

### 5.1 Registration and booking

| ID | Requirement | Priority |
|---|---|---|
| REG-01 | Public registration opens/closes based on approved event settings; display an unambiguous status | P0 |
| REG-02 | Collect only required participant info (suggested: full name, email, phone, required consent; optional church/group) | P0 |
| REG-03 | Validate on client **and** server; normalize contact fields, prevent invalid submissions | P0 |
| REG-04 | Calculate amount on the server: `participants × 1000 LKR`, unless an approved pricing rule exists | P0 |
| REG-05 | Prevent overselling with an **atomic database operation**, not a frontend counter | P0 |
| REG-06 | Create unguessable public booking reference and distinguish it from internal IDs | P0 |
| REG-07 | Temporary pending holds expire by an approved window, e.g. 10–15 minutes | P0 |
| REG-08 | Duplicate submissions and refreshes do not create duplicate paid admissions | P0 |
| REG-09 | Publish accurate status (pending / paid-confirmed / failed / cancelled / waitlisted) | P0 |
| REG-10 | Optional group booking with separately named participants and separate tickets | P1 |
| REG-11 | Optional manual bank transfer with verification by finance admin | P1 |
| REG-12 | Optional free/sponsored seats with explicit organizer approval and separate reporting | P1 |

**Capacity policy:** The system must count **confirmed admissions plus active temporary holds**, not simply all rows ever created. Expired holds cease reserving inventory. The exact algorithm must enforce capacity within a PostgreSQL transaction or trusted database function using locking/atomic updates.

### 5.2 Payment processing

| ID | Requirement | Priority |
|---|---|---|
| PAY-01 | Use an approved hosted checkout gateway supported for this Sri Lankan merchant | P0 |
| PAY-02 | Never process/store raw card details in our application | P0 |
| PAY-03 | Create payment attempt with server-defined amount, currency `LKR` and booking ID | P0 |
| PAY-04 | Accept provider callback/webhook on publicly reachable HTTPS URL | P0 |
| PAY-05 | Verify provider signature/checksum and compare merchant ID, booking reference, exact amount and currency | P0 |
| PAY-06 | Confirm booking **only** for verified successful provider payment | P0 |
| PAY-07 | Treat repeated or out-of-order notifications idempotently; never double-confirm | P0 |
| PAY-08 | Log gateway transaction ID, status, timestamps and sanitized diagnostic information | P0 |
| PAY-09 | Support failed/cancelled checkout and safe retry; protect against duplicate captures | P0 |
| PAY-10 | Handle late successful payment after hold expiration without overselling; escalate for reallocation or refund | P0 |
| PAY-11 | Provide finance reconciliation and refund/dispute tracking | P0 |

**Gateway integration note:** PayHere Checkout uses a form-post `notify_url` and checksum-based verification, not necessarily a JSON webhook. Adapt request parsing to the chosen gateway's official docs. A browser redirect (`return_url`) is not verification. Use distinct sandbox and live credentials, endpoints and callback URLs.

### 5.3 Confirmation email / digital ticket

| ID | Requirement | Priority |
|---|---|---|
| NOT-01 | Send confirmation only after verified successful payment or an approved complimentary allocation | P0 |
| NOT-02 | Include event name, date, venue, paid amount, booking reference, ticket identifier and support contact | P0 |
| NOT-03 | Create one unique QR token per attendee, not one shared code across participants | P0 |
| NOT-04 | QR token must be cryptographically unpredictable, revocable, and not expose phone/email or raw PII | P0 |
| NOT-05 | Record delivery attempts and allow safe resend without issuing extra admissions | P0 |
| NOT-06 | If email fails, keep the booking confirmed; queue/retry sending or allow authorized resend | P0 |
| NOT-07 | Optional WhatsApp messaging only after consent and approved API integration | P2 |

The email is a **payment confirmation and admission ticket**, not automatically a tax invoice. Finance/organizers must approve any official receipt wording and tax/business details.

### 5.4 Organizer administration and check-in

| ID | Requirement | Priority |
|---|---|---|
| ADM-01 | Organizer-only login with Supabase Auth | P0 |
| ADM-02 | Dashboard: total paid admissions, active holds, remaining approved capacity, gross receipts, check-ins | P0 |
| ADM-03 | Search by booking reference, attendee name, email or phone; access restricted to approved roles | P0 |
| ADM-04 | Download appropriate CSV reports with least-privilege permissions | P0 |
| ADM-05 | Show transaction references and discrepancies to finance staff | P0 |
| ADM-06 | Record every manual adjustment/refund/complimentary admission in an audit trail | P0 |
| ADM-07 | Scan QR and mark an admission once; reject revoked and already-used tokens | P0 |
| ADM-08 | Provide manual lookup and controlled override for event-day failures | P0 |
| ADM-09 | Avoid displaying unnecessary PII to check-in volunteers | P0 |
| ADM-10 | Support ticket revocation/reissue following approved identity verification | P1 |

### 5.5 Content and event settings

- Store static approved content in `src/data/event.ts` during MVP; do **not** build a CMS just for three months.
- Event state such as **registration status, approved capacity and booking totals** must be authoritative server/database values, not editable public client variables.
- Changes to price, capacity and refund rules after sales begin require organizer approval and careful handling of existing reservations.

---

## 6. System architecture and security boundaries

```text
Participant browser
    │
    ▼
Next.js (App Router) — deployed on Vercel or Netlify
    ├── Public pages and client registration UI
    ├── Server Route Handlers / Server Actions
    │      ├── Validate + reserve booking in Supabase PostgreSQL
    │      ├── Create hosted payment request (gateway secret server-side)
    │      ├── Verify payment callback and confirm booking
    │      ├── Issue secure ticket / QR token
    │      └── Send email and record delivery attempts
    └── Protected organizer and check-in routes
           │
           ▼
Supabase Auth + PostgreSQL + Row Level Security

External provider: Sri Lankan hosted checkout → signed server notification
External provider: Transactional email service → confirmation delivery
```

### Security rules

1. **All sensitive writes happen on trusted server code or trusted database functions.** Client code cannot mark a booking paid, change capacity, or mint tickets.
2. Supabase **service-role key** and payment/email API secrets must remain server-side; never use `NEXT_PUBLIC_` for secrets.
3. Enable **Row Level Security** on all exposed tables. Prefer deny-by-default access for participant/payment/ticket data; use server-owned operations with explicit validation.
4. Make admin authentication + role checks mandatory on server and data-access paths, not merely client layouts.
5. Validate inputs using a schema library such as `zod`; treat all request bodies, callbacks and CSV input as untrusted.
6. Add rate limiting / abuse controls to registration, email resend and ticket verification endpoints.
7. Use HTTPS, anti-CSRF patterns where relevant, secure cookies, and standard Next.js security defaults.
8. Never return entire participant lists to the public browser; protect booking lookup against enumeration.
9. Avoid putting personal data, payment credentials, or full QR tokens in logs/analytics.
10. Use secure, unpredictable identifiers and uniqueness constraints; do not trust a four-digit ticket number as a secret.
11. Document a backup, restore, incident response and access-revocation process.
12. If minors register, obtain committee-approved guardian consent and minimize sensitive information; get appropriate privacy/legal guidance for Sri Lanka rather than inventing requirements.

---

## 7. Proposed database model

**Use migrations in source control.** Do not rely only on ad-hoc changes through the Supabase dashboard.

| Table | Key fields (illustrative) | Notes |
|---|---|---|
| `events` | `id`, `slug`, `name`, `date`, `venue`, `price_lkr`, `capacity`, `registration_status` | Single event now; design supports future reuse. |
| `bookings` | `id`, `reference`, `event_id`, `buyer_email`, `buyer_phone`, `status`, `quantity`, `total_lkr`, `hold_expires_at`, timestamps | Stores booking-level payment intent and state. |
| `participants` | `id`, `booking_id`, `full_name`, `email?`, `phone?`, approved optional fields | One record per person; don't duplicate more PII than needed. |
| `payment_attempts` | `id`, `booking_id`, `provider`, `provider_transaction_id`, `amount_lkr`, `currency`, `status`, sanitized callback metadata | Unique provider transaction ID and attempt idempotency. |
| `tickets` | `id`, `participant_id`, `token_hash`, `status`, `issued_at`, `revoked_at` | One active entry per eligible participant. |
| `check_ins` | `id`, `ticket_id`, `checked_in_at`, `checked_in_by` | Unique `ticket_id` prevents double entry. |
| `organizer_roles` | `user_id`, `role`, `active` | `admin`, `finance`, `check_in` as approved. |
| `notification_outbox` | `id`, `booking_id`, `type`, `status`, `attempts`, `last_error`, `sent_at` | Reliable email retry without duplicate issue. |
| `audit_logs` | `id`, `actor_user_id`, `action`, `entity_type`, `entity_id`, `created_at`, change summary | Records privileged changes. |

### Required database constraints and transaction policies

- Unique booking `reference`.
- One `tickets.participant_id` admission per participant at a time; ticket replacements revoke old tokens.
- Unique `(provider, provider_transaction_id)` for actual gateway transactions when ID is provided.
- Unique `check_ins.ticket_id`, ensuring repeated scans cannot create extra check-ins.
- Correct positive ticket price/quantity checks; amount calculations from **trusted config**.
- Booking reservation and confirmation operations use database transactions and deliberate row locking/atomic inventory rules.
- The server computes availability from confirmed admissions plus non-expired holds (or an equivalent transactionally maintained counter).
- Confirmation and ticket creation commit together whenever possible; send email **after** persistence, using an outbox.
- If a callback says a hold-expired order was paid, **do not simply reject the money or oversell**. Record verified payment and route to manual resolution/refund or safely allocate a newly available seat.
- A refund does not automatically mean a ticket can be reused; revoke the ticket and handle released capacity according to organizer policy.

### Booking and payment state machines

```text
Booking:
  pending_payment ── verified payment ──> confirmed ── check-in ──> checked_in
       ├── timeout ──> expired
       ├── payment failure ──> payment_failed
       └── cancellation ──> cancelled

  confirmed ── approved cancellation/refund ──> cancelled / refunded

Payment attempt:
  created → pending → succeeded | failed | cancelled | refunded | disputed

Ticket:
  active → checked_in
     └── revoked (if reissued/refunded)
```

**Caveat:** A payment status can succeed after the booking's temporary hold expires. Handle this as a documented exception workflow rather than pretending the state transition is always linear.

---

## 8. API and application contracts (proposed)

Do not create a standalone Express backend. Implement trusted endpoints with Next.js Route Handlers / Server Actions and Supabase.

| Endpoint | Method | Purpose | Access |
|---|---|---|---|
| `/api/registrations` | `POST` | Validate and create pending booking with hold | Public, rate-limited |
| `/api/checkout` | `POST` | Start hosted checkout from server-side amount | Pending booking owner, verified session/token |
| `/api/payments/webhook` | `POST` | Receive provider callback and verify it | Public provider callback; cryptographically verified |
| `/api/bookings/lookup` | `POST` | Secure booking lookup / email verification | Rate-limited / verified ownership |
| `/api/tickets/resend` | `POST` | Request verified ticket resend | Rate-limited and identity-verified |
| `/api/admin/bookings` | `GET` | List/search bookings with server-side filters | Authenticated admin/finance |
| `/api/admin/check-in` | `POST` | Validate ticket token and atomically mark entry | Authenticated check-in role |
| `/api/admin/export` | `GET` | Export approved reporting data | Authenticated authorized role |

Endpoint names are suggestions; preserve clear contracts but adapt to actual framework code. Use consistent error shape and HTTP status codes. Never expose `payment_attempts`, private emails or token hashes in public endpoints.

### Suggested environment variables (`.env.example`)

```bash
# Public browser configuration (safe to expose)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=

# Server-only secrets — never NEXT_PUBLIC_
SUPABASE_SERVICE_ROLE_KEY=
PAYMENT_PROVIDER=mock
PAYMENT_MERCHANT_ID=
PAYMENT_MERCHANT_SECRET=
PAYMENT_WEBHOOK_SECRET=
RESEND_API_KEY=
EMAIL_FROM=

# Local feature switches — enforce on server
REGISTRATION_ENABLED=false
PAYMENTS_ENABLED=false
```

**Do not assume every gateway needs or supports `PAYMENT_WEBHOOK_SECRET`.** Use the exact merchant credentials, signature scheme, callback content type and environment variables specified in the selected provider's documentation. Never commit real `.env.local` values.

---

## 9. Implementation plan — phase-by-phase

**Agent operating mode:** Complete **only the explicitly requested phase**. Read this master README and the frontend README before changing code. Provide a short plan, implement, run tests/build, report changed files and blockers, then **STOP and wait for approval**. Never activate real registration or payments implicitly.

### Track A — Frontend foundations (Phases F0–F7)

Follow the **existing frontend README** for its complete requirements and individual agent prompts:

| Phase | Deliverable | Gate |
|---|---|---|
| **F0** | Repo setup, invitation artwork, event config, design tokens, typography | TypeScript + build pass |
| **F1** | Header, footer, navigation, shared UI | Responsive/keyboard checks |
| **F2** | Artistic homepage hero, date/location/fee, CTA | Correct copy, no fabricated event time |
| **F3** | Purpose, highlights, FAQ teaser, creative sections | Approved content / obvious placeholders |
| **F4** | About, Team, Schedule pages | No invented speakers/team/agenda |
| **F5** | Registration frontend preview only | **No real persistence or fake payment** |
| **F6** | Contact, FAQ, draft policy pages | Policies not presented as approved |
| **F7** | Mobile, accessibility, performance, SEO, handoff | Build/lint/QA pass |

**Gate A:** Public-facing site is visually approved. Registration is still disabled/preview-only.

### Track B — Full-stack functionality (Phases B1–B8)

#### B1 — Supabase setup and migrations

**Implement:** Create Supabase development project; connect Next.js server clients; create initial migrations for `events`, `bookings`, `participants`, `payment_attempts`, `tickets`, `check_ins`, `organizer_roles`, `notification_outbox`, `audit_logs`; introduce RLS and indexes.

**Acceptance checks:** schema is reproducible from migrations; unauthenticated browser cannot read booking/payment data; privileged secrets never reach frontend; local build succeeds.

**Agent task:** `Implement B1 only. Add database schema/migrations, Supabase integration and server-side access patterns. Do not enable payment collection or real registration. Document setup and RLS validation, run checks, then stop.`

#### B2 — Registration API and atomic seat allocation

**Implement:** Server-side schema validation, create pending booking, authoritative LKR 1,000 amount, capacity reservation, hold expiry, rate limits, friendly UI form and clear states.

**Acceptance checks:** invalid input rejected; attempts to alter frontend price ignored; 50–100 simultaneous attempts cannot exceed enforced capacity; expired holds free inventory; duplicate submits do not create duplicate paid seats.

**Agent task:** `Implement B2 only. Connect /register to the validated server booking API, implement transactional capacity/hold logic and tests. Keep payments disabled; use test data only. Stop after reporting results.`

#### B3 — Admin login and base dashboard

**Implement:** Supabase Auth for invited organizers; server-side role checks; protected booking list, filters and counts; no public organizer creation endpoint.

**Acceptance checks:** public users cannot access data by calling APIs directly; finance-only data is not visible to check-in volunteers; unauthorized calls return appropriate errors.

**Agent task:** `Implement B3 only. Add organizer authentication, protected dashboard and role-based server authorization. No real financial actions. Test role boundaries and stop.`

#### B4 — Mock checkout, state machine and QA

**Implement:** Payment-provider abstraction (mock adapter first), callback simulator in **development/test only**, booking/payment state transitions, idempotency, late-success exception route, test fixtures.

**Acceptance checks:** duplicate callbacks confirm exactly once; failed/expired states are handled; production cannot use the mock payment approval path.

**Agent task:** `Implement B4 only. Build a test-only mock checkout and robust state machine. Do not expose mock-success functionality in production. Test concurrency, duplicates and expiry; stop.`

#### B5 — Ticket generation and transactional email

**Implement:** Cryptographically secure token/QR, ticket page, branded HTML email, delivery outbox/retry, controlled resend and generic booking lookup response.

**Acceptance checks:** one unique active ticket per confirmed person; no ticket for unpaid booking; email outage doesn't revoke a legitimate paid ticket; lost-ticket recovery is identity-verified.

**Agent task:** `Implement B5 only. Generate QR tickets for server-confirmed test bookings; integrate email sandbox/test sender, outbox and safe resend. No real payments. Test privacy and retries; stop.`

#### B6 — Real gateway sandbox integration

**Implement:** Confirm provider selection and approved merchant; integrate the official sandbox checkout, callback parsing/signature verification, amount/currency match, idempotency, sandbox reconciliation; introduce explicit `PAYMENTS_ENABLED` guard.

**Acceptance checks:** tampered notification rejected; return-page redirect alone cannot confirm; duplicate callback harmless; pending/failed/cancelled/late success handled; tests run against sandbox and public staging callback URL.

**Agent task:** `Implement B6 only after the provider is approved. Use official gateway docs. Add sandbox integration, verified callback and security tests. Do NOT enable live merchant credentials or collect real funds. Stop.`

#### B7 — Check-in operations and reports

**Implement:** Authorized mobile-friendly scanner, QR validation, atomic check-in, manual lookup, attendee count, authorized CSV exports and audit log.

**Acceptance checks:** second scan is rejected as already-used; offline/network failure displays a clear safe fallback; a check-in volunteer cannot download finance reports or access all PII.

**Agent task:** `Implement B7 only. Add secure QR scanner, check-in audit records and role-based exports. Test duplicates and unstable network conditions; stop.`

#### B8 — Production deployment, readiness, live go/no-go

**Implement:** Configure production hosting/domain/HTTPS, database environment, secret manager, backup/export, email DNS (SPF/DKIM/DMARC), production webhook domain, provider live verification, privacy/terms and monitoring.

**Acceptance checks:** each launch checklist item signed off; complete real low-value end-to-end payment test approved by organizers/provider; finance verifies gateway settlement; rollback and manual support rehearsed.

**Agent task:** `Implement B8 deployment readiness only. Prepare deployment config, preflight checks, monitoring and runbook. Do not turn on registration/payments until organizers explicitly authorize the live go/no-go. Stop with checklist.`

**Gate B:** Real launch is explicitly approved. Remove test data from public reports, preserve evidence of successful rehearsal, and do not accidentally connect production gateway callbacks to staging database.

### Track C — Event day and closure (O1–O2)

**O1 — Event operations:** Monitor error and payment queues, reconcile settlement daily, have check-in devices charged, prepared volunteers, venue internet/mobile hotspot contingency, offline authorized *manual exception log* with later reconciliation, and a support/finance escalation contact.

**O2 — After event:** Export permitted final reports; settle refunds/disputes; revoke organizer access; deliver reports securely; comply with approved retention period; archive/delete PII accordingly; cancel subscriptions and unnecessary infrastructure after verifying all payment callbacks and financial obligations are complete.

### Suggested calendar (adapt to organizer decisions)

| Window (illustrative) | Priority |
|---|---|
| **Nov 2–15, 2026** | Frontend F0–F4, finalize event policies and start merchant discussion |
| **Nov 16–29** | F5–F7 and B1–B2; make responsive site reviewable |
| **Nov 30–Dec 13** | B3–B5: admin, mock payments, receipts/tickets |
| **Dec 14–27** | B6 sandbox, staging callback tests and B7 check-in |
| **Dec 28–Jan 6** | B8 launch readiness, domain/merchant approval, live tests |
| **Jan 7–19, 2027** | Live registration monitoring and volunteer check-in rehearsal |
| **Jan 20, 2027** | Event-day check-in and live operations |
| **After Jan 20** | Financial reconciliation, retention/archival, service shutdown |

**The schedule is a proposed plan, not a guaranteed delivery date.** Start merchant approval earlier if possible; providers may need a domain, approved website and organizational documents. Never schedule live registration before the system is secure and the payments account is approved.

---

## 10. Test plan and acceptance scenarios

### 10.1 Core unit/integration tests

- [ ] Valid registration creates pending booking with correct `total_lkr`.
- [ ] Invalid email/phone/consent rejected on server.
- [ ] Client-modified price or quantity cannot override server pricing.
- [ ] Attempt to register while registration is closed is rejected.
- [ ] Capacity limit enforced under 50–100 concurrent requests.
- [ ] Expired holds no longer reserve seats.
- [ ] Duplicate form submission is safe / idempotent.
- [ ] Fake success redirect leaves booking pending.
- [ ] Invalid payment signature rejected.
- [ ] Verified callback with wrong amount or currency rejected/escalated.
- [ ] Duplicate successful callback does not issue second ticket.
- [ ] Late verified payment after expiry enters safe reconciliation path.
- [ ] Failed and cancelled payments do not issue tickets.
- [ ] Email outage results in resendable confirmed booking, not lost payment.
- [ ] QR token contains no directly readable participant PII.
- [ ] Second QR scan is not allowed to check in twice.
- [ ] Revoked or refunded ticket cannot check in.
- [ ] Public requests cannot read participants or payments.
- [ ] Unauthorized admin/API requests are denied.
- [ ] CSV export is role-restricted and avoids unnecessary personal data.
- [ ] No live secrets in client bundle or Git history.

### 10.2 Manual E2E tests

- [ ] Mobile browser registration on a slow network.
- [ ] Payment gateway sandbox success, failure, cancellation and refresh.
- [ ] Payment callback arrives before/after redirect and is retried.
- [ ] Email received with the exact correct event date, amount and venue.
- [ ] Guest can retrieve ticket securely on another device.
- [ ] Volunteer scans 2 different valid tickets and attempts to scan one twice.
- [ ] Organizer can find booking via reference when guest loses email.
- [ ] Site can be reverted to previous deployment.
- [ ] A tested database backup/export can be restored in a safe environment.
- [ ] Venue check-in works with intermittent connectivity or uses controlled fallback.

### 10.3 Launch readiness gate (must all be true)

1. Organizer approves official content, program/venue/contact, age policies and privacy/refund terms.
2. Payment provider approves merchant, business classification, payout account and production domain.
3. Capacity and final fee are explicitly approved.
4. All sensitive routes have authentication/authorization and rate limits.
5. Successful live small-value payment test and finance settlement reconciliation completed.
6. Every confirmed booking produces one valid ticket; email can be retried.
7. Tested backup and a named admin owner/support person exist.
8. At least two volunteers can operate the check-in workflow correctly.
9. Production registration and payment toggles are enabled **only by explicit organizer approval**.

---

## 11. Hosting, domain, payment gateway and running costs

### 11.1 Free while developing

- Run `next dev` locally at **LKR 0**.
- Use **Supabase Free** for test data/migrations (beware inactivity pauses).
- Deploy a public staging build on **Netlify Free**, subject to monthly credits, or use Vercel for personal development subject to its plan terms.
- Use Resend Free for **up to 3,000 emails/month and 100/day**, with verified sending domain as required.
- Use gateway **sandbox**: no real funds while testing.
- Generate QR codes with a local library at no per-ticket charge.
- Domain is optional for initial development; a real approved domain/public webhook URL is needed for production and often useful for sandbox and merchant approval.

### 11.2 Production cost worksheet

Use real quotes when the merchant is approved. **This worksheet is not a binding price quote.**

| Item | Estimate/calculation | Notes |
|---|---|---|
| Development | **LKR 0 labor budget** | Developer is volunteering/doing it personally. |
| `.org.lk` domain | **~LKR 1,000/year** | Official LK budget second-level rate, subject to availability. |
| `.lk` domain | **~LKR 5,000/year** | Alternative economy domain. |
| Frontend + API hosting | **Free if permitted/within quota; otherwise paid plan** | Vercel Hobby personal/non-commercial restriction; confirm chosen provider. |
| Supabase | Free for development; **Pro from USD 25/month** if selected | Pro reduces pause risk and offers backups. |
| Email | Resend Free may suffice; paid if registration spikes above 100/day | 500 total tickets does not necessarily mean 500 emails in one day. |
| Payment fees | `500 × 1000 × provider_processing_rate` plus plan/other fees | Depends on provider, payment mix and collections per calendar month. |
| WhatsApp | Optional | Start with email + manual WhatsApp Business support. |
| QR tickets | **LKR 0 per QR** | Generation via npm package, not an external paid QR service. |

**Example only:** PayHere Lite lists **3.3%** and a **LKR 200,000 monthly acceptance limit**. If all 500 attendees paid LKR 1,000 through that fee, the arithmetic processing fee would be LKR 16,500, but **the plan would not accept the full LKR 500,000 within one month**. Do not choose a gateway based only on the percentage. Verify monthly limit, plan subscription, payout timing, tax/add-on fees, church/association eligibility and refund behavior.

### 11.3 Provider decision checklist

- [ ] Accepts the church/organizing association and event participation fees.
- [ ] Receives LKR funds into an approved Sri Lankan bank account.
- [ ] Has safe hosted checkout and documented server-side verification.
- [ ] Provides a usable sandbox and live keys.
- [ ] Monthly transaction-value limit supports expected sales concentration.
- [ ] Fees and any tax/extra card fees accepted by finance team.
- [ ] Refund/chargeback terms understood.
- [ ] Supports the production site domain and public callback URL.
- [ ] Has adequate support if issues occur close to Jan 20.

---

## 12. Repository structure and local setup

### 12.1 Project tree (grow gradually)

```text
unconditional-love-3/
├── README.md                         # This full project README
├── docs/
│   ├── FRONTEND_PHASES.md            # Existing frontend agent playbook
│   ├── DECISIONS.md                  # Committee-approved decisions
│   ├── LAUNCH_CHECKLIST.md           # Go/no-go review
│   └── RUNBOOK.md                    # Event-day incidents / refunds / support
├── public/
│   └── images/
│       └── ul3-invitation-reference.jpg
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── team/page.tsx
│   │   ├── schedule/page.tsx
│   │   ├── register/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── booking/[reference]/page.tsx
│   │   ├── admin/page.tsx
│   │   ├── admin/bookings/page.tsx
│   │   ├── admin/check-in/page.tsx
│   │   └── api/
│   │       ├── registrations/route.ts
│   │       ├── checkout/route.ts
│   │       ├── payments/webhook/route.ts
│   │       └── admin/check-in/route.ts
│   ├── components/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── registration/
│   │   ├── admin/
│   │   └── ui/
│   ├── data/event.ts
│   ├── lib/
│   │   ├── supabase/
│   │   ├── payments/
│   │   ├── booking/
│   │   ├── email/
│   │   ├── tickets/
│   │   └── validation/
│   └── types/
├── supabase/migrations/
├── tests/
├── .env.example
├── .gitignore
└── package.json
```

This is the **target** tree, not the set of files to generate on day one. Only create code when a specific phase needs it.

### 12.2 Initialize Next.js (developer instructions)

Install a supported **Node.js LTS** (Next.js currently requires Node.js **20.9+**), npm, Git and your editor.

```bash
node -v
npm -v
git --version

npx create-next-app@latest unconditional-love-3 \
  --typescript --tailwind --eslint --app --src-dir --use-npm \
  --import-alias "@/*"

cd unconditional-love-3
npm install lucide-react motion
npm run dev
```

Open `http://localhost:3000`.

On Windows PowerShell, run the `npx create-next-app ...` command on **one line** instead of copying Bash line-continuation backslashes.

Then copy the two project documents into the correct locations:

```text
UL3_FULL_PROJECT_README.md      → project/README.md
UL3_FRONTEND_README.md          → project/docs/FRONTEND_PHASES.md
invitation reference image     → project/public/images/ul3-invitation-reference.jpg
```

Only install backend dependencies when B1 begins. A likely starting point is:

```bash
npm install @supabase/supabase-js @supabase/ssr zod
```

Do not add gateway/email libraries until the corresponding phase.

### 12.3 Local development and quality checks

```bash
npm run dev          # Run locally
npx tsc --noEmit     # Check TypeScript
npx eslint .         # Check lint rules
npm run build        # Verify production build
```

Use `npm test` when automated tests are added, and `npm run test:e2e` if the project defines it. Do not claim that a test passed unless it actually ran and exited successfully.

### 12.4 Git workflow

```bash
git status
git add .
git commit -m "chore: start UL3 project"
```

Use small commits per phase; open a branch for riskier database or gateway work. Commit `.env.example`, not `.env.local`, and never commit gateway secrets or production participant data.

---

## 13. Coding agent master prompt (copy/paste)

```text
You are the lead software engineer for the Unconditional Love 3 —
Bring One Another event website and booking system.

Before writing code:
1. Read README.md (master requirements) in full.
2. Read docs/FRONTEND_PHASES.md (frontend playbook) in full.
3. Inspect the project and any existing migrations, tests, and code.
4. Read docs/DECISIONS.md if it exists. Organizer-approved decisions
   override illustrative defaults but must not override security rules.

IMPORTANT EVENT FACTS
- Event: Unconditional Love 3 — Bring One Another
- Date: January 20, 2027
- Venue: Avenra Gangaara, Wennappuwa, Sri Lanka
- Fee: LKR 1,000 per participant
- Expected attendees: around 500 (NOT yet confirmed hard capacity)
- Purpose: Christian youth gathering to experience God's love
- Invitation is a core-team meeting flyer, ONLY an artistic reference.

STACK
- Next.js App Router, TypeScript, Tailwind CSS
- Supabase PostgreSQL + Auth (during backend phases)
- Hosted Sri Lankan payment gateway selected later
- Resend/Brevo email, QR tickets
- Vercel/Netlify hosting selected before launch

OPERATING INSTRUCTIONS
- I will request ONE phase at a time.
- Implement ONLY the named phase; never pre-empt later phases.
- First provide a concise implementation plan, then code.
- Preserve completed functionality and visual style.
- Do not fabricate event timings, team identities or contact details.
- Do not enable real registration, live payments, or issue real tickets
  without their prerequisite phases and explicit approval.
- Follow database access, payment verification, PII and ticket safety rules.
- Add or update tests appropriate for this phase.
- Run TypeScript, ESLint, build and relevant tests; report real results.
- Summarize changed files, decisions needed, and blockers.
- STOP after the requested phase. Wait for my approval.

REQUESTED PHASE: [REPLACE THIS WITH F0/F1/.../F7 OR B1/.../B8]
```

### Recommended first request

```text
Please read both READMEs and implement frontend phase F0 only.
Use the artwork as artistic inspiration; establish visual tokens,
central event facts and the basic app foundation. Do not add
Supabase, payments, registration storage or admin APIs yet.
Run quality checks, explain the result, and stop for review.
```

For each later phase, change only the phase name. To avoid scope creep, tell the agent explicitly whether it's implementing a preview or production behavior.

---

## 14. Event-day operations and shutdown runbook

### Before registration opens

- Verify pricing and approved capacity; publish policies and contact details.
- Confirm gateway and bank settlement; test a real transaction when authorized.
- Check login recovery for at least two authorized organizers.
- Configure monitored error logs, transactional email retry and database backup.
- Explain support steps for paid-but-not-confirmed participants.

### Daily during registration

- Review confirmed bookings vs gateway transaction report.
- Investigate payments with no booking confirmation or unmatched callbacks.
- Monitor email failures, booking holds and available capacity.
- Check hosting/database quotas; do not allow Free-tier pauses to surprise you.
- Review security/access logs and application errors.

### On January 20

- Test check-in device cameras, internet and power banks early.
- Assign staff-only scanner accounts; restrict finance screens.
- Prepare a supervised manual exception queue for lost codes or connectivity failures.
- Avoid recording full participant details on personal devices.
- Reconcile manual overrides into the database after connectivity returns.

### After the event

- Reconcile collections, chargebacks and refunds with finance.
- Export only approved attendance and finance reports and store securely.
- Revoke temporary organizer access and rotate secrets if exposed.
- Keep service active only as needed for disputes/refunds and ticket support.
- Delete/archive data according to the approved retention policy.
- Disable recurring paid plans once they are truly no longer needed.

---

## 15. Reference documentation and vendor policies

Last checked **November 2, 2026**. Provider terms/pricing can change, so re-check immediately before buying or launching.

- Next.js official installation: https://nextjs.org/docs/app/getting-started/installation
- Netlify Next.js App Router/Route Handlers: https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/
- Netlify plans and free credits: https://www.netlify.com/pricing/
- Vercel Hobby use restriction: https://vercel.com/docs/plans/hobby
- Supabase pricing: https://supabase.com/pricing
- Supabase Free inactivity pausing: https://supabase.com/kb/faqs/platform/free-project-pausing
- Supabase database backups: https://supabase.com/docs/guides/platform/backups
- PayHere Checkout callback/signature requirements: https://support.payhere.lk/api-%26-mobile-sdk/checkout-api
- PayHere transaction/monthly limits: https://support.payhere.lk/limits-and-fees
- Resend pricing/quotas: https://resend.com/pricing
- LK Domain Registry pricing: https://www.domains.lk/domain-payments/

---

## 16. Project completion definition

This project is **complete for the event** only when:

- [ ] Approved artistic public site is responsive, readable and accessible.
- [ ] All published event facts and policies are committee-approved.
- [ ] Capacity is approved, and seat allocation is concurrency-safe.
- [ ] Participants can register and pay LKR 1,000 through an approved provider.
- [ ] A verified successful payment results in exactly the right tickets, not duplicates.
- [ ] Confirmation emails are sent or safely recoverable.
- [ ] Admins can reconcile payment and registration reports.
- [ ] Check-in can admit each valid participant once and handles exceptions.
- [ ] Hosting, backups, monitoring, domain and incident processes are ready.
- [ ] Production access and payment activation have explicit organizer approval.
- [ ] After January 20, reconciliation and data-retention/shutdown steps are completed.

**Build in small phases. Keep the art expressive, the registration simple, and the money/seat logic strict.**
