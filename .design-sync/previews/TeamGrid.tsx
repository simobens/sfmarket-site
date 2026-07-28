import * as React from 'react';
import { TeamCard, TeamGrid } from '@sfmarket/react';

export function FullTeam() {
  return (
    <TeamGrid>
      <TeamCard initials="MB" name="Med Ben Ali" role="General Manager" />
      <TeamCard initials="AF" name="Abdellatif Fadil" role="Senior Web Developer" />
      <TeamCard initials="SC" name="Sarah Cruz" role="Financials" />
      <TeamCard initials="BA" name="Badr Abari" role="Senior Designer" />
      <TeamCard initials="SA" name="Salma Arfaoui" role="Customer Support" />
      <TeamCard initials="NA" name="Nouha Alami" role="Logistics" />
    </TeamGrid>
  );
}
