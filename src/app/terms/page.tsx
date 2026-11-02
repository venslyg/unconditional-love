import React from 'react';
import { Container } from '@/components/ui/Container';
import { ArtAccent } from '@/components/ui/ArtAccent';
import { EVENT_DATA } from '@/data/event';
import { AlertCircle, Ticket, FileText } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: `Terms of Participation (Draft) | ${EVENT_DATA.name}`,
  description: `Draft terms and conditions of attendance and admission guidelines for Unconditional Love 3 — Bring One Another.`,
};

export default function TermsPage() {
  return (
    <div className="w-full py-12 sm:py-20 space-y-12 sm:space-y-16">
      
      {/* 1. Page Header */}
      <section aria-labelledby="terms-hero" className="text-center space-y-4">
        <Container size="md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral/15 text-coral-deep text-xs font-semibold tracking-wide uppercase border border-coral/20">
            <FileText className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Draft Document • Pending Committee Review</span>
          </div>

          <h1 id="terms-hero" className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-ink tracking-tight">
            Terms of Participation
          </h1>

          <p className="text-xl sm:text-2xl font-display italic text-violet-deep font-semibold">
            {EVENT_DATA.name} — Gathering Guidelines
          </p>

          <ArtAccent variant="brush-line" className="text-violet mx-auto my-2 max-w-xs" />

          <p className="text-sm sm:text-base text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Please review these draft guidelines regarding entry requirements, the Rs. 1,000 entrance fee, venue care, and attendee safety for January 20, 2027.
          </p>
        </Container>
      </section>

      {/* 2. Draft Warning Banner */}
      <section aria-label="Review Banner">
        <Container size="lg">
          <div className="art-card p-5 sm:p-6 art-paper-shadow border-l-4 border-l-coral bg-coral/5 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1 text-xs sm:text-sm text-ink-muted">
              <strong className="block text-ink font-semibold">
                Structural Outline Pending Merchant & Organizing Committee Ratification
              </strong>
              <p>
                This document serves as an operational blueprint. Final refund timelines, cancellation policies, and merchant rules will be confirmed alongside payment gateway sandbox sign-off.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Detailed Terms Articles */}
      <section aria-label="Terms Articles">
        <Container size="lg">
          <div className="art-card p-6 sm:p-10 art-paper-shadow space-y-8 text-xs sm:text-sm text-ink-muted leading-relaxed">
            
            {/* Article 1 */}
            <article className="space-y-2.5">
              <h2 className="font-display font-bold text-base sm:text-lg text-ink flex items-center gap-2">
                <span className="text-violet-deep">1.</span>
                <span>Admission & One-Person Ticket Integrity</span>
              </h2>
              <p>
                Each confirmed booking issues a unique digital QR admission ticket. This pass entitles <strong className="text-ink">one individual</strong> to enter {EVENT_DATA.venue.name} on {EVENT_DATA.dateDisplay}.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Tickets are verified digitally at check-in; repeated scans of the same token will be rejected immediately by the scanning system.</li>
                <li>Attendees must present their original digital QR code (on a smartphone screen or printed copy) alongside personal identification if requested by door staff.</li>
                <li>The organizing committee reserves the right to refuse entry if a ticket token has been revoked, duplicated, or flagged for fraudulent activity.</li>
              </ul>
            </article>

            {/* Article 2 */}
            <article className="space-y-2.5">
              <h2 className="font-display font-bold text-base sm:text-lg text-ink flex items-center gap-2">
                <span className="text-violet-deep">2.</span>
                <span>Entrance Fee & Hosted Payment</span>
              </h2>
              <p>
                The standard entrance contribution is <strong className="text-ink">{EVENT_DATA.fee.formatted} {EVENT_DATA.fee.unit}</strong>. All online transactions will be completed in Sri Lankan Rupees (LKR) through an approved, secure third-party hosted checkout provider.
              </p>
              <p>
                No cash collections will take place at the main venue entrance without explicit prior committee announcement. Attendees must ensure their registration is completed and verified online.
              </p>
            </article>

            {/* Article 3 */}
            <article className="space-y-2.5">
              <h2 className="font-display font-bold text-base sm:text-lg text-ink flex items-center gap-2">
                <span className="text-violet-deep">3.</span>
                <span>Cancellation, Transfer & Refund Principles (Draft)</span>
              </h2>
              <div className="p-4 rounded-xl bg-paper-warm/80 border border-violet/15 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-ink">
                  <Ticket className="w-4 h-4 text-violet-deep" aria-hidden="true" />
                  <span>Ticket Policy Baseline</span>
                </div>
                <p className="text-xs">
                  Because {EVENT_DATA.name} is a non-profit youth gathering with fixed venue commitments, entrance fees are generally non-refundable once live registration closes. Ticket transfers to a friend or fellow church member will be permitted through authorized organizer support up to an approved deadline before event day. Definite refund terms will be published upon merchant gateway activation.
                </p>
              </div>
            </article>

            {/* Article 4 */}
            <article className="space-y-2.5">
              <h2 className="font-display font-bold text-base sm:text-lg text-ink flex items-center gap-2">
                <span className="text-violet-deep">4.</span>
                <span>Community Code of Conduct</span>
              </h2>
              <p>
                {EVENT_DATA.name} is a gathering centered on Christ&apos;s love, honor, and mutual encouragement. Attendees agree to uphold an atmosphere of respect:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Treat fellow youth, guest speakers, worship musicians, and venue staff with kindness and dignity.</li>
                <li>Harassment, bullying, disruptive conduct, or illicit substance use (alcohol, tobacco, narcotics) is strictly prohibited on the venue grounds.</li>
                <li>Follow the safety instructions of our volunteer ushers and venue security team.</li>
              </ul>
            </article>

            {/* Article 5 */}
            <article className="space-y-2.5">
              <h2 className="font-display font-bold text-base sm:text-lg text-ink flex items-center gap-2">
                <span className="text-violet-deep">5.</span>
                <span>Venue Care & Waterside Safety</span>
              </h2>
              <p>
                Avenra Gangaara is a beautiful waterside facility. For attendee safety:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Do not cross safety railings or enter the river under any circumstances.</li>
                <li>Keep the grounds clean by disposing of food boxes and bottles in designated recycling bins.</li>
                <li>Attendees are responsible for their personal belongings (smartphones, wallets, instruments). The organizers are not liable for lost or damaged personal items.</li>
              </ul>
            </article>

            {/* Article 6 */}
            <article className="space-y-2.5">
              <h2 className="font-display font-bold text-base sm:text-lg text-ink flex items-center gap-2">
                <span className="text-violet-deep">6.</span>
                <span>Event Modifications & Inclement Weather</span>
              </h2>
              <p>
                The organizing committee reserves the right to adjust session timings or schedule details in response to weather or operational necessities. Any material updates will be communicated promptly via email and official gathering channels.
              </p>
            </article>

            <div className="pt-6 border-t border-violet/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-ink-subtle">
              <span>Status: Draft Document • Subject to Committee Revision</span>
              <Link href="/privacy" className="text-violet-deep font-semibold hover:underline">
                View Draft Privacy Policy &rarr;
              </Link>
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}
