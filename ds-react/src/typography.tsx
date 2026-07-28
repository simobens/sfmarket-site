import * as React from 'react';

export interface SectionTitleProps {
  /** Center the title and its accent underline. @default false */
  centered?: boolean;
  /** Heading level to render. @default "h2" */
  as?: 'h1' | 'h2' | 'h3';
  children?: React.ReactNode;
}

/** Upper-case Josefin Sans section heading with the signature 28×2px accent underline. */
export function SectionTitle({ centered = false, as = 'h2', children }: SectionTitleProps) {
  const Tag = as;
  return <Tag className={`section-title${centered ? ' section-title--center' : ''}`}>{children}</Tag>;
}

/** Small upper-case teal kicker line placed above a section title. */
export function Eyebrow({ children }: { children?: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
