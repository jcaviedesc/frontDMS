import { combineReducers } from 'redux'
//import { reducer as formReducer } from 'redux-form'
//import { i18nReducer } from 'redux-react-native-i18n'

import configureStore from '../store'
import rootSaga from '../sagas'
import { reducer as appReducer } from '../reducers/app.reducer'


export default () => {
  const rootReducer = combineReducers({
    app: appReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
