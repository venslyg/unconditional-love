import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTAButton } from '@/components/ui/CTAButton';
import { ArtAccent } from '@/components/ui/ArtAccent';
import { MapPin, Navigation, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import { EVENT_DATA } from '@/data/event';

export function VenueSection() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${EVENT_DATA.venue.mapsQuery}`;

  const venueHighlights = [
    'Tranquil waterside setting along the river in Wennappuwa',
    'Ample open-air space for fellowship, prayer, and group activities',
    'Easily accessible via the Colombo–Chilaw main coastal highway',
    'Dedicated hall facilities, parking, and comfortable seating',
  ];

  return (
    <section aria-labelledby="venue-heading" className="py-16 sm:py-24 bg-canvas relative overflow-hidden">
      {/* Subtle riverside watercolor ambient accent */}
      <ArtAccent
        variant="water-wave"
        color="#668C9D"
        className="text-water/10 absolute top-0 inset-x-0 w-full pointer-events-none"
      />

      <Container size="xl" className="relative z-10">
        <SectionHeading
          badge="The Location"
          title="Avenra Gangaara, Wennappuwa"
          subtitle="A refreshing coastal retreat chosen to inspire peace, focus, and authentic community."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 items-center">
          
          {/* Left Details Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-water/15 text-water-deep text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Venue & Atmospheric Setting</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-ink">
                Riverside Ambiance Designed for Youth
              </h3>
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                Nestled on the serene banks of the river in Wennappuwa, Avenra Gangaara provides a breathtaking natural backdrop where attendees can unplug from everyday pressures, enjoy the fresh breeze, and focus on God’s presence.
              </p>
            </div>

            {/* Checklist */}
            <ul className="space-y-3 text-xs sm:text-sm text-ink-muted">
              {venueHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-leaf-deep flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet to-violet-deep text-white text-xs sm:text-sm font-semibold shadow-md hover:from-violet-deep hover:to-violet transition-all"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
              </a>

              <CTAButton href="/contact" variant="outline" size="md">
                <span>View Venue Guide</span>
              </CTAButton>
            </div>
          </div>

          {/* Right Address & Info Box */}
          <div className="lg:col-span-5">
            <div className="art-card-gallery p-6 sm:p-8 art-paper-shadow space-y-5 relative overflow-hidden">
              <ArtAccent
                variant="corner-flourish"
                color="#668C9D"
                className="absolute top-2 right-2 pointer-events-none opacity-40 w-7 h-7 rotate-90"
              />

              <div className="flex items-center gap-3 pb-4 border-b border-violet/10">
                <div className="w-10 h-10 rounded-xl bg-coral/20 text-coral-deep flex items-center justify-center flex-shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-ink">{EVENT_DATA.venue.name}</h4>
                  <span className="text-xs text-ink-muted">{EVENT_DATA.venue.city}, Sri Lanka</span>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ink-subtle block">Full Address</span>
                  <span className="text-ink font-medium">{EVENT_DATA.venue.addressDisplay}</span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ink-subtle block">Date of Event</span>
                  <span className="text-ink font-medium">{EVENT_DATA.dateDisplay}</span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ink-subtle block">Admission Requirement</span>
                  <span className="text-ink font-medium">{EVENT_DATA.fee.formatted} per participant</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-gradient-to-br from-paper-light to-water-tint/60 border border-water/20 text-xs text-ink-muted">
                📌 <strong>Directions note:</strong> Approximately 1 hour drive from Negombo and easily reachable by public bus routes along the Colombo–Chilaw road.
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

