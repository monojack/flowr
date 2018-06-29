---
title: "Getting started"
description: "Get started with Flowr"
layout: "guide"
icon: "arrow-right-rod"
weight: 1
---

###### {$page.description}

<article id="Installation">

## Installation

To add `flowr` to your application dependencies you just need to run:

```shell
npm install flowr -S
```

This will download `flowr` into your `node_modules` folder and then you can import any `flowr` component into your modules.

```javascript
import { Maybe, Either, Await } from 'flowr';
// ...
```

`Flowr` is _tree-shaking_ friendly. As long as you are using ES6 modules, your bundle will contain only the required `flowr` components. Read more about [tree shaking](https://webpack.js.org/guides/tree-shaking/)

There are two categories of Components available: [**Conditionals**](#conditionals) and [**Schedulers**](#schedulers)

</article>

<article id="conditionals">

#### Conditionals

| Name                   | Props  | Description                                                                                           |
| ---------------------- | :----- | :---------------------------------------------------------------------------------------------------- |
| [`Maybe`][maybe]       | `when` | Renders it's children only if `when` is `true`                                                        |
| [`Either`][either]     | `when` | If `when` is `true` it renders the first child, otherwise it renders the second                       |
| [`Flip`][flip]         | `when` | Flips the order of the **first two** children                                                         |
| [`Reverse`][reverse]   | `when` | Reverses the order of **all** its children                                                            |
| [`Order`][order]       | `sort` | Re-orders the children in the order provided through `sort`                                           |
| [`One`][one]           | `at`   | Renders **only** the child at the specified index                                                     |
| [`Some`][some]         | `at`   | Renders **only** the children at the specified indices if they exist                                  |
| [`Constant`][constant] | `*`    | Will render **only once**, never updating the state of it's children (shouldComponentUpdate -> false) |
| [`Pure`][pure]         | `*`    | Will re-render **only** when the passed props have changed (PureComponent)                            |
| [`Just`][just]         | `*`    | Just renders it's children, nothing special, good for dynamic rendering                               |
| [`Nothing`][nothing]   | `*`    | Renders nothing                                                                                       |

</article>

<article id="schedulers">

#### Schedulers

| Name                   | Props                     | Description                                                                                                                                                                                                                     |
| ---------------------- | :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`Await`][await]       | `for`, `tap`, `onPromise` | Renders it's children **when and only** if the provided promise resolves. When used with a render prop, it will always apply the promise result _(err, res)_ to the callback. It also accepts a function that returns a Promise |
| [`Stream`][stream]     | `*`                       | Render-prop component that enables working with **props streams**                                                                                                                                                               |
| [`Debounce`][debounce] | `time`, `immediate`       | Renders it's children **only** after a certain amount of time has passed since the previous render.                                                                                                                             |
| [`Delay`][delay]       | `time`                    | Renders it's children **only** after a certain amount of time has passed                                                                                                                                                        |
| [`Throttle`][throttle] | `time`                    | Renders it's children **at most** once in the specified time interval.                                                                                                                                                          |

</article>

[maybe]: conditionals/Maybe.html
[either]: conditionals/Either.html
[flip]: conditionals/Flip.html
[reverse]: conditionals/Reverse.html
[order]: conditionals/Order.html
[one]: conditionals/One.html
[some]: conditionals/Some.html
[constant]: conditionals/Constant.html
[pure]: conditionals/Pure.html
[just]: conditionals/Just.html
[nothing]: conditionals/Nothing.html
[await]: schedulers/Await.html
[stream]: schedulers/Stream.html
[debounce]: schedulers/Debounce.html
[delay]: schedulers/Delay.html
[throttle]: schedulers/Throttle.html
