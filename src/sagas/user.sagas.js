import { put, call } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import appActions from '../reducers/app.reducer'
import userAction from '../reducers/user.reducer'

export function* registerUserSagas(api, action){
    const registerUs = action.newUser;
    registerUs.password = registerUs.email;
    const response = yield call(api.registerUser, registerUs)
    console.tron.log("newuser", action)
}