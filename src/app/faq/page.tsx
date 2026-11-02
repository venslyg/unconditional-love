import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EVENT_DATA } from '@/data/event';
import { HelpCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: `FAQ | ${EVENT_DATA.name}`,
  description: `Frequently asked questions regarding Unconditional Love 3.`,
};

export default function FAQPage() {
  const faqs = [
    {
      question: 'When and where will Unconditional Love 3 take place?',
      answer: `The event will take place on ${EVENT_DATA.dateDisplay} at ${EVENT_DATA.venue.name}, ${EVENT_DATA.venue.city}, Sri Lanka.`,
    },
    {
      question: 'How much is the entrance fee?',
      answer: `The entrance fee is ${EVENT_DATA.fee.formatted} ${EVENT_DATA.fee.unit}. This grants single individual admission to the gathering.`,
    },
    {
      question: 'Who can attend this gathering?',
      answer: `Unconditional Love 3 is a Christian youth gathering designed for young people, students, and young adults to come together, experience God's love, and build supportive community.`,
    },
    {
      question: 'What time do doors open and what is the schedule?',
      answer: 'Exact starting, ending, and check-in times are being finalized by the organizing committee and will be announced prior to registration opening.',
    },
    {
      question: 'How will I receive my ticket?',
      answer: 'Once live registration opens and your payment is verified, you will receive a verified digital confirmation and a unique QR admission ticket delivered directly to your registered email address.',
    },
  ];

  return (
    <div className="py-16 sm:py-24">
      <Container size="md" className="space-y-10">
        <SectionHeading
          badge="Questions & Answers"
          title="Frequently Asked Questions"
          subtitle="Key details regarding attendance, venue, and ticketing for Unconditional Love 3."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="art-card p-5 sm:p-6 art-paper-shadow space-y-2 text-left"
            >
              <h3 className="font-display text-base sm:text-lg font-bold text-ink flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-violet-deep flex-shrink-0 mt-1" aria-hidden="true" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed pl-6.5">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <p className="text-xs text-ink-subtle mb-3">
            More questions? Interactive accordion and search will be expanded in <strong>Phase 6</strong>.
          </p>
          <Link href="/" className="text-xs font-semibold text-violet-deep hover:underline">
            &larr; Return to Homepage
          </Link>
        </div>
      </Container>
    </div>
  );
}

