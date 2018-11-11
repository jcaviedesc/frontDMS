import { put } from 'redux-saga/effects'

//import RoutesActions from 'pads/app/reducers/routes.reducer'

export function* setAppStatus({ status }) {
  if (status.email === 'A' && status.password === 'A') {
    yield put('tabbar')
  } else {
    console.warn('bad credentials') // eslint-disable-line
  }
}
