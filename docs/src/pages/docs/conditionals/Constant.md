---
title: "Constant"
layout: "guide"
weight: 8
---

```javascript
import { Constant } from 'flowr';
```

`Constant` will render it's children only once, with their initial state, effectively preventing any updates.

```text/jsx
// ...
state = { count: 0 }

increment = () => {
  this.setState(({count}) => ({
    count: count + 1
  }))
}

render() {
  return (
    <div>
      <Constant>
        <span>{this.state.count}</span>
      </Constant>
    </div>
  )
}

// Constant's children will never be updated
// Will render:
<div>
  <span>0</span>
</div>
```

<article id="constant-props">

## Props

| Name | Type | Default | Description |
| ---- | :--- | :------ | :---------- |


---

</article>
