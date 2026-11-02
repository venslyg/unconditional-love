import { Hero } from '@/components/home/Hero';
import { PurposeSection } from '@/components/home/PurposeSection';
import { ExperienceSection } from '@/components/home/ExperienceSection';
import { VenueSection } from '@/components/home/VenueSection';
import { TeamTeaserSection } from '@/components/home/TeamTeaserSection';
import { FAQPreviewSection } from '@/components/home/FAQPreviewSection';
import { FinalCTASection } from '@/components/home/FinalCTASection';

export default function Home() {
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
    </div>
  );
}
