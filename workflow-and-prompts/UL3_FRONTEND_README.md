# Unconditional Love 3 — Bring One Another
## Frontend Development README & AI Agent Playbook

> **Project:** Unconditional Love 3 — Bring One Another  
> **Type:** Christian youth gathering website  
> **Purpose:** Bring young people together to experience God's love and connect with one another  
> **Event date:** Wednesday, January 20, 2027  
> **Venue:** Avenra Gangaara, Wennappuwa, Sri Lanka  
> **Entrance fee:** LKR 1,000 per attendee  
> **Expected attendance:** Approximately 500 people  
> **Current scope:** **FRONTEND ONLY**. Do not implement real registration storage, authentication, payments, booking confirmation or QR issuance yet.

---

## 1. What we're building

Build an expressive, welcoming, accessible, mobile-first website for a one-day youth gathering. Its primary goal is to introduce the gathering and its message, convey important event details, show the organizing team, and prepare a clear UI for future registrations. It should feel like an **interactive art piece**, not a corporate dashboard, generic ticket store, or wedding landing page.

### Confirmed facts: use these exactly

- Event name: **Unconditional Love 3** (logo may display **Unconditional Love III**).
- Theme / subtitle: **Bring One Another**.
- Date: **January 20, 2027**.
- Venue: **Avenra Gangaara, Wennappuwa, Sri Lanka**.
- Entrance fee: **Rs. 1,000 per person**.
- Approximately **500 attendees expected**. Do **not** present this as live seat availability.
- Purpose: A **Christian youth gathering to experience God's love**, connection and community.

### Facts *not* confirmed — do not invent

- Starting/ending time, detailed agenda, speakers, worship team, organizing-team names/photos, registration-opening time, age restrictions, accommodation, meals, transport, refund rules, phone numbers, emails, social handles, exact live seat count.
- **The supplied invitation is for a CORE TEAM MEMBERS MEETING** and contains its own earlier meeting date/time. **Do not copy that date/time into event pages.** Use it only as *visual inspiration*.
- Where content is unknown, use conspicuously labeled placeholders or hide the section until content is approved. Never fabricate testimonials, sponsors, partners or participant statistics.

---

## 2. Visual direction: art first

Use the existing invitation image (recommended path: `public/images/ul3-invitation-reference.jpg`) as the art-direction reference. It features:

- A **hand-painted tropical waterside scene** with palm trees, greenery, water lilies, a painted sky and a warm gathering atmosphere.
- Expressive broad paint strokes, especially **purple/lavender, terracotta/orange, golden yellow and green**.
- Layered, slightly imperfect artistic textures and a hand-lettered event mark.
- A human, youthful, joyful mood, while remaining reverent and inviting.

### Suggested creative system (adapt to the actual artwork)

| Role | Suggested value | Usage |
|---|---|---|
| Paper / background | `#F8F4EA` | Warm neutral canvas |
| Ink / headings | `#342944` | Readable dark purple |
| Painterly violet | `#7961A6` | Signature accents |
| Sunset coral | `#DA8968` | Secondary accents |
| Golden light | `#E6C56F` | Details/highlights |
| Leaf green | `#6F956B` | Natural accents |
| Water blue | `#668C9D` | Subtle section transitions |

These are **starting tokens, not claimed exact colors from the flyer**. Use real assets or CSS/SVG artwork that complement it. The supplied reference is low-resolution; don't stretch it as a full-resolution hero background. Prefer a higher-resolution approved illustration if available. Preserve any existing brand mark rather than inventing a different official logo.

### Art direction principles

1. Artistic hero: large event name + theme, a painting-inspired backdrop or cutout illustration, intentional whitespace.
2. Sections should feel like a gallery or illustrated journal: brushstroke dividers, organic edges, subtle paper texture, asymmetrical but balanced composition.
3. Use **two primary font personalities**: expressive display for major headings and a clean readable sans-serif for body. Limit overly decorative lettering to short headlines.
4. Use animation subtly: paint-like reveals, gentle parallax where lightweight, staggered fades, hover response. Respect `prefers-reduced-motion`.
5. Maintain strong text contrast; don't place long text directly over busy painted areas without a readable overlay.
6. Prioritize mobile devices (360px–430px), then tablet and desktop. Keep performance good on moderate mobile networks.
7. Religious language should be warm, youth-oriented and faithful to the purpose; avoid making up quotations, scripture references, or program promises.

---

## 3. Technology and scope

- **Next.js** with **App Router** and **TypeScript**.
- **Tailwind CSS** for styling and reusable design tokens.
- **Lucide React** for simple icons.
- **Motion** (`motion` package) only where meaningful.
- Use `next/image`, `next/link`, appropriate Next.js metadata, and Server Components by default.
- Use Client Components only for countdown/interactivity/menu/form preview.
- Keep content in a central `src/data/event.ts` plus well-typed fixture data.
- Do not add Supabase, Firebase, payment gateway SDKs, auth, email API, webhooks, booking server routes, actual seat availability or a real admin dashboard during these frontend phases.
- No need for a custom server or deployment in this frontend-only stage.

### Definition of 'frontend only'

You may build the visual registration page and client-side input controls, but **must not transmit or persist real participant data**. Do not claim that an actual seat is booked or payment is successful. Clearly label previews as such and use a disabled submit button or non-submitting demo action. No misleading success UI.

### Suggested routes

| Route | Purpose |
|---|---|
| `/` | Artistic landing page, event hero, purpose, highlights, details, CTA |
| `/about` | Story, mission, faith-centered community emphasis |
| `/team` | Organizing team layout, approved entries only / placeholders otherwise |
| `/schedule` | Agenda scaffold, approved sessions only / pending notice |
| `/register` | Non-operational registration preview for future booking flow |
| `/contact` | Venue, directions link, approved contact info / placeholders |
| `/faq` | Useful questions; only publish answers confirmed by team |
| `/privacy` | Explicit **draft policy pending review** placeholder |
| `/terms` | Explicit **draft terms/refund rules pending review** placeholder |

### Suggested structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    about/page.tsx
    team/page.tsx
    schedule/page.tsx
    register/page.tsx
    contact/page.tsx
    faq/page.tsx
    privacy/page.tsx
    terms/page.tsx
  components/
    layout/
    home/
    shared/
    registration/
    ui/
  data/
    event.ts
    team.ts
    faq.ts
  lib/
    utils.ts
  types/
    index.ts
public/
  images/
    ul3-invitation-reference.jpg
    ...approved artwork only
```

Only create a directory when a phase needs it; avoid premature scaffolding.

---

## 4. Setting up the Next.js project (human developer)

### Prerequisites

Install [Node.js](https://nodejs.org/) (use a current supported LTS; Next.js currently requires **Node.js 20.9 or newer**), npm, Git, and VS Code or another editor. In a terminal, verify:

```bash
node -v
npm -v
git --version
```

### Create the application

Navigate to the parent folder where you want the project, then run:

```bash
npx create-next-app@latest unconditional-love-3 --typescript --tailwind --eslint --app --src-dir --use-npm --import-alias "@/*"
cd unconditional-love-3
```

If the CLI asks additional questions, choose **TypeScript, Tailwind, ESLint, App Router, `src/` directory, alias `@/*`**. Follow the stable defaults for unfamiliar experimental features.

### Install minimal UI dependencies

```bash
npm install lucide-react motion
```

Add more packages **only when a phase actually needs them**.

### Add the art reference and README

1. Create `public/images/` if needed.
2. Copy the supplied invitation image there as `ul3-invitation-reference.jpg`.
3. Save **this file** at the project root as `README.md` (replace starter README after retaining anything you need).
4. If you have a high-resolution licensed/approved original invitation illustration or logo, also place it in `public/images/`.

### Run locally

```bash
npm run dev
```

Open **http://localhost:3000**. Stop the local server with **Ctrl+C**.

### Version control

```bash
git status
# If not already initialized:
git init
git add .
git commit -m "chore: initialize UL3 Next.js frontend"
```

Create a private or public GitHub repository later if desired. **Do not commit `.env.local` or credentials**.

### Verify each phase

```bash
npx tsc --noEmit
npx eslint .
npm run build
```

Run these before declaring a phase complete. If the machine cannot build (e.g. external font download restrictions), report the exact blocker; don't falsely claim success.

---

## 5. Instructions for the coding agent — READ FIRST

You are a **senior creative frontend engineer and UI/UX designer** working on **Unconditional Love 3 — Bring One Another**. Before each phase:

1. Read this entire `README.md` and inspect the current project and completed work.
2. Identify the requested phase. **Implement only that phase.** Do not start future phases.
3. Preserve existing working sections, design tokens, routes and components unless a change is necessary.
4. First give a brief plan for the requested phase, then implement it.
5. Use realistic, approved event facts only. For unknown content, insert a clearly marked placeholder, not fabricated content.
6. Avoid `any` in TypeScript. Favor reusable, semantic, accessible components.
7. Test mobile responsiveness and keyboard use; minimize extra JS and animation dependencies.
8. At end, run TypeScript, ESLint and production-build checks; resolve errors caused by your changes.
9. Return a summary of work, important files changed, checks run, and the exact next phase. Then **STOP**.
10. **Do not add backend services, payment checkout, real auth, participant data storage, or deployment settings during frontend phases.**

### Universal agent prompt (paste once per phase)

```text
Read the project-root README.md completely and inspect the existing code.
You are implementing PHASE [NUMBER] — [PHASE TITLE] of the
Unconditional Love 3 frontend.

Follow all event facts, artistic branding instructions, scope limits,
acceptance criteria, and agent rules in README.md.

First summarize a short implementation plan. Then implement ONLY the
requested phase. Keep previous work functional. Do not work ahead.
Run npx tsc --noEmit, npx eslint ., and npm run build.
Report files changed, checks performed and any blockers.
Stop after this phase and wait for my review.
```

Replace `[NUMBER]` and `[PHASE TITLE]` using the phases below. For extra precision, you may paste the phase-specific prompt given with each phase.

---

## 6. Frontend implementation phases

### PHASE 0 — Foundation, assets, event config and design tokens

**Goal:** Establish a reliable, themed frontend foundation before making full page designs.

**Tasks**

- Inspect starter Next.js files and the invitation reference.
- Set up global fonts and design tokens (colors, spacing, container sizes, shadows, radii, responsive typography).
- Create `src/data/event.ts` with all confirmed event constants, and typed placeholders for unknown facts.
- Establish global styles, accessible focus states, semantic defaults and reduced-motion rules.
- Add a simple visual style-guide/test area if useful; avoid unnecessary permanent routes.
- Set metadata title/description and consistent icon strategy; don't invent an official favicon/logo.
- Keep the site compiling.

**Acceptance checklist**

- [ ] Confirmed facts live in one config file.
- [ ] Palette and typography visually relate to the invitation.
- [ ] No fabricated date/time/content.
- [ ] TypeScript, ESLint and build pass.

**Paste to agent**

```text
Implement PHASE 0 from README.md only: foundations, art direction,
fonts, color tokens, accessible base CSS, and typed event config.
Use the invitation image as inspiration; do not reuse its core-team
meeting date/time as the public event date. Don't build full pages yet.
Run all checks and stop.
```

### PHASE 1 — Site shell: header, footer, navigation and shared UI

**Goal:** Make the entire site feel coherent and work on desktop/mobile.

**Tasks**

- Responsive Navbar with active route, mobile menu, accessible skip link, and event wordmark treatment.
- Footer with event title, date, venue and navigation.
- Reusable `Container`, `SectionHeading`, `ArtAccent`, `CTAButton`, `EventInfoChip` if useful.
- Art-inspired background details and page framing that don't compromise readability.
- Generic, consistent loading/empty/placeholder styles.
- Implement a basic shared layout and placeholders for planned routes so nav links work.

**Acceptance checklist**

- [ ] Mobile navigation opens/closes with keyboard and screen reader support.
- [ ] Header/footer visually match the theme.
- [ ] All navigation links point to existing routes.
- [ ] No large layout overflow at 360px.
- [ ] Checks pass.

**Paste to agent**

```text
Implement PHASE 1 from README.md only: shared layout, responsive
navigation, footer, and small reusable art-themed UI primitives.
Do not build detailed page contents yet. Test mobile navigation,
accessibility, and build. Stop afterward.
```

### PHASE 2 — Homepage hero and event essentials

**Goal:** Create a distinctive homepage that communicates the event in seconds.

**Tasks**

- Large painterly hero: **Unconditional Love 3**, **Bring One Another**, purpose and clear visual hierarchy.
- Showcase **January 20, 2027**, **Avenra Gangaara, Wennappuwa**, **Rs. 1,000/person**.
- Primary CTA links to `/register`, clearly indicating registration is **not live**.
- Add a client-side event countdown to Jan 20, 2027 (Sri Lanka time); avoid an invented starting hour. Prefer a **days-until-event** countdown rather than exact hours/minutes until a time is confirmed.
- Introduce the central theme in warm, concise copy.
- Create hand-painted visuals using approved images + tasteful CSS/inline SVG decoration. No pixelated enlargement of low-res flyer.
- Add one secondary CTA to explore `/about`.

**Acceptance checklist**

- [ ] Title, theme, date, venue and fee are correct and visible.
- [ ] Hero looks artistic, inviting and distinctly youth-oriented.
- [ ] Text readable atop artwork on mobile.
- [ ] Countdown does not claim a made-up start time.
- [ ] CTA does not imply bookings are live.
- [ ] Checks pass.

**Paste to agent**

```text
Implement PHASE 2 from README.md only: the artistic homepage hero,
confirmed event facts, theme introduction, clear registration-preview
CTA, and a date-only countdown in Asia/Colombo. Do not build later
homepage sections yet. Validate on 360px/mobile and desktop. Stop.
```

### PHASE 3 — Full homepage storytelling sections

**Goal:** Extend the landing page into a compelling introduction to the gathering.

**Tasks**

- Purpose/mission section emphasizing God's love, belonging and bringing one another.
- Experience values illustrated as thoughtful cards or organic editorial panels, not invented guaranteed sessions.
- Event facts panel (date, venue, fee) and venue map link.
- Artistically styled team teaser linking to `/team` without fake names.
- FAQ preview (only facts confirmed, e.g. fee and venue) and link to `/faq`.
- Final call-to-action band with a clearly marked registration status.
- Maintain visual rhythm and varied layouts, not a stack of identical cards.

**Acceptance checklist**

- [ ] Every content section has a purpose.
- [ ] Artistic cohesion without visual clutter.
- [ ] No invented speakers, activities or promises.
- [ ] Fast and responsive across device sizes.
- [ ] Checks pass.

**Paste to agent**

```text
Implement PHASE 3 from README.md only: finish the homepage with
mission/story, experience values, event details, team teaser,
FAQ teaser and final CTA. Keep content truthful and the design
painterly, not generic. Stop after tests.
```

### PHASE 4 — About, Team and Schedule pages

**Goal:** Give visitors useful deeper information without inventing event details.

**Tasks**

- `/about`: purpose of the youth gathering, welcoming community tone, thematic storytelling.
- `/team`: reusable organizer-card grid sourced from `src/data/team.ts`; use clearly labeled placeholders for unprovided names/photos/roles, or a tasteful "Team announcement coming soon" state.
- `/schedule`: attractive schedule layout shell with **Program to be announced**, avoiding fictional event times. Use typed session data so approved sessions can be added later.
- Provide consistent page title treatment, navigation, responsive layouts and proper metadata.

**Acceptance checklist**

- [ ] No false names, photos, session times or roles.
- [ ] Layouts still look polished when content is pending.
- [ ] Cards and details are data-driven and easy to update.
- [ ] Checks pass.

**Paste to agent**

```text
Implement PHASE 4 from README.md only: About, Team, and Schedule
pages. Use data-driven layouts and clearly labeled pending content.
Do not fabricate organizers, photos, speakers or program timings.
Match the visual identity and stop after validation.
```

### PHASE 5 — Registration page UI (preview only)

**Goal:** Prepare an intuitive participant booking interface for future backend integration.

**Tasks**

- `/register` layout: entry fee, confirmed event info, registration status notice, clear form section.
- Preview fields: participant full name, email, mobile number; optional age bracket only if organizers approve its collection. No mandatory account signup.
- Illustrative summary: `number of participants × Rs. 1,000`; quantity selector **may** be shown as a UI preview, but do not imply group registration has been officially approved.
- Form labels, required indicators, privacy-copy placeholder, error/validation styles.
- Explicitly disable actual submission; **do not transmit, store or log personal data**. No real payment buttons, no success receipt, no fake seat reservation.
- Introduce reusable typed components that later integrate with real booking APIs.

**Acceptance checklist**

- [ ] Clearly states **Registration opening soon / Demo preview**.
- [ ] Fee math is accurate but frontend only.
- [ ] No real data collection or API requests.
- [ ] Good mobile accessibility; labels and focus states work.
- [ ] Checks pass.

**Paste to agent**

```text
Implement PHASE 5 from README.md only: the registration UI preview.
Show Rs. 1,000 per attendee, accessible input fields, a clear
non-live notice and accurate illustrative fee summary.
Do not send, log, store, book, charge, email or confirm anything.
Use a disabled submit action. Stop after validation.
```

### PHASE 6 — Contact, FAQ and policy placeholders

**Goal:** Cover practical questions and prepare trust-building pages for a later launch.

**Tasks**

- `/contact`: venue and directions via a normal map link; clear placeholder for the authorized contact number/email until supplied; don't invent.
- `/faq`: editable data-driven accordion/list with facts confirmed by organizers; unanswered topics should be marked "Details to be announced".
- `/privacy` and `/terms`: **Draft—requires organizer/legal review**. Include structure only. Don't assert a finalized privacy policy, refund promise or legal compliance.
- Consistent SEO titles/descriptions and accessibility.

**Acceptance checklist**

- [ ] No fake contacts or guaranteed refunds.
- [ ] Visitor can find venue details easily.
- [ ] FAQ keyboard accessible.
- [ ] Draft legal pages unmistakably labeled.
- [ ] Checks pass.

**Paste to agent**

```text
Implement PHASE 6 from README.md only: Contact, FAQ, and clearly
marked draft Privacy/Terms pages. Confirm venue text; do not invent
contact channels, finalized policy or refund rules. Test navigation,
mobile, accessibility and build. Stop after checks.
```

### PHASE 7 — Frontend polish, testing and handoff

**Goal:** Finish a reliable and attractive frontend ready for integration with Supabase and a gateway in a separate project phase.

**Tasks**

- Responsive audit at 360px, 390px, 768px, 1024px and wide desktop.
- Keyboard, headings, landmarks, alt text, focus and color contrast checks; reduced-motion behavior.
- Optimize images, layout shifts, animations and bundle size.
- Add meaningful metadata, Open Graph preview using approved assets, favicon only with approval.
- Ensure links and route-level states work; remove dead buttons and invented live seat counts.
- Centralize any remaining content/config for handoff. Do not add backend code.
- Run `npx tsc --noEmit`, `npx eslint .`, `npm run build`.
- Update README checklist and document *exactly* what frontend pieces will be wired to backend later.

**Acceptance checklist**

- [ ] All public pages complete to approved content availability.
- [ ] No critical mobile overflow or inaccessible controls.
- [ ] All build and lint checks pass, or blockers are clearly reported.
- [ ] Registration remains non-operational and honestly labeled.
- [ ] Integration handoff notes ready.

**Paste to agent**

```text
Implement PHASE 7 from README.md only: frontend QA and polish.
Audit responsive layouts, keyboard accessibility, images, metadata,
performance, placeholder text, dead links and build quality.
Document next-stage backend integration points, but do not build
backend code. Summarize tests/results and stop.
```

---

## 7. Phase tracking

Check off each phase **only after review and passing verification**.

- [ ] Phase 0 — Foundation and event config
- [ ] Phase 1 — Shared layout and navigation
- [ ] Phase 2 — Artistic hero and essentials
- [ ] Phase 3 — Complete homepage
- [ ] Phase 4 — About, Team and Schedule
- [ ] Phase 5 — Registration preview
- [ ] Phase 6 — Contact, FAQ and policy drafts
- [ ] Phase 7 — QA and frontend handoff

Recommended workflow after each phase:

```bash
npx tsc --noEmit
npx eslint .
npm run build
git add .
git commit -m "feat: complete frontend phase X"
```

Review the result locally before authorizing the agent to continue to the next phase.

---

## 8. What happens AFTER the frontend (not part of this README's implementation tasks)

Later, in a **separate backend phase**, connect:

- Supabase PostgreSQL for `events`, `bookings`, `participants`, `payments`, `tickets` and `check_ins`.
- Admin authentication, authorization and Row Level Security.
- Server-only Next.js Route Handlers for booking creation, seat holds and gateway callbacks.
- A Sri Lankan payment gateway (get merchant eligibility/approval under way early, but integrate later).
- Email confirmations and QR tickets after **server-verified successful payment**, not merely a client success page.
- Correct transactional capacity management (max 500 if confirmed), idempotent webhooks, expirations and refunds.
- Production deployment, domain, backups, monitoring and end-to-end testing.

Do not process real participant data until registration, privacy handling, security and payment verification are ready. You may deploy a **staging frontend preview** earlier if useful.

---

## 9. One-sentence master instruction to start

Once Next.js is initialized and this README is in the repo, tell your coding agent:

> **Read `README.md` fully. Implement Phase 0 only, following the artistic reference, confirmed event facts, scope restrictions and acceptance checklist. Run TypeScript, ESLint and build checks, summarize your work, and stop for review.**

Repeat with Phase 1, Phase 2, and so on only after you're satisfied with each result.

---

## Official reference

- Next.js setup: https://nextjs.org/docs/app/getting-started/installation
