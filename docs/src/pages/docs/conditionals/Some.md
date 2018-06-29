---
title: "Some"
layout: "guide"
weight: 7
---

```javascript
import { Some } from 'flowr';
```

`Some` will render only the children located at the specified indices.

<div class="alert alert-inline alert-warning">
   <span class="icon-16-alert"></span>
   <span class="alert-body"><b>Some</b> will not change the children order. See <a href="Order.html"><b>Order</b></a> if you are looking to render specific children in a specific order.</span>
</div>

```text/jsx
<div>
  <Some at={[2, 0]}>
    <span>A</span>
    <span>B</span>
    <span>C</span>
  </Some>
</div>

// Will render:
<div>
  <span>A</span>
  <span>C</span>
</div>
```

If the `at` prop is not provided, nothing will be rendered.

```text/jsx
<div>
  <Some>
    <span>A</span>
    <span>B</span>
    <span>C</span>
  </Some>
</div>

// Will render:
<div></div
```

<article id="reverse-props">

## Props

| Name   | Type     | Default | Description                                                          |
| ------ | :------- | :------ | :------------------------------------------------------------------- |
| **at** | [number] | _-_     | An array of indices corresponding to the children we want to render. |

---

See also [`One`][one]

</article>

[one]: One.html
