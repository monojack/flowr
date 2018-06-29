---
title: "Stream"
layout: "guide"
props: []
weight: 2
---

```javascript
import { Stream } from 'flowr';
```

\
\
`Stream` is a really handy render prop component that allows you to work with **props streams**. The render callback takes a single argument (the props stream) and should return a stream of "renders".
\
The props stream is a simple `Observable` with only a `map` operator. You can convert it into a more powerful implementation by just "lifting" it into the type of your favourite library.
\
Below is a simple implementation of a counter that starts from **0** and ticks every **1000ms**, using [rxjs](https://rxjs-dev.firebaseapp.com/) v5 _(mind the imports)_

```text/jsx
import { from } from 'rxjs/observable/from'
import { interval } from 'rxjs/observable/interval'

<div>
  <Stream start={0} time={1000}>
    {
      props$ =>
        from(props$)
          .switchMap(
            props =>
              interval(props.time)
                .map(count => <span>{props.start + count}</span>)
          )
    }
  </Stream>
</div>


<div>
  <span>{ /* ----------0---------1---------2---------3... */}</span>
</div>
```

<article id="stream-props">

## Props

| Name | Type | Default | Description                                             |
| ---- | :--- | :------ | :------------------------------------------------------ |
| \*   | \*   | \*      | Accepts any props and will pipe them through the stream |

---

</article>
