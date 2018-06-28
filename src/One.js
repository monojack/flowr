import { Children, } from 'react'
import { number, } from 'prop-types'

const One = ({ at, children, }) => {
  return at != null ? Children.toArray(children)[at] || null : null
}

One.propTypes = {
  at: number,
}

export default One
