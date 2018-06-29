---
title: "One"
layout: "guide"
weight: 6
---

```javascript
import { One } from 'flowr';
```

`One` will render only the child located at the specified index.

```text/jsx
<div>
  <One at={2}>
    <span>A</span>
    <span>B</span>
    <span>C</span>
  </One>
</div>

// Will render:
<div>
  <span>C</span>
</div>
```

If the `at` prop is not provided, nothing will be rendered.

```text/jsx
<div>
  <One>
    <span>A</span>
    <span>B</span>
    <span>C</span>
  </One>
</div>

// Will render:
<div></div
```

<article id="reverse-props">

## Props

| Name   | Type   | Default | Description                               |
| ------ | :----- | :------ | :---------------------------------------- |
| **at** | number | _-_     | The index of the child we want to render. |

---

See also [`Some`][some]

</article>

[some]: Some.html
