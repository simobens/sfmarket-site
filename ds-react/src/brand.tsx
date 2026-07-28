import * as React from 'react';

/** The SF Market S+F monogram, re-vectorised from the original sfmarket.hk favicon. */
export function LogoMark({ size = 38 }: { /** Height/width in px. @default 38 */ size?: number }) {
  return (
    <svg className="logo__mark" style={{ width: size, height: size }} viewBox="0 0 320 320" aria-hidden="true">
      <defs>
        <linearGradient id="sfmTop" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#00b5c0" />
          <stop offset="1" stopColor="#008694" />
        </linearGradient>
        <linearGradient id="sfmMid" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#008694" />
          <stop offset="1" stopColor="#085563" />
        </linearGradient>
      </defs>
      <path fill="url(#sfmTop)" d="M20,158 L20,58 Q20,8 74,8 L252,8 Q296,8 296,48 L296,56 Q296,86 264,86 L258,86 Q244,86 244,72 Q244,64 232,64 L112,64 Q82,64 82,94 L82,152 Q82,174 58,174 Q20,174 20,158 Z" />
      <path fill="url(#sfmMid)" d="M164,112 L256,112 Q298,112 298,152 L298,226 Q298,270 254,270 L178,270 Q166,288 152,301 Q142,310 137,306 Q132,302 133,290 L134,270 Q130,270 130,244 L130,230 Q130,222 142,222 L228,222 Q240,222 240,210 L240,176 Q240,167 230,167 L164,167 Q130,167 130,139 Q130,112 164,112 Z" />
      <path fill="#085563" d="M20,200 Q20,192 30,192 L70,192 Q80,192 80,200 L80,258 Q80,268 70,268 L52,268 Q20,268 20,238 Z" />
    </svg>
  );
}

export interface LogoProps {
  /** Render the "SF MARKET" wordmark next to the mark. @default true */
  withText?: boolean;
  /** Mark height/width in px. @default 38 */
  size?: number;
  /** Wrap the logo in a link to this URL (e.g. "#top"). */
  href?: string;
}

/** SF Market lockup: teal S+F monogram plus the Josefin Sans "SF MARKET" wordmark. */
export function Logo({ withText = true, size = 38, href }: LogoProps) {
  const inner = (
    <>
      <LogoMark size={size} />
      {withText && (
        <span className="logo__text">
          SF <span>MARKET</span>
        </span>
      )}
    </>
  );
  return href ? (
    <a className="logo" href={href} aria-label="SF Market — home">
      {inner}
    </a>
  ) : (
    <span className="logo">{inner}</span>
  );
}

export interface SocialLinksProps {
  /** X (Twitter) profile URL. @default "#" */
  twitter?: string;
  /** Facebook page URL. @default "#" */
  facebook?: string;
  /** Instagram profile URL. @default "#" */
  instagram?: string;
}

/** Round social icon links (X, Facebook, Instagram) as used in the site header. */
export function SocialLinks({ twitter = '#', facebook = '#', instagram = '#' }: SocialLinksProps) {
  return (
    <ul className="social" aria-label="Social links">
      <li>
        <a href={twitter} aria-label="X (Twitter)">
          <svg viewBox="0 0 24 24"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.2l7.3-8.3L1.2 2h6.4l4.4 5.9L18.9 2zm-1.1 18h1.7L7 3.9H5.1L17.8 20z" /></svg>
        </a>
      </li>
      <li>
        <a href={facebook} aria-label="Facebook">
          <svg viewBox="0 0 24 24"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.7-1.6h1.6V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.6H7.6V14h2.8v8h3.1z" /></svg>
        </a>
      </li>
      <li>
        <a href={instagram} aria-label="Instagram">
          <svg viewBox="0 0 24 24"><path d="M12 4.3c2.5 0 2.8 0 3.8.1 2.5.1 3.7 1.3 3.8 3.8 0 1 .1 1.3.1 3.8s0 2.8-.1 3.8c-.1 2.5-1.3 3.7-3.8 3.8-1 0-1.3.1-3.8.1s-2.8 0-3.8-.1c-2.5-.1-3.7-1.3-3.8-3.8 0-1-.1-1.3-.1-3.8s0-2.8.1-3.8C4.5 5.7 5.7 4.5 8.2 4.4c1-.1 1.3-.1 3.8-.1zM12 2C9.4 2 9.1 2 8.1 2.1 4.7 2.2 2.9 4 2.8 7.4 2.7 8.4 2.7 8.7 2.7 12s0 3.6.1 4.6c.1 3.4 1.9 5.2 5.3 5.3 1 .1 1.3.1 4.6.1s3.6 0 4.6-.1c3.4-.1 5.2-1.9 5.3-5.3.1-1 .1-1.3.1-4.6s0-3.6-.1-4.6C21.9 4 20.1 2.2 16.7 2.1 15.7 2 15.4 2 12 2zm0 4.9a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm5.3-8.6a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" /></svg>
        </a>
      </li>
    </ul>
  );
}
