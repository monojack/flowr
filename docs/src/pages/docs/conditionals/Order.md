---
title: "Order"
layout: "guide"
weight: 5
---

```javascript
import { Order } from 'flowr';
```

`Order` will rearrange the children based on a specified order. The `sort` prop will take an array of indices that map to the children indices. The children order will be the same as the position of their index inside the array.

If the `sort` prop is not provided, the children order will remain unchanged.

```text/jsx
<div>
  <Order sort={[1, 2, 0]}>
    <span>A</span>
    <span>B</span>
    <span>C</span>
  </Order>
</div>

// will render:
<div>
  <span>B</span>
  <span>C</span>
  <span>A</span>
</div>
```

Any index that will not have a corresponding child will be ignored. Likewise, any index that is left out will result in that child not being rendered.

```text/jsx
// sort={[1, 2, 0, 3]}
// will render:
<div>
  <span>B</span>
  <span>C</span>
  <span>A</span>
</div>


// sort={[2, 0]}
// will render:
<div>
  <span>C</span>
  <span>A</span>
</div>
```

<article id="order-props">

## Props

| Name     | Type  | Default | Description                                                                                        |
| -------- | :---- | :------ | :------------------------------------------------------------------------------------------------- |
| **sort** | array | _-_     | An array containing the children indices sorted by the order in which we want them to be rendered. |

---

See also [`Flip`][flip], [`Reverse`][reverse]

</article>

[flip]: Flip.html
[reverse]: Reverse.html
