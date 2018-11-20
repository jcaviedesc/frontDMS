import { createReducer, createActions } from 'reduxsauce'
import { Map } from 'immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setUser: ['user'],
  login: ['email', 'password'],
  getAreas: null,
  setAreas: ['areas']
})

export const AppTypes = Types
export default Creators

/* ------------- Initial State ------------ - */
export const INITIAL_STATE = Map({
  user: {},
  areas: [
    { id: 1, name: "RRHH", value: 1 },
  ]
})

/* ------------- Reducers ------------- */
const setUser = (state, { user }) =>
  state.mergeDeep(Map({
    user
  }))

const setAreas = (state, { areas }) =>
  state.mergeDeep(Map({
    areas
  }))

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_USER]: setUser,
  [Types.SET_AREAS]: setAreas
})
