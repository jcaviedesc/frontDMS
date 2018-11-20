import { takeEvery, all, takeLatest } from 'redux-saga/effects'
import API from '../services/api'

/* ------------- Types ------------- */
import { AppTypes } from '../reducers/app.reducer'
import { UserTypes } from '../reducers/user.reducer'

/* ------------- Sagas ------------- */
import { setAppStatus, setAreasSagas, setProfilesSagas, createRadicationSagas, getAllAffairSagas } from './app.sagas'
import { registerUserSagas, getUsersSagas } from './user.sagas'


export const api = API.create()

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    takeEvery(AppTypes.LOGIN, setAppStatus, api),
    takeEvery(AppTypes.GET_AREAS, setAreasSagas, api),
    takeEvery(AppTypes.GET_PROFILES, setProfilesSagas, api),
    takeEvery(UserTypes.REGISTER_USER, registerUserSagas, api),
    takeEvery(AppTypes.GET_ALL_AFFAIRS, getAllAffairSagas, api),
    takeEvery(AppTypes.CREATE_RADICATION, createRadicationSagas, api),
    takeEvery(UserTypes.GET_ALL_USERS, getUsersSagas, api)
  ])
}
