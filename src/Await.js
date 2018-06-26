import { Component, } from 'react'

import { isPromise, warn, } from './utils'

class Await extends Component {
  constructor (props) {
    super(props)
    this.state = { done: false, resolve: null, reject: null, }

    const { tap = () => {}, } = props

    const promise = isPromise(props.for)
      ? props.for
      : warn(true, 'Await#for must be a Promise. An empty promise was used instead of your prop') || Promise.resolve()

    promise.then(
      res => {
        tap(null, res)
        this.setState({
          done: true,
          resolve: res,
        })
      },
      err => {
        this.setState({
          done: true,
          reject: err,
        })
        tap(err, null)
      }
    )
  }

  render () {
    const { children, } = this.props
    const { done, resolve, reject, } = this.state

    if (typeof children === 'function') {
      return done ? children(reject, resolve) : null
    }
    return done && reject == null ? this.props.children : null
  }
}

export default Await
