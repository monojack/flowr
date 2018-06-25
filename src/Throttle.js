import { Component, } from 'react'

class Throttle extends Component {
  componentDidMount () {
    this.clearInterval()

    const { time, } = this.props
    this.interval = setInterval(() => {
      this.forceUpdate()
    }, time)
  }

  shouldComponentUpdate () {
    return false
  }

  componentWillUnmount () {
    this.clearInterval()
  }

  clearInterval = () => {
    this.interval && clearInterval(this.interval)
  }

  render () {
    return this.props.children
  }
}

export default Throttle
