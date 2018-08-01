import { combineReducers } from 'redux'

import * as authRedux from './authRedux'
import * as gameListRedux from './gameListRedux'
import * as gameRedux from './gameRedux'

export const reducer = combineReducers({
  auth: authRedux.reducer,
  gameList: gameListRedux.reducer,
  game: gameRedux.reducer,
})

export const authActionCreators = authRedux.actionCreators
export const gameListActionCreators = gameListRedux.actionCreators
export const gameActionCreators = gameRedux.actionCreators