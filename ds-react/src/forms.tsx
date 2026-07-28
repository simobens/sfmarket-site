import * as React from 'react';

export interface FieldProps {
  /** Render a multi-line textarea instead of a single-line input. @default false */
  multiline?: boolean;
  /** Input type when single-line. @default "text" */
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

/** Pill-shaped form field on the soft grey surface — the original 30px-radius input (18px radius when multiline). */
export function Field({ multiline = false, type = 'text', ...rest }: FieldProps) {
  if (multiline) {
    return <textarea className="field" {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} />;
  }
  return <input className="field" type={type} {...(rest as React.InputHTMLAttributes<HTMLInputElement>)} />;
}
