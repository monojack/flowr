---
title: "Nothing"
layout: "guide"
weight: 9
---

```javascript
import { Nothing } from 'flowr';
```

Same as [`Just`][just], a `Nothing` has no special behavior but is useful when you need to dynamically create a controlled render.

```text/jsx
// ...
render() {
  // Our API request may return `data` and/or `error`.
  // If we get both, display the data along with a notification about the error
  // only when the error has a message.

  const { data, error = {} } = this.props.response
  const Message = error.message ? Notification : Nothing

  return (
    <div>
      <span>JSON.stringify(data)</span>
      <Message>{error.message}</Message>
    </div>
  )
}
```

<article id="nothing-props">

## Props

| Name | Type | Default | Description |
| ---- | :--- | :------ | :---------- |


---

See also [`Just`][just]

</article>

[just]: Just.html
