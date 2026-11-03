import React from 'react';

interface ArtAccentProps {
  variant?: 'brush-line' | 'water-wave' | 'lily-dot' | 'corner-flourish' | 'botanical-leaf';
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
        className={`w-full max-w-xs h-3.5 overflow-visible ${className}`}
        viewBox="0 0 220 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M3 5.5C38 2.5 75 7.5 112 4.5C148 2 185 6.5 217 4.5"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-75"
        />
        <path
          d="M16 6.8C52 4 88 7 124 5.2C158 3.5 190 7 210 5"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          className="opacity-40"
        />
      </svg>
    );
  }

  if (variant === 'water-wave') {
    return (
      <svg
        className={`w-full h-7 overflow-hidden ${className}`}
        viewBox="0 0 1200 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 14C160 23 320 5 480 14C640 23 800 5 960 14C1120 23 1200 10 1200 14V28H0V14Z"
          fill={color}
        />
        <path
          d="M0 17C180 8 360 25 540 16C720 7 900 24 1080 15C1160 11 1200 16 1200 17"
          stroke={color}
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
      </svg>
    );
  }

  if (variant === 'lily-dot') {
    return (
      <span
        className={`inline-block w-2.5 h-2.5 rounded-full bg-violet/40 mx-2 shadow-xs ${className}`}
        aria-hidden="true"
      />
    );
  }

  if (variant === 'corner-flourish') {
    return (
      <svg
        className={`w-8 h-8 overflow-visible opacity-50 ${className}`}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M2 38C2 18 18 2 38 2"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 38C8 22 22 8 38 8"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="2 3"
        />
        <circle cx="12" cy="12" r="2" fill={color} />
      </svg>
    );
  }

  if (variant === 'botanical-leaf') {
    return (
      <svg
        className={`w-6 h-6 overflow-visible ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 2C8 6 6 12 12 22C18 12 16 6 12 2Z"
          fill={color}
          fillOpacity="0.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6V18"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return null;
}
