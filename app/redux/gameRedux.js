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
}

export const actionCreators = {
  selectGame: (game) => {
    Actions.push("game")
    return {type: types.SELECTED_GAME, payload: game}
  },
  exitGameScreen: () => {
    Actions.pop()
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
  }
}

const initialState = {
  gameState: null,
  potentialMove: null,
  isMakingMove: false,
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
  	default: {
   		return state
	 }
  }
}