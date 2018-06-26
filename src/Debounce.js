import { Component, } from 'react'
class Debounce extends Component {
  componentDidMount () {
    this.canUpdate = !this.props.immediate
  }

  shouldComponentUpdate () {
    this.canUpdate = false
    this.debounce()
    return this.canUpdate
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

export default Debounce
