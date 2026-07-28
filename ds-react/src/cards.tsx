import * as React from 'react';

export interface BrandCardProps {
  /** 1–2 letter monogram shown in the teal-gradient circle. */
  monogram: string;
  /** Brand name (rendered upper-case, letter-spaced), e.g. "silkipl.com". */
  name: string;
  /** One-line description under the name. */
  description?: string;
}

/** Portfolio brand tile: teal-gradient monogram circle, caps brand name, soft shadow with hover lift. */
export function BrandCard({ monogram, name, description }: BrandCardProps) {
  return (
    <article className="brand-card">
      <div className="brand-card__monogram">{monogram}</div>
      <h3 className="brand-card__name">{name}</h3>
      {description && <p className="brand-card__desc">{description}</p>}
    </article>
  );
}

/** 3-across grid for `BrandCard`s (2-up on tablet, 1-up on mobile). */
export function BrandGrid({ children }: { children?: React.ReactNode }) {
  return <div className="brand-grid">{children}</div>;
}

export interface TeamCardProps {
  /** Initials shown in the avatar circle, e.g. "MB". */
  initials: string;
  /** Member name. */
  name: string;
  /** Role line (rendered upper-case, muted). */
  role: string;
}

/** Team member card with gradient initials avatar; avatars alternate teal/accent automatically by position. */
export function TeamCard({ initials, name, role }: TeamCardProps) {
  return (
    <article className="team-card">
      <div className="team-card__avatar">{initials}</div>
      <h3 className="team-card__name">{name}</h3>
      <p className="team-card__role">{role}</p>
    </article>
  );
}

/** 3-across grid for `TeamCard`s (2-up on tablet, 1-up on mobile). */
export function TeamGrid({ children }: { children?: React.ReactNode }) {
  return <div className="team-grid">{children}</div>;
}
