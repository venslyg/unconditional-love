import React from 'react';
import { Container } from '@/components/ui/Container';
import { ArtAccent } from '@/components/ui/ArtAccent';
import { EVENT_DATA } from '@/data/event';
import {
  MapPin,
  Navigation,
  Mail,
  Phone,
  ExternalLink,
  Bus,
  Car,
  Train,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: `Venue & Contact | ${EVENT_DATA.name}`,
  description: `Location, driving directions, public transport tips, and committee contact info for Unconditional Love 3.`,
};

export default function ContactPage() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${EVENT_DATA.venue.mapsQuery}`;

  return (
    <div className="w-full py-12 sm:py-20 space-y-12 sm:space-y-16">
      
      {/* 1. Page Header */}
      <section aria-labelledby="contact-hero" className="text-center space-y-4">
        <Container size="md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet/10 text-violet-deep text-xs font-semibold tracking-wide uppercase border border-violet/15">
            <MapPin className="w-3.5 h-3.5 text-violet-deep" aria-hidden="true" />
            <span>Venue & Directions</span>
          </div>

          <h1 id="contact-hero" className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-ink tracking-tight">
            Find Us at Avenra Gangaara
          </h1>

          <p className="text-xl sm:text-2xl font-display italic text-violet-deep font-semibold">
            Wennappuwa, Sri Lanka
          </p>

          <ArtAccent variant="brush-line" className="text-violet mx-auto my-2 max-w-xs" />

          <p className="text-sm sm:text-base text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Everything you need to navigate to our lakeside gathering location on {EVENT_DATA.dateDisplay}.
          </p>
        </Container>
      </section>

      {/* 2. Main Venue Details & Map Link Section */}
      <section aria-label="Venue Navigation Details">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Venue Atmosphere & Transport Guide (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="art-card p-6 sm:p-8 art-paper-shadow space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-violet/10">
                  <div className="w-10 h-10 rounded-xl bg-violet/10 text-violet-deep flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-lg text-ink">
                      {EVENT_DATA.venue.name}
                    </h2>
                    <p className="text-xs text-ink-muted">
                      {EVENT_DATA.venue.addressDisplay}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  Avenra Gangaara offers an expansive waterside environment alongside the river in Wennappuwa. It features sheltered gathering pavilions, natural ventilation, peaceful outdoor gardens, and dedicated parking for private vehicles and chartered church buses.
                </p>

                <div className="pt-2">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-violet text-white text-xs sm:text-sm font-semibold shadow-sm hover:bg-violet-deep transition-all"
                  >
                    <Navigation className="w-4 h-4" aria-hidden="true" />
                    <span>Open in Google Maps Navigation</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Transit & Travel Modes */}
              <div className="art-card p-6 sm:p-8 art-paper-shadow space-y-4">
                <h3 className="font-display font-bold text-base text-ink border-b border-violet/10 pb-3">
                  Travel & Transportation Options
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-ink-muted">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-coral/15 text-coral-deep flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Car className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <strong className="block text-ink font-semibold">By Private Vehicle / Carpool</strong>
                      <p className="text-[11px] sm:text-xs text-ink-muted mt-0.5">
                        Located directly off the main Colombo–Negombo–Chilaw (A3) highway. Approximately 45–60 minutes north of Katunayake/Negombo. Free parking is available at the premises.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold/15 text-gold-deep flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bus className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <strong className="block text-ink font-semibold">By Public Bus</strong>
                      <p className="text-[11px] sm:text-xs text-ink-muted mt-0.5">
                        Take any Colombo–Chilaw or Colombo–Puttalam express bus (Route 04). Disembark at the Wennappuwa town junction or Avenra Gangaara stage stop.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-water/15 text-water-deep flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Train className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <strong className="block text-ink font-semibold">By Coastal Railway</strong>
                      <p className="text-[11px] sm:text-xs text-ink-muted mt-0.5">
                        Nearest railway stations are Waikkala Station or Nainamadama Station along the Puttalam line, with quick tuk-tuk connections to Avenra Gangaara.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Committee Inquiries Box (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="art-card p-6 sm:p-8 art-paper-shadow space-y-5">
                <div className="w-10 h-10 rounded-xl bg-coral/15 text-coral-deep flex items-center justify-center">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg text-ink">
                    Committee Support & Contacts
                  </h3>
                  <p className="text-xs text-ink-muted">
                    Official inquiries regarding church youth group attendance, volunteering, and registration.
                  </p>
                </div>

                {/* Truth in Data Channel Card */}
                <div className="p-4 rounded-xl bg-canvas border border-violet/10 text-xs space-y-3">
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-violet-deep flex-shrink-0" aria-hidden="true" />
                    <div>
                      <span className="font-semibold text-ink block">Official Email</span>
                      <span className="text-ink-subtle italic">To be announced upon launch</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-2 border-t border-violet/10">
                    <Phone className="w-4 h-4 text-coral-deep flex-shrink-0" aria-hidden="true" />
                    <div>
                      <span className="font-semibold text-ink block">Phone & WhatsApp Support</span>
                      <span className="text-ink-subtle italic">To be announced upon launch</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-paper-warm/80 border border-violet/10 text-[11px] text-ink-subtle leading-relaxed flex items-start gap-2">
                  <Clock className="w-4 h-4 text-violet-deep flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    Official contact channels will be published once the committee finalizes dedicated support phone lines and merchant verification.
                  </span>
                </div>

                <div className="pt-2 border-t border-violet/10">
                  <Link
                    href="/register"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-paper-warm border border-violet/15 text-ink text-xs font-semibold hover:bg-canvas transition-colors"
                  >
                    <span>View Registration Preview &rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Integrity Reminder Card */}
              <div className="p-5 rounded-2xl bg-paper-light border border-violet/10 art-paper-shadow text-xs text-ink-muted space-y-2">
                <div className="flex items-center gap-2 text-violet-deep font-semibold">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                  <span>Truth in Data Commitment</span>
                </div>
                <p className="leading-relaxed">
                  We never publish unverified phone numbers or personal volunteer emails. All communications will occur through authorized committee channels.
                </p>
              </div>

            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}
