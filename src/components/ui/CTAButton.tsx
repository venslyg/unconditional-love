import React from 'react';
import Link from 'next/link';

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'coral' | 'outline' | 'pill';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  title?: string;
}

export function CTAButton({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  'aria-label': ariaLabel,
  title,
}: CTAButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-deep focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 cursor-pointer select-none';

  const sizeClasses = {
    sm: 'text-xs px-4 py-2 rounded-full gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-full gap-2',
    lg: 'text-base px-6 py-3.5 rounded-full gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-violet to-violet-deep text-white shadow-sm hover:shadow-md hover:from-violet-deep hover:to-ink border border-violet-deep/30',
    secondary:
      'bg-gradient-to-r from-gold to-gold-deep text-ink shadow-sm hover:shadow-md hover:brightness-105 border border-gold-deep/40 font-semibold',
    coral:
      'bg-gradient-to-r from-coral to-coral-deep text-white shadow-sm hover:shadow-md hover:brightness-105 border border-coral-deep/30',
    outline:
      'bg-paper-light/80 text-ink border border-violet/25 hover:bg-paper-warm hover:border-violet/40 hover:shadow-xs backdrop-blur-xs',
    pill:
      'bg-canvas/90 text-ink border border-violet/20 hover:text-violet-deep hover:bg-paper-warm hover:border-violet/35 shadow-xs backdrop-blur-xs',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel} title={title}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      aria-label={ariaLabel}
      title={title}
    >
      {children}
    </button>
  );
}
