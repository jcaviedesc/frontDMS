import { put, call } from 'redux-saga/effects'
// import { push } from 'connected-react-router'

// import appActions from '../reducers/app.reducer'
 import userActions from '../reducers/user.reducer'

//transform
import apiTransform  from '../services/api_transform'

export function* registerUserSagas(api, action){
    const registerUs = action.newUser;
    registerUs.password = registerUs.email;
    const response = yield call(api.registerUser, registerUs)
    console.tron.log("newuser", action)
}

export function* getUsersSagas(api, action) {
    const response = yield call(api.getUsers)
    let users;
    switch (response.status) {
      case 200:
        users = apiTransform.getUsers(response.data)
        yield put(userActions.setAllUsers(users))    
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
  