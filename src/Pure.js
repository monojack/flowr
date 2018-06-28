import { Component, } from 'react'
import shallowEqual from 'fbjs/lib/shallowEqual'

class Pure extends Component {
  shouldComponentUpdate (nextProps) {
    const { children: cChildren, ...current } = this.props
    const { children: nChildren, ...next } = nextProps

    return !shallowEqual(current, next)
  }

  render () {
    return this.props.children
  }
}

export default Pure
