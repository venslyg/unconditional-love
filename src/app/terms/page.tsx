import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EVENT_DATA } from '@/data/event';
import Link from 'next/link';

export const metadata = {
  title: `Terms & Participation (Draft) | ${EVENT_DATA.name}`,
  description: `Draft terms and conditions of attendance for Unconditional Love 3.`,
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container size="md" className="space-y-10">
        <SectionHeading
          badge="Draft Document"
          title="Terms of Participation"
          subtitle="Pending formal review and approval by the organizing committee."
        />

        <div className="art-card p-6 sm:p-10 art-paper-shadow space-y-6 text-sm text-ink-muted leading-relaxed">
          <div className="p-3.5 rounded-lg bg-coral/10 border border-coral/20 text-xs text-coral-deep">
            ⚠️ <strong>Notice:</strong> This is a draft structural outline. Definite cancellation, transfer, and refund rules will be published upon official merchant gateway setup.
          </div>

          <section className="space-y-2">
            <h3 className="font-display text-base font-bold text-ink">1. Admission & Ticket Verification</h3>
            <p>
              Each confirmed participant will be issued a single, unique digital QR ticket. The ticket must be presented at the check-in desk at Avenra Gangaara on {EVENT_DATA.dateDisplay}. Each ticket grants admission for one person only and is invalidated upon scanning.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display text-base font-bold text-ink">2. Entrance Fee & Payment</h3>
            <p>
              The standard entrance fee is {EVENT_DATA.fee.formatted} {EVENT_DATA.fee.unit}. Payments will be processed through an authorized Sri Lankan hosted payment gateway.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display text-base font-bold text-ink">3. Code of Conduct & Community Respect</h3>
            <p>
              Unconditional Love 3 is a gathering centered on Christ&apos;s love, mutual respect, and community fellowship. Attendees are expected to respect the venue facilities, volunteers, and fellow youth.
            </p>
          </section>

          <div className="pt-6 border-t border-violet/10 flex justify-between items-center text-xs text-ink-subtle">
            <span>Last revised: Baseline Draft 2026</span>
            <Link href="/" className="text-violet-deep font-semibold hover:underline">
              Return Home &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
