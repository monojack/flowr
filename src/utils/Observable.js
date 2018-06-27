// stolen from https://github.com/staltz/toy-rx

const hasSymbols = () => typeof Symbol === 'function'
const hasSymbol = name => hasSymbols() && Boolean(Symbol[name])
const getSymbol = name => (hasSymbol(name) ? Symbol[name] : '@@' + name)

if (hasSymbols() && !hasSymbol('observable')) {
  Symbol.observable = Symbol('observable')
}

function map (transformFn) {
  const outObservable = Observable.create(outObserver => {
    const inObserver = {
      next: x => {
        try {
          var y = transformFn(x)
        } catch (e) {
          outObserver.error(e)
          return
        }
        outObserver.next(y)
      },
      error: e => {
        outObserver.error(e)
      },
      complete: () => {
        outObserver.complete()
      },
    }
    return this.subscribe(inObserver)
  })
  return outObservable
}

class Subscription {
  constructor (unsubscribe) {
    this.unsubscribe = unsubscribe
  }
}

class Subscriber extends Subscription {
  constructor (observer) {
    super(function unsubscribe () {})
    this.observer = observer
  }

  next (x) {
    this.observer.next(x)
  }

  error (e) {
    this.observer.error(e)
    this.unsubscribe()
  }

  complete () {
    this.observer.complete()
    this.unsubscribe()
  }
}

class Observable {
  constructor (subscribe) {
    this.subscribe = subscribe
  }

  static create (subscribe) {
    return new Observable(function internalSubscribe (observer) {
      const subscriber = new Subscriber(observer)
      const subscription = subscribe(subscriber)
      subscriber.unsubscribe = subscription.unsubscribe.bind(subscription)
      return subscription
    })
  }

  [getSymbol('observable')] () {
    return this
  }
}

Observable.prototype.map = map

export class Subject extends Observable {
  constructor () {
    super(function subscribe (observer) {
      this.observers.push(observer)
      return new Subscription(() => {
        const index = this.observers.indexOf(observer)
        if (index >= 0) this.observers.splice(index, 1)
      })
    })
    this.observers = []
  }

  next (x) {
    this.observers.forEach(observer => observer.next(x))
  }

  error (e) {
    this.observers.forEach(observer => observer.error(e))
  }

  complete () {
    this.observers.forEach(observer => observer.complete())
  }
}
