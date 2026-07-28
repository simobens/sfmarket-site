import * as React from 'react';
import { Hero, Button } from '@sfmarket/react';

export function Full() {
  return (
    <Hero
      tagline="Bringing 21st century e-commerce right to your doorstep"
      mission="Our mission is to enable customers in developing markets to have a world-class online shopping experience. We believe everyone deserves to shop with accessible payment methods and reasonable shipping speeds and prices."
      cta={<Button href="#about">Learn More About Us</Button>}
    />
  );
}

export function NoLogo() {
  return (
    <Hero
      showLogo={false}
      title="Ship anywhere, faster"
      tagline="Logistics for developing markets"
      mission="From Hong Kong to your customers' doorsteps — accessible payments, honest shipping."
      cta={<Button variant="teal">Get Started</Button>}
    />
  );
}
