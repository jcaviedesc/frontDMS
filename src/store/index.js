import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
//import logger from 'redux-logger'

export default (rootReducer, rootSaga, history) => {
  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */
  // const sagaMonitor =
  //   process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null
 
  const sagaMiddleware = createSagaMiddleware()
  const routeMiddleware = routerMiddleware(history)
  middleware.push(sagaMiddleware)
  middleware.push(routeMiddleware)
  // if (process.env.NODE_ENV === 'development') {
  //   middleware.push(logger)
  // }
  /* ------------- Assemble Middlewares ------------- */
  enhancers.push(applyMiddleware(...middleware))
  console.tron.log("dasd",enhancers)
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const createAppropriateStore =
    process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore
  const store = createAppropriateStore(rootReducer, composeEnhancers(...enhancers))

  sagaMiddleware.run(rootSaga)

  return store
}
