import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EVENT_DATA } from '@/data/event';
import { MapPin, Navigation, Mail, Phone, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: `Venue & Contact | ${EVENT_DATA.name}`,
  description: `Location, directions, and contact information for Unconditional Love 3.`,
};

export default function ContactPage() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${EVENT_DATA.venue.mapsQuery}`;

  return (
    <div className="py-16 sm:py-24">
      <Container size="md" className="space-y-10">
        <SectionHeading
          badge="Get in Touch"
          title="Venue & Directions"
          subtitle="We look forward to welcoming you to Avenra Gangaara in Wennappuwa."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Venue Card */}
          <div className="art-card p-6 sm:p-8 art-paper-shadow space-y-4">
            <div className="w-10 h-10 rounded-xl bg-violet/10 text-violet-deep flex items-center justify-center">
              <MapPin className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-ink">
                {EVENT_DATA.venue.name}
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted">
                {EVENT_DATA.venue.addressDisplay}
              </p>
            </div>
            <p className="text-xs text-ink-muted leading-relaxed">
              Located along the scenic coastal route of Wennappuwa, Avenra Gangaara provides an expansive riverside ambiance perfect for our gathering.
            </p>
            <div className="pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-violet-deep hover:underline"
              >
                <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Contact Channels Card */}
          <div className="art-card p-6 sm:p-8 art-paper-shadow space-y-4">
            <div className="w-10 h-10 rounded-xl bg-coral/15 text-coral-deep flex items-center justify-center">
              <Mail className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-ink">
                Support & Inquiries
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted">
                Official Organizing Committee Contacts
              </p>
            </div>
            
            <div className="p-3.5 rounded-xl bg-canvas border border-violet/10 text-xs text-ink-muted space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-violet-deep" aria-hidden="true" />
                <span>Email: <em>To be announced upon launch</em></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-coral-deep" aria-hidden="true" />
                <span>Phone / WhatsApp: <em>To be announced upon launch</em></span>
              </div>
            </div>

            <p className="text-[11px] text-ink-subtle">
              Official email and WhatsApp support channels will be published in <strong>Phase 6</strong> once the committee confirms the support roster.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="text-xs font-semibold text-violet-deep hover:underline">
            &larr; Return to Homepage
          </Link>
        </div>
      </Container>
    </div>
  );
}

