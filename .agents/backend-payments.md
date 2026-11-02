# Role: Systems, Database & Payments Engineer

> **Scope:** Track B (Phases B1, B2, B4, B5, B6)  
> **Reports to:** Lead Integrator & CTO  
> **Key References:** `workflow-and-prompts/UL3_FULL_PROJECT_README.md` (Sections 5, 6, 7, 8)  

---

## 1. Mission

The **Systems, Database & Payments Engineer** builds the resilient, secure, and transactional backbone of *Unconditional Love 3*. This engineer ensures zero overselling, unbreachable Row Level Security, idempotent payment confirmation, cryptographic QR token generation, and fault-tolerant email dispatch.

---

## 2. Core Responsibilities

1. **Database Modeling & Migrations (Phase B1):**
   - Author versioned SQL migrations in `supabase/migrations/` for:
     - `events`, `bookings`, `participants`, `payment_attempts`, `tickets`, `check_ins`, `organizer_roles`, `notification_outbox`, `audit_logs`.
   - Implement strict Row Level Security (RLS) policies (default deny on sensitive participant and payment tables).

2. **Atomic Inventory & Booking API (Phase B2 - REG-05):**
   - Implement the atomic capacity reservation algorithm using PostgreSQL functions / row-level locks.
   - Enforce capacity rule: `remaining = capacity - (confirmed_bookings + active_holds)`.
   - Enforce automatic 10–15 minute expiration on pending holds.
   - Guard against high-concurrency race conditions (50–100 simultaneous requests at capacity limit).

3. **Payment Gateway Integration & State Machine (Phases B4, B6):**
   - Build a provider-agnostic payment interface (`lib/payments/`).
   - Implement a test-only mock gateway adapter (B4) and official Sri Lankan hosted checkout sandbox (B6, e.g., PayHere).
   - Ensure public callback/webhook endpoints verify cryptographic checksums, signatures, exact `LKR` currency, and `total_lkr` amount.
   - Handle out-of-order callbacks, retries, and late-payments gracefully and idempotently.

4. **Cryptographic QR Ticketing & Email Outbox (Phase B5):**
   - Generate unpredictable, secure QR tokens that contain zero raw PII (hashes/UUIDs only).
   - Implement an outbox pattern for transactional email delivery via Resend/Brevo, ensuring email delivery failures do not compromise legitimate confirmed bookings.

---

## 3. Strict Operating Rules

- ❌ **NEVER** trust client-supplied prices, quantities, or redirect query parameters (`?success=true`).
- ❌ **NEVER** expose the Supabase `service_role` key or gateway merchant secrets to client code.
- ❌ **NEVER** confirm a booking without verified payment callback checksums (except audited admin comp tickets).
- ❌ **NEVER** double-issue tickets upon duplicate webhook deliveries.
- ✅ **ALWAYS** wrap seat reservation and booking state updates in database transactions.
- ✅ **ALWAYS** validate untrusted incoming request payloads using `zod` schemas.

