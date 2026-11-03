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
      className="relative w-full overflow-hidden bg-gradient-to-b from-paper-light via-canvas to-paper-warm/50 border-b border-violet/10 py-4 sm:py-6 lg:py-6 lg:min-h-[calc(100dvh-5rem)] flex items-center"
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
      <Container size="xl" className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-4.5">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-paper-light border border-violet/20 text-violet-deep text-xs font-semibold tracking-wide uppercase art-paper-shadow">
              <Sparkles className="w-3.5 h-3.5 text-gold-deep" aria-hidden="true" />
              <span>Christian Youth Gathering • Sri Lanka</span>
            </div>

            {/* Event Title & Subtitle */}
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-display font-bold text-ink tracking-tight leading-[1.08]">
                {EVENT_DATA.name}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                <span className="art-brush-highlight text-xl sm:text-2xl lg:text-3xl font-display italic text-violet-deep font-semibold">
                  “{EVENT_DATA.theme}”
                </span>
                <span className="hidden sm:inline-block text-ink-subtle">•</span>
                <span className="text-xs uppercase tracking-widest text-ink-muted font-semibold self-center">
                  2027 Gathering
                </span>
              </div>
            </div>

            <ArtAccent variant="brush-line" className="text-violet mx-auto lg:mx-0 my-0.5 max-w-xs" />

            {/* Mission Statement */}
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-xl">
              {EVENT_DATA.subtitle}. Come worship together, encounter His transforming grace, and bring one another into a community where everyone is welcomed, valued, and loved.
            </p>

            {/* Event Key Highlights Bar */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-left">
              <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-violet-tint/90 to-paper-light border border-violet/20 art-paper-shadow hover:-translate-y-0.5 transition-transform duration-200">
                <div className="w-8 h-8 rounded-lg bg-violet/15 text-violet-deep flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ink-subtle block">Date & Hours</span>
                  <span className="text-xs sm:text-sm font-bold text-ink leading-tight block">{EVENT_DATA.dateDisplay}</span>
                  <span className="text-[10px] text-ink-muted block font-medium">2:30 PM – 9:30 PM (Doors 2 PM)</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-coral-tint/90 to-paper-light border border-coral/25 art-paper-shadow hover:-translate-y-0.5 transition-transform duration-200">
                <div className="w-8 h-8 rounded-lg bg-coral/20 text-coral-deep flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ink-subtle block">Venue</span>
                  <span className="text-xs sm:text-sm font-bold text-ink leading-tight block">{EVENT_DATA.venue.name}</span>
                  <span className="text-[10px] text-ink-muted block">{EVENT_DATA.venue.city}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-gold-tint/90 to-paper-light border border-gold/30 art-paper-shadow hover:-translate-y-0.5 transition-transform duration-200">
                <div className="w-8 h-8 rounded-lg bg-gold/25 text-gold-deep flex items-center justify-center flex-shrink-0">
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
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1.5">
              <CTAButton href="/register" variant="coral" size="md" className="shadow-md">
                <Ticket className="w-4 h-4" aria-hidden="true" />
                <span>Explore Registration Preview</span>
              </CTAButton>

              <CTAButton href="/about" variant="outline" size="md">
                <Compass className="w-4 h-4" aria-hidden="true" />
                <span>Our Mission</span>
              </CTAButton>

              <CTAButton href="/contact" variant="pill" size="md">
                <Navigation className="w-4 h-4" aria-hidden="true" />
                <span>Venue Directions</span>
              </CTAButton>
            </div>
          </div>

          {/* Right Column: Framed Artwork with Integrated Countdown */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* Themed Framed Artwork Card */}
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              <div className="art-card-gallery p-2 sm:p-2.5 relative overflow-hidden">
                {/* Decorative corner flourishes */}
                <ArtAccent
                  variant="corner-flourish"
                  color="#7961A6"
                  className="absolute top-1.5 left-1.5 pointer-events-none z-20 w-6 h-6 opacity-60"
                />
                <ArtAccent
                  variant="corner-flourish"
                  color="#E6C56F"
                  className="absolute top-1.5 right-1.5 pointer-events-none z-20 w-6 h-6 rotate-90 opacity-60"
                />

                {/* Painting Canvas Container with Integrated Live Countdown Overlay */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-canvas border border-violet/15 shadow-inner group">
                  <Image
                    src="/images/ul3-hero-artwork.jpg"
                    alt="Unconditional Love 3 - Hand-painted waterside youth gathering artistic painting"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Countdown mounted directly ON the image */}
                  <div className="absolute inset-x-2 bottom-2 sm:inset-x-3 sm:bottom-3 z-10">
                    <Suspense fallback={<CountdownFallback />}>
                      <Countdown targetDateIso="2027-01-20T14:30:00+05:30" />
                    </Suspense>
                  </div>
                </div>

                {/* Handcrafted gallery title plaque below the painting */}
                <div className="flex items-center justify-between px-2 pt-2 text-[11px] text-ink-subtle">
                  <span className="font-display italic font-medium text-ink">
                    “Bring One Another” — Gathering Artwork
                  </span>
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-violet-deep">
                    Avenra Gangaara
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
