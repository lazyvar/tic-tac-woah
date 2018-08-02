import TicTacWoahAPI from '../service/TicTacWoahAPI'
import { Actions } from 'react-native-router-flux'
import GameLogic from '../game/GameLogic'

const api = new TicTacWoahAPI()

const types = {
  SELECTED_GAME: 'SELECTED_GAME',
  EXITED_GAME: 'SELECTED_GAME',
  SELECTED_SQUARE: 'SELECTED_SQUARE',
  DESELECTED_SQUARE: 'DESELECTED_SQUARE',
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
  confirmSelectedSquare: () => (dispatch) => {
    // todo
  },
  cancelSelectedSquare: () => {
    return {type: types.DESELECTED_SQUARE}
  }
}

const initialState = {
  gameState: null,
  potentialMove: null
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
  	default: {
   		return state
	 }
  }
}