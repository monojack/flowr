---
title: "Schedulers"
description: "A set of components that help scheduling renders"
layout: "guide"
icon: "code-file"
weight: 3
---

###### {$page.description}

<article id="schedulers-index">

| Name                   | Props                     | Description                                                                                                                                                                                                                     |
| ---------------------- | :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`Await`][await]       | `for`, `tap`, `onPromise` | Renders it's children **when and only** if the provided promise resolves. When used with a render prop, it will always apply the promise result _(err, res)_ to the callback. It also accepts a function that returns a Promise |
| [`Stream`][stream]     | `*`                       | Render-prop component that enables working with **props streams**                                                                                                                                                               |
| [`Debounce`][debounce] | `time`, `immediate`       | Renders it's children **only** after a certain amount of time has passed since the previous render.                                                                                                                             |
| [`Delay`][delay]       | `time`                    | Renders it's children **only** after a certain amount of time has passed                                                                                                                                                        |
| [`Throttle`][throttle] | `time`                    | Renders it's children **at most** once in the specified time interval.                                                                                                                                                          |

</article>

[await]: Await.html
[stream]: Stream.html
[debounce]: Debounce.html
[delay]: Delay.html
[throttle]: Throttle.html
