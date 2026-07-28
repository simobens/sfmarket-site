import * as React from 'react';
import { Field, Button } from '@sfmarket/react';

export function Types() {
  return (
    <div style={{ display: 'grid', gap: 14, maxWidth: 420 }}>
      <Field placeholder="Your name" />
      <Field type="email" placeholder="Email address" />
      <Field multiline placeholder="Message" />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ maxWidth: 420 }}>
      <Field placeholder="Disabled field" disabled />
    </div>
  );
}

export function ContactForm() {
  return (
    <div style={{ display: 'grid', gap: 14, maxWidth: 420 }}>
      <Field placeholder="Your name" />
      <Field type="email" placeholder="Email address" />
      <Field multiline placeholder="How can we help?" />
      <div><Button>Send</Button></div>
    </div>
  );
}
