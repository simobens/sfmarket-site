import * as React from 'react';
import { Split, SectionTitle, Counter, CounterGroup } from '@sfmarket/react';

export function TitleAndStats() {
  return (
    <Split>
      <div>
        <SectionTitle>What Makes Us Number One</SectionTitle>
        <p>Besides our e-commerce brands, we run one of the most in-demand e-commerce SAAS in the MENA region.</p>
      </div>
      <CounterGroup>
        <Counter value={7} label="Brands" />
        <Counter value={6} label="Employees" />
        <Counter value={33} suffix="+" label="Contractors" />
        <Counter value={70000} suffix="+" label="Delivered orders" />
      </CounterGroup>
    </Split>
  );
}
