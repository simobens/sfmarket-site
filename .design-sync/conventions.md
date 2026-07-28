# SF Market — build conventions

SF Market is a CSS-first design system: every component is styled by the global stylesheet (`styles.css` in this bundle — read it before styling anything). There is **no provider or theme wrapper**; components work anywhere as long as the bundle's `styles.css` is loaded. Body text inherits from the stylesheet's `body` rule (Lato 300, 15px, #777777); headings are Josefin Sans 700.

## Styling idiom

Use the exported components for all UI parts they cover. For your own layout glue, use inline styles or these CSS custom properties (all defined in `styles.css` `:root`):

| Family | Tokens |
|---|---|
| Brand teals (logo) | `--sf-teal-100` #00b5c0 · `--sf-teal-500` #008694 · `--sf-teal-900` #085563 |
| Accent (actions/links) | `--sf-accent` #6e8fef · `--sf-accent-dark` #39529a (hover) |
| Text | `--sf-ink` #222 (headings) · `--sf-body` #777 · `--sf-muted` #999 · `--sf-faint` #adadad |
| Surfaces & borders | `--sf-surface` #fff · `--sf-surface-2` #f7f9fc (alt sections) · `--sf-border` #eee · `--sf-field-bg` #f9f9f9 |
| Shape | `--sf-radius-pill` 30px (buttons/inputs) · `--sf-radius-card` 10px (cards) |
| Type | `--sf-font-heading` (Josefin Sans) · `--sf-font-body` (Lato) |
| Spacing | `--sf-space-1..6` = 8/16/24/40/64/100px |
| Effects | `--sf-shadow-soft` · `--sf-shadow-card` (hover lift) · `--sf-hero-grad` |

Layout helper classes from the stylesheet you may reuse directly: `container` (1200px), `section` / `section--alt`, `split` (50/50 grid). Everything else: prefer the components.

## Page recipe

Pages alternate white and alt bands; headings are upper-case with the accent underline. Idiomatic section:

```tsx
import { Section, Split, SectionTitle, Eyebrow, Counter, CounterGroup } from '@sfmarket/react';

<Section alt id="about">
  <Split>
    <div>
      <Eyebrow>About us</Eyebrow>
      <SectionTitle>What Makes Us Number One</SectionTitle>
      <p>Besides our e-commerce brands, we run one of the most in-demand e-commerce SAAS in the MENA region.</p>
    </div>
    <CounterGroup>
      <Counter value={7} label="Brands" />
      <Counter value={70000} suffix="+" label="Delivered orders" />
    </CounterGroup>
  </Split>
</Section>
```

Full pages: `SiteHeader` (links array) on top, `Hero` (tagline/mission/cta — pass a `Button` as `cta`), content `Section`s, `SiteFooter` at the bottom. Cards go in their grids (`BrandCard`→`BrandGrid`, `TeamCard`→`TeamGrid`, `IconBox`→`IconBoxGroup`); `Logo`/`LogoMark` for brand marks; `Field` (+`multiline`) with a `Button` for forms; `SocialLinks` for social icons. Buttons: `variant="primary"` (accent) | `"ghost"` | `"teal"`, `block` for full width, `href` renders a link.
