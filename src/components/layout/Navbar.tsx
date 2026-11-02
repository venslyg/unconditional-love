'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Calendar, MapPin, Ticket } from 'lucide-react';
import { EVENT_DATA } from '@/data/event';
import { Container } from '@/components/ui/Container';
import { CTAButton } from '@/components/ui/CTAButton';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  // Lock body scroll and close on ESC key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className={`sticky top-0 z-40 w-full border-b border-violet/10 transition-colors ${
      isOpen ? 'bg-canvas' : 'bg-canvas/90 backdrop-blur-md'
    }`}>
      <Container size="lg">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-deep rounded-md p-1"
            aria-label={`${EVENT_DATA.name} — ${EVENT_DATA.theme}`}
          >
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-ink group-hover:text-violet-deep transition-colors leading-none">
              {EVENT_DATA.name}
            </span>
            <span className="font-display italic text-xs sm:text-sm text-violet-deep tracking-wide leading-tight">
              {EVENT_DATA.theme}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-violet/15 text-violet-deep font-semibold shadow-xs'
                      : 'text-ink-muted hover:text-ink hover:bg-canvas'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Register CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <CTAButton
              href="/register"
              variant="coral"
              size="sm"
              className="shadow-xs"
            >
              <Ticket className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Register Preview</span>
            </CTAButton>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <CTAButton
              href="/register"
              variant="coral"
              size="sm"
              className="text-[11px] px-2.5 py-1 sm:hidden"
            >
              Register
            </CTAButton>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-ink hover:text-violet-deep hover:bg-violet/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-deep transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </Container>

      {/* Mobile Drawer (100% Opaque & Isolated to prevent ghost text) */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-16 sm:top-20 bottom-0 z-50 bg-canvas border-t border-violet/15 flex flex-col justify-between p-6 overflow-y-auto md:hidden shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="space-y-6 pt-2">
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-violet/15 text-violet-deep font-semibold shadow-xs'
                        : 'text-ink hover:bg-paper-warm hover:text-violet-deep'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-2">
              <CTAButton
                href="/register"
                onClick={closeMenu}
                variant="coral"
                size="lg"
                className="w-full text-center py-3 shadow-sm"
              >
                <Ticket className="w-4 h-4" aria-hidden="true" />
                <span>View Registration Preview</span>
              </CTAButton>
            </div>
          </div>

          {/* Quick Event Summary in Drawer */}
          <div className="mt-8 pt-6 border-t border-violet/15 space-y-3 text-xs text-ink-muted bg-paper-warm/40 p-4 rounded-xl">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-violet-deep flex-shrink-0" aria-hidden="true" />
              <span className="font-medium text-ink">{EVENT_DATA.dateDisplay}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-coral-deep flex-shrink-0" aria-hidden="true" />
              <span>{EVENT_DATA.venue.name}, {EVENT_DATA.venue.city}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Ticket className="w-4 h-4 text-gold-deep flex-shrink-0" aria-hidden="true" />
              <span className="font-semibold text-ink">{EVENT_DATA.fee.formatted} {EVENT_DATA.fee.unit}</span>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
