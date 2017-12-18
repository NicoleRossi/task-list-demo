import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import taskApp from './reducers'
import App from './App'
import './index.css'

// So we can dispatch multiple (e.g. 2) action objects from a single "action"
// (e.g. update the "tasksUpdated" boolean plus actual task action like "rename", etc.);
// Since your instructions didn't mention 'redux-promise', I borrowed this function
// from this video:
// https://egghead.io/lessons/javascript-redux-dispatching-actions-asynchronously-with-thunks
const dispatchThunk = store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch)
    : next(action)

// So we can dispatch promises resulting from calls to 
// 'http://cfassignment.herokuapp.com/nicolerossi/tasks'
// Since your instructions didn't mention 'redux-promise', I borrowed this function
// from this video:
// https://egghead.io/lessons/javascript-redux-wrapping-dispatch-to-recognize-promises
const dispatchPromise = store => next => action => {
  if (typeof action.then === 'function') {
    return action.then(next)
  }
  return next(action)
}
let middlewares = [ dispatchThunk, dispatchPromise ]

// To make debugging in dev mode easier, I borrowed this logging function/snippet from
// this video: 
// https://egghead.io/lessons/javascript-redux-wrapping-dispatch-to-log-actions
if (process.env.NODE_ENV !== 'production') {
  const dispatchLogger = store => next => action => {
    console.group(action.type)
    console.log('%c prev state', 'color: gray', store.getState())
    console.log('%c action', 'color: blue', action)
    const returnValue = next(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }

  middlewares.push(dispatchLogger)
}

// This lovely video taught me everything I know about middleware (and heavily influenced
// the design of this file:
// https://egghead.io/lessons/javascript-redux-applying-redux-middleware

let store = createStore(taskApp, applyMiddleware(...middlewares))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
