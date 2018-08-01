import TicTacWoahAPI from '../service/TicTacWoahAPI'
import { Actions } from 'react-native-router-flux'

const api = new TicTacWoahAPI()

const types = {
  FETCH_GAMES_PENDING: 'FETCH_POSTS_PENDING',
  FETCH_GAMES_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_GAMES_FAILURE: 'FETCH_POSTS_FAILURE',
  SELECTED_GAME: 'SELECTED_GAME',
  DESELECTED_GAME: 'SELECTED_GAME',
}

export const actionCreators = {
  fetchGames: () => (dispatch) => {
  	dispatch({type: types.FETCH_GAMES_PENDING, payload: Date.now()})

  	api.getGames()
  		.then((response) => {
  			dispatch({type: types.FETCH_GAMES_SUCCESS, payload: response.games})
  		})
  },
  selectGame: (game) => (dispatch) => {
    dispatch({type: types.SELECTED_GAME, payload: game})
    Actions.push("game")
  },
  exitGameScreen: () => (dispatch) => {
    Actions.pop()
  }
}

const initialState = {
  isFetching: false,
  games: [],
  selectedGame: null,
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action

  switch(type) {
    case types.FETCH_GAMES_PENDING: {
      return {
        ...state,
        isFetching: true,
      }
  	}
  	case types.FETCH_GAMES_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        games: payload
	   }
  	}
    case types.SELECTED_GAME: {
      return {
        ...state,
        selectedGame: payload
     }
    }
  	default: {
   		return state
	 }
  }
}