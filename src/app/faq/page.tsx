import React from 'react';
import { Container } from '@/components/ui/Container';
import { ArtAccent } from '@/components/ui/ArtAccent';
import { EVENT_DATA } from '@/data/event';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { HelpCircle, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: `Frequently Asked Questions | ${EVENT_DATA.name}`,
  description: `Official answers regarding attendance, entrance fee, venue location, and ticketing for Unconditional Love 3.`,
};

export default function FAQPage() {
  return (
    <div className="w-full py-12 sm:py-20 space-y-12 sm:space-y-16">
      
      {/* 1. Page Header */}
      <section aria-labelledby="faq-hero" className="text-center space-y-4">
        <Container size="md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet/10 text-violet-deep text-xs font-semibold tracking-wide uppercase border border-violet/15">
            <HelpCircle className="w-3.5 h-3.5 text-violet-deep" aria-hidden="true" />
            <span>Questions & Answers</span>
          </div>

          <h1 id="faq-hero" className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-ink tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-xl sm:text-2xl font-display italic text-violet-deep font-semibold">
            Everything You Need to Know
          </p>

          <ArtAccent variant="brush-line" className="text-violet mx-auto my-2 max-w-xs" />

          <p className="text-sm sm:text-base text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Find official details regarding venue logistics, the Rs. 1,000 entrance fee, digital QR ticket admission, and program expectations for January 20, 2027.
          </p>
        </Container>
      </section>

      {/* 2. Interactive Search & Accordion Section */}
      <section aria-label="FAQ Accordion Section">
        <Container size="lg">
          <FAQAccordion />
        </Container>
      </section>

      {/* 3. Still Have Questions Callout */}
      <section aria-labelledby="contact-callout">
        <Container size="md">
          <div className="art-card-warm p-6 sm:p-8 art-paper-shadow text-center space-y-4">
            <h3 id="contact-callout" className="font-display font-bold text-lg text-ink">
              Still Have a Question?
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
              If your question isn’t answered above, check our venue location guide or reach out to the volunteer committee.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet text-white text-xs font-semibold hover:bg-violet-deep transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Venue & Contact Page</span>
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-paper-light border border-violet/20 text-ink text-xs font-semibold hover:bg-canvas transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-coral" aria-hidden="true" />
                <span>Registration Preview</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
