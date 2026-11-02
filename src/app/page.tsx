import { EVENT_DATA } from '@/data/event';
import { Hero } from '@/components/home/Hero';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTAButton } from '@/components/ui/CTAButton';
import { Calendar, MapPin, Ticket, ShieldCheck, Heart, Sparkles } from 'lucide-react';
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
    <div className="w-full flex flex-col">
      {/* Full-Width Artistic Hero Section (Phase 2) */}
      <Hero />

      {/* Main Page Content Body */}
      <div className="py-16 sm:py-20 space-y-16">
        
        {/* Event Essentials Section */}
        <section aria-labelledby="essentials-heading">
          <Container size="xl">
            <SectionHeading
              badge="At a Glance"
              title="Gathering Essentials"
              subtitle="Everything you need to know about Unconditional Love 3."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              
              {/* Card 1: When */}
              <div className="art-card p-6 sm:p-8 art-paper-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-violet/10 text-violet-deep flex items-center justify-center">
                    <Calendar className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink">
                    Wednesday, Jan 20, 2027
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Set aside this special day for worship, shared meals, meaningful conversations, and building lifelong faith-centered friendships.
                  </p>
                </div>
                <div className="pt-4 border-t border-violet/10 text-xs text-ink-subtle">
                  <span>Detailed agenda times announced soon</span>
                </div>
              </div>

              {/* Card 2: Where */}
              <div className="art-card p-6 sm:p-8 art-paper-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-coral/15 text-coral-deep flex items-center justify-center">
                    <MapPin className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink">
                    Avenra Gangaara, Wennappuwa
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    A peaceful waterside retreat along the river in Wennappuwa, offering a refreshing and inspiring environment away from daily distractions.
                  </p>
                </div>
                <div className="pt-4 border-t border-violet/10 flex items-center justify-between text-xs">
                  <Link href="/contact" className="text-violet-deep font-semibold hover:underline">
                    View directions map &rarr;
                  </Link>
                </div>
              </div>

              {/* Card 3: Admission */}
              <div className="art-card p-6 sm:p-8 art-paper-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-deep flex items-center justify-center">
                    <Ticket className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink">
                    Rs. 1,000 Admission Fee
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    A single fixed contribution of LKR 1,000 per attendee helps cover gathering arrangements, facilities, and participant admission.
                  </p>
                </div>
                <div className="pt-4 border-t border-violet/10 flex items-center justify-between text-xs">
                  <span className="text-ink-subtle">~{EVENT_DATA.expectedAttendance} youth capacity</span>
                  <Link href="/register" className="text-violet-deep font-semibold hover:underline">
                    Preview form &rarr;
                  </Link>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* Call to Community Section */}
        <section aria-labelledby="community-heading" className="bg-paper-warm/50 border-y border-violet/10 py-16">
          <Container size="lg" className="text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-violet/10 text-violet-deep flex items-center justify-center mx-auto">
              <Heart className="w-6 h-6 fill-violet/20" aria-hidden="true" />
            </div>

            <h2 id="community-heading" className="text-2xl sm:text-4xl font-display font-bold text-ink tracking-tight">
              “Bring One Another”
            </h2>

            <p className="text-sm sm:text-base text-ink-muted max-w-2xl mx-auto leading-relaxed">
              Faith was never meant to be walked in isolation. Whether you are seeking spiritual renewal, longing for true friendship, or wanting to share God’s love with someone in your life—come as you are and bring a friend.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <CTAButton href="/about" variant="primary" size="md">
                <span>Read Gathering Story</span>
              </CTAButton>
              <CTAButton href="/register" variant="outline" size="md">
                <span>View Registration Preview</span>
              </CTAButton>
            </div>
          </Container>
        </section>

        {/* Phase Roadmap & Verified Routes Directory */}
        <section aria-labelledby="directory-heading">
          <Container size="xl">
            <div className="art-card p-6 sm:p-10 art-paper-shadow space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-violet/10 pb-4">
                <div>
                  <h3 id="directory-heading" className="text-xl font-display font-bold text-ink flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-violet-deep" aria-hidden="true" />
                    <span>Project Navigation Directory</span>
                  </h3>
                  <p className="text-xs text-ink-muted">All primary site sections connected and accessible</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-leaf/15 text-leaf-deep flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Phase 2 Hero Complete</span>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs sm:text-sm">
                {[
                  { title: 'Home', href: '/', desc: 'Full-Width Hero & Essentials' },
                  { title: 'About', href: '/about', desc: 'Mission & Vision (Phase 4)' },
                  { title: 'Team', href: '/team', desc: 'Leadership Bios (Phase 4)' },
                  { title: 'Schedule', href: '/schedule', desc: 'Agenda Outline (Phase 4)' },
                  { title: 'FAQ', href: '/faq', desc: 'Practical Answers (Phase 6)' },
                  { title: 'Contact', href: '/contact', desc: 'Venue Directions (Phase 6)' },
                  { title: 'Register', href: '/register', desc: 'Booking Form (Phase 5)' },
                  { title: 'Privacy', href: '/privacy', desc: 'Draft Notice (Phase 6)' },
                  { title: 'Terms', href: '/terms', desc: 'Participation Terms (Phase 6)' },
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

              {/* Design System Swatches */}
              <div className="pt-6 border-t border-violet/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-ink-subtle mb-3">
                  Artistic Theme Tokens
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
                  {colorSwatches.map((swatch) => (
                    <div
                      key={swatch.name}
                      className="rounded-lg overflow-hidden border border-ink/10 bg-paper-light text-center"
                    >
                      <div className={`h-8 w-full ${swatch.bg} ${swatch.border} flex items-center justify-center`}>
                        <span className={`text-[10px] font-bold ${swatch.text}`}>{swatch.hex}</span>
                      </div>
                      <div className="p-1.5">
                        <div className="text-[11px] font-semibold text-ink truncate">{swatch.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

      </div>
    </div>
  );
}
