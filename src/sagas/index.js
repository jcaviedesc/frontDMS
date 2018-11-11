import { takeEvery, all, takeLatest } from 'redux-saga/effects'
import API from '../services/api'

/* ------------- Types ------------- */
import { AppTypes } from '../reducers/app.reducer'

/* ------------- Sagas ------------- */
import { setAppStatus } from './app.sagas'


export const api = API.create()

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    takeEvery(AppTypes.LOGIN, setAppStatus, api),
  ])
}
