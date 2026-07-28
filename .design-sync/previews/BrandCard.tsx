import * as React from 'react';
import { BrandCard } from '@sfmarket/react';

export function Single() {
  return (
    <div style={{ maxWidth: 280 }}>
      <BrandCard monogram="S" name="silkipl.com" description="Part of the SF Market family" />
    </div>
  );
}

export function NoDescription() {
  return (
    <div style={{ maxWidth: 280 }}>
      <BrandCard monogram="G" name="gmwallets.com" />
    </div>
  );
}
