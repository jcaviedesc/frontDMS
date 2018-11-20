import { createReducer, createActions } from 'reduxsauce'
import { Map } from 'immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    setUser: ['user'],
    registerUser: ["newUser"],
    getAllUsers: null,
    setAllUsers: ['users']
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------ - */
export const INITIAL_STATE = Map({
    user: {},
    allUsers:[]
})

const setUser = (state, { user }) =>
  state.mergeDeep(Map({
    user
  }))

const setAllUsers = (state, { users }) =>
  state.mergeDeep(Map({
    allUsers:users
  }))
/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_USER]: setUser,
    [Types.SET_ALL_USERS]: setAllUsers
  })
  