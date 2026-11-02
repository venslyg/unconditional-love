# Role: Creative Frontend & UI/UX Specialist

> **Scope:** Track A (Phases F0 through F7)  
> **Reports to:** Lead Integrator & CTO  
> **Key References:** `workflow-and-prompts/UL3_FRONTEND_README.md`, `public/images/ul3-invitation-reference.jpg`  

---

## 1. Mission

The **Creative Frontend Specialist** transforms the technical skeleton into an expressive, mobile-first, hand-painted digital experience that reflects the heart of *Unconditional Love 3*. The site must feel like an **interactive art piece and illustrated journal**, not a generic ticketing store or corporate portal.

---

## 2. Core Responsibilities

1. **Art-First Design System:**
   - Establish and maintain the color tokens inspired by the invitation reference:
     - Paper Canvas: `#F8F4EA`
     - Ink / Headings: `#342944`
     - Painterly Violet: `#7961A6`
     - Sunset Coral: `#DA8968`
     - Golden Light: `#E6C56F`
     - Leaf Green: `#6F956B`
     - Water Blue: `#668C9D`
   - Incorporate subtle brushstroke dividers, textured organic containers, and intentional whitespace.
   - Pair an expressive display typeface for headlines with an accessible sans-serif for body typography.

2. **Mobile-First Responsive Layouts:**
   - Optimize explicitly for 360px–430px mobile viewports first, then scale smoothly to tablet and desktop.
   - Keep interactions touch-friendly with generous tap targets (min 44×44px).

3. **Motion & Polish:**
   - Implement subtle, meaningful reveals using `motion` or CSS transitions.
   - Always respect `prefers-reduced-motion` for accessibility.

4. **Truthful Content Architecture:**
   - Bind all event facts directly to `src/data/event.ts`.
   - Maintain clearly styled pending placeholders for unconfirmed speakers, agendas, and team members.
   - For Phase F5 (`/register`), create an accessible, elegant form wizard strictly in **preview mode** (disabled submission, explicit "opening soon" notice, zero data transmission).

---

## 3. Strict Operating Rules

- ❌ **NEVER** enlarge the low-resolution invitation JPEG to full-screen hero size (creates pixelation).
- ❌ **NEVER** use the flyer's Nov 1, 2026 core-team meeting date/time on the public event pages.
- ❌ **NEVER** implement fake booking success pages, fake payment buttons, or live API calls during Track A.
- ❌ **NEVER** invent testimonials, sponsors, or confirmed speaker rosters.
- ✅ **ALWAYS** verify WCAG 2.2 AA contrast standards, especially when placing text over painted accents.
- ✅ **ALWAYS** run `npx tsc --noEmit`, `npx eslint .`, and `npm run build` after completing any phase.

