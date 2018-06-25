import { Children, } from 'react'

const Flip = ({ when, children, }) => {
  const c = Children.toArray(children)

  return when
    ? c
      .slice(0, 2)
      .reverse()
      .concat(c.slice(2))
    : children
}

export default Flip
