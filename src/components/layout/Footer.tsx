import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Ticket, Heart } from 'lucide-react';
import { EVENT_DATA } from '@/data/event';
import { Container } from '@/components/ui/Container';
import { ArtAccent } from '@/components/ui/ArtAccent';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-violet/15 bg-paper-warm/60 relative overflow-hidden text-ink">
      {/* Decorative top wave/divider accent */}
      <ArtAccent variant="water-wave" className="text-canvas -mt-4 opacity-50" />

      <Container size="lg" className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Purpose */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-tight text-ink">
                {EVENT_DATA.name}
              </span>
              <span className="font-display italic text-sm text-violet-deep font-semibold">
                “{EVENT_DATA.theme}”
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed max-w-sm">
              {EVENT_DATA.subtitle}. A gathering where young people unite in worship, community, and experiencing God’s boundless grace.
            </p>

            <div className="space-y-2 pt-2 text-xs text-ink-muted">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-violet-deep flex-shrink-0" aria-hidden="true" />
                <span>{EVENT_DATA.dateDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-coral-deep flex-shrink-0" aria-hidden="true" />
                <span>{EVENT_DATA.venue.name}, {EVENT_DATA.venue.city}, {EVENT_DATA.venue.country}</span>
              </div>
              <div className="flex items-center gap-2">
                <Ticket className="w-4 h-4 text-gold-deep flex-shrink-0" aria-hidden="true" />
                <span>Entrance: {EVENT_DATA.fee.formatted} {EVENT_DATA.fee.unit}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-ink-muted hover:text-violet-deep transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ink-muted hover:text-violet-deep transition-colors">
                  About the Gathering
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-ink-muted hover:text-violet-deep transition-colors">
                  Organizing Team
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-ink-muted hover:text-violet-deep transition-colors">
                  Program Schedule
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-ink-muted hover:text-violet-deep transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ink-muted hover:text-violet-deep transition-colors">
                  Venue & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Registration Status & Policies */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
              Registration & Integrity
            </h3>

            <div className="p-4 rounded-xl bg-canvas border border-violet/10 text-xs space-y-2 art-paper-shadow">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-coral/15 text-coral-deep font-semibold text-[11px]">
                Registration Opening Soon
              </div>
              <p className="text-ink-muted leading-relaxed">
                Online registration will open following official announcement by the organizing committee. Individual entry fee will be {EVENT_DATA.fee.formatted}.
              </p>
              <Link
                href="/register"
                className="inline-block text-violet-deep font-semibold hover:underline text-xs pt-1"
              >
                View registration preview &rarr;
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-ink-subtle">
              <Link href="/privacy" className="hover:text-ink hover:underline transition-colors">
                Privacy Policy (Draft)
              </Link>
              <Link href="/terms" className="hover:text-ink hover:underline transition-colors">
                Terms of Participation (Draft)
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-violet/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
          <p>© 2027 {EVENT_DATA.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 text-[11px] text-ink-subtle">
            <span>Built with care for youth community</span>
            <Heart className="w-3.5 h-3.5 text-coral fill-coral/30" aria-hidden="true" />
          </p>
        </div>
      </Container>
    </footer>
  );
}
