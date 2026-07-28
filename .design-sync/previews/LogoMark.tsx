import * as React from 'react';
import { LogoMark } from '@sfmarket/react';

export function Sizes() {
  return (
    <div style={{ display: 'flex', gap: 32, alignItems: 'flex-end' }}>
      <LogoMark size={24} />
      <LogoMark size={40} />
      <LogoMark size={96} />
      <LogoMark size={160} />
    </div>
  );
}
