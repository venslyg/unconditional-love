import React, { Suspense } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Ticket, Sparkles, Compass, Navigation } from 'lucide-react';
import { EVENT_DATA } from '@/data/event';
import { Container } from '@/components/ui/Container';
import { CTAButton } from '@/components/ui/CTAButton';
import { ArtAccent } from '@/components/ui/ArtAccent';
import { Countdown, CountdownFallback } from './Countdown';

export function Hero() {
  return (
    <section
      aria-label="Event Introduction"
      className="relative w-full overflow-hidden bg-gradient-to-b from-paper-light via-canvas to-paper-warm/50 border-b border-violet/10 pt-10 pb-14 sm:py-20 lg:py-28"
    >
      {/* Full-width decorative background painted blobs / strokes */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-violet-tint/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-coral-tint/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-water-tint/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Full-Width Content Container */}
      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-paper-light border border-violet/20 text-violet-deep text-xs sm:text-sm font-semibold tracking-wide uppercase art-paper-shadow">
              <Sparkles className="w-3.5 h-3.5 text-gold-deep" aria-hidden="true" />
              <span>Christian Youth Gathering • Sri Lanka</span>
            </div>

            {/* Event Title & Subtitle */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-bold text-ink tracking-tight leading-[1.08]">
                {EVENT_DATA.name}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 justify-center lg:justify-start">
                <span className="text-2xl sm:text-3xl xl:text-4xl font-display italic text-violet-deep font-semibold">
                  “{EVENT_DATA.theme}”
                </span>
                <span className="hidden sm:inline-block text-ink-subtle">•</span>
                <span className="text-xs sm:text-sm uppercase tracking-widest text-ink-muted font-semibold self-center">
                  2027 Gathering
                </span>
              </div>
            </div>

            <ArtAccent variant="brush-line" className="text-violet mx-auto lg:mx-0 my-1 max-w-sm" />

            {/* Mission Statement */}
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl">
              {EVENT_DATA.subtitle}. Come worship together, encounter His transforming grace, and bring one another into a community where everyone is welcomed, valued, and loved.
            </p>

            {/* Event Key Highlights Bar */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-paper-light/90 border border-violet/10 art-paper-shadow">
                <div className="w-9 h-9 rounded-lg bg-violet/10 text-violet-deep flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ink-subtle block">Date & Hours</span>
                  <span className="text-xs sm:text-sm font-bold text-ink leading-tight block">{EVENT_DATA.dateDisplay}</span>
                  <span className="text-[10px] text-ink-muted block font-medium">2:30 PM – 9:30 PM (Doors 2 PM)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-paper-light/90 border border-violet/10 art-paper-shadow">
                <div className="w-9 h-9 rounded-lg bg-coral/15 text-coral-deep flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ink-subtle block">Venue</span>
                  <span className="text-xs sm:text-sm font-bold text-ink leading-tight block">{EVENT_DATA.venue.name}</span>
                  <span className="text-[10px] text-ink-muted block">{EVENT_DATA.venue.city}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-paper-light/90 border border-violet/10 art-paper-shadow">
                <div className="w-9 h-9 rounded-lg bg-gold/15 text-gold-deep flex items-center justify-center flex-shrink-0">
                  <Ticket className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ink-subtle block">Entrance Fee</span>
                  <span className="text-xs sm:text-sm font-bold text-ink leading-tight block">{EVENT_DATA.fee.formatted}</span>
                  <span className="text-[10px] text-ink-muted block">{EVENT_DATA.fee.unit}</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              <CTAButton href="/register" variant="coral" size="lg" className="shadow-md">
                <Ticket className="w-4 h-4" aria-hidden="true" />
                <span>Explore Registration Preview</span>
              </CTAButton>

              <CTAButton href="/about" variant="outline" size="lg">
                <Compass className="w-4 h-4" aria-hidden="true" />
                <span>Our Mission</span>
              </CTAButton>

              <CTAButton href="/contact" variant="pill" size="lg">
                <Navigation className="w-4 h-4" aria-hidden="true" />
                <span>Venue Directions</span>
              </CTAButton>
            </div>
          </div>

          {/* Right Column: Artistic Visual & Live Countdown */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            
            {/* Themed Framed Artwork Card */}
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden bg-paper-light border-2 border-violet/20 shadow-xl art-paper-shadow p-2 sm:p-3">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-canvas">
                  <Image
                    src="/images/ul3-hero-artwork.jpg"
                    alt="Unconditional Love 3 - Hand-painted waterside youth gathering artistic painting"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle painted overlay label */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-ink/75 backdrop-blur-md text-white text-xs flex items-center justify-between">
                    <div>
                      <span className="font-display font-semibold block text-sm">Avenra Gangaara</span>
                      <span className="text-[10px] text-paper-warm opacity-90">Wennappuwa, Sri Lanka</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-violet text-white text-[10px] font-bold">
                      {EVENT_DATA.fee.formatted}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Event Countdown */}
            <div className="w-full">
              <Suspense fallback={<CountdownFallback />}>
                <Countdown targetDateIso="2027-01-20T14:30:00+05:30" />
              </Suspense>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
