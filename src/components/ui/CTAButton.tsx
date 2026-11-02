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
}: CTAButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-deep focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 cursor-pointer select-none';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 rounded-full gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-full gap-2',
    lg: 'text-base px-6 py-3.5 rounded-full gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-violet text-white shadow-sm hover:bg-violet-deep hover:shadow-md border border-violet-deep/20',
    secondary:
      'bg-gold text-ink shadow-sm hover:bg-gold-deep/80 hover:shadow-md border border-gold-deep/30',
    coral:
      'bg-coral text-white shadow-sm hover:bg-coral-deep hover:shadow-md border border-coral-deep/30',
    outline:
      'bg-transparent text-ink border border-ink/20 hover:bg-paper-warm/70 hover:border-ink/40',
    pill:
      'bg-canvas/80 text-ink-muted border border-violet/20 hover:text-ink hover:bg-paper-warm',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
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
    >
      {children}
    </button>
  );
}

