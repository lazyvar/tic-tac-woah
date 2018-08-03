import TicTacWoahAPI from '../service/TicTacWoahAPI'
import { Actions } from 'react-native-router-flux'

const api = TicTacWoahAPI.shared()

const types = {
  FETCH_GAMES_PENDING: 'FETCH_GAMES_PENDING',
  FETCH_GAMES_SUCCESS: 'FETCH_GAMES_SUCCESS',
  FETCH_GAMES_FAILURE: 'FETCH_GAMES_FAILURE',
  CREATE_GAME_PENDING: 'CREATE_GAME_PENDING',
  CREATE_GAME_SUCCESS: 'CREATE_GAME_SUCCESS',
  CREATE_GAME_FAILURE: 'CREATE_GAME_FAILURE',
}

export const actionCreators = {
  fetchGames: () => (dispatch) => {
  	dispatch({type: types.FETCH_GAMES_PENDING, payload: Date.now()})

  	api.getGames()
  		.then((games) => {
  			dispatch({type: types.FETCH_GAMES_SUCCESS, payload: games})
  		}).catch((error) => {
        dispatch({type: types.FETCH_GAMES_FAILURE})
      })
  },
  createGame: (opponentUsername) => (dispatch) => {
    dispatch({type: types.CREATE_GAME_PENDING, payload: Date.now()})

    api.createGame(opponentUsername)
      .then((game) => {
        dispatch({type: types.CREATE_GAME_SUCCESS, payload: game})
        dispatch(actionCreators.fetchGames())
        Actions.pop()
      }).catch((error) => {
        dispatch({type: types.CREATE_GAME_FAILURE, payload: error})
      })
  }
}

const initialState = {
  isFetching: false,
  games: [],
  selectedGame: null,
  createGameErrorMessage: null,
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
    case types.FETCH_GAMES_FAILURE: {
      return {
        ...state,
        isFetching: false,
     }
    }
    case types.CREATE_GAME_PENDING: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case types.CREATE_GAME_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        games: payload
     }
    }
    case types.CREATE_GAME_FAILURE: {
      return {
        ...state,
        createGameErrorMessage: payload.message
     }
    }
  	default: {
   		return state
	 }
  }
}