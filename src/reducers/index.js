import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
//import { reducer as formReducer } from 'redux-form'
//import { i18nReducer } from 'redux-react-native-i18n'

import configureStore from '../store'
import rootSaga from '../sagas'
import { reducer as appReducer } from '../reducers/app.reducer';
import { reducer as userReducer } from '../reducers/user.reducer'


export default (history) => {
  const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer
  })
  //return rootReducer
  return configureStore(connectRouter(history)(rootReducer), rootSaga, history)
}
