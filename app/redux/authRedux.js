import TicTacWoahAPI from '../service/TicTacWoahAPI'
import { Actions } from 'react-native-router-flux'
import { AsyncStorage } from 'react-native'

const TOKEN_KEY = '@TicTacWoah:token'

const api = new TicTacWoahAPI()

const types = {
  FETCHING_TOKEN: 'FETCHING_TOKEN',
  FETCHING_TOKEN_FINISHED: 'FETCHING_TOKEN_FINISHED',
  SIGN_OUT: 'SIGN_OUT',
  TRY_LOGIN_PENDING: 'TRY_LOGIN_PENDING',
  TRY_LOGIN_SUCCESS: 'TRY_LOGIN_SUCCESS',
  TRY_LOGIN_FAILURE: 'TRY_LOGIN_FAILURE',
}

export const actionCreators = {
  login: (username, password) => (dispatch) => {
  	dispatch({type: types.TRY_LOGIN_PENDING, payload: Date.now()})

  	api.login(username, password)
  		.then((response) => {
  			dispatch({type: types.TRY_LOGIN_SUCCESS, payload: response})
        AsyncStorage.setItem(TOKEN_KEY, response.token)
        Actions.replace("home")
  		})
  },
  fetchToken: () => (dispatch) => {
    dispatch({type: types.FETCHING_TOKEN})

    AsyncStorage.getItem(TOKEN_KEY).then((token) => {
      dispatch({type: types.FETCHING_TOKEN_FINISHED, payload: token})
    })
  },
  signOut: () => (dispatch) => {
    clearToken().then(() => {
      Actions.reset("login")
      dispatch({type: types.SIGN_OUT})
    })
  }
}

const initialState = {
  token: null,
  currentUser: null,
  isFetchingToken: true,
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action

  switch(type) {
    case types.TRY_LOGIN_PENDING: {
      return {
        ...state,
      }
  	}
    case types.TRY_LOGIN_SUCCESS: {
      return {
        ...state,
        token: payload.token,
        currentUser: payload,
     }
    }
    case types.FETCHING_TOKEN: {
      return {
        ...state,
        isFetchingToken: true,
     }
    }
    case types.FETCHING_TOKEN_FINISHED: {
      return {
        ...state,
        isFetchingToken: false,
        token: payload,
     }
    }
    case types.SIGN_OUT: {
      return {
        ...state,
        token: null,
        currentUser: null,
     }
    }
  	default: {
   		return state
	}
  }
}