/* eslint-disable no-console */
const { NODE_ENV, } = (process || {}).env || {}

export function isFunction (fn) {
  return typeof fn === 'function'
}

export function isPromise (p) {
  return !!p && isFunction(p.then) && isFunction(p.catch)
}

export function flatten (list) {
  return list.reduce((acc, val) => (Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val)), [])
}

export function warn (predicate, message) {
  if (predicate && NODE_ENV !== 'production' && console) {
    console.warn(`｢warn｣: ${message}`)
  }
}
