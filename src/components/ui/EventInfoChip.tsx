import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EventInfoChipProps {
  icon: LucideIcon;
  label: string;
  value: string;
  subvalue?: string;
  className?: string;
}

export function EventInfoChip({
  icon: Icon,
  label,
  value,
  subvalue,
  className = '',
}: EventInfoChipProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 px-3.5 py-2 rounded-xl bg-paper-light border border-violet/10 art-paper-shadow text-left ${className}`}
    >
      <div className="w-8 h-8 rounded-lg bg-violet/10 text-violet-deep flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4" aria-hidden="true" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">
          {label}
        </span>
        <span className="text-xs sm:text-sm font-semibold text-ink leading-tight">
          {value}
        </span>
        {subvalue && (
          <span className="text-[11px] text-ink-muted">
            {subvalue}
          </span>
        )}
      </div>
    </div>
  );
}

