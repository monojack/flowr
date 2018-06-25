import { Children, } from 'react'

const Some = ({ at, children, }) => {
  const c = Children.toArray(children)
  return at != null
    ? at.reduce((acc, x) => {
      acc.push(c[x])
      return acc
    }, []) || null
    : null
}

export default Some
