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
    <div className="flex flex-col items-center justify-center p-5 sm:p-6 rounded-3xl bg-paper-light/95 backdrop-blur-md border-2 border-violet/15 art-paper-shadow max-w-sm sm:max-w-md mx-auto">
      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-deep mb-3.5">
        <Sparkles className="w-3.5 h-3.5 text-gold-deep" aria-hidden="true" />
        <span>Countdown to Gathering Day</span>
      </div>
      <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5 w-full text-center">
        {['Days', 'Hours', 'Mins', 'Secs'].map((unit) => (
          <div key={unit} className="flex flex-col items-center p-2.5 sm:p-3 rounded-2xl bg-canvas border border-violet/15 shadow-xs">
            <span className="text-2xl sm:text-3xl font-display font-bold text-ink leading-none">--</span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle mt-1.5">{unit}</span>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-ink-muted text-center mt-3.5 font-medium">
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
      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet to-violet-deep text-white text-sm font-semibold shadow-md">
        <Sparkles className="w-4 h-4 text-gold" aria-hidden="true" />
        <span>The gathering is taking place today!</span>
      </div>
    );
  }

  return (
    <div
      role="timer"
      aria-live="polite"
      aria-label={`${timeLeft.days} days until Unconditional Love 3`}
      className="flex flex-col items-center p-5 sm:p-6 rounded-3xl bg-paper-light/95 backdrop-blur-md border-2 border-violet/18 art-paper-shadow w-full max-w-sm sm:max-w-md mx-auto relative overflow-hidden"
    >
      {/* Subtle painterly watercolor glow in background */}
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gold-tint/70 blur-2xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-violet-tint/70 blur-2xl pointer-events-none" aria-hidden="true" />

      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-deep mb-3.5 relative z-10">
        <Sparkles className="w-3.5 h-3.5 text-gold-deep" aria-hidden="true" />
        <span>Countdown to Gathering Day</span>
      </div>

      <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5 w-full text-center relative z-10">
        {/* Days - Violet Wash */}
        <div className="flex flex-col items-center p-2.5 sm:p-3 rounded-2xl bg-gradient-to-b from-violet-tint to-paper-light border border-violet/20 shadow-xs">
          <span className="text-2xl sm:text-3xl font-display font-bold text-violet-deep leading-none">
            {timeLeft.days}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle mt-1.5">
            Days
          </span>
        </div>

        {/* Hours - Coral Wash */}
        <div className="flex flex-col items-center p-2.5 sm:p-3 rounded-2xl bg-gradient-to-b from-coral-tint to-paper-light border border-coral/20 shadow-xs">
          <span className="text-2xl sm:text-3xl font-display font-bold text-coral-deep leading-none">
            {timeLeft.hours}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle mt-1.5">
            Hours
          </span>
        </div>

        {/* Mins - Gold Wash */}
        <div className="flex flex-col items-center p-2.5 sm:p-3 rounded-2xl bg-gradient-to-b from-gold-tint to-paper-light border border-gold/25 shadow-xs">
          <span className="text-2xl sm:text-3xl font-display font-bold text-ink leading-none">
            {timeLeft.minutes}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle mt-1.5">
            Mins
          </span>
        </div>

        {/* Secs - Water Blue Wash */}
        <div className="flex flex-col items-center p-2.5 sm:p-3 rounded-2xl bg-gradient-to-b from-water-tint to-paper-light border border-water/25 shadow-xs">
          <span className="text-2xl sm:text-3xl font-display font-bold text-water-deep leading-none">
            {timeLeft.seconds}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle mt-1.5">
            Secs
          </span>
        </div>
      </div>

      <p className="text-[11px] text-ink-muted text-center mt-3.5 relative z-10 font-medium">
        Wed, Jan 20, 2027 • 2:30 PM – 9:30 PM (Doors open 2:00 PM)
      </p>
    </div>
  );
}
