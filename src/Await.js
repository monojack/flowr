import { Component, } from 'react'

import { isFunction, isPromise, warn, } from './utils'

class Await extends Component {
  constructor (props) {
    super(props)
    this.state = { done: false, resolve: null, reject: null, }

    const { tap = () => {}, onPromise = () => {}, } = props

    let promise
    if (isFunction(props.for)) {
      promise = props.for()
      onPromise(promise)
    } else if (isPromise(props.for)) {
      promise = props.for
    } else {
      warn(
        true,
        'Await#for must be a Promise or a function that returns one. There is nothing to "wait for" so the children will be rendered immediately'
      )
    }

    if (!promise) {
      return this.setState({
        done: true,
        resolve: null,
        reject: null,
      })
    }

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
