'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface CountdownProps {
  targetDateIso?: string; // Default: '2027-01-20T00:00:00+05:30'
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
    <div className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-paper-light/80 backdrop-blur-md border border-violet/15 art-paper-shadow max-w-sm sm:max-w-md mx-auto">
      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-deep mb-3">
        <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
        <span>Countdown to Gathering Day</span>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full text-center">
        {['Days', 'Hours', 'Mins', 'Secs'].map((unit) => (
          <div key={unit} className="flex flex-col items-center p-2 sm:p-2.5 rounded-xl bg-canvas border border-violet/10">
            <span className="text-2xl sm:text-3xl font-display font-bold text-ink leading-none">--</span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle mt-1">{unit}</span>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-ink-muted text-center mt-3">
        Wednesday, January 20, 2027 • Colombo Time (UTC+5:30)
      </p>
    </div>
  );
}

export function Countdown({
  targetDateIso = '2027-01-20T00:00:00+05:30',
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
      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet text-white text-sm font-semibold shadow-sm">
        <Sparkles className="w-4 h-4" aria-hidden="true" />
        <span>The gathering is taking place today!</span>
      </div>
    );
  }

  return (
    <div
      role="timer"
      aria-live="polite"
      aria-label={`${timeLeft.days} days until Unconditional Love 3`}
      className="flex flex-col items-center p-4 sm:p-5 rounded-2xl bg-paper-light/90 backdrop-blur-md border border-violet/15 art-paper-shadow w-full max-w-sm sm:max-w-md mx-auto"
    >
      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-deep mb-3">
        <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
        <span>Countdown to Gathering Day</span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full text-center">
        <div className="flex flex-col items-center p-2 sm:p-2.5 rounded-xl bg-canvas border border-violet/10">
          <span className="text-2xl sm:text-3xl font-display font-bold text-ink leading-none">
            {timeLeft.days}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle mt-1">
            Days
          </span>
        </div>

        <div className="flex flex-col items-center p-2 sm:p-2.5 rounded-xl bg-canvas border border-violet/10">
          <span className="text-2xl sm:text-3xl font-display font-bold text-ink leading-none">
            {timeLeft.hours}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle mt-1">
            Hours
          </span>
        </div>

        <div className="flex flex-col items-center p-2 sm:p-2.5 rounded-xl bg-canvas border border-violet/10">
          <span className="text-2xl sm:text-3xl font-display font-bold text-ink leading-none">
            {timeLeft.minutes}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle mt-1">
            Mins
          </span>
        </div>

        <div className="flex flex-col items-center p-2 sm:p-2.5 rounded-xl bg-canvas border border-violet/10">
          <span className="text-2xl sm:text-3xl font-display font-bold text-coral-deep leading-none">
            {timeLeft.seconds}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle mt-1">
            Secs
          </span>
        </div>
      </div>

      <p className="text-[11px] text-ink-muted text-center mt-3">
        Wednesday, January 20, 2027 • Colombo Time (UTC+5:30)
      </p>
    </div>
  );
}

