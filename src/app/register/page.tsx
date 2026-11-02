import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EVENT_DATA } from '@/data/event';
import { Ticket, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: `Registration Preview | ${EVENT_DATA.name}`,
  description: `Preview the registration details and fee structure for Unconditional Love 3.`,
};

export default function RegisterPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container size="md" className="space-y-10">
        <SectionHeading
          badge="Registration"
          title="Reserve Your Place"
          subtitle={`Join ~${EVENT_DATA.expectedAttendance} youth for Unconditional Love 3 on ${EVENT_DATA.dateDisplay}.`}
        />

        <div className="art-card p-6 sm:p-10 art-paper-shadow space-y-6">
          <div className="p-4 rounded-xl bg-coral/10 border border-coral/20 flex items-start gap-3 text-xs sm:text-sm text-coral-deep">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-coral mt-0.5" aria-hidden="true" />
            <div className="space-y-1">
              <strong className="block font-semibold">Registration Opening Soon (Demo Preview)</strong>
              <p>
                Public online registration is currently closed. Real data collection, payments, and QR ticket issuance will go live only after committee authorization.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-canvas border border-violet/10 space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-ink-subtle">Entrance Fee</span>
              <div className="text-xl font-display font-bold text-ink">
                {EVENT_DATA.fee.formatted}{' '}
                <span className="text-xs font-normal text-ink-muted">({EVENT_DATA.fee.unit})</span>
              </div>
              <p className="text-[11px] text-ink-muted">Covers single-day gathering admission at Avenra Gangaara.</p>
            </div>

            <div className="p-4 rounded-xl bg-canvas border border-violet/10 space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-ink-subtle">Capacity Target</span>
              <div className="text-xl font-display font-bold text-ink">
                ~{EVENT_DATA.expectedAttendance} Attendees
              </div>
              <p className="text-[11px] text-ink-muted">Enforced atomically via server when live bookings open.</p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-paper-warm/80 border border-violet/15 text-center space-y-3">
            <Ticket className="w-8 h-8 mx-auto text-violet-deep" aria-hidden="true" />
            <h4 className="font-display text-base font-bold text-ink">
              Full Registration Form Preview (Phase 5)
            </h4>
            <p className="text-xs text-ink-muted max-w-sm mx-auto">
              The complete accessible form wizard (with name, contact, illustrative fee calculator, and consent checkboxes) will be created in <strong>Phase 5</strong>.
            </p>
          </div>

          <div className="pt-4 border-t border-violet/10 flex justify-between items-center text-xs text-ink-subtle">
            <span>Payment checkout will use an approved Sri Lankan gateway</span>
            <Link href="/" className="text-violet-deep font-semibold hover:underline">
              Return Home &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

