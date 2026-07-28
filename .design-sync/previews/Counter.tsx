import * as React from 'react';
import { Counter } from '@sfmarket/react';

export function Single() {
  return <Counter value={70000} suffix="+" label="Delivered orders" />;
}

export function Plain() {
  return <Counter value={7} label="Brands" />;
}
