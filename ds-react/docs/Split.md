---
category: Layout
---

50/50 two-column grid used by every content section of the original site (title + copy on the left, content grid on the right). Stacks to one column under 960px.

```tsx
<Split>
  <div><SectionTitle>Our Team</SectionTitle><p>…</p></div>
  <TeamGrid>…</TeamGrid>
</Split>
```
