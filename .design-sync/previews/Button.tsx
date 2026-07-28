import * as React from 'react';
import { Button } from '@sfmarket/react';

export function Primary() {
  return <Button href="#about">Learn More About Us</Button>;
}

export function Variants() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button>Primary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="teal">Brand Teal</Button>
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button disabled>Disabled</Button>
      <Button variant="ghost" disabled>
        Disabled Ghost
      </Button>
    </div>
  );
}

export function FullWidth() {
  return (
    <div style={{ width: 360 }}>
      <Button block>Send Message</Button>
    </div>
  );
}
