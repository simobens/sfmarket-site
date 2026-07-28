import * as React from 'react';

export interface ButtonProps {
  /** Visual style: accent-filled, outlined, or brand-teal. @default "primary" */
  variant?: 'primary' | 'ghost' | 'teal';
  /** Stretch to full width. @default false */
  block?: boolean;
  /** Render as a link to this URL instead of a <button>. */
  href?: string;
  /** Button type when not a link. @default "button" */
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
}

/** Pill button in the SF Market accent (#6e8fef), Josefin Sans caps — the original site's 30px-radius action. */
export function Button({ variant = 'primary', block = false, href, type = 'button', disabled, onClick, children }: ButtonProps) {
  const cls = [
    'btn',
    variant === 'ghost' ? 'btn--ghost' : '',
    variant === 'teal' ? 'btn--teal' : '',
    block ? 'btn--block' : '',
  ]
    .filter(Boolean)
    .join(' ');
  if (href) {
    return (
      <a className={cls} href={href} onClick={onClick} aria-disabled={disabled || undefined}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
