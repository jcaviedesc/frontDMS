import { createReducer, createActions } from 'reduxsauce'
import { Map } from 'immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  login: ['email', 'password'],
  getAreas: null,
  setAreas: ['areas'],
  getProfiles: null,
  setProfiles: ['profiles'],
  createRadication: ['documentInfo',"file"],
  getAllAffairs: null,
  setAllAffairs: ['affairs']
})

export const AppTypes = Types
export default Creators

/* ------------- Initial State ------------ - */
export const INITIAL_STATE = Map({
  areas: [
    { id: 1, name: "RRHH", value: 1 },
  ],
  profiles: [],
  affairs:[]
})

/* ------------- Reducers ------------- */

const setAreas = (state, { areas }) =>
  state.mergeDeep(Map({
    areas
  }))

const setProfiles = (state, { profiles }) =>
  state.mergeDeep(Map({
    profiles
  }))

const setAllAffairs = (state, { affairs }) =>
  state.mergeDeep(Map({
    affairs
  }))
/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_AREAS]: setAreas,
  [Types.SET_PROFILES]: setProfiles,
  [Types.SET_ALL_AFFAIRS]: setAllAffairs
})
