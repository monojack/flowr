---
title: "Conditionals"
description: "A set of components to achieve conditional constructs"
layout: "guide"
icon: "code-file"
weight: 2
---

###### {$page.description}

<article id="conditionals-index">

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

[maybe]: Maybe.html
[either]: Either.html
[flip]: Flip.html
[reverse]: Reverse.html
[order]: Order.html
[one]: One.html
[some]: Some.html
[constant]: Constant.html
[pure]: Pure.html
[just]: Just.html
[nothing]: Nothing.html
