import { Children, } from 'react'
import { number, arrayOf, } from 'prop-types'

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

Some.propTypes = {
  at: arrayOf(number),
}

export default Some
