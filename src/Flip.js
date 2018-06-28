import { Children, } from 'react'
import { bool, node, } from 'prop-types'

const Flip = ({ when, children, }) => {
  const c = Children.toArray(children)

  return when
    ? c
      .slice(0, 2)
      .reverse()
      .concat(c.slice(2))
    : children
}

Flip.propTypes = {
  when: bool,
  children: node,
}

export default Flip
