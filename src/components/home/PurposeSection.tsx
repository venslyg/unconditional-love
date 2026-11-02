import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Heart, Users, Sparkles, Quote } from 'lucide-react';
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
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-paper-light border border-violet/10 art-paper-shadow">
                <div className="w-8 h-8 rounded-lg bg-violet/10 text-violet-deep flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 fill-violet/20" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-ink">Grace Without Barriers</h4>
                  <p className="text-[11px] sm:text-xs text-ink-muted mt-0.5">Come as you are. No perfection required, just an open heart.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-paper-light border border-violet/10 art-paper-shadow">
                <div className="w-8 h-8 rounded-lg bg-coral/15 text-coral-deep flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-ink">True Community</h4>
                  <p className="text-[11px] sm:text-xs text-ink-muted mt-0.5">Connect with ~500 youth walking the same journey of faith.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Thematic Quote Box */}
          <div className="lg:col-span-5">
            <div className="art-card-warm p-6 sm:p-8 art-paper-shadow relative space-y-4">
              <Quote className="w-10 h-10 text-coral/40 absolute -top-3 -left-3" aria-hidden="true" />
              
              <div className="space-y-3 pt-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-paper-light text-violet-deep text-xs font-semibold uppercase tracking-wider border border-violet/10">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>The Gathering Vision</span>
                </div>
                <blockquote className="font-display italic text-base sm:text-lg text-ink leading-relaxed">
                  “When young people realize they are unconditionally loved by God, fear is replaced with peace, loneliness gives way to brotherhood, and ordinary lives become catalysts of hope.”
                </blockquote>
              </div>

              <div className="pt-4 border-t border-ink/10 flex items-center justify-between text-xs text-ink-subtle">
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

