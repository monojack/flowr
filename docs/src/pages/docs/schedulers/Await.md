---
title: "Await"
layout: "guide"
weight: 1
---

```javascript
import { Await } from 'flowr';
```

\
\
`Await` will render it's children **when and only** if the provided promise resolves. When used with a render prop, it will always apply the promise result _(err, res)_ to the callback.

```text/jsx
<div>
  <Await for={promise}>
    <span>Hello, world!</span>
  </Await>
</div>


// resolved:
<div>
  <span>Hello, world!</span>
</div>

// rejected:
<div></div>
```

\
\
`Await` can also be used with a [render prop](https://reactjs.org/docs/render-props.html). The render callback will take two arguments: `error` and `response`.

```text/jsx
<div>
  <Await for={promise}>
    {(err, res) => (
      <Either when={res.data}>
        <ul>{res.data.map(item => <li>{item}</li>)}</ul>
        <Maybe when={err}>
          <span>Sorry, we cannot fetch the results right now. Try again later</span>
        </Maybe>
      </Either>
    )}
  </Await>
</div>
```

\
\
You can also provide a `Promise` returning function to keep things lazy and only evaluate the promise when the component is constructed.

```text/jsx
// ...

render() {
  const { shouldFetch, url } = this.props

  return (
    <Maybe when={shouldFetch && url}>
      <Await for={() => fetch(url)}>
        {
          (err, res) => (
            <Maybe when={!err && res}>
              <div>JSON.stringify(res.data)</div>
            </Maybe>
          )
        }
      </Await>
    </Maybe>
  )
}
```

If you are providing a `function`, a new `promise` will be returned everytime you are adding/removing the element to/from the DOM. This will initiate a new request each time. There are ways around this, like keeping track of the promise in the parent component and pass that if it's defined. You can get a reference to the promise through the `onPromise` callback prop.

```text/jsx
// ...

promise = null

toggleFriends = (e) => {
  this.setState({
    showFriends: e.target.checked
  })
}

render() {
  const { showFriends } = this.state
  const { url } = this.state

  return (
    <section>
      <input type="checkbox" onChange={this.toggleFriends} />
      <Maybe when={showFriends}>
        <Await
          for={this.promise || () => fetch(url)}
          onPromise={(promise) => (this.promise = promise)}>
            {
              (err, res) => (
                // display list of friends, or not...
              )
            }
        </Await>
      </Maybe>
    </section>
  )
}
```

<div class="alert alert-inline alert-warning">
   <span class="icon-16-alert"></span>
   <span class="alert-body">If you don't specify a valid <b>for</b> prop, everything will shortcircuit and the children will be rendered immediately, as there is nothing to "wait for".</span>
</div>

<article id="await-props">

## Props

| Name          | Type                                     | Default | Description                                                                                                                                                                                                                  |
| ------------- | :--------------------------------------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **for**       | oneOfType([ instanceOf(Promise), func ]) | _-_     | The promise we need to wait for, or a function that will return one which will be evaluated lazily, in the component's `constructor`                                                                                         |
| **tap**       | func                                     | _-_     | Takes an `error` and a `response` argument and is called when the promise is fulfilled. Use this to perform side-effects or just for debugging purposes.                                                                     |
| **onPromise** | func                                     | _-_     | Takes a single argument that will be the promise returned from the function passed through the `for` prop. Useful for keeping track of the first promise. Will not be called if we already pass a Promise to the `for` prop. |

---

</article>
