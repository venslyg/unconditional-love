import React from 'react';
import { ArtAccent } from './ArtAccent';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col gap-2.5 ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-violet/10 text-violet-deep border border-violet/15">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-ink tracking-tight">
        {title}
      </h2>
      <ArtAccent variant="brush-line" className="text-violet my-1" />
      {subtitle && (
        <p className="text-sm sm:text-base text-ink-muted max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

