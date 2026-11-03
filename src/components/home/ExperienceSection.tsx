import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Music, BookOpen, Coffee, Waves } from 'lucide-react';

const PILLARS = [
  {
    icon: Music,
    title: 'Heartfelt Worship & Praise',
    tag: 'Reverence & Joy',
    colorBg: 'bg-violet/15',
    colorText: 'text-violet-deep',
    cardGradient: 'bg-gradient-to-b from-violet-tint/90 via-paper-light to-paper-light border-violet/25',
    description:
      'Lifting our voices together in sincere adoration. Experience a worship atmosphere that is vibrant, authentic, and focused solely on honoring God.',
  },
  {
    icon: BookOpen,
    title: 'Transformational Word',
    tag: 'Truth & Encouragement',
    colorBg: 'bg-coral/20',
    colorText: 'text-coral-deep',
    cardGradient: 'bg-gradient-to-b from-coral-tint/90 via-paper-light to-paper-light border-coral/25',
    description:
      'Grounded in timeless scripture, addressing real-life struggles faced by young people—identity, purpose, mental health, and stepping out in faith.',
  },
  {
    icon: Coffee,
    title: 'Shared Community & Fellowship',
    tag: 'Belonging Together',
    colorBg: 'bg-gold/25',
    colorText: 'text-gold-deep',
    cardGradient: 'bg-gradient-to-b from-gold-tint/90 via-paper-light to-paper-light border-gold/30',
    description:
      'Meaningful conversations over lunch, laughter, and group sharing. Break out of your comfort zone and form genuine, Christ-centered friendships.',
  },
  {
    icon: Waves,
    title: 'Peaceful Riverside Space',
    tag: 'Avenra Gangaara',
    colorBg: 'bg-water/20',
    colorText: 'text-water-deep',
    cardGradient: 'bg-gradient-to-b from-water-tint/90 via-paper-light to-paper-light border-water/30',
    description:
      'Set against the tranquil waters of Wennappuwa, giving you the physical and mental margin to pause, reflect, pray, and recharge your spirit.',
  },
];

export function ExperienceSection() {
  return (
    <section aria-labelledby="experience-heading" className="py-16 sm:py-24 bg-paper-warm/40 border-y border-violet/10">
      <Container size="xl">
        <SectionHeading
          badge="What to Expect"
          title="The Gathering Experience"
          subtitle="Four core pillars shaping our day of worship, connection, and spiritual renewal."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`rounded-2xl border p-6 sm:p-7 art-paper-shadow flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 shadow-md ${pillar.cardGradient}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl ${pillar.colorBg} ${pillar.colorText} flex items-center justify-center shadow-xs`}>
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${pillar.colorBg} ${pillar.colorText}`}>
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-ink pt-1">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-violet/10 text-[11px] text-ink-subtle">
                  <span>Youth Gathering • Jan 20, 2027</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Truth in Data notice */}
        <p className="text-center text-xs text-ink-subtle mt-8">
          ℹ️ Official keynote speaker names, session timings, and worship leaders will be published once confirmed by the organizing committee.
        </p>
      </Container>
    </section>
  );
}

