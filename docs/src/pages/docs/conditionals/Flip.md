---
title: "Flip"
layout: "guide"
weight: 3
---

```javascript
import { Flip } from 'flowr';
```

`Flip` will flip the order of it's first two children when the predicate is true or none provided.

<div class="alert alert-inline alert-warning">
   <span class="icon-16-alert"></span>
   <span class="alert-body"><b>Flip</b> only flips the first two children. See <a href="Reverse.html"><b>Reverse</b></a> or <a href="Order.html"><b>Order</b></a> if you want to reverse the order of all children or arrange them in a specific order.</span>
</div>

```text/jsx
<div>
  <Flip when={predicate}>
    <span>A</span>
    <span>B</span>
    <span>C</span>
  </Flip>
</div>

// for predicate === true:
<div>
  <span>B</span>
  <span>A</span>
  <span>C</span>
</div>

// for predicate === false:
<div>
  <span>A</span>
  <span>B</span>
  <span>C</span>
</div>
```

<article id="flip-props">

## Props

| Name     | Type | Default | Description                                     |
| -------- | :--- | :------ | :---------------------------------------------- |
| **when** | bool | _true_  | If `true`, do the flip. If `false`, do nothing. |

---

See also [`Reverse`][reverse], [`Order`][order]

</article>

[reverse]: Reverse.html
[order]: Order.html
