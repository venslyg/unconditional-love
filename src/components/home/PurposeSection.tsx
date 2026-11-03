import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArtAccent } from '@/components/ui/ArtAccent';
import { Heart, Users, Sparkles, Quote, BookOpen } from 'lucide-react';
import { EVENT_DATA } from '@/data/event';

export function PurposeSection() {
  return (
    <section aria-labelledby="purpose-heading" className="py-16 sm:py-24 bg-canvas relative overflow-hidden">
      <Container size="lg">
        <SectionHeading
          badge="The Heart of the Gathering"
          title="Why We Gather"
          subtitle="“A new command I give you: Love one another. As I have loved you, so you must love one another.”"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 items-center">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-ink-muted leading-relaxed">
            <p className="font-display text-xl sm:text-2xl text-ink font-semibold leading-snug">
              Every young person is carrying a story—hopes, silent battles, questions of identity, and the deep need to belong.
            </p>

            <p>
              <strong className="text-ink font-semibold">{EVENT_DATA.name}</strong> was created with a singular focus: to carve out an unhurried, pressure-free sanctuary where young people can step away from daily anxiety and encounter the boundless, healing love of Jesus Christ.
            </p>

            <p>
              Under our 2027 theme <strong className="text-violet-deep font-semibold">“{EVENT_DATA.theme}”</strong>, we are called to look beyond ourselves. Who in your school, university, workplace, or church needs encouragement today? You don’t need to have all the answers—you simply need to invite them and bring them along.
            </p>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gradient-to-br from-violet-tint/80 to-paper-light border border-violet/20 art-paper-shadow hover:-translate-y-0.5 transition-transform duration-200">
                <div className="w-8 h-8 rounded-lg bg-violet/15 text-violet-deep flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 fill-violet/20" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-ink">Grace Without Barriers</h4>
                  <p className="text-[11px] sm:text-xs text-ink-muted mt-0.5">Come as you are. No perfection required, just an open heart.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gradient-to-br from-coral-tint/80 to-paper-light border border-coral/25 art-paper-shadow hover:-translate-y-0.5 transition-transform duration-200">
                <div className="w-8 h-8 rounded-lg bg-coral/20 text-coral-deep flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-ink">True Community</h4>
                  <p className="text-[11px] sm:text-xs text-ink-muted mt-0.5">Connect with ~500 youth walking the same journey of faith.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Thematic Illuminated Manuscript Quote Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-paper-light via-paper-warm to-gold-tint/40 border-2 border-gold/40 p-6 sm:p-8 art-paper-shadow overflow-hidden shadow-lg">
              
              {/* Botanical & Corner artistic flourishes */}
              <ArtAccent
                variant="corner-flourish"
                color="#C9A447"
                className="absolute -top-1 -left-1 pointer-events-none opacity-40 w-10 h-10"
              />
              <ArtAccent
                variant="corner-flourish"
                color="#7961A6"
                className="absolute -bottom-1 -right-1 pointer-events-none opacity-40 w-10 h-10 rotate-180"
              />

              <Quote className="w-10 h-10 text-coral/30 absolute top-4 right-4" aria-hidden="true" />
              
              <div className="space-y-4 pt-1 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper-light/90 text-violet-deep text-xs font-semibold uppercase tracking-wider border border-violet/20 art-paper-shadow">
                  <ArtAccent variant="botanical-leaf" color="#7961A6" className="w-3.5 h-3.5" />
                  <span>The Gathering Vision</span>
                </div>
                
                <blockquote className="font-display italic text-base sm:text-lg text-ink leading-relaxed pl-1 border-l-2 border-gold-deep/50">
                  “When young people realize they are unconditionally loved by God, fear is replaced with peace, loneliness gives way to brotherhood, and ordinary lives become catalysts of hope.”
                </blockquote>

                <div className="flex items-center gap-2 text-xs text-ink-muted pt-2">
                  <BookOpen className="w-3.5 h-3.5 text-gold-deep" aria-hidden="true" />
                  <span className="font-display italic">John 13:34 • “Love One Another”</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-gold/20 flex items-center justify-between text-xs text-ink-subtle relative z-10">
                <span className="font-semibold text-ink">Avenra Gangaara</span>
                <span>January 20, 2027</span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

