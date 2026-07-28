import * as React from 'react';
import { Logo, LogoMark, SocialLinks } from './brand';

export interface SectionProps {
  /** Soft blue-grey alternate background (--sf-surface-2). @default false */
  alt?: boolean;
  /** Anchor id for in-page navigation. */
  id?: string;
  /** Wrap children in the 1200px .container. @default true */
  contained?: boolean;
  children?: React.ReactNode;
}

/** Page section band with the design system's 100px vertical rhythm; `alt` gives the soft alternate surface. */
export function Section({ alt = false, id, contained = true, children }: SectionProps) {
  return (
    <section className={`section${alt ? ' section--alt' : ''}`} id={id}>
      {contained ? <div className="container">{children}</div> : children}
    </section>
  );
}

/** Two-column 50/50 grid (stacks on mobile) used for every content section of the original site. */
export function Split({ children }: { children?: React.ReactNode }) {
  return <div className="split">{children}</div>;
}

export interface HeroProps {
  /** Main headline. @default "Welcome to SF MARKET!" */
  title?: string;
  /** Upper-case Lato 600 tagline under the headline. */
  tagline?: string;
  /** Supporting paragraph (max-width 640px, centered). */
  mission?: string;
  /** Call-to-action area — typically a `Button`. */
  cta?: React.ReactNode;
  /** Show the big logo mark and wordmark above the headline. @default true */
  showLogo?: boolean;
  /** Fill the full viewport height like the original hero. @default false */
  fullHeight?: boolean;
}

/** Centered hero band on the soft teal-to-blue gradient, with logo, headline, tagline, mission and CTA. */
export function Hero({ title = 'Welcome to SF MARKET!', tagline, mission, cta, showLogo = true, fullHeight = false }: HeroProps) {
  return (
    <section className="hero" style={fullHeight ? undefined : { minHeight: 'auto', padding: '80px 0 60px' }}>
      <div className="container">
        {showLogo && (
          <>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
              <LogoMark size={160} />
            </div>
            <div className="hero__wordmark">
              SF <span>MARKET</span>
            </div>
          </>
        )}
        <h1>{title}</h1>
        {tagline && <p className="hero__tagline">{tagline}</p>}
        {mission && <p className="hero__mission">{mission}</p>}
        {cta}
      </div>
    </section>
  );
}

export interface NavLink {
  label: string;
  href: string;
  /** Highlight as the current page/section. */
  active?: boolean;
}

export interface SiteHeaderProps {
  /** Navigation links. */
  links?: NavLink[];
  /** Show the social icon set on the right. @default true */
  socials?: boolean;
  /** Solid white background (scrolled state). When false, the translucent over-hero look. @default true */
  solid?: boolean;
  /** Pin to the viewport top like the real site header. Off by default so it flows in layouts. @default false */
  fixed?: boolean;
  /** Logo link target. @default "#top" */
  logoHref?: string;
}

/** 74px site header: logo left, Josefin Sans caps nav, social icons right. */
export function SiteHeader({ links = [], socials = true, solid = true, fixed = false, logoHref = '#top' }: SiteHeaderProps) {
  return (
    <header className={`site-header${solid ? ' is-scrolled' : ''}`} style={fixed ? undefined : { position: 'relative' }}>
      <div className="container site-header__inner">
        <Logo href={logoHref} />
        {links.length > 0 && (
          <nav className="site-nav" aria-label="Main navigation">
            <ul>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={l.active ? 'is-active' : undefined}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {socials && <SocialLinks />}
      </div>
    </header>
  );
}

export interface SiteFooterProps {
  /** Footer nav links. @default [{ label: "Privacy Policy", href: "#" }] */
  links?: { label: string; href: string }[];
  /** Copyright line. @default "© 2019 – SF MARKET LIMITED" */
  copyright?: string;
}

/** Centered micro-type footer with top border, caps links and faint copyright line. */
export function SiteFooter({ links = [{ label: 'Privacy Policy', href: '#' }], copyright = '© 2019 – SF MARKET LIMITED' }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        <nav aria-label="Footer">
          {links.map((l, i) => (
            <a key={i} href={l.href} style={i > 0 ? { marginLeft: 18 } : undefined}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="site-footer__copy">{copyright}</div>
      </div>
    </footer>
  );
}
