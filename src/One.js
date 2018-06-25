import { Children, } from 'react'

const One = ({ at, children, }) => {
  return at != null ? Children.toArray(children)[at] || null : null
}

export default One
