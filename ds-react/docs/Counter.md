---
category: Data
---

Big Josefin Sans statistic in brand teal with a small caps label. Numbers get thousands separators; add `suffix="+"` for open-ended stats. Lay out in a `CounterGroup`.

```tsx
<CounterGroup>
  <Counter value={7} label="Brands" />
  <Counter value={70000} suffix="+" label="Delivered orders" />
</CounterGroup>
```
