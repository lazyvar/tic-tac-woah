import TicTacWoahAPI from '../service/TicTacWoahAPI'

const api = new TicTacWoahAPI()

const types = {
  TRY_LOGIN_PENDING: 'TRY_LOGIN_PENDING',
  TRY_LOGIN_SUCCESS: 'TRY_LOGIN_SUCCESS',
  TRY_LOGIN_FAILURE: 'TRY_LOGIN_FAILURE'
}

export const actionCreators = {
  login: (username, password) => (dispatch) => {
  	dispatch({type: types.TRY_LOGIN_PENDING, payload: Date.now()})

  	api.login(username, password)
  		.then((response) => {
  			dispatch({type: types.TRY_LOGIN_SUCCESS, payload: response.token})
  		})
  }
}

const initialState = {
  token: null
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
        token: payload,
	   }
  	}
  	default: {
   		return state
	}
  }
}