---
title: "Delay"
layout: "guide"
weight: 3
---

```javascript
import { Delay } from 'flowr';
```

\
\
`Delay` will render it's children **only** after a certain amount of time has passed.

```text/jsx
// ...
<div>
  <Delay for={1000}>
    <span>{this.state.count}</span>
  </Delay>
</div>
```

In the above example if `showFirst` is `true` the first render will be displayed:

```text/jsx
<div>
  <span>0</span>
</div>
```

and after 2 seconds, it renders the last state updates, skipping the ones inbetween:

```text/jsx
<div>
  <span>5</span>
</div>
```

\
\
`Delay` becomes very useful when you want to prevent some actions or events from firing multiple times in a short timeframe. Here's an example of how you'd implement a debounced auto suggest input field using some of the components provided by `Flowr`:

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
      <Delay time={300}>
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
      </Delay>
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
