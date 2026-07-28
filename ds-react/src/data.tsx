import * as React from 'react';

export interface CounterProps {
  /** The statistic value. Numbers are formatted with thousands separators. */
  value: number | string;
  /** Suffix appended to the value, e.g. "+" or "%". */
  suffix?: string;
  /** Upper-case label under the number, e.g. "Delivered orders". */
  label: string;
}

/** Big Josefin Sans teal statistic with a small caps label — the original Elementor counter. */
export function Counter({ value, suffix = '', label }: CounterProps) {
  const display = typeof value === 'number' ? value.toLocaleString('en-US') : value;
  return (
    <div className="counter">
      <div className="counter__number">
        {display}
        {suffix}
      </div>
      <div className="counter__label">{label}</div>
    </div>
  );
}

/** 4-across centered grid for `Counter`s (2-up on tablet). */
export function CounterGroup({ children }: { children?: React.ReactNode }) {
  return <div className="counters">{children}</div>;
}
