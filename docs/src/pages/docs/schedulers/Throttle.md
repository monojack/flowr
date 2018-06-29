---
title: "Throttle"
layout: "guide"
weight: 5
---

```javascript
import { Throttle } from 'flowr';
```

\
\
`Throttle` will render it's children **at most** once in the specified time interval.

```text/jsx
// ...
state = { count: 0 }

componentDidMount() {
  // start an interval that will increment state.count up to 9 and then stop.
  this.interval = setInterval(() => {
    if (this.state.count === 9) {
      return clearInterval(this.interval)
    }

    this.setState(state => ({
      count: state.count + 1
    }))
  }, 300)
}

render() {
  return (
    <div>
      <Throttle for={1000}>
        <span>{this.state.count}</span>
      </Throttle>
    </div>
  )
}
```

In the above example `Throttle` will render the first state and after that the most recent update once every second. If no update occurred since the last render, throttling will be paused so we don't waste renders and when a new update comes, it will render that and start sampling again.

```text/jsx
<div>
  <span> { /* 0---------3---------6---------9 */ } </span>
</div>
```

<article id="throttle-props">

## Props

| Name     | Type   | Default | Description                                                  |
| -------- | :----- | :------ | :----------------------------------------------------------- |
| **time** | number | _-_     | The amount of time in ms that we need to throttle the render |

---

See also [`Debounce`][debounce]

</article>

[debounce]: Debounce.html
