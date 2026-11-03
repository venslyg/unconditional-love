import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTAButton } from '@/components/ui/CTAButton';
import { ArtAccent } from '@/components/ui/ArtAccent';
import { EVENT_DATA } from '@/data/event';
import { Heart, Users, Sparkles, BookOpen, Compass, Calendar, MapPin, Ticket } from 'lucide-react';

export const metadata = {
  title: `About the Gathering | ${EVENT_DATA.name}`,
  description: `Discover the story, spiritual mission, and community behind Unconditional Love 3 — Bring One Another.`,
};

export default function AboutPage() {
  return (
    <div className="w-full py-12 sm:py-20 space-y-16 sm:space-y-24">
      
      {/* 1. Page Header */}
      <section aria-labelledby="about-hero" className="text-center space-y-4">
        <Container size="md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet/10 text-violet-deep text-xs font-semibold tracking-wide uppercase border border-violet/15">
            <Sparkles className="w-3.5 h-3.5 text-gold-deep" aria-hidden="true" />
            <span>The Gathering Story</span>
          </div>

          <h1 id="about-hero" className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-ink tracking-tight">
            About {EVENT_DATA.name}
          </h1>

          <p className="text-xl sm:text-2xl font-display italic text-violet-deep font-semibold">
            “{EVENT_DATA.theme}”
          </p>

          <ArtAccent variant="brush-line" className="text-violet mx-auto my-2 max-w-xs" />

          <p className="text-sm sm:text-base text-ink-muted max-w-2xl mx-auto leading-relaxed">
            {EVENT_DATA.subtitle}. A gathering where young people unite in worship, community, and experiencing God’s boundless grace.
          </p>
        </Container>
      </section>

      {/* 2. The Vision Narrative */}
      <section aria-labelledby="vision-heading">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-ink-muted leading-relaxed">
              <span className="text-xs uppercase font-bold tracking-wider text-violet-deep block">Our Origin & Calling</span>
              <h2 id="vision-heading" className="text-2xl sm:text-3xl font-display font-bold text-ink tracking-tight">
                From a Small Seed to an Island Gathering
              </h2>

              <p>
                <strong className="text-ink font-semibold">Unconditional Love</strong> began with a simple, burning question: <em>What happens when young people are given a space where they don’t have to perform, pretend, or prove their worth?</em>
              </p>

              <p>
                Following the deeply moving gatherings of Unconditional Love 1 and 2, hundreds of youth experienced personal restoration, rediscovered their faith, and found genuine friends who stood by them through tough seasons.
              </p>

              <p>
                In 2027, we return for <strong className="text-ink font-semibold">{EVENT_DATA.name}</strong> at the scenic riverside of Avenra Gangaara in Wennappuwa. We are creating an environment where roughly 500 young people can disconnect from digital noise and reconnect with what matters most.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="art-card-warm p-6 sm:p-8 art-paper-shadow space-y-4">
                <div className="w-10 h-10 rounded-xl bg-violet/10 text-violet-deep flex items-center justify-center">
                  <Heart className="w-5 h-5 fill-violet/20" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink">
                  Our Uncompromising Foundation
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  We believe that God’s love is not earned by perfection, but received through grace. No matter your background, your church tradition, or where you currently stand in your faith journey—you belong here.
                </p>
                <div className="pt-3 border-t border-ink/10 text-xs font-semibold text-violet-deep">
                  Open to all youth • Zero pretense
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 3. The 2027 Theme: "Bring One Another" */}
      <section aria-labelledby="theme-heading" className="bg-paper-warm/50 border-y border-violet/10 py-16">
        <Container size="md" className="space-y-6 text-center">
          <SectionHeading
            badge="The Thematic Heart"
            title="Why “Bring One Another”?"
            subtitle="“A new command I give you: Love one another. As I have loved you, so you must love one another.” — John 13:34"
          />

          <div className="space-y-4 text-sm sm:text-base text-ink-muted leading-relaxed max-w-2xl mx-auto pt-2">
            <p>
              In our fast-paced, hyper-connected world, more youth feel isolated than ever before. We are taught to be independent, but scripture repeatedly calls us to <strong className="text-ink">bear one another’s burdens</strong> and walk together.
            </p>
            <p>
              “Bring One Another” is not just a catchphrase; it is an active calling. It means inviting the friend who feels lonely, bringing the sibling who has stepped away from faith, and creating room at the table for someone who feels overlooked.
            </p>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2.5 sm:gap-3 w-full">
            <CTAButton
              href="/register"
              variant="coral"
              size="md"
              className="flex-1 sm:flex-initial justify-center"
            >
              <Ticket className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span className="sm:hidden font-semibold">Register Preview</span>
              <span className="hidden sm:inline font-semibold">Preview Registration Details</span>
            </CTAButton>
            <CTAButton
              href="/schedule"
              variant="outline"
              size="md"
              className="p-2.5 sm:px-5 flex-shrink-0"
              aria-label="Day Schedule"
              title="Day Schedule"
            >
              <Compass className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline font-medium">Explore Day Schedule</span>
            </CTAButton>
          </div>
        </Container>
      </section>

      {/* 4. What Sets This Gathering Apart */}
      <section aria-labelledby="values-heading">
        <Container size="xl">
          <SectionHeading
            badge="The Experience"
            title="What You Will Experience"
            subtitle="Four distinctive elements that define Unconditional Love 3."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="art-card p-6 sm:p-8 art-paper-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet/10 text-violet-deep flex items-center justify-center">
                <Users className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-ink">Youth-First Atmosphere</h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Designed specifically for young minds and hearts. Real discussions, relatable speakers, and a space where your voice is heard.
              </p>
            </div>

            <div className="art-card p-6 sm:p-8 art-paper-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-coral/15 text-coral-deep flex items-center justify-center">
                <BookOpen className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-ink">Christ-Centered Truth</h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Deeply rooted in scripture, pointing every young person to Jesus as their true anchor, provider, and savior.
              </p>
            </div>

            <div className="art-card p-6 sm:p-8 art-paper-shadow space-y-3">
              <div className="w-10 h-10 rounded-xl bg-water/15 text-water-deep flex items-center justify-center">
                <Sparkles className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-bold text-ink">Riverside Tranquility</h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Held at Avenra Gangaara in Wennappuwa, surrounded by natural waters, cooling winds, and serene outdoor open spaces.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Gathering Essentials Reminder Card */}
      <section aria-labelledby="essentials-reminder">
        <Container size="md">
          <div className="art-card p-6 sm:p-8 art-paper-shadow text-center space-y-4">
            <h3 id="essentials-reminder" className="font-display text-xl font-bold text-ink">
              Ready to Join Us?
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted max-w-lg mx-auto">
              Mark Wednesday, January 20, 2027 in your calendar. Online registration will be Rs. 1,000 per person and opens soon.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-ink-muted">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas border border-violet/10">
                <Calendar className="w-3.5 h-3.5 text-violet-deep" aria-hidden="true" />
                <span>Jan 20, 2027</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas border border-violet/10">
                <MapPin className="w-3.5 h-3.5 text-coral-deep" aria-hidden="true" />
                <span>Avenra Gangaara</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas border border-violet/10">
                <Ticket className="w-3.5 h-3.5 text-gold-deep" aria-hidden="true" />
                <span>{EVENT_DATA.fee.formatted}</span>
              </div>
            </div>

            <div className="pt-4">
              <CTAButton href="/register" variant="coral" size="md">
                <span>View Registration Preview &rarr;</span>
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
