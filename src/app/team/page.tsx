import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EVENT_DATA } from '@/data/event';
import { Users, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: `Organizing Team | ${EVENT_DATA.name}`,
  description: `Meet the volunteer committee behind Unconditional Love 3.`,
};

export default function TeamPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container size="md" className="space-y-10">
        <SectionHeading
          badge="Community & Leadership"
          title="Organizing Team"
          subtitle="A dedicated group of youth volunteers and community mentors preparing for January 20, 2027."
        />

        <div className="art-card p-6 sm:p-10 art-paper-shadow text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-violet/10 text-violet-deep flex items-center justify-center">
            <Users className="w-8 h-8" aria-hidden="true" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="font-display text-xl font-bold text-ink">
              Team Announcement Coming Soon
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              In accordance with our strict data integrity policy, official organizer bios, roles, and ministry mentors will be published once officially approved by the committee in <strong>Phase 4</strong>.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-paper-warm border border-violet/15 text-xs text-ink-muted">
            <Clock className="w-3.5 h-3.5 text-violet-deep" aria-hidden="true" />
            <span>Profiles pending committee review</span>
          </div>

          <div className="pt-6 border-t border-violet/10 flex justify-between items-center text-xs text-ink-subtle">
            <span>Volunteer-driven community</span>
            <Link href="/" className="text-violet-deep font-semibold hover:underline">
              Return Home &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

