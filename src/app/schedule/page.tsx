import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EVENT_DATA } from '@/data/event';
import { Calendar, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: `Program Schedule | ${EVENT_DATA.name}`,
  description: `Schedule and session outline for Unconditional Love 3 at Avenra Gangaara.`,
};

export default function SchedulePage() {
  return (
    <div className="py-16 sm:py-24">
      <Container size="md" className="space-y-10">
        <SectionHeading
          badge="Event Timeline"
          title="Program Schedule"
          subtitle={`Join us on ${EVENT_DATA.dateDisplay} at ${EVENT_DATA.venue.name}, ${EVENT_DATA.venue.city}.`}
        />

        <div className="art-card p-6 sm:p-10 art-paper-shadow text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-gold/15 text-gold-deep flex items-center justify-center">
            <Calendar className="w-8 h-8" aria-hidden="true" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="font-display text-xl font-bold text-ink">
              Detailed Agenda Coming Soon
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              The full session schedule (doors open, worship, keynote talks, community fellowship, and check-in times) is being finalized by the organizing committee.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-canvas border border-violet/10 flex items-start gap-3">
              <Clock className="w-4 h-4 text-violet-deep flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <strong className="block text-ink font-semibold">Start & End Times</strong>
                <span className="text-ink-muted">To be officially announced</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-canvas border border-violet/10 flex items-start gap-3">
              <MapPin className="w-4 h-4 text-coral-deep flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <strong className="block text-ink font-semibold">Venue Location</strong>
                <span className="text-ink-muted">{EVENT_DATA.venue.addressDisplay}</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-violet/10 flex justify-between items-center text-xs text-ink-subtle">
            <span>Phase 4 will feature the complete agenda schedule shell</span>
            <Link href="/" className="text-violet-deep font-semibold hover:underline">
              Return Home &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

