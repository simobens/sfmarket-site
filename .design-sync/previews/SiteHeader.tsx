import * as React from 'react';
import { SiteHeader } from '@sfmarket/react';

const links = [
  { label: 'Home', href: '#top', active: true },
  { label: 'Our Brands', href: '#brands' },
  { label: 'About us', href: '#about' },
  { label: 'Our Team', href: '#team' },
  { label: 'Contact Us', href: '#contact' },
];

export function Solid() {
  return <SiteHeader links={links} />;
}

export function Translucent() {
  return (
    <div style={{ background: 'linear-gradient(160deg, #eef6f8 0%, #ffffff 45%, #eef1fd 100%)', padding: '0 0 60px' }}>
      <SiteHeader links={links} solid={false} />
    </div>
  );
}
