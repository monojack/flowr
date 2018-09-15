import { Component, } from 'react'
import { func, node, oneOfType, instanceOf, } from 'prop-types'

import { isFunction, isPromise, warn, } from './utils'

class Await extends Component {
  componentDidMount () {
    this.mounted = true
    this.request(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.request(nextProps)
  }

  shouldComponentUpdate () {
    return false
  }

  componentWillUnmount () {
    this.mounted = false
  }

  ongoing = null
  resolve = null
  reject = null

  request = props => {
    if (!this.mounted) return

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
      this.resolve = null
      this.reject = null
    }

    this.ongoing = promise
    promise.then(
      res => {
        if (this.ongoing && this.ongoing !== promise) return
        this.update(null, res)
      },
      err => {
        if (this.ongoing && this.ongoing !== promise) return
        this.update(err, null)
      }
    )
  }

  update = (reject, resolve) => {
    if (!this.mounted) return

    const { tap = () => {}, } = this.props
    tap(reject, resolve)

    this.resolve = resolve
    this.reject = reject
    this.ongoing = null

    this.forceUpdate()
  }

  render () {
    const { children, 'for': forProp, } = this.props
    const { resolve, reject, } = this

    if (!resolve && !reject) return null

    if (isFunction(children)) {
      return forProp ? children(reject, resolve) : null
    }

    return !reject ? children : null
  }
}

Await.propTypes = {
  'for': oneOfType([ func, instanceOf(Promise), ]),
  children: oneOfType([ node, func, ]),
  tap: func,
  onPromise: func,
}

export default Await
