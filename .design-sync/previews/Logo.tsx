import * as React from 'react';
import { Logo } from '@sfmarket/react';

export function Lockup() {
  return <Logo />;
}

export function MarkOnly() {
  return <Logo withText={false} size={64} />;
}

export function Sizes() {
  return (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
      <Logo size={28} />
      <Logo size={38} />
      <Logo size={56} />
    </div>
  );
}
