import { Component, } from 'react'
import { number, bool, node, } from 'prop-types'

/**
 * - = 100ms
 * props:       a--b--c--d----------e--f--g----h---i-----|
 *
 *                             time: 500
 *                             immediate: false
 * canUpdate:   T--F--F--F----T-----F--F--F----F---F----T|
 * forceUpdate: --------------T-------------------------T|
 * render:      a-------------d-------------------------i|
 *
 *                             time: 500
 *                             immediate: true
 * canUpdate:   F--F--F--F----T-----F--F--F----F---F----T|
 * forceUpdate: --------------T-------------------------T|
 * render:      --------------d-------------------------i|
 */

class Debounce extends Component {
  constructor (props) {
    super(props)

    this.canUpdate = !this.props.immediate
  }

  componentWillReceiveProps () {
    this.canUpdate = false
    this.debounce()
  }

  shouldComponentUpdate () {
    return false
  }

  componentWillUnmount () {
    this.clearTimeout()
  }

  clearTimeout = () => {
    this.timeout && clearTimeout(this.timeout)
  }

  debounce = () => {
    this.clearTimeout()

    const { time, } = this.props
    this.timeout = setTimeout(() => {
      this.canUpdate = true
      this.forceUpdate()
    }, time)
  }

  render () {
    return this.canUpdate ? this.props.children : null
  }
}

Debounce.propTypes = {
  time: number,
  immediate: bool,
  children: node,
}

Debounce.defaultProps = {
  immediate: false,
}

export default Debounce
