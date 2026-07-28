import * as React from 'react';
import { IconBox } from '@sfmarket/react';

export function Phone() {
  return (
    <div style={{ maxWidth: 300 }}>
      <IconBox icon="phone" title="Phone">(+852) 3001-6327</IconBox>
    </div>
  );
}

export function Address() {
  return (
    <div style={{ maxWidth: 300 }}>
      <IconBox icon="address" title="Address">
        <p>25th Floor, Workington Tower<br />78 Bonham Strand, Sheung Wan<br />Hong Kong</p>
      </IconBox>
    </div>
  );
}
