import * as React from 'react';
import { BrandCard, BrandGrid } from '@sfmarket/react';

export function ThreeBrands() {
  return (
    <BrandGrid>
      <BrandCard monogram="S" name="silkipl.com" description="Part of the SF Market family" />
      <BrandCard monogram="P" name="purenclear.net" description="Part of the SF Market family" />
      <BrandCard monogram="G" name="gmwallets.com" description="Part of the SF Market family" />
    </BrandGrid>
  );
}
