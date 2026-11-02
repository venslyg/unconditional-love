import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTAButton } from '@/components/ui/CTAButton';
import { Users, Heart, Clock } from 'lucide-react';
import { EVENT_DATA } from '@/data/event';

export function TeamTeaserSection() {
  return (
    <section aria-labelledby="team-teaser-heading" className="py-16 sm:py-24 bg-paper-warm/40 border-t border-violet/10">
      <Container size="lg">
        <SectionHeading
          badge="Behind the Gathering"
          title="Organized by Youth, for Youth"
          subtitle="A committed team of volunteer youth leaders, worship musicians, and pastors preparing with prayer."
        />

        <div className="art-card p-6 sm:p-10 art-paper-shadow text-center space-y-6 mt-12 max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-violet/10 text-violet-deep flex items-center justify-center mx-auto">
            <Users className="w-8 h-8" aria-hidden="true" />
          </div>

          <div className="space-y-3">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
              Dedicated to Serving the Next Generation
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed max-w-xl mx-auto">
              Our team consists of passionate volunteers across Sri Lanka who believe that youth gathering in authentic worship and genuine brotherhood can spark lasting spiritual transformation.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas border border-violet/15 text-xs text-ink-muted">
            <Clock className="w-3.5 h-3.5 text-violet-deep" aria-hidden="true" />
            <span>Official organizer bios & leadership roster to be announced in Phase 4</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <CTAButton href="/team" variant="outline" size="md">
              <Users className="w-4 h-4" aria-hidden="true" />
              <span>Meet the Organizing Committee</span>
            </CTAButton>
            <CTAButton href="/about" variant="pill" size="md">
              <Heart className="w-4 h-4 text-coral" aria-hidden="true" />
              <span>Read Our Story</span>
            </CTAButton>
          </div>
        </div>

        <p className="text-center text-xs text-ink-subtle mt-6">
          {EVENT_DATA.name} is a non-profit volunteer initiative uniting young people in Christ.
        </p>
      </Container>
    </section>
  );
}

