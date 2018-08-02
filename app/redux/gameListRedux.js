import TicTacWoahAPI from '../service/TicTacWoahAPI'
import { Actions } from 'react-native-router-flux'

const api = new TicTacWoahAPI()

const types = {
  FETCH_GAMES_PENDING: 'FETCH_POSTS_PENDING',
  FETCH_GAMES_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_GAMES_FAILURE: 'FETCH_POSTS_FAILURE',
}

export const actionCreators = {
  fetchGames: () => (dispatch) => {
  	dispatch({type: types.FETCH_GAMES_PENDING, payload: Date.now()})

  	api.getGames()
  		.then((response) => {
  			dispatch({type: types.FETCH_GAMES_SUCCESS, payload: response.games})
  		})
  },
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
  	default: {
   		return state
	 }
  }
}