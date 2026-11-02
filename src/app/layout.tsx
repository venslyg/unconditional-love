import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { EVENT_DATA } from '@/data/event';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: `${EVENT_DATA.name} — ${EVENT_DATA.theme} | Youth Gathering 2027`,
  description: `${EVENT_DATA.subtitle}. ${EVENT_DATA.dateDisplay} at ${EVENT_DATA.venue.name}, ${EVENT_DATA.venue.city}, ${EVENT_DATA.venue.country}.`,
  keywords: [
    'Unconditional Love 3',
    'UL3',
    'Bring One Another',
    'Christian Youth Gathering',
    'Wennappuwa',
    'Avenra Gangaara',
    'Sri Lanka Youth Conference',
  ],
  authors: [{ name: 'Unconditional Love Organizing Team' }],
  openGraph: {
    title: `${EVENT_DATA.name} — ${EVENT_DATA.theme}`,
    description: `${EVENT_DATA.subtitle}. ${EVENT_DATA.dateDisplay} at ${EVENT_DATA.venue.name}.`,
    type: 'website',
    locale: 'en_LK',
    images: [
      {
        url: '/images/ul3-invitation-reference.jpg',
        width: 1200,
        height: 630,
        alt: `${EVENT_DATA.name} — ${EVENT_DATA.theme}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} h-full antialiased selection:bg-violet-deep selection:text-paper-light`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink font-body">
        {/* Accessible skip link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink focus:text-canvas focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-deep"
        >
          Skip to main content
        </a>
        <div id="main-content" className="flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
