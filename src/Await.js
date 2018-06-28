import { Component, } from 'react'
import { func, node, oneOfType, instanceOf, } from 'prop-types'

import { isFunction, isPromise, warn, } from './utils'

class Await extends Component {
  componentDidMount () {
    this.done = false
    this.request(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.done = false
    this.request(nextProps)
  }

  ongoing = null
  done = false
  state = { resolve: null, reject: null, }

  request = props => {
    const { 'for': forProp, onPromise = () => {}, } = props

    let promise
    if (isFunction(forProp)) {
      promise = forProp()
      onPromise(promise)
    } else if (isPromise(forProp)) {
      promise = forProp
    } else {
      warn(
        true,
        `Await#for must be a Promise or a function that returns one.
        There is nothing to "wait for" so the children will be rendered immediately`
      )
    }

    if (!promise) {
      this.done = true
      return this.setState({
        resolve: null,
        reject: null,
      })
    }

    this.ongoing = promise
    promise.then(
      res => {
        if (this.ongoing !== promise) return
        this.update(null, res)
      },
      err => {
        if (this.ongoing !== promise) return
        this.update(err, null)
      }
    )
  }

  update = (reject, resolve) => {
    const { tap = () => {}, } = this.props
    this.done = true
    tap(reject, resolve)
    this.setState({
      done: true,
      resolve,
      reject,
    })
    this.ongoing = null
  }

  render () {
    const { children, 'for': forProp, } = this.props
    const { resolve, reject, } = this.state

    if (!this.done) return null

    if (isFunction(children)) {
      return forProp ? children(reject, resolve) : null
    } else if (isPromise(children)) {
      return reject == null ? children : null
    }
  }
}

Await.propTypes = {
  'for': oneOfType([ func, instanceOf(Promise), ]),
  children: oneOfType([ node, func, ]),
  tap: func,
  onPromise: func,
}

export default Await
