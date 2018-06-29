---
title: "Either"
layout: "guide"
weight: 2
---

```javascript
import { Either } from 'flowr';
```

An `Either` is like a regular `if/else` statement
When the predicate is `true`, it will render the first child, otherwise it will render the second.

<div class="alert alert-inline alert-warning">
   <span class="icon-16-alert"></span>
   <span class="alert-body"><b>Either</b> will only consider the first two children, everything else will be ignored. You can use a any other wrapping element or a `Fragment` to get around this limitation.</span>
</div>

```text/jsx
<div>
  <Either when={predicate}>
    <span>A</span>
    <span>B</span>
  </Either>
</div>

// for predicate === true:
<div>
  <span>A</span>
</div>

// for predicate === false:
<div>
  <span>B</span>
</div>
```

<article id="either-props">

## Props

| Name     | Type | Default | Description                                                                         |
| -------- | :--- | :------ | :---------------------------------------------------------------------------------- |
| **when** | bool | _true_  | When this is `true`, render the first child element. If `false`, render the second. |

---

See also [`Maybe`][maybe]

</article>

[maybe]: Maybe.html
