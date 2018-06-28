import { Component, } from 'react'
import { node, } from 'prop-types'

class Constant extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return this.props.children
  }
}

Constant.propTypes = {
  children: node,
}

export default Constant
