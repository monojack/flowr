import { Component, } from 'react'
import { number, node, } from 'prop-types'

/**
 * props:       a--b--c--d--e--f------------g--h--j---------k|
 *                                  time: 1000
 * isPaused:    F-------------------------T-F----------------|
 * hasNewProps: TF-T------F-T-------F-------TF-T------F-----T|
 * forceUpdate: x---------x---------x-------x---------x-----x|
 * render:      a---------d---------f-------g---------j-----k|
 */

class Throttle extends Component {
  componentDidMount () {
    this.hasNewProps = false
    this.startSampling(this.props)
  }

  componentWillReceiveProps ({ time, }) {
    this.clearTimeout()
    this.hasNewProps = true

    this.timeout = setTimeout(() => {
      this.clearInterval(this.interval)
      this.isPaused = true
    }, time)

    if (this.isPaused) {
      this.forceUpdate()
      this.startSampling({ time, })
    }
  }

  shouldComponentUpdate () {
    return false
  }

  componentDidUpdate () {
    this.hasNewProps = false
  }

  componentWillUnmount () {
    this.clearInterval()
    this.clearTimeout()
  }

  startSampling = ({ time, }) => {
    this.isPaused = false
    this.interval = setInterval(() => {
      this.hasNewProps && this.forceUpdate()
    }, time)
  }

  clearTimeout = () => {
    this.timeout && clearTimeout(this.timeout)
  }

  clearInterval = () => {
    this.interval && clearInterval(this.interval)
  }

  render () {
    return this.props.children
  }
}

Throttle.propTypes = {
  time: number,
  children: node,
}

export default Throttle
