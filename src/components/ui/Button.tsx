import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asLink?: boolean;
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className,
  asLink = false,
  href,
  download,
  target,
  rel,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-mono font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 disabled:opacity-50 disabled:pointer-events-none select-none tracking-tight rounded-md group';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-xs md:text-sm px-4 py-2.5 gap-2',
    lg: 'text-sm md:text-base px-6 py-3 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-accent-blue hover:bg-blue-600 text-white shadow-sm hover:shadow-md active:translate-y-[1px]',
    secondary:
      'bg-surface-elevated hover:bg-surface-hover text-foreground border border-border-subtle hover:border-border-strong active:translate-y-[1px]',
    outline:
      'bg-transparent hover:bg-surface text-foreground border border-border-strong hover:border-accent-blue/60 active:translate-y-[1px]',
    ghost:
      'bg-transparent hover:bg-surface text-muted hover:text-foreground active:translate-y-[1px]',
  };

  const classes = twMerge(baseStyles, sizeStyles[size], variantStyles[variant], className);

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>
      )}
    </>
  );

  if (asLink && href) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};
