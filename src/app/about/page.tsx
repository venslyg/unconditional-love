import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EVENT_DATA } from '@/data/event';
import Link from 'next/link';

export const metadata = {
  title: `About the Gathering | ${EVENT_DATA.name}`,
  description: `Discover the heart and mission behind Unconditional Love 3 — Bring One Another.`,
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container size="md" className="space-y-10">
        <SectionHeading
          badge="Our Mission"
          title="About Unconditional Love 3"
          subtitle="“Bring One Another” — A gathering designed for youth to experience God's transforming love."
        />

        <div className="art-card p-6 sm:p-10 art-paper-shadow space-y-6">
          <div className="p-3 rounded-lg bg-violet/10 text-violet-deep text-xs sm:text-sm font-medium">
            🎨 <strong>Phase Notice:</strong> Detailed mission narrative, scripture grounding, and community stories will be refined in <strong>Phase 4</strong>.
          </div>

          <div className="space-y-4 text-ink-muted text-sm sm:text-base leading-relaxed">
            <p>
              <strong className="text-ink font-semibold">{EVENT_DATA.name}</strong> was born from a vision to create a safe, vibrant, and welcoming space where young people from all walks of life can encounter God’s unconditional love, build meaningful friendships, and be reminded of their unique worth.
            </p>
            <p>
              Under the 2027 theme <strong className="text-ink font-semibold">“{EVENT_DATA.theme}”</strong>, we are inspired to not walk this journey alone, but to reach out, encourage our friends, and bring one another into a community rooted in faith, hope, and compassion.
            </p>
          </div>

          <div className="pt-4 border-t border-violet/10 flex justify-between items-center text-xs text-ink-subtle">
            <span>January 20, 2027 • Avenra Gangaara</span>
            <Link href="/" className="text-violet-deep font-semibold hover:underline">
              Back to Home &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

