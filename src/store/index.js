import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
//import logger from 'redux-logger'

export default (rootReducer, rootSaga) => {
  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */
  const sagaMonitor =
    process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)
  // if (process.env.NODE_ENV === 'development') {
  //   middleware.push(logger)
  // }
  /* ------------- Assemble Middlewares ------------- */
  enhancers.push(applyMiddleware(...middleware))

  const createAppropriateStore =
    process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  sagaMiddleware.run(rootSaga)

  return store
}
