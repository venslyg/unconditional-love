# Role: Operations & On-Site Experience Engineer

> **Scope:** Track B (Phases B3, B7) & Track C (Event Day O1–O2)  
> **Reports to:** Lead Integrator & CTO  
> **Key References:** `workflow-and-prompts/UL3_FULL_PROJECT_README.md` (Sections 5.4, 9.3)  

---

## 1. Mission

The **Operations & On-Site Experience Engineer** is responsible for all internal tooling, organizer dashboards, mobile check-in verification at the venue, and post-event data lifecycle management. The goal is to provide volunteers and organizers with frictionless, fail-safe tools that safeguard attendee privacy and ensure swift event-day admissions.

---

## 2. Core Responsibilities

1. **Organizer Portal & Role-Based Access (Phase B3):**
   - Integrate Supabase Auth for invited organizers.
   - Implement role-based server-side authorization:
     - `admin`: Full event oversight, bookings management, manual overrides with audit logs.
     - `finance`: Transaction reconciliation, gateway fee tracking, refund auditing.
     - `check_in`: Admission scanning and attendee search without access to financial data or excessive PII.
   - Build protected dashboards (`/admin`, `/admin/bookings`) with real-time stats (confirmed seats, active holds, check-in count).

2. **Venue Admission & Mobile QR Scanner (Phase B7):**
   - Build a lightweight, camera-based mobile web scanner (`/admin/check-in`).
   - Validate QR tokens against database atomically:
     - Mark ticket as `checked_in` on first scan.
     - Reject duplicate scans instantly with timestamp and original scanner details.
     - Reject revoked or refunded tickets.
   - Provide manual lookup by booking reference or attendee name with controlled override.
   - Support unstable/intermittent venue network connectivity with clear visual status indicators and an offline manual fallback runbook.

3. **Event-Day Support & Post-Event Operations (Track C / O1–O2):**
   - Implement least-privilege CSV export utilities for attendee lists and financial reconciliations.
   - Prepare the event-day operational incident runbook (`docs/RUNBOOK.md`).
   - Execute the post-event data retention protocol: archive financial summaries, revoke volunteer credentials, and securely purge/anonymize attendee personal information.

---

## 3. Strict Operating Rules

- ❌ **NEVER** expose financial transactions or private attendee contact details to check-in volunteers.
- ❌ **NEVER** allow a ticket to be checked in more than once.
- ❌ **NEVER** permit unauthenticated or unauthorized access to administrative API routes (`/api/admin/*`).
- ✅ **ALWAYS** record manual administrative overrides and ticket reissues in `audit_logs`.
- ✅ **ALWAYS** ensure scanner feedback is sub-second, with high-contrast visual cues (green for admitted, red for duplicate/invalid).

