import { Children, } from 'react'

const Order = ({ sort, children, }) => {
  const c = Children.toArray(children)

  return sort
    ? sort.reduce((acc, x, i) => {
      acc[i] = c[x]
      return acc
    }, [])
    : children
}

export default Order
