import * as React from 'react';
import { TeamCard, TeamGrid } from '@sfmarket/react';

export function Single() {
  return (
    <div style={{ maxWidth: 260 }}>
      <TeamCard initials="MB" name="Med Ben Ali" role="General Manager" />
    </div>
  );
}

export function Grid() {
  return (
    <TeamGrid>
      <TeamCard initials="MB" name="Med Ben Ali" role="General Manager" />
      <TeamCard initials="AF" name="Abdellatif Fadil" role="Senior Web Developer" />
      <TeamCard initials="SC" name="Sarah Cruz" role="Financials" />
    </TeamGrid>
  );
}
