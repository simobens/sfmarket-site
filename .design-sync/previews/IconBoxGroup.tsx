import * as React from 'react';
import { IconBox, IconBoxGroup } from '@sfmarket/react';

export function ContactRow() {
  return (
    <IconBoxGroup>
      <IconBox icon="address" title="Address">
        <p>25th Floor, Workington Tower<br />78 Bonham Strand, Sheung Wan<br />Hong Kong</p>
      </IconBox>
      <IconBox icon="phone" title="Phone">(+852) 3001-6327</IconBox>
      <IconBox icon="email" title="Email Address">contact@sfmarket.hk</IconBox>
    </IconBoxGroup>
  );
}
