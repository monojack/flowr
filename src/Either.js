import { Children, } from 'react'
import { bool, node, } from 'prop-types'

import { warn, } from './utils'

const Either = ({ when, children, }) => {
  warn(
    Children.count(children) < 2,
    '"Either" requires two children. You can use "Maybe" if you want to do conditional rendering'
  )

  warn(Children.count(children) > 2, '"Either" requires two children. Only the first two will be considered.')

  const [ left = null, right = null, ] = Children.toArray(children)
  return when ? left : right
}

Either.propTypes = {
  when: bool,
  children: node,
}

export default Either
