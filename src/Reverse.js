import { bool, } from 'prop-types'

import { Children, } from 'react'

const Reverse = ({ when, children = null, }) => {
  return when ? Children.toArray(children).reverse() : children
}

Reverse.propTypes = {
  when: bool,
}

export default Reverse
