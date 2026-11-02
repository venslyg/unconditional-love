import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTAButton } from '@/components/ui/CTAButton';
import { ArtAccent } from '@/components/ui/ArtAccent';
import { EVENT_DATA } from '@/data/event';
import { SCHEDULE_DATA } from '@/data/schedule';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Ticket,
  AlertCircle,
  Music,
  BookOpen,
  Coffee,
  Heart,
  CheckCircle2,
} from 'lucide-react';

export const metadata = {
  title: `Program Schedule | ${EVENT_DATA.name}`,
  description: `Schedule and session outline for Unconditional Love 3 at Avenra Gangaara, Wennappuwa.`,
};

export default function SchedulePage() {
  const getSessionIcon = (type: string) => {
    switch (type) {
      case 'worship':
        return Music;
      case 'keynote':
        return BookOpen;
      case 'fellowship':
        return Coffee;
      case 'prayer':
        return Heart;
      case 'check-in':
      default:
        return CheckCircle2;
    }
  };

  const getSessionColor = (type: string) => {
    switch (type) {
      case 'worship':
        return { bg: 'bg-violet/10', text: 'text-violet-deep', border: 'border-violet/20' };
      case 'keynote':
        return { bg: 'bg-coral/15', text: 'text-coral-deep', border: 'border-coral/25' };
      case 'fellowship':
        return { bg: 'bg-gold/15', text: 'text-gold-deep', border: 'border-gold/25' };
      case 'prayer':
        return { bg: 'bg-water/15', text: 'text-water-deep', border: 'border-water/25' };
      case 'check-in':
      default:
        return { bg: 'bg-leaf/15', text: 'text-leaf-deep', border: 'border-leaf/25' };
    }
  };

  return (
    <div className="w-full py-12 sm:py-20 space-y-16 sm:space-y-24">
      
      {/* 1. Page Header */}
      <section aria-labelledby="schedule-hero" className="text-center space-y-4">
        <Container size="md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet/10 text-violet-deep text-xs font-semibold tracking-wide uppercase border border-violet/15">
            <Calendar className="w-3.5 h-3.5 text-violet-deep" aria-hidden="true" />
            <span>Event Timeline</span>
          </div>

          <h1 id="schedule-hero" className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-ink tracking-tight">
            Program Schedule
          </h1>

          <p className="text-xl sm:text-2xl font-display italic text-violet-deep font-semibold">
            Wednesday, January 20, 2027
          </p>

          <ArtAccent variant="brush-line" className="text-violet mx-auto my-2 max-w-xs" />

          <p className="text-sm sm:text-base text-ink-muted max-w-2xl mx-auto leading-relaxed">
            A full day of heartfelt worship, uplifting biblical teaching, riverside fellowship, and prayer ministry at {EVENT_DATA.venue.name}, {EVENT_DATA.venue.city}.
          </p>
        </Container>
      </section>

      {/* 2. Truth in Data Schedule Status Banner */}
      <section aria-label="Schedule Timing Notice">
        <Container size="lg">
          <div className="art-card p-5 sm:p-6 art-paper-shadow border-l-4 border-l-coral flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-ink">
                  Schedule Outline & Timing Confirmation
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {SCHEDULE_DATA.announcementNotice}
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-coral/15 text-coral-deep whitespace-nowrap self-start sm:self-center">
              Timings Announced Soon
            </span>
          </div>
        </Container>
      </section>

      {/* 3. Thematic Sessions Timeline */}
      <section aria-labelledby="timeline-heading">
        <Container size="md">
          <SectionHeading
            badge="Gathering Flow"
            title="The Day’s Journey"
            subtitle="The order of sessions designed to lead youth into worship, truth, and community."
          />

          <div className="relative mt-12 pl-6 sm:pl-8 border-l-2 border-violet/20 space-y-8">
            {SCHEDULE_DATA.sessions.map((session) => {
              const Icon = getSessionIcon(session.type);
              const color = getSessionColor(session.type);

              return (
                <div key={session.id} className="relative group">
                  {/* Timeline Node Dot */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full ${color.bg} ${color.text} border-2 border-canvas flex items-center justify-center shadow-xs`}>
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                  </div>

                  {/* Session Card */}
                  <div className="art-card p-5 sm:p-7 art-paper-shadow space-y-3 hover:-translate-y-0.5 transition-transform duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${color.bg} ${color.text}`}>
                        {session.period} • {session.focus}
                      </span>
                      <span className="text-xs text-ink-subtle flex items-center gap-1 font-medium">
                        <Clock className="w-3 h-3 text-violet-deep" aria-hidden="true" />
                        <span>{session.timingDisplay}</span>
                      </span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-ink">
                      {session.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                      {session.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. Practical Logistics & Preparation Guide */}
      <section aria-labelledby="prep-heading" className="bg-paper-warm/50 border-y border-violet/10 py-16">
        <Container size="lg">
          <SectionHeading
            badge="Practical Advice"
            title="Preparing for Gathering Day"
            subtitle="Helpful tips for attendees traveling to Avenra Gangaara on January 20, 2027."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            <div className="art-card p-6 art-paper-shadow space-y-2">
              <Sparkles className="w-6 h-6 text-violet-deep" aria-hidden="true" />
              <h4 className="font-display font-bold text-base text-ink">What to Bring</h4>
              <p className="text-xs text-ink-muted leading-relaxed">
                Bring your Bible or notebook, personal refillable water bottle, and a heart open to God and new friends.
              </p>
            </div>

            <div className="art-card p-6 art-paper-shadow space-y-2">
              <MapPin className="w-6 h-6 text-coral-deep" aria-hidden="true" />
              <h4 className="font-display font-bold text-base text-ink">Getting to the Venue</h4>
              <p className="text-xs text-ink-muted leading-relaxed">
                Avenra Gangaara is located along the coastal highway in Wennappuwa, easily accessible by public bus and private vehicles with parking on site.
              </p>
            </div>

            <div className="art-card p-6 art-paper-shadow space-y-2">
              <Ticket className="w-6 h-6 text-gold-deep" aria-hidden="true" />
              <h4 className="font-display font-bold text-base text-ink">Digital QR Check-In</h4>
              <p className="text-xs text-ink-muted leading-relaxed">
                When live registration opens, your Rs. 1,000 entrance ticket will be emailed with a QR code for quick scan admission at the doors.
              </p>
            </div>
          </div>

          <div className="pt-10 flex flex-wrap items-center justify-center gap-4">
            <CTAButton href="/register" variant="coral" size="md">
              <Ticket className="w-4 h-4" aria-hidden="true" />
              <span>Preview Registration</span>
            </CTAButton>
            <CTAButton href="/contact" variant="outline" size="md">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Venue Directions</span>
            </CTAButton>
          </div>
        </Container>
      </section>

    </div>
  );
}
