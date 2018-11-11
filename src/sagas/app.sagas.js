import { put, call } from 'redux-saga/effects'

import appActions from '../reducers/app.reducer'
//import RoutesActions from 'pads/app/reducers/routes.reducer'

export function* setAppStatus(api, { email, password }) {
  console.tron.log(["haaaa",email, password])

  const response = yield call(api.authentication, email, password)
  console.tron.log(response)
  // if (email === 'admin@concha.com' && password === 'Admin') {

  //   yield put({ type: 'x', user: 'd' })
  // } else {
  //   console.warn('bad credentials') // eslint-disable-line
  // }
  switch (response.status) {
    case 200:
      const { accessToken } = response.data
      yield put(appActions.setUser({token: accessToken}))
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
