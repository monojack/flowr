import isFunction from './isFunction'

export default function isPromise (p) {
  return !!p && isFunction(p.then) && isFunction(p.catch)
}
