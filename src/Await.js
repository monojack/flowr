import { Component, } from 'react'

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
    const { 'for': forProp, tap = () => {}, onPromise = () => {}, } = props

    let promise
    if (isFunction(forProp)) {
      promise = forProp()
      onPromise(promise)
    } else if (isPromise(forProp)) {
      promise = forProp
    } else {
      warn(
        true,
        'Await#for must be a Promise or a function that returns one. There is nothing to "wait for" so the children will be rendered immediately'
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
        this.done = true
        tap(null, res)
        this.setState({
          done: true,
          resolve: res,
        })
        this.ongoing = null
      },
      err => {
        if (this.ongoing !== promise) return
        this.done = true
        tap(err, null)
        this.setState({
          done: true,
          reject: err,
        })
        this.ongoing = null
      }
    )
  }

  render () {
    const { children, 'for': forProp, } = this.props
    const { resolve, reject, } = this.state

    if (!this.done) return null

    if (isFunction(children)) {
      return forProp ? children(reject, resolve) : null
    } else if (isPromise(children)) {
      return reject == null ? this.props.children : null
    }
  }
}

export default Await
