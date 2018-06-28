import { bool, } from 'prop-types'

import { Children, } from 'react'

const Reverse = ({ when = true, children = null, }) => {
  return when ? Children.toArray(children).reverse() : children
}

Reverse.propTypes = {
  when: bool,
}

export default Reverse
