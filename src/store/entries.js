import { assign, filter, remove } from 'lodash'
import data from '../utils/sample.json'
// Constants
// ------------------------------------
export const GET_ENTRIES = 'GET_ENTRIES'
export const RECEIVE_ENTRIES_SUCCESS = 'RECEIVE_ENTRIES_SUCCESS'
export const RECEIVE_ENTRIES_FAILURE = 'RECEIVE_ENTRIES_FAILURE'
export const CLEAR_ENTRIES = 'CLEAR_ENTRIES'

export const getEntries = () => {
  return (dispatch) => {
    dispatch({ type: GET_ENTRIES })
      setTimeout(() => {
        const entries = data['entries']
        dispatch({ type: RECEIVE_ENTRIES_SUCCESS, entries: entries })
      }, 3000)
  }
}

export const clearEntries = () => {
  return dispatch => {
    dispatch({ type: CLEAR_ENTRIES })
  }
}


export const actions = {
  getEntries,
  clearEntries
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [GET_ENTRIES] : (state, action) => { return assign({}, state, { isLoading: true }) },
  [RECEIVE_ENTRIES_SUCCESS] : (state, action) => { return assign({}, state, action, { isLoading: false }) },
  [RECEIVE_ENTRIES_FAILURE] : (state, action) => { return assign({}, state, action.error, { isLoading: false }) },
  [CLEAR_ENTRIES] : (state, action) => initialState
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isLoading: false,
  entries: [],
  error: ''
}

export default function fileReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
