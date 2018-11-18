import { put, call } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import appActions from '../reducers/app.reducer'
//import RoutesActions from 'pads/app/reducers/routes.reducer'

export function* setAppStatus(api, { email, password }) {
  const response = yield call(api.authentication, email, password)
  // if (email === 'admin@concha.com' && password === 'Admin') {

  //   yield put({ type: 'x', user: 'd' })
  // } else {
  //   console.warn('bad credentials') // eslint-disable-line
  // }
  switch (response.status) {
    case 200:
      const { accessToken } = response.data
      const base64Url = accessToken.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      const payload = JSON.parse(window.atob(base64));
      delete payload.sub
      delete payload.iat
      delete payload.exp
      console.tron.log(payload, accessToken)
      localStorage.setItem('user', JSON.stringify(accessToken))
      yield put(appActions.setUser(payload))
      yield put(push('/register'))
      break 
    case 400:
    case 401:
    case 403:
    case 404:
    case 422:
    default:
      // yield put(ListingsActions.isFetching(false))
      console.tron.err(response)
  }
}
