'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface CountdownProps {
  targetDateIso?: string; // Default: '2027-01-20T14:30:00+05:30' (2:30 PM Colombo Time)
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export function CountdownFallback() {
  return (
    <div className="w-full rounded-2xl bg-paper-light border border-violet/15 art-paper-shadow p-4 sm:p-5 text-ink">
      <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-deep mb-3.5">
        <Sparkles className="w-3.5 h-3.5 text-gold-deep" aria-hidden="true" />
        <span>Countdown to Gathering Day</span>
      </div>

      <div className="grid grid-cols-4 gap-2.5 sm:gap-3 w-full text-center">
        {[
          { label: 'Days', bg: 'bg-gradient-to-b from-violet-tint to-paper-light', text: 'text-violet-deep', border: 'border-violet/20' },
          { label: 'Hours', bg: 'bg-gradient-to-b from-coral-tint to-paper-light', text: 'text-coral-deep', border: 'border-coral/20' },
          { label: 'Mins', bg: 'bg-gradient-to-b from-gold-tint to-paper-light', text: 'text-ink', border: 'border-gold/25' },
          { label: 'Secs', bg: 'bg-gradient-to-b from-water-tint to-paper-light', text: 'text-water-deep', border: 'border-water/25' },
        ].map((unit) => (
          <div
            key={unit.label}
            className={`flex flex-col items-center justify-center py-2.5 sm:py-3 px-1 rounded-xl ${unit.bg} border ${unit.border} shadow-xs`}
          >
            <span className={`text-2xl sm:text-3xl font-display font-black leading-none ${unit.text}`}>
              --
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-ink-muted mt-1.5">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-ink-muted text-center mt-3 font-medium">
        Wed, Jan 20, 2027 • 2:30 PM – 9:30 PM (Doors open 2:00 PM)
      </p>
    </div>
  );
}

export function Countdown({
  targetDateIso = '2027-01-20T14:30:00+05:30',
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining | null>(null);

  useEffect(() => {
    const updateCountdown = () => {
      const target = new Date(targetDateIso).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    // Asynchronously compute initial time and set interval
    const timeoutId = setTimeout(updateCountdown, 0);
    const intervalId = setInterval(updateCountdown, 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [targetDateIso]);

  // Server prerender & initial tick fallback
  if (!timeLeft) {
    return <CountdownFallback />;
  }

  if (timeLeft.isPast) {
    return (
      <div className="w-full rounded-2xl bg-paper-light border border-violet/20 p-4 art-paper-shadow text-center">
        <span className="text-sm font-display font-bold text-violet-deep">
          🎉 The gathering is taking place today!
        </span>
      </div>
    );
  }

  return (
    <div
      role="timer"
      aria-live="polite"
      aria-label={`${timeLeft.days} days until Unconditional Love 3`}
      className="w-full rounded-2xl bg-paper-light border border-violet/15 art-paper-shadow p-4 sm:p-5 text-ink transition-all"
    >
      <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-deep mb-3.5">
        <Sparkles className="w-3.5 h-3.5 text-gold-deep" aria-hidden="true" />
        <span>Countdown to Gathering Day</span>
      </div>

      <div className="grid grid-cols-4 gap-2.5 sm:gap-3 w-full text-center">
        {/* Days - Bold & Forced */}
        <div className="flex flex-col items-center justify-center py-2.5 sm:py-3 px-1 rounded-xl bg-gradient-to-b from-violet-tint to-paper-light border border-violet/20 shadow-xs">
          <span className="text-2xl sm:text-3xl font-display font-black text-violet-deep leading-none">
            {timeLeft.days}
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-violet-deep mt-1.5">
            Days
          </span>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center justify-center py-2.5 sm:py-3 px-1 rounded-xl bg-gradient-to-b from-coral-tint to-paper-light border border-coral/20 shadow-xs">
          <span className="text-2xl sm:text-3xl font-display font-black text-coral-deep leading-none">
            {timeLeft.hours}
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-coral-deep mt-1.5">
            Hours
          </span>
        </div>

        {/* Mins */}
        <div className="flex flex-col items-center justify-center py-2.5 sm:py-3 px-1 rounded-xl bg-gradient-to-b from-gold-tint to-paper-light border border-gold/25 shadow-xs">
          <span className="text-2xl sm:text-3xl font-display font-black text-ink leading-none">
            {timeLeft.minutes}
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-ink mt-1.5">
            Mins
          </span>
        </div>

        {/* Secs */}
        <div className="flex flex-col items-center justify-center py-2.5 sm:py-3 px-1 rounded-xl bg-gradient-to-b from-water-tint to-paper-light border border-water/25 shadow-xs">
          <span className="text-2xl sm:text-3xl font-display font-black text-water-deep leading-none">
            {timeLeft.seconds}
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-water-deep mt-1.5">
            Secs
          </span>
        </div>
      </div>

      <p className="text-[11px] text-ink-muted text-center mt-3 font-medium">
        Wed, Jan 20, 2027 • 2:30 PM – 9:30 PM (Doors open 2:00 PM)
      </p>
    </div>
  );
}
