import { combineReducers } from 'redux'

import * as authRedux from './authRedux'

export const reducer = combineReducers({
  auth: authRedux.reducer,
})

export const authActionCreators = authRedux.actionCreators
