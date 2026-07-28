---
category: Layout
---

The 74px site header: logo left, Josefin Sans caps nav, social icons right. `solid` (default) is the white scrolled state; `solid={false}` gives the translucent over-hero look. It flows in the layout unless `fixed` is set.

```tsx
<SiteHeader links={[
  { label: 'Home', href: '#top', active: true },
  { label: 'Our Brands', href: '#brands' },
  { label: 'Contact Us', href: '#contact' },
]} />
```
