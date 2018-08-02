import TicTacWoahAPI from '../service/TicTacWoahAPI'
import { Actions } from 'react-native-router-flux'

const api = new TicTacWoahAPI()

const types = {
  SELECTED_GAME: 'SELECTED_GAME',
  EXITED_GAME: 'SELECTED_GAME',
  SELECTED_SQUARE: 'SELECTED_SQUARE',
}

export const actionCreators = {
  selectGame: (game) => (dispatch) => {
    dispatch({type: types.SELECTED_GAME, payload: game})
    Actions.push("game")
  },
  exitGameScreen: () => (dispatch) => {
    Actions.pop()
  },
  selectSquare: (i, j) => (dispatch) => {
    dispatch({type: types.SELECTED_SQUARE, payload: {i, j}})
  }
}

const initialState = {
  gameState: {
    moves: [{moveNumber: 0, i: 0, j: 0}, {moveNumber: 1, i: 0, j: 2}],
    player: {
      username: "outsider",
      avatar: "😡" 
    },
    iAmPlayer1: true
  },
  selectedSquare: null
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
      return {
        ...state,
        selectedSquare: payload
     }
    }    
  	default: {
   		return state
	 }
  }
}