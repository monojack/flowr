---
title: "Debounce"
layout: "guide"
weight: 4
---

```javascript
import { Debounce } from 'flowr';
```

\
\
`Debounce` will render it's children **only** after a certain amount of time has passed since the previous render.

```text/jsx
// ...
state = { count: 0 }

componentDidMount() {
  // start an interval that will increment state.count up to 5 and then stop.
  this.interval = setInterval(() => {
    if (this.state.count === 5) {
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
      <Debounce for={500} immediate={skipFirst}>
        <span>{this.state.count}</span>
      </Debounce>
    </div>
  )
}
```

In the above example, if `skipFirst` is `true` the `span` containing **5** will be rendered after 500ms have passed since the last state update. If `skipFirst` is false, the starting **0** will also be rendered.

\
\
`Debounce` becomes very useful when you want to prevent some actions or events from firing multiple times in a short timeframe. Here's an example of how you'd implement a debounced auto suggest input field using some of the components provided by `Flowr`:

```text/jsx
onChange = (e) => {
  this.setState({
    suggestionsUrl: `https://exampleapi.com/suggestions?query=${e.target.value}`
  })
}

render() {
  const { suggestionsUrl } = this.state
  return (
    <div>
      <input type="text" onChange={this.onChange} />
      <Debounce time={300}>
        <Await for={() => fetch(suggestionsUrl)}>
        {
          (err, res) => (
            <Maybe when={!err && res}>
              <ul>
              { res.data.map(suggestion =>
                  <li key={suggestion.id}>{suggestion.label}</li>) }
              </ul>
            </Maybe>
            )
          }
          </Await>
      </Debounce>
    </div>
  )
}
```

<article id="debounce-props">

## Props

| Name          | Type   | Default | Description                                                                                                              |
| ------------- | :----- | :------ | :----------------------------------------------------------------------------------------------------------------------- |
| **time**      | number | _-_     | The amount of time in ms that we need to debounce the render for                                                         |
| **immediate** | bool   | _false_ | When set to `true` it will start debouncing as soon as it mounts, when `false` it will let the first render pass through |

---

See also [`Throttle`][throttle]

</article>

[throttle]: Throttle.html
