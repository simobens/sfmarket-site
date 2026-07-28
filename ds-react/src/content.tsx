import * as React from 'react';

const ICONS: Record<string, React.ReactNode> = {
  address: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15.9 15.9 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" /></svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.7 3l2.9 2.9c.5.5.5 1.4 0 1.9L9.2 19.2 4 20.6c-.4.1-.7-.2-.6-.6l1.4-5.2L16.2 3.4c.4-.5 1.1-.5 1.5-.4zm-2 4.4l-9.4 9.4-.7 2.6 2.6-.7 9.4-9.4-1.9-1.9z" /></svg>
  ),
};

export interface IconBoxProps {
  /** Built-in icon name, or pass your own SVG node. */
  icon: 'address' | 'phone' | 'email' | React.ReactNode;
  /** Heading under the icon. */
  title: string;
  /** Body content under the heading. */
  children?: React.ReactNode;
}

/** Centered info block with a teal icon circle — the original contact-section Address/Phone/Email boxes. */
export function IconBox({ icon, title, children }: IconBoxProps) {
  const node = typeof icon === 'string' ? ICONS[icon] ?? ICONS.address : icon;
  return (
    <div className="icon-box">
      <div className="icon-box__icon">{node}</div>
      <h3>{title}</h3>
      {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
  );
}

/** 3-across centered grid for `IconBox`es (2-up on tablet, 1-up on mobile). */
export function IconBoxGroup({ children }: { children?: React.ReactNode }) {
  return <div className="icon-boxes">{children}</div>;
}
