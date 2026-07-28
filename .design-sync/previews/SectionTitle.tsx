import * as React from 'react';
import { SectionTitle } from '@sfmarket/react';

export function Left() {
  return <SectionTitle>Our Brands</SectionTitle>;
}

export function Centered() {
  return <SectionTitle centered>Contact us</SectionTitle>;
}

export function Levels() {
  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <SectionTitle as="h1">What Makes Us Number One</SectionTitle>
      <SectionTitle as="h3">Our Team</SectionTitle>
    </div>
  );
}
