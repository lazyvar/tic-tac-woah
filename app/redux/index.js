import { combineReducers } from 'redux'

import * as authRedux from './authRedux'
import * as gameListRedux from './gameListRedux'

export const reducer = combineReducers({
  auth: authRedux.reducer,
  gameList: gameListRedux.reducer,
})

export const authActionCreators = authRedux.actionCreators
export const gameListActionCreators = gameListRedux.actionCreators