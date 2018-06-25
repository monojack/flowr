import { Component, } from 'react'

class Constant extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return this.props.children
  }
}

export default Constant
