import React from 'react';
import { Container } from '@/components/ui/Container';
import { ArtAccent } from '@/components/ui/ArtAccent';
import { EVENT_DATA } from '@/data/event';
import { RegistrationPreviewForm } from '@/components/registration/RegistrationPreviewForm';
import { Calendar, MapPin, Ticket, ShieldCheck, Clock } from 'lucide-react';

export const metadata = {
  title: `Registration Preview | ${EVENT_DATA.name}`,
  description: `Preview the participant registration and entrance fee structure for Unconditional Love 3 — Bring One Another.`,
};

export default function RegisterPage() {
  return (
    <div className="w-full py-12 sm:py-20 space-y-12 sm:space-y-16">
      
      {/* 1. Page Header */}
      <section aria-labelledby="register-hero" className="text-center space-y-4">
        <Container size="md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet/10 text-violet-deep text-xs font-semibold tracking-wide uppercase border border-violet/15">
            <Ticket className="w-3.5 h-3.5 text-violet-deep" aria-hidden="true" />
            <span>Registration Preview</span>
          </div>

          <h1 id="register-hero" className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-ink tracking-tight">
            Reserve Your Place
          </h1>

          <p className="text-xl sm:text-2xl font-display italic text-violet-deep font-semibold">
            {EVENT_DATA.name} — “{EVENT_DATA.theme}”
          </p>

          <ArtAccent variant="brush-line" className="text-violet mx-auto my-2 max-w-xs" />

          <p className="text-sm sm:text-base text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Preview the upcoming participant registration interface. Review entrance fee calculations, required fields, and admission guidelines before public booking opens.
          </p>
        </Container>
      </section>

      {/* 2. Main Content Grid */}
      <section aria-label="Registration Form Section">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Interactive Form Preview (7 cols) */}
            <div className="lg:col-span-8">
              <RegistrationPreviewForm />
            </div>

            {/* Right Column: Confirmed Event Information Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Event Summary Card */}
              <div className="art-card p-6 sm:p-7 art-paper-shadow space-y-5">
                <h3 className="font-display font-bold text-lg text-ink border-b border-violet/10 pb-3">
                  Gathering Summary
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-violet-deep flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="block text-ink font-semibold">Date & Time</strong>
                      <span className="text-ink-muted">{EVENT_DATA.dateDisplay}</span>
                      <span className="block text-[11px] text-ink-subtle">Schedule to be announced</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-coral-deep flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="block text-ink font-semibold">Venue</strong>
                      <span className="text-ink-muted">{EVENT_DATA.venue.name}</span>
                      <span className="block text-[11px] text-ink-subtle">{EVENT_DATA.venue.addressDisplay}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Ticket className="w-4 h-4 text-gold-deep flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="block text-ink font-semibold">Entrance Fee</strong>
                      <span className="text-ink font-bold">{EVENT_DATA.fee.formatted}</span>{' '}
                      <span className="text-xs text-ink-muted">({EVENT_DATA.fee.unit})</span>
                      <span className="block text-[11px] text-ink-subtle">Fixed standard pricing</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-water-deep flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="block text-ink font-semibold">Capacity Target</strong>
                      <span className="text-ink-muted">~{EVENT_DATA.expectedAttendance} Attendees</span>
                      <span className="block text-[11px] text-ink-subtle">Strict server capacity limit</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* How Booking Works in Track B */}
              <div className="art-card-warm p-6 art-paper-shadow space-y-4">
                <div className="flex items-center gap-2 text-violet-deep font-semibold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                  <span>How Live Booking Works</span>
                </div>

                <ol className="space-y-3 text-xs text-ink-muted list-decimal pl-4 leading-relaxed">
                  <li>
                    <strong className="text-ink">Seat Hold:</strong> You complete the form and an atomic 15-minute temporary reservation is created.
                  </li>
                  <li>
                    <strong className="text-ink">Hosted Checkout:</strong> You are securely redirected to the Sri Lankan payment gateway to pay LKR 1,000.
                  </li>
                  <li>
                    <strong className="text-ink">Verified Confirmation:</strong> Once the server cryptographically verifies payment success, your booking is confirmed.
                  </li>
                  <li>
                    <strong className="text-ink">Digital QR Ticket:</strong> A unique, single-use admission ticket is generated and emailed to you.
                  </li>
                </ol>

                <p className="text-[11px] text-ink-subtle pt-2 border-t border-ink/10">
                  Zero card details are processed or stored by our app. Hosted checkout strictly handles all card processing.
                </p>
              </div>

            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}
