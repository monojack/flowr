import { Component, } from 'react'

class Delay extends Component {
  constructor () {
    super()
    this.canUpdate = false
  }
  componentDidMount () {
    const { time, } = this.props
    this.timeout = setTimeout(() => {
      this.canUpdate = true
      this.forceUpdate()
    }, time)
  }

  componentWillUnmount () {
    this.timeout && clearTimeout(this.timeout)
  }

  render () {
    return this.canUpdate ? this.props.children : null
  }
}

export default Delay
