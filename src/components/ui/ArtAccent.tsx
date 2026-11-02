import React from 'react';

interface ArtAccentProps {
  variant?: 'brush-line' | 'water-wave' | 'lily-dot' | 'corner-flourish';
  className?: string;
  color?: string;
}

export function ArtAccent({
  variant = 'brush-line',
  className = '',
  color = 'currentColor',
}: ArtAccentProps) {
  if (variant === 'brush-line') {
    return (
      <svg
        className={`w-full max-w-xs h-3 overflow-visible ${className}`}
        viewBox="0 0 200 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M2 4.5C35 2 68 6 102 3.5C136 1.5 170 5.5 198 3.5"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-70"
        />
        <path
          d="M15 5.5C45 3.5 75 6 105 4.5C135 3 165 6 185 4"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          className="opacity-40"
        />
      </svg>
    );
  }

  if (variant === 'water-wave') {
    return (
      <svg
        className={`w-full h-6 overflow-hidden ${className}`}
        viewBox="0 0 1200 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 12C150 20 300 4 450 12C600 20 750 4 900 12C1050 20 1200 4 1200 12V24H0V12Z"
          fill={color}
        />
      </svg>
    );
  }

  if (variant === 'lily-dot') {
    return (
      <span
        className={`inline-block w-2 h-2 rounded-full bg-violet/40 mx-2 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return null;
}

