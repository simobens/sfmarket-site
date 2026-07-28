import * as React from 'react';
import { SiteFooter } from '@sfmarket/react';

export function Default() {
  return <SiteFooter />;
}

export function MultiLink() {
  return (
    <SiteFooter
      links={[
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Careers', href: '#' },
      ]}
      copyright="© 2026 – SF MARKET LIMITED"
    />
  );
}
