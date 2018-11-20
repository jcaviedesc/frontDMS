import { put, call } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import appActions from '../reducers/app.reducer'
import userAction from '../reducers/user.reducer'
//import RoutesActions from 'pads/app/reducers/routes.reducer'

export function* setAppStatus(api, { email, password }) {
  const response = yield call(api.authentication, email, password)
  switch (response.status) {
    case 200:
      const { accessToken } = response.data
      const base64Url = accessToken.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      const payload = JSON.parse(window.atob(base64));
      delete payload.sub
      delete payload.iat
      delete payload.exp
      console.tron.log(JSON.stringify(accessToken), accessToken)
      localStorage.setItem('user', accessToken)
      yield put(userAction.setUser(payload))
      yield put(push('/dashboard'))
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

export function* setAreasSagas(api, action) {
  const authentication = localStorage.getItem('user')
  const response = yield call(api.getAreas, authentication)
  switch (response.status) {
    case 200:
      const { affairs } = response.data;
      yield put(appActions.setAreas(affairs))    
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

export function* setProfilesSagas(api, action) {
  const authentication = localStorage.getItem('user')
  const response = yield call(api.getProfiles, authentication)
  switch (response.status) {
    case 200:
      const { roles } = response.data
      yield put(appActions.setProfiles(roles))    
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

export function* getAllAffairSagas(api, action) {
  const response = yield call(api.getAllAffairs)
  switch (response.status) {
    case 200:
      const { affairs } = response.data
      yield put(appActions.setAllAffairs(affairs))    
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

/**
 * obtien los datos del form document y se conecta con el api para crear un radicado
 */
export function* createRadicationSagas(api, action) {
  const authentication = localStorage.getItem('user')
  const response = yield call(api.getProfiles, authentication)
  switch (response.status) {
    case 200:
      const { roles } = response.data
      yield put(appActions.setProfiles(roles))    
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

