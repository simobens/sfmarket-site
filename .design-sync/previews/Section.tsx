import * as React from 'react';
import { Section, SectionTitle } from '@sfmarket/react';

export function Plain() {
  return (
    <Section>
      <SectionTitle>Our Brands</SectionTitle>
      <p>It takes experience and we’ve got it.</p>
    </Section>
  );
}

export function Alt() {
  return (
    <Section alt>
      <SectionTitle>About us</SectionTitle>
      <p>Besides our e-commerce brands, we run one of the most in-demand e-commerce SAAS in the MENA region.</p>
    </Section>
  );
}
