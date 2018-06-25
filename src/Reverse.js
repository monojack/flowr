import { Children, } from 'react'

const Reverse = ({ when, children, }) => {
  return when ? Children.toArray(children).reverse() : children
}

export default Reverse
