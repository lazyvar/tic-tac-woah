import TicTacWoahAPI from '../service/TicTacWoahAPI'
import { Actions } from 'react-native-router-flux'
import { AsyncStorage } from 'react-native'

const TOKEN_KEY = '@TicTacWoah:token'

const api = new TicTacWoahAPI()

const types = {
  FETCHING_TOKEN: 'FETCHING_TOKEN',
  FETCHING_TOKEN_SUCCESS: 'FETCHING_TOKEN_SUCCESS',
  FETCHING_TOKEN_FAILURE: 'FETCHING_TOKEN_FAILURE',
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
  		}).catch((error) => {
        dispatch({type: types.TRY_LOGIN_FAILURE, payload: error})
      })
  },
  fetchToken: () => (dispatch) => {
    dispatch({type: types.FETCHING_TOKEN})

    AsyncStorage.getItem(TOKEN_KEY)
      .then((token) => {
        if (token == null) {
          dispatch({type: types.FETCHING_TOKEN_FAILURE})
        } else {
          api.refreshToken(token)
          .then((currentUser) => {
            dispatch({type: types.FETCHING_TOKEN_SUCCESS, payload: currentUser})
          })
        }
      })
  },
  signOut: () => (dispatch) => {
    AsyncStorage.removeItem(TOKEN_KEY)
      .then(() => {
        Actions.reset("login")
        dispatch({type: types.SIGN_OUT})
      })
  }
}

const initialState = {
  token: null,
  currentUser: null,
  isFetchingToken: true,
  isLoggingIn: false,
  errorMessage: null,
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action

  switch(type) {
    case types.TRY_LOGIN_PENDING: {
      return {
        ...state,
        isLoggingIn: true,
        errorMessage: null,
      }
  	}
    case types.TRY_LOGIN_SUCCESS: {
      return {
        ...state,
        token: payload.token,
        currentUser: payload,
        isLoggingIn: false,
     }
    }
    case types.TRY_LOGIN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
        errorMessage: "Username or password incorrect",
     }
    }
    case types.FETCHING_TOKEN: {
      return {
        ...state,
        isFetchingToken: true,
     }
    }
    case types.FETCHING_TOKEN_SUCCESS: {
      return {
        ...state,
        token: payload.token,
        currentUser: payload,
        isFetchingToken: false,
     }
    }
    case types.FETCHING_TOKEN_FAILURE: {
      return {
        ...state,
        isFetchingToken: false,
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