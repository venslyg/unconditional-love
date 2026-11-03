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
    <div className="w-full bg-paper-light/95 sm:bg-paper-light/92 backdrop-blur-md rounded-xl p-2 sm:p-2.5 border border-violet/25 shadow-xl text-ink">
      <div className="flex items-center justify-between px-1 pb-1.5 border-b border-violet/15">
        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-violet-deep">
          <Sparkles className="w-3 h-3 text-gold-deep" aria-hidden="true" />
          <span>Countdown to Gathering</span>
        </div>
        <span className="text-[10px] text-ink-subtle font-medium hidden xs:inline-block">
          Wed, Jan 20, 2027
        </span>
      </div>

      <div className="grid grid-cols-4 gap-1.5 sm:gap-2 pt-2 text-center">
        {[
          { label: 'Days', bg: 'bg-violet/15', text: 'text-violet-deep', border: 'border-violet/25' },
          { label: 'Hours', bg: 'bg-coral/20', text: 'text-coral-deep', border: 'border-coral/25' },
          { label: 'Mins', bg: 'bg-gold/30', text: 'text-ink', border: 'border-gold/35' },
          { label: 'Secs', bg: 'bg-water/20', text: 'text-water-deep', border: 'border-water/25' },
        ].map((unit) => (
          <div
            key={unit.label}
            className={`flex flex-col items-center justify-center py-1 sm:py-1.5 px-1 rounded-lg ${unit.bg} border ${unit.border} shadow-xs`}
          >
            <span className={`text-xl sm:text-2xl lg:text-3xl font-display font-black leading-none ${unit.text}`}>
              --
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-ink mt-0.5">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
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
      <div className="w-full bg-paper-light/95 backdrop-blur-md rounded-xl p-3 border border-violet/25 shadow-xl text-center">
        <span className="text-xs sm:text-sm font-display font-bold text-violet-deep">
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
      className="w-full bg-paper-light/95 sm:bg-paper-light/92 backdrop-blur-md rounded-xl p-2 sm:p-2.5 border border-violet/25 shadow-2xl text-ink transition-all"
    >
      <div className="flex items-center justify-between px-1 pb-1.5 border-b border-violet/15">
        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-violet-deep">
          <Sparkles className="w-3 h-3 text-gold-deep" aria-hidden="true" />
          <span>Countdown to Gathering</span>
        </div>
        <span className="text-[10px] text-ink-subtle font-medium hidden xs:inline-block">
          Wed, Jan 20, 2027 • 2:30 PM
        </span>
      </div>

      <div className="grid grid-cols-4 gap-1.5 sm:gap-2 pt-2 text-center">
        {/* Days - Bold & Forced */}
        <div className="flex flex-col items-center justify-center py-1 sm:py-1.5 px-1 rounded-lg bg-violet/15 border border-violet/30 shadow-xs">
          <span className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-violet-deep leading-none">
            {timeLeft.days}
          </span>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-violet-deep mt-0.5">
            Days
          </span>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center justify-center py-1 sm:py-1.5 px-1 rounded-lg bg-coral/20 border border-coral/30 shadow-xs">
          <span className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-coral-deep leading-none">
            {timeLeft.hours}
          </span>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-coral-deep mt-0.5">
            Hours
          </span>
        </div>

        {/* Mins */}
        <div className="flex flex-col items-center justify-center py-1 sm:py-1.5 px-1 rounded-lg bg-gold/30 border border-gold/40 shadow-xs">
          <span className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-ink leading-none">
            {timeLeft.minutes}
          </span>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-ink mt-0.5">
            Mins
          </span>
        </div>

        {/* Secs */}
        <div className="flex flex-col items-center justify-center py-1 sm:py-1.5 px-1 rounded-lg bg-water/20 border border-water/30 shadow-xs">
          <span className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-water-deep leading-none">
            {timeLeft.seconds}
          </span>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-water-deep mt-0.5">
            Secs
          </span>
        </div>
      </div>
    </div>
  );
}
