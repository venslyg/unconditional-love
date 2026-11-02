import React from 'react';
import { Container } from '@/components/ui/Container';
import { CTAButton } from '@/components/ui/CTAButton';
import { ArtAccent } from '@/components/ui/ArtAccent';
import { Ticket, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EVENT_DATA } from '@/data/event';

export function FinalCTASection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative py-20 sm:py-28 bg-gradient-to-br from-paper-warm via-canvas to-violet-tint/40 border-t border-violet/15 overflow-hidden text-ink"
    >
      {/* Decorative background glow circles */}
      <div
        className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-coral-tint/50 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-violet-tint/50 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container size="md" className="relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper-light border border-violet/20 text-violet-deep text-xs font-semibold uppercase tracking-wider art-paper-shadow">
          <Sparkles className="w-3.5 h-3.5 text-gold-deep" aria-hidden="true" />
          <span>Wednesday, January 20, 2027</span>
        </div>

        <h2
          id="final-cta-heading"
          className="text-3xl sm:text-5xl font-display font-bold text-ink tracking-tight leading-tight"
        >
          Bring One Another
        </h2>

        <ArtAccent variant="brush-line" className="text-violet mx-auto my-1 max-w-xs" />

        <p className="text-sm sm:text-base text-ink-muted max-w-xl mx-auto leading-relaxed">
          Don’t miss this day of genuine worship, heart-to-heart fellowship, and encountering God’s transforming grace at Avenra Gangaara.
        </p>

        {/* Quick Summary Pill Bar */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 p-2 rounded-2xl bg-paper-light/80 border border-violet/15 art-paper-shadow text-xs text-ink">
          <span className="flex items-center gap-1.5 px-3 py-1 font-medium">
            <Calendar className="w-3.5 h-3.5 text-violet-deep" aria-hidden="true" />
            <span>Jan 20, 2027</span>
          </span>
          <span className="hidden sm:inline-block text-ink-subtle">•</span>
          <span className="flex items-center gap-1.5 px-3 py-1 font-medium">
            <MapPin className="w-3.5 h-3.5 text-coral-deep" aria-hidden="true" />
            <span>Avenra Gangaara</span>
          </span>
          <span className="hidden sm:inline-block text-ink-subtle">•</span>
          <span className="flex items-center gap-1.5 px-3 py-1 font-semibold text-violet-deep">
            <Ticket className="w-3.5 h-3.5 text-gold-deep" aria-hidden="true" />
            <span>{EVENT_DATA.fee.formatted}</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <CTAButton href="/register" variant="coral" size="lg" className="shadow-md">
            <Ticket className="w-4 h-4" aria-hidden="true" />
            <span>View Registration Preview</span>
          </CTAButton>
          <CTAButton href="/contact" variant="outline" size="lg">
            <span>Location & Directions</span>
          </CTAButton>
        </div>

        <p className="text-xs text-ink-subtle pt-2">
          Registration opening soon. No payment will be collected until live registration is authorized.
        </p>

      </Container>
    </section>
  );
}

