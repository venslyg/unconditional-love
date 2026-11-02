import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EVENT_DATA } from '@/data/event';
import Link from 'next/link';

export const metadata = {
  title: `Privacy Policy (Draft) | ${EVENT_DATA.name}`,
  description: `Draft privacy notice for Unconditional Love 3 attendees.`,
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container size="md" className="space-y-10">
        <SectionHeading
          badge="Draft Document"
          title="Privacy Policy"
          subtitle="Pending formal review and approval by the organizing committee."
        />

        <div className="art-card p-6 sm:p-10 art-paper-shadow space-y-6 text-sm text-ink-muted leading-relaxed">
          <div className="p-3.5 rounded-lg bg-coral/10 border border-coral/20 text-xs text-coral-deep">
            ⚠️ <strong>Notice:</strong> This is an initial draft outline for development and structural review. It does not represent an approved legal agreement until finalized for launch.
          </div>

          <section className="space-y-2">
            <h3 className="font-display text-base font-bold text-ink">1. Data We Collect</h3>
            <p>
              When registration opens, we will collect only necessary attendee details (such as full name, email address, and mobile number) strictly to issue entrance tickets and deliver essential event communications.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display text-base font-bold text-ink">2. How We Use Your Information</h3>
            <p>
              Your contact details are used exclusively for verification of admission at Avenra Gangaara on {EVENT_DATA.dateDisplay}, transactional receipt delivery, and safety compliance. We will not sell or distribute personal information to external commercial third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-display text-base font-bold text-ink">3. Data Retention & Post-Event Purge</h3>
            <p>
              Following the gathering, attendee personal identifiers will be securely archived and retained only for the minimum period necessary for financial reconciliation, followed by data minimization in accordance with project guidelines.
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

