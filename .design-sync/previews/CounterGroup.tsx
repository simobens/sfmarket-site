import * as React from 'react';
import { Counter, CounterGroup } from '@sfmarket/react';

export function OriginalStats() {
  return (
    <CounterGroup>
      <Counter value={7} label="Brands" />
      <Counter value={6} label="Employees" />
      <Counter value={33} suffix="+" label="Contractors" />
      <Counter value={70000} suffix="+" label="Delivered orders" />
    </CounterGroup>
  );
}
