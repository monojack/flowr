---
title: "Just"
layout: "guide"
weight: 8
---

```javascript
import { Just } from 'flowr';
```

`Just` has no special behaviour, it just renders it's children without any changes. `Just` is useful when you need to dynamically create a controlled render.

```text/jsx
// ...
render() {
  // If we have a predicate defined, we want to render the `span`
  // only when that predicate is true. If not, just render it.

  const Wrapper = this.props.predicate ? Maybe : Just

  return (
    <div>
      <Wrapper when={this.props.predicate}> // Just will ignore the props
        <span>Hello, world!</span>
      </Wrapper>
    </div>
  )
}
```

The above snippet is just for the sake of example.
You would achieve the same outcome by using just a [`Maybe`][maybe]:

```text/jsx
// ...
<div>
  <Maybe when={predicate == null || predicate}>
    <span>Hello, world!</span>
  </Maybe>
</div>
```

<article id="just-props">

## Props

| Name | Type | Default | Description |
| ---- | :--- | :------ | :---------- |


---

See also [`Nothing`][nothing]

</article>

[nothing]: Nothing.html
[maybe]: Maybe.html
