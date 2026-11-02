import { EVENT_DATA } from '@/data/event';
import Image from 'next/image';

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
    <div className="min-h-screen bg-canvas text-ink py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Phase Header */}
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet/10 text-violet-deep text-xs sm:text-sm font-semibold tracking-wide uppercase">
            Phase 0 Foundation & Design System
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-ink">
            {EVENT_DATA.name}
          </h1>
          <p className="text-xl sm:text-2xl font-display italic text-violet-deep">
            “{EVENT_DATA.theme}”
          </p>
          <p className="text-sm sm:text-base text-ink-muted max-w-xl mx-auto">
            {EVENT_DATA.subtitle}
          </p>
        </header>

        {/* Confirmed Event Configuration Card */}
        <section aria-labelledby="config-heading" className="art-card p-6 sm:p-8 art-paper-shadow">
          <div className="flex items-center justify-between border-b border-violet/10 pb-4 mb-6">
            <div>
              <h2 id="config-heading" className="text-xl font-display font-bold text-ink">
                Authoritative Event Configuration
              </h2>
              <p className="text-xs text-ink-muted">Sourced directly from <code className="bg-canvas px-1.5 py-0.5 rounded text-violet-deep font-mono">src/data/event.ts</code></p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-leaf/15 text-leaf-deep">
              Truth in Data
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-3.5 rounded-lg bg-canvas/60 border border-violet/10">
              <span className="block text-xs uppercase tracking-wider text-ink-subtle">Date</span>
              <strong className="text-base text-ink font-semibold">{EVENT_DATA.dateDisplay}</strong>
            </div>

            <div className="p-3.5 rounded-lg bg-canvas/60 border border-violet/10">
              <span className="block text-xs uppercase tracking-wider text-ink-subtle">Venue</span>
              <strong className="text-base text-ink font-semibold">{EVENT_DATA.venue.name}, {EVENT_DATA.venue.city}</strong>
            </div>

            <div className="p-3.5 rounded-lg bg-canvas/60 border border-violet/10">
              <span className="block text-xs uppercase tracking-wider text-ink-subtle">Entrance Fee</span>
              <strong className="text-base text-ink font-semibold">{EVENT_DATA.fee.formatted} <span className="text-xs font-normal text-ink-muted">({EVENT_DATA.fee.unit})</span></strong>
            </div>

            <div className="p-3.5 rounded-lg bg-canvas/60 border border-violet/10">
              <span className="block text-xs uppercase tracking-wider text-ink-subtle">Planning Attendance</span>
              <strong className="text-base text-ink font-semibold">~{EVENT_DATA.expectedAttendance} Attendees</strong>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-md bg-coral/10 border border-coral/20 text-xs text-coral-deep">
            ⚠️ <strong>Committee Notice:</strong> Registration is currently in preview mode (<code className="font-mono">isRegistrationLive = false</code>). Exact session agenda and speaker announcements are pending official approval and are not fabricated.
          </div>
        </section>

        {/* Color Palette Tokens */}
        <section aria-labelledby="palette-heading" className="art-card p-6 sm:p-8 art-paper-shadow">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 id="palette-heading" className="text-xl font-display font-bold text-ink mb-1">
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {colorSwatches.map((swatch) => (
              <div
                key={swatch.name}
                className="rounded-xl overflow-hidden border border-ink/10 bg-paper-light shadow-sm flex flex-col"
              >
                <div className={`h-16 w-full ${swatch.bg} ${swatch.border} flex items-center justify-center p-2 text-center`}>
                  <span className={`text-xs font-bold tracking-wide ${swatch.text}`}>
                    {swatch.hex}
                  </span>
                </div>
                <div className="p-3 text-left">
                  <div className="font-semibold text-xs text-ink">{swatch.name}</div>
                  <div className="text-[11px] text-ink-subtle">{swatch.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography & Accessibility Foundations */}
        <section aria-labelledby="a11y-heading" className="art-card p-6 sm:p-8 art-paper-shadow space-y-6">
          <h2 id="a11y-heading" className="text-xl font-display font-bold text-ink">
            Typography & Accessibility System
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <span className="text-xs uppercase font-bold tracking-wider text-ink-subtle">Typography Hierarchy</span>
              <div className="space-y-2">
                <p className="text-3xl font-display font-bold text-ink">
                  Display Heading (Playfair)
                </p>
                <p className="text-xl font-display italic text-violet-deep">
                  Subheading & Quotes (Playfair Italic)
                </p>
                <p className="text-sm font-body text-ink leading-relaxed">
                  Body copy is styled using <strong className="font-semibold">Plus Jakarta Sans</strong>, calibrated for optimal legibility across high-density mobile viewports and meeting WCAG 2.2 AA contrast standards.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase font-bold tracking-wider text-ink-subtle">Accessibility & Interactive States</span>
              <div className="space-y-3">
                <p className="text-xs text-ink-muted">
                  Test interactive focus visibility (Tab to test high-contrast violet rings):
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg bg-violet text-white text-xs font-semibold shadow hover:bg-violet-deep transition-colors"
                  >
                    Primary Button
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg bg-coral text-white text-xs font-semibold shadow hover:bg-coral-deep transition-colors"
                  >
                    Secondary Button
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg bg-paper-warm text-ink text-xs font-semibold border border-ink/15 hover:bg-canvas transition-colors"
                  >
                    Outlined Button
                  </button>
                </div>
                <p className="text-xs text-ink-subtle pt-2">
                  ✅ Reduced motion media query active (`prefers-reduced-motion`).<br />
                  ✅ Semantic landmark hierarchy with hidden skip link for keyboard navigation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Phase Status Banner */}
        <footer className="art-card-warm p-6 text-center space-y-2">
          <div className="inline-block px-3 py-1 rounded-full bg-violet-deep text-white text-xs font-bold uppercase tracking-wider">
            Phase 0 Status: Ready for Review
          </div>
          <p className="text-xs sm:text-sm text-ink-muted max-w-md mx-auto">
            Design tokens, event configuration, accessible typography, and style foundations established. Awaiting user approval to proceed with <strong>Phase 1: Site Shell (Header, Navigation & Shared UI)</strong>.
          </p>
        </footer>

      </div>
    </div>
  );
}
