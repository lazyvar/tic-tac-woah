import TicTacWoahAPI from '../service/TicTacWoahAPI'
import { Actions } from 'react-native-router-flux'
import GameLogic from '../game/GameLogic'

const api = new TicTacWoahAPI()

const types = {
  SELECTED_GAME: 'SELECTED_GAME',
  EXITED_GAME: 'SELECTED_GAME',
  SELECTED_SQUARE: 'SELECTED_SQUARE',
  DESELECTED_SQUARE: 'DESELECTED_SQUARE',
  CONFRIM_SELECTED_SQUARE: 'CONFRIM_SELECTED_SQUARE',  
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
  confirmSelectedSquare: () => {
    return {type: types.CONFRIM_SELECTED_SQUARE}
  },
  cancelSelectedSquare: () => {
    return {type: types.DESELECTED_SQUARE}
  }
}

const initialState = {
  gameState: {
    moves: [{
      moveNumber: 0, 
      i: 0, 
      j: 0
    }, {
      moveNumber: 1, 
      i: 0, 
      j: 2
    },{
      moveNumber: 2, 
      i: 2, 
      j: 2
    }, {
      moveNumber: 3, 
      i: 2, 
      j: 0
    },{
      moveNumber: 4, 
      i: 0, 
      j: 3
    }, {
      moveNumber: 5, 
      i: 3, 
      j: 0
    },{
      moveNumber: 6, 
      i: 0, 
      j: 6
    }, {
      moveNumber: 7, 
      i: 6, 
      j: 6
    },{
      moveNumber: 8, 
      i: 6, 
      j: 3
    }, {
      moveNumber: 9, 
      i: 3, 
      j: 2
    },{
      moveNumber: 10, 
      i: 2, 
      j: 5
    }, {
      moveNumber: 11, 
      i: 5, 
      j: 2
    },{
      moveNumber: 12, 
      i: 2, 
      j: 8
    }, {
      moveNumber: 13, 
      i: 8, 
      j: 8
    },{
      moveNumber: 14, 
      i: 8, 
      j: 3
    }, {
      moveNumber: 15, 
      i: 3, 
      j: 1
    }],
    player: {
      username: "outsider",
      avatar: "😡" 
    },
    iAmPlayer1: true
  },
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
    // case types.CONFRIM_SELECTED_SQUARE: {
    //   const { gameState } = state
    //   const { moves } = gameState
    //   const { i, j } = state.potentialMove

    //   moves.push({moveNumber: moves.length, i, j})

    //   const newGameState = {
    //     ...gameState,
    //     moves,
    //   }

    //   return {
    //     ...state,
    //     potentialMove: null,
    //     gameState: newGameState,
    //   }
    // }
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