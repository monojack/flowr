---
title: "Pure"
layout: "guide"
weight: 10
---

```javascript
import { Pure } from 'flowr';
```

`Pure` wraps it's children in a component that implements `shouldComponentUpdate`. Whatever props you provide to `Pure` will be compared for shallow equality and determine if the component should update. None of the props will be passed down to the children.

<div class="alert alert-inline alert-warning">
   <span class="icon-16-alert"></span>
   <span class="alert-body"><b>Pure</b> will ignore the <b>children</b> when comparing props</span>
</div>

```text/jsx
// ...
state = { count: 0, label: 'started at' }

componentDidMount() {
  setInterval(this.increment, 1000)
}

increment = () => {
  this.setState(({ count }) => ({
    count: count + 1
  }))
}

render() {
  const { count, label } = this.state
  return (
    <div>
      <Pure label={label}>
        <span>{label}: {count}</span>
      </Pure>
    </div>
  )
}
```

In the above example, we are incrementing the `count` and updating state with the new value each second. Because `Pure` only "listens" for the `label`, it won't update unless we actually change `state.label`. When we do that, it will update the children with the new `label` and `count`.

<article id="pure-props">

## Props

| Name | Type | Default | Description                                                                        |
| ---- | :--- | :------ | :--------------------------------------------------------------------------------- |
| \*   | \*   | \*      | Accepts any props, the scope is to just compare them in order to determine updates |

---

</article>
