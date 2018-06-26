import { Children, } from 'react'
import { flatten, } from './utils'

const Some = ({ at, children, }) => {
  const c = Children.toArray(children)
  return at != null
    ? flatten(
      at.reduce((acc, x) => {
        acc[x] = c[x]
        return acc
      }, [])
    ) || null
    : null
}

export default Some
