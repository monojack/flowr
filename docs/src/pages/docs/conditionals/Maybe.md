---
title: "Maybe"
layout: "guide"
weight: 1
---

```javascript
import { Maybe } from 'flowr';
```

A `Maybe` is the basic implementation of a conditional render.
If `when` prop is `true`, it will render all it's children, otherwise it will render nothing.

```text/jsx
<div>
  <Maybe when={predicate}>
    <h1>Hello, world!</h1>
    <p>Try out Flowr</p>
  </Maybe>
</div>

// for predicate === true:
<div>
  <h1>Hello, world!</h1>
  <p>Try out Flowr</p>
</div>

// for predicate === false:
<div></div>
```

<article id="maybe-props">

## Props

| Name     | Type | Default | Description                                                                     |
| -------- | :--- | :------ | :------------------------------------------------------------------------------ |
| **when** | bool | _false_ | When this is `true`, render all the child elements. If `false`, render nothing. |

---

See also [`Either`][either]

</article>

[either]: Either.html
