import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
//import logger from 'redux-logger'

export default (rootReducer, rootSaga, history) => {
  const middleware = []

  /* ------------- Saga Middleware ------------- */
  // const sagaMonitor =
  //   process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null

  const sagaMiddleware = createSagaMiddleware()
  const routeMiddleware = routerMiddleware(history)
  // if (process.env.NODE_ENV === 'development') {
  //   middleware.push(logger)
  // }
  /* ------------- Assemble Middlewares ------------- */
  middleware.push(sagaMiddleware)
  middleware.push(routeMiddleware)

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // in dev mode, we'll create the store through Reactotron
  const createAppropriateStore =
    process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore
  
  const store = createAppropriateStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middleware))
  );

  sagaMiddleware.run(rootSaga)

  return store
}
