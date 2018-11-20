import { createReducer, createActions } from 'reduxsauce'
import { Map } from 'immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    setUser: ['user'],
    registerUser: ["newUser"]
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------ - */
export const INITIAL_STATE = Map({
    user: {},
})

const setUser = (state, { user }) =>
  state.mergeDeep(Map({
    user
  }))
/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_USER]: setUser,
  })
  