import TicTacWoahAPI from '../service/TicTacWoahAPI'
import { Actions } from 'react-native-router-flux'
import GameLogic from '../game/GameLogic'
import { gameListActionCreators } from './'

const api = TicTacWoahAPI.shared()

const types = {
  SELECTED_GAME: 'SELECTED_GAME',
  EXITED_GAME: 'SELECTED_GAME',
  SELECTED_SQUARE: 'SELECTED_SQUARE',
  DESELECTED_SQUARE: 'DESELECTED_SQUARE',
  MAKING_MOVE: 'MAKING_MOVE',
  MAKING_MOVE_SUCCESS: 'MAKING_MOVE_SUCCESS',
  MAKING_MOVE_FAILURE: 'MAKING_MOVE_FAILURE',
  RELOAD_GAME_PENDING: 'RELOAD_GAME_PENDING',
  RELOAD_GAME_SUCCESS: 'RELOAD_GAME_SUCCESS',
  RELOAD_GAME_FAILURE: 'RELOAD_GAME_FAILURE',
}

export const actionCreators = {
  selectGame: (game) => {
    Actions.push("game")
    return {type: types.SELECTED_GAME, payload: game}
  },
  selectSquare: (i, j) => {
    return {type: types.SELECTED_SQUARE, payload: {i, j}}
  },
  confirmSelectedSquare: (game, i, j) => (dispatch) => {
    dispatch({type: types.MAKING_MOVE})
    api.makeMove(game, i, j)
        .then((newGameState) => {
          dispatch({type: types.MAKING_MOVE_SUCCESS, payload: newGameState})
          dispatch(gameListActionCreators.fetchGames())
        }).catch((error) => {
          dispatch({type: types.MAKING_MOVE_FAILURE, payload: error})
        })
  },
  cancelSelectedSquare: () => {
    return {type: types.DESELECTED_SQUARE}
  },
  reloadGame: (gameId) => (dispatch) =>{
    dispatch({type: types.RELOAD_GAME_PENDING})
    api.getGame(gameId)
        .then((response) => {
          dispatch({type: types.RELOAD_GAME_SUCCESS, payload: response})
          dispatch(gameListActionCreators.fetchGames())
        }).catch((error) => {
          dispatch({type: types.RELOAD_GAME_FAILURE, payload: error})
        })
  }
}

const initialState = {
  gameState: null,
  potentialMove: null,
  isMakingMove: false,
  isReloading: false,
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action

  switch(type) {
    case types.SELECTED_GAME: {
      return {
        ...state,
        gameState: payload
     }
    }
    case types.EXITED_GAME: {
      return {
        ...state,
        gameState: null
     }
    }
    case types.SELECTED_SQUARE: {
      const { gameState } = state
      const { moves } = gameState
      
      return {
        ...state,
        potentialMove: {
          moveNumber: moves.length, 
          i: payload.i, 
          j: payload.j
        }
     }
    }
    case types.DESELECTED_SQUARE: {
      return {
        ...state,
        potentialMove: null
     }
    }
    case types.MAKING_MOVE: {
      return {
        ...state,
        isMakingMove: true
     }
    }    
    case types.MAKING_MOVE_SUCCESS: {
      return {
        ...state,
        isMakingMove: false,
        gameState: payload,
        potentialMove: null,
     }
    }    
    case types.MAKING_MOVE_FAILURE: {
      return {
        ...state,
        isMakingMove: false
     }
    }
    case types.RELOAD_GAME_PENDING: {
      return {
        ...state,
        isReloading: true,
      }
    }
    case types.RELOAD_GAME_SUCCESS: {
      return {
        ...state,
        isReloading: false,
        gameState: payload
     }
    }
    case types.RELOAD_GAME_FAILURE: {
      return {
        ...state,
        isReloading: false,
     }
    } 
  	default: {
   		return state
	 }
  }
}