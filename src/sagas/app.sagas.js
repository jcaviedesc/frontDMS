import { put } from 'redux-saga/effects'

//import RoutesActions from 'pads/app/reducers/routes.reducer'

export function* setAppStatus({ email, password }) {
  console.tron.log(email, password)
  if (email === 'admin@concha.com' && password === 'Admin') {
    yield put({type:'x',user:'d'})
  } else {
    console.warn('bad credentials') // eslint-disable-line
  }
}
