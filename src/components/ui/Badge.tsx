import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'violet' | 'cyan' | 'emerald' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className,
}) => {
  const baseStyles =
    'inline-flex items-center font-mono font-medium rounded transition-colors select-none tracking-tight';

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  const variantStyles = {
    default:
      'bg-surface-elevated text-muted border border-border-subtle hover:text-foreground hover:border-border-strong',
    blue: 'bg-accent-blue/10 text-accent-blue border border-accent-blue/20',
    violet: 'bg-accent-violet/10 text-accent-violet border border-accent-violet/20',
    cyan: 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20',
    emerald: 'bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20',
    outline: 'bg-transparent text-muted border border-border-subtle hover:border-border-strong',
  };

  return (
    <span className={twMerge(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
      {children}
    </span>
  );
};
