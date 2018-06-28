import { Children, } from 'react'
import { number, arrayOf, } from 'prop-types'

const Order = ({ sort, children, }) => {
  const c = Children.toArray(children)

  return sort
    ? sort.reduce((acc, x, i) => {
      acc[i] = c[x]
      return acc
    }, [])
    : children
}

Order.propTypes = {
  sort: arrayOf(number),
}

export default Order
