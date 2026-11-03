import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTAButton } from '@/components/ui/CTAButton';
import { HelpCircle, ChevronRight } from 'lucide-react';
import { EVENT_DATA } from '@/data/event';

const PREVIEW_FAQS = [
  {
    q: 'When and where will Unconditional Love 3 take place?',
    a: `The gathering will take place on ${EVENT_DATA.dateDisplay} at ${EVENT_DATA.venue.name}, ${EVENT_DATA.venue.city}, Sri Lanka.`,
  },
  {
    q: 'What is the entrance fee and what does it cover?',
    a: `The entrance fee is ${EVENT_DATA.fee.formatted} ${EVENT_DATA.fee.unit}. This covers participant entry, session attendance, and venue facilities for the day.`,
  },
  {
    q: 'Who is this gathering designed for?',
    a: 'Unconditional Love 3 is designed for young people, students, young professionals, and youth fellowships who wish to grow deeper in faith and friendship.',
  },
  {
    q: 'How will digital ticket admission work?',
    a: 'Once live registration opens and your payment is verified, you will receive a verified email confirmation with a unique QR code ticket for entry.',
  },
];

export function FAQPreviewSection() {
  return (
    <section aria-labelledby="faq-preview-heading" className="py-16 sm:py-24 bg-canvas border-t border-violet/10">
      <Container size="lg">
        <SectionHeading
          badge="Clear Answers"
          title="Common Questions"
          subtitle="Everything confirmed regarding attendance, venue logistics, and entrance fee."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-12">
          {PREVIEW_FAQS.map((faq, index) => (
            <div
              key={index}
              className="art-card p-5 sm:p-6 art-paper-shadow space-y-2.5 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-violet-deep flex-shrink-0 mt-1" aria-hidden="true" />
                  <h3 className="font-display font-bold text-sm sm:text-base text-ink">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed pl-6.5">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-10">
          <CTAButton href="/faq" variant="outline" size="md">
            <span className="sm:hidden font-medium">View All FAQs</span>
            <span className="hidden sm:inline font-medium">View All Frequently Asked Questions</span>
            <ChevronRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          </CTAButton>
        </div>
      </Container>
    </section>
  );
}

