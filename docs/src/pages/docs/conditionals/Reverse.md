---
title: "Reverse"
layout: "guide"
weight: 4
---

```javascript
import { Reverse } from 'flowr';
```

`Reverse` will reverse the order of all it's children when the predicate is true or none provided.

```text/jsx
<div>
  <Reverse when={predicate}>
    <span>A</span>
    <span>B</span>
    <span>C</span>
  </Reverse>
</div>

// for predicate === true
<div>
  <span>C</span>
  <span>B</span>
  <span>A</span>
</div>

// for predicate === false:
<div>
  <span>A</span>
  <span>B</span>
  <span>C</span>
</div>
```

<article id="reverse-props">

## Props

| Name     | Type | Default | Description                                           |
| -------- | :--- | :------ | :---------------------------------------------------- |
| **when** | bool | _true_  | If `true`, reverse the order. If `false`, do nothing. |

---

See also [`Flip`][flip], [`Order`][order]

</article>

[flip]: Flip.html
[order]: Order.html
