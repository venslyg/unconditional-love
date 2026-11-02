import { EVENT_DATA } from '@/data/event';
import { Container } from '@/components/ui/Container';
import { CTAButton } from '@/components/ui/CTAButton';
import { EventInfoChip } from '@/components/ui/EventInfoChip';
import { Calendar, MapPin, Ticket, Sparkles, Compass } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const colorSwatches = [
    { name: 'Canvas', hex: '#F8F4EA', role: 'Warm Paper Canvas', bg: 'bg-[#F8F4EA]', border: 'border-ink/20', text: 'text-ink' },
    { name: 'Ink', hex: '#342944', role: 'Primary Typography', bg: 'bg-[#342944]', border: 'border-transparent', text: 'text-paper-light' },
    { name: 'Painterly Violet', hex: '#7961A6', role: 'Signature Accent', bg: 'bg-[#7961A6]', border: 'border-transparent', text: 'text-white' },
    { name: 'Sunset Coral', hex: '#DA8968', role: 'Warm Secondary', bg: 'bg-[#DA8968]', border: 'border-transparent', text: 'text-white' },
    { name: 'Golden Light', hex: '#E6C56F', role: 'Highlights & Details', bg: 'bg-[#E6C56F]', border: 'border-transparent', text: 'text-ink' },
    { name: 'Leaf Green', hex: '#6F956B', role: 'Natural Accents', bg: 'bg-[#6F956B]', border: 'border-transparent', text: 'text-white' },
    { name: 'Water Blue', hex: '#668C9D', role: 'Atmospheric Tone', bg: 'bg-[#668C9D]', border: 'border-transparent', text: 'text-white' },
  ];

  return (
    <div className="py-12 sm:py-16">
      <Container size="lg" className="space-y-12">
        
        {/* Phase 1 Hero Status Section */}
        <section aria-labelledby="hero-status" className="text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet/10 text-violet-deep text-xs sm:text-sm font-semibold tracking-wide uppercase border border-violet/15">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Phase 1 Site Shell Active</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-ink">
            {EVENT_DATA.name}
          </h1>
          <p className="text-xl sm:text-2xl font-display italic text-violet-deep font-semibold">
            “{EVENT_DATA.theme}”
          </p>
          <p className="text-sm sm:text-base text-ink-muted max-w-xl mx-auto leading-relaxed">
            {EVENT_DATA.subtitle}
          </p>

          {/* Key Event Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <EventInfoChip
              icon={Calendar}
              label="Date"
              value={EVENT_DATA.dateDisplay}
            />
            <EventInfoChip
              icon={MapPin}
              label="Venue"
              value={EVENT_DATA.venue.name}
              subvalue={EVENT_DATA.venue.city}
            />
            <EventInfoChip
              icon={Ticket}
              label="Entrance"
              value={EVENT_DATA.fee.formatted}
              subvalue={EVENT_DATA.fee.unit}
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <CTAButton href="/register" variant="coral" size="md">
              <Ticket className="w-4 h-4" aria-hidden="true" />
              <span>Explore Registration Preview</span>
            </CTAButton>
            <CTAButton href="/about" variant="outline" size="md">
              <Compass className="w-4 h-4" aria-hidden="true" />
              <span>About Gathering</span>
            </CTAButton>
          </div>
        </section>

        {/* Site Shell Navigation Grid */}
        <section aria-labelledby="routes-heading" className="art-card p-6 sm:p-8 art-paper-shadow">
          <div className="flex items-center justify-between border-b border-violet/10 pb-4 mb-6">
            <div>
              <h2 id="routes-heading" className="text-lg sm:text-xl font-display font-bold text-ink">
                Verified Site Shell Routes
              </h2>
              <p className="text-xs text-ink-muted">All primary site routes scaffolded with zero 404s</p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-leaf/15 text-leaf-deep">
              Phase 1 Complete
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs sm:text-sm">
            {[
              { title: 'Home', href: '/', desc: 'Landing & Hero' },
              { title: 'About', href: '/about', desc: 'Mission & Story' },
              { title: 'Team', href: '/team', desc: 'Leadership' },
              { title: 'Schedule', href: '/schedule', desc: 'Event Timeline' },
              { title: 'FAQ', href: '/faq', desc: 'Common Questions' },
              { title: 'Contact', href: '/contact', desc: 'Venue & Directions' },
              { title: 'Register', href: '/register', desc: 'Booking Preview' },
              { title: 'Privacy', href: '/privacy', desc: 'Draft Notice' },
              { title: 'Terms', href: '/terms', desc: 'Participation Terms' },
            ].map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="p-3.5 rounded-xl bg-canvas hover:bg-paper-warm border border-violet/10 hover:border-violet/30 transition-all flex flex-col group"
              >
                <span className="font-semibold text-ink group-hover:text-violet-deep flex items-center justify-between">
                  {route.title}
                  <span className="text-[10px] text-violet-deep opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </span>
                <span className="text-[11px] text-ink-subtle mt-1">{route.desc}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Color Palette & Visual System */}
        <section aria-labelledby="palette-heading" className="art-card p-6 sm:p-8 art-paper-shadow">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 id="palette-heading" className="text-lg sm:text-xl font-display font-bold text-ink mb-1">
                Artistic Palette & Design Tokens
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted">
                Derived from the hand-painted waterside invitation reference in <code className="bg-canvas px-1.5 py-0.5 rounded text-violet-deep font-mono">public/images/ul3-invitation-reference.jpg</code>.
              </p>
            </div>
            <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-violet/20 shadow-sm flex-shrink-0">
              <Image
                src="/images/ul3-invitation-reference.jpg"
                alt="Art reference snippet"
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {colorSwatches.map((swatch) => (
              <div
                key={swatch.name}
                className="rounded-xl overflow-hidden border border-ink/10 bg-paper-light shadow-xs flex flex-col"
              >
                <div className={`h-14 w-full ${swatch.bg} ${swatch.border} flex items-center justify-center p-2 text-center`}>
                  <span className={`text-xs font-bold tracking-wide ${swatch.text}`}>
                    {swatch.hex}
                  </span>
                </div>
                <div className="p-2.5 text-left">
                  <div className="font-semibold text-xs text-ink">{swatch.name}</div>
                  <div className="text-[11px] text-ink-subtle">{swatch.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </Container>
    </div>
  );
}
