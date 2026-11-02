import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTAButton } from '@/components/ui/CTAButton';
import { ArtAccent } from '@/components/ui/ArtAccent';
import { EVENT_DATA } from '@/data/event';
import { TEAM_GROUPS, TEAM_MEMBERS } from '@/data/team';
import { Users, Heart, Clock, Mail, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: `Organizing Team | ${EVENT_DATA.name}`,
  description: `Meet the dedicated volunteer committee and youth mentors organizing Unconditional Love 3.`,
};

export default function TeamPage() {
  return (
    <div className="w-full py-12 sm:py-20 space-y-16 sm:space-y-24">
      
      {/* 1. Page Header */}
      <section aria-labelledby="team-hero" className="text-center space-y-4">
        <Container size="md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet/10 text-violet-deep text-xs font-semibold tracking-wide uppercase border border-violet/15">
            <Users className="w-3.5 h-3.5 text-violet-deep" aria-hidden="true" />
            <span>Behind the Scenes</span>
          </div>

          <h1 id="team-hero" className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-ink tracking-tight">
            The Organizing Team
          </h1>

          <p className="text-xl sm:text-2xl font-display italic text-violet-deep font-semibold">
            Serving with One Heart
          </p>

          <ArtAccent variant="brush-line" className="text-violet mx-auto my-2 max-w-xs" />

          <p className="text-sm sm:text-base text-ink-muted max-w-2xl mx-auto leading-relaxed">
            {EVENT_DATA.name} is powered by a dedicated volunteer committee of youth leaders, worship musicians, hospitality servants, and pastoral mentors.
          </p>
        </Container>
      </section>

      {/* 2. Truth in Data Policy Notice */}
      <section aria-label="Committee Integrity Notice">
        <Container size="lg">
          <div className="art-card p-5 sm:p-6 art-paper-shadow border-l-4 border-l-violet-deep flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-violet-deep flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-ink">
                  Committee Roster & Speaker Lineup
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  In accordance with our strict factual integrity policy, official organizer bios, keynote speakers, and pastoral mentors will be published here upon official committee ratification. No identities are fabricated.
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-paper-warm text-violet-deep whitespace-nowrap self-start sm:self-center">
              Official Approval Pending
            </span>
          </div>
        </Container>
      </section>

      {/* 3. Committee Structural Groups Grid */}
      <section aria-labelledby="departments-heading">
        <Container size="xl">
          <SectionHeading
            badge="Committee Structure"
            title="Service Areas & Ministry Teams"
            subtitle="Explore the functional teams preparing every detail for Wednesday, January 20, 2027."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {TEAM_GROUPS.map((group) => {
              const members = TEAM_MEMBERS.filter((m) => m.category === group.category);

              return (
                <div
                  key={group.category}
                  className="art-card p-6 sm:p-8 art-paper-shadow flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-violet/10 text-violet-deep">
                        {group.category}
                      </span>
                      <span className="text-xs text-ink-subtle flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-violet-deep" aria-hidden="true" />
                        <span>Announcement Coming Soon</span>
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-ink">
                      {group.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  {/* Member cards or Placeholder Cards */}
                  {members.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                      {members.map((member) => (
                        <div key={member.id} className="p-3 rounded-xl bg-canvas border border-violet/10">
                          <h4 className="font-semibold text-xs text-ink">{member.name}</h4>
                          <span className="text-[11px] text-ink-muted">{member.role}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-paper-warm/60 border border-violet/10 text-center space-y-2">
                      <Users className="w-6 h-6 mx-auto text-violet/50" aria-hidden="true" />
                      <p className="text-xs font-medium text-ink">
                        Volunteer Profiles Finalizing
                      </p>
                      <p className="text-[11px] text-ink-subtle">
                        Leadership members and youth coordinators will be updated here once verified.
                      </p>
                    </div>
                  )}

                  <div className="pt-4 border-t border-violet/10 flex justify-between items-center text-xs text-ink-subtle">
                    <span>Avenra Gangaara Preparation</span>
                    <Link href="/about" className="text-violet-deep font-semibold hover:underline">
                      Gathering story &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. Volunteer Callout Box */}
      <section aria-labelledby="volunteer-heading">
        <Container size="md">
          <div className="art-card-warm p-8 sm:p-12 art-paper-shadow text-center space-y-5">
            <div className="w-12 h-12 rounded-full bg-coral/15 text-coral-deep flex items-center justify-center mx-auto">
              <Heart className="w-6 h-6" aria-hidden="true" />
            </div>

            <h3 id="volunteer-heading" className="text-2xl sm:text-3xl font-display font-bold text-ink">
              Want to Serve at {EVENT_DATA.name}?
            </h3>

            <p className="text-xs sm:text-sm text-ink-muted max-w-lg mx-auto leading-relaxed">
              We welcome youth and mentors who want to volunteer in hospitality, ushering, prayer, and logistics. Reach out to our organizing committee to learn about serving opportunities.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <CTAButton href="/contact" variant="coral" size="md">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Contact Organizing Committee</span>
              </CTAButton>
              <CTAButton href="/" variant="outline" size="md">
                <span>Return to Home</span>
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
