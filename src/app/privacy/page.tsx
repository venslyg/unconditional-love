import React from 'react';
import { Container } from '@/components/ui/Container';
import { ArtAccent } from '@/components/ui/ArtAccent';
import { EVENT_DATA } from '@/data/event';
import { AlertCircle, Lock, Trash2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: `Privacy Policy (Draft) | ${EVENT_DATA.name}`,
  description: `Draft privacy notice and participant data handling guidelines for Unconditional Love 3 — Bring One Another.`,
};

export default function PrivacyPage() {
  return (
    <div className="w-full py-12 sm:py-20 space-y-12 sm:space-y-16">
      
      {/* 1. Page Header */}
      <section aria-labelledby="privacy-hero" className="text-center space-y-4">
        <Container size="md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral/15 text-coral-deep text-xs font-semibold tracking-wide uppercase border border-coral/20">
            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Draft Policy • Pending Committee Review</span>
          </div>

          <h1 id="privacy-hero" className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-ink tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-xl sm:text-2xl font-display italic text-violet-deep font-semibold">
            Transparency & Youth Data Safeguarding
          </p>

          <ArtAccent variant="brush-line" className="text-violet mx-auto my-2 max-w-xs" />

          <p className="text-sm sm:text-base text-ink-muted max-w-2xl mx-auto leading-relaxed">
            This document outlines how personal information will be collected, utilized, protected, and ultimately purged in connection with {EVENT_DATA.name}.
          </p>
        </Container>
      </section>

      {/* 2. Draft Notice Warning Banner */}
      <section aria-label="Review Notice">
        <Container size="lg">
          <div className="art-card p-5 sm:p-6 art-paper-shadow border-l-4 border-l-coral bg-coral/5 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1 text-xs sm:text-sm text-ink-muted">
              <strong className="block text-ink font-semibold">
                Structural Outline Pending Legal & Organizing Committee Sign-Off
              </strong>
              <p>
                This privacy policy is an architectural baseline. It will be finalized and legally ratified prior to opening live registrations and payment collection.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Detailed Privacy Policy Articles */}
      <section aria-label="Policy Articles">
        <Container size="lg">
          <div className="art-card p-6 sm:p-10 art-paper-shadow space-y-8 text-xs sm:text-sm text-ink-muted leading-relaxed">
            
            {/* Article 1 */}
            <article className="space-y-2.5">
              <h2 className="font-display font-bold text-base sm:text-lg text-ink flex items-center gap-2">
                <span className="text-violet-deep">1.</span>
                <span>Purpose & Scope</span>
              </h2>
              <p>
                This notice applies exclusively to participants, volunteers, and visitors of <strong className="text-ink">{EVENT_DATA.name} — Bring One Another</strong>, scheduled for {EVENT_DATA.dateDisplay} at {EVENT_DATA.venue.name}, {EVENT_DATA.venue.city}, Sri Lanka. Our gathering is committed to safeguarding the privacy and digital well-being of all young people.
              </p>
            </article>

            {/* Article 2 */}
            <article className="space-y-2.5">
              <h2 className="font-display font-bold text-base sm:text-lg text-ink flex items-center gap-2">
                <span className="text-violet-deep">2.</span>
                <span>Information We Collect</span>
              </h2>
              <p>
                When online registration opens, we will collect only the minimum personal data required to administer admissions:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-muted">
                <li><strong className="text-ink">Full Name:</strong> To print on your digital entrance ticket and verify venue entry.</li>
                <li><strong className="text-ink">Email Address:</strong> To deliver your verified QR admission pass and receipt.</li>
                <li><strong className="text-ink">Mobile Phone Number:</strong> For essential venue alerts and lost ticket resolution.</li>
                <li><strong className="text-ink">Church / Youth Group (Optional):</strong> To assist in community seating arrangements.</li>
              </ul>
              <p className="text-[11px] text-ink-subtle">
                We do not collect government national identity card (NIC) numbers, home addresses, or religious affiliations beyond optional church affiliation.
              </p>
            </article>

            {/* Article 3 */}
            <article className="space-y-2.5">
              <h2 className="font-display font-bold text-base sm:text-lg text-ink flex items-center gap-2">
                <span className="text-violet-deep">3.</span>
                <span>Zero Raw Payment Card Storage</span>
              </h2>
              <div className="p-4 rounded-xl bg-paper-warm/80 border border-violet/15 flex items-start gap-3">
                <Lock className="w-5 h-5 text-violet-deep flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1">
                  <strong className="block text-ink font-semibold">Hosted Payment Gateway Architecture</strong>
                  <p className="text-xs">
                    Our web application and database <strong className="text-ink">never see, receive, or store raw credit or debit card numbers, CVVs, or bank passwords</strong>. All financial transactions are redirected to an approved, bank-compliant Sri Lankan payment gateway that verifies payments over encrypted HTTPS connections.
                  </p>
                </div>
              </div>
            </article>

            {/* Article 4 */}
            <article className="space-y-2.5">
              <h2 className="font-display font-bold text-base sm:text-lg text-ink flex items-center gap-2">
                <span className="text-violet-deep">4.</span>
                <span>Single-Use Cryptographic QR Tokens</span>
              </h2>
              <p>
                Tickets issued by the system contain an unpredictable cryptographic token hash. The QR code does not contain readable email addresses, phone numbers, or private details. When scanned at the venue entrance, the system verifies the token once and immediately marks it as used to prevent duplicate entry.
              </p>
            </article>

            {/* Article 5 */}
            <article className="space-y-2.5">
              <h2 className="font-display font-bold text-base sm:text-lg text-ink flex items-center gap-2">
                <span className="text-violet-deep">5.</span>
                <span>Photography & Gathering Media</span>
              </h2>
              <p>
                During {EVENT_DATA.name}, appointed volunteer media team members may take photographs and video recordings to capture worship, fellowship, and testimonies for church community highlights. If an attendee prefers not to be photographed in close-up portraits, they may notify our welcome desk upon arrival to receive a discreet privacy lanyard.
              </p>
            </article>

            {/* Article 6 */}
            <article className="space-y-2.5">
              <h2 className="font-display font-bold text-base sm:text-lg text-ink flex items-center gap-2">
                <span className="text-violet-deep">6.</span>
                <span>Post-Event Data Minimization & Purge</span>
              </h2>
              <div className="p-4 rounded-xl bg-canvas border border-violet/10 flex items-start gap-3">
                <Trash2 className="w-5 h-5 text-coral-deep flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1">
                  <strong className="block text-ink font-semibold">Commitment to Data Minimization</strong>
                  <p className="text-xs">
                    Following the conclusion of {EVENT_DATA.name} and the completion of mandatory financial reconciliation and refund dispute periods, all non-essential personal identifiers will be permanently anonymized or deleted from active databases.
                  </p>
                </div>
              </div>
            </article>

            {/* Article 7 */}
            <article className="space-y-2.5">
              <h2 className="font-display font-bold text-base sm:text-lg text-ink flex items-center gap-2">
                <span className="text-violet-deep">7.</span>
                <span>Inquiries & Legal Review</span>
              </h2>
              <p>
                Any questions regarding this draft policy may be directed to our organizing committee via our{' '}
                <Link href="/contact" className="text-violet-deep font-semibold underline">
                  Contact Page
                </Link>.
              </p>
            </article>

            <div className="pt-6 border-t border-violet/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-ink-subtle">
              <span>Status: Draft Document • Subject to Committee Revision</span>
              <Link href="/terms" className="text-violet-deep font-semibold hover:underline">
                View Terms of Participation &rarr;
              </Link>
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}
