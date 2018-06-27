/* eslint-disable no-console */
const { NODE_ENV, } = (process || {}).env || {}

export default function warn (predicate, message) {
  if (predicate && NODE_ENV !== 'production' && console) {
    console.warn(`｢warn｣: ${message}`)
  }
}
