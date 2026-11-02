import { Hero } from '@/components/home/Hero';
import { PurposeSection } from '@/components/home/PurposeSection';
import { ExperienceSection } from '@/components/home/ExperienceSection';
import { VenueSection } from '@/components/home/VenueSection';
import { TeamTeaserSection } from '@/components/home/TeamTeaserSection';
import { FAQPreviewSection } from '@/components/home/FAQPreviewSection';
import { FinalCTASection } from '@/components/home/FinalCTASection';
import { Container } from '@/components/ui/Container';
import { ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const colorSwatches = [
    { name: 'Canvas', hex: '#F8F4EA', bg: 'bg-[#F8F4EA]', border: 'border-ink/20', text: 'text-ink' },
    { name: 'Ink', hex: '#342944', bg: 'bg-[#342944]', border: 'border-transparent', text: 'text-paper-light' },
    { name: 'Painterly Violet', hex: '#7961A6', bg: 'bg-[#7961A6]', border: 'border-transparent', text: 'text-white' },
    { name: 'Sunset Coral', hex: '#DA8968', bg: 'bg-[#DA8968]', border: 'border-transparent', text: 'text-white' },
    { name: 'Golden Light', hex: '#E6C56F', bg: 'bg-[#E6C56F]', border: 'border-transparent', text: 'text-ink' },
    { name: 'Leaf Green', hex: '#6F956B', bg: 'bg-[#6F956B]', border: 'border-transparent', text: 'text-white' },
    { name: 'Water Blue', hex: '#668C9D', bg: 'bg-[#668C9D]', border: 'border-transparent', text: 'text-white' },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* 1. Full-Width Hero Section */}
      <Hero />

      {/* 2. Gathering Purpose & Heart */}
      <PurposeSection />

      {/* 3. The 4 Gathering Pillars */}
      <ExperienceSection />

      {/* 4. Avenra Gangaara Venue Spotlight */}
      <VenueSection />

      {/* 5. Organizing Team Teaser */}
      <TeamTeaserSection />

      {/* 6. Common Questions Preview */}
      <FAQPreviewSection />

      {/* 7. Final Call-to-Action Band */}
      <FinalCTASection />

      {/* 8. Phase Status & Design Tokens Footer Band */}
      <aside aria-label="Development Architecture Status" className="bg-canvas border-t border-violet/10 py-10">
        <Container size="xl">
          <div className="art-card p-6 sm:p-8 art-paper-shadow space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-violet/10 pb-4">
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-ink flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-violet-deep" aria-hidden="true" />
                  <span>Phase 3 Completed: Full Homepage Storytelling</span>
                </h3>
                <p className="text-xs text-ink-muted">All landing sections active, truth-grounded, and mobile optimized.</p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-leaf/15 text-leaf-deep flex items-center gap-1.5 self-start sm:self-auto">
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Phase 3 Complete</span>
              </span>
            </div>

            {/* Quick Route Links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-xs">
              {[
                { title: 'About', href: '/about' },
                { title: 'Team', href: '/team' },
                { title: 'Schedule', href: '/schedule' },
                { title: 'Register', href: '/register' },
                { title: 'Contact', href: '/contact' },
                { title: 'FAQ', href: '/faq' },
                { title: 'Privacy', href: '/privacy' },
                { title: 'Terms', href: '/terms' },
              ].map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="p-2 rounded-lg bg-canvas hover:bg-paper-warm border border-violet/10 text-center font-medium text-ink hover:text-violet-deep transition-colors"
                >
                  {route.title}
                </Link>
              ))}
            </div>

            {/* Design Tokens Swatches */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-violet/10 text-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-ink-subtle mr-2">Theme Palette:</span>
              {colorSwatches.map((swatch) => (
                <div
                  key={swatch.name}
                  className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-paper-light border border-ink/10 text-[11px]"
                >
                  <span className={`w-3 h-3 rounded-full ${swatch.bg} ${swatch.border}`} aria-hidden="true" />
                  <span className="font-medium text-ink">{swatch.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </aside>
    </div>
  );
}
