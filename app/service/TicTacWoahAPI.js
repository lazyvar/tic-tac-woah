export default class TicTacWoahAPI {

  static singleton = null

  static shared() {
    if (TicTacWoahAPI.singleton === null) {
      TicTacWoahAPI.singleton = new TicTacWoahAPI()
    }

    return this.singleton
  }

  constructor(token) {
    this.baseUrl = 'http://api.tic-tac-woah.com'
  }

  setToken = (token) => {
    this.token = token
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    }
  }

  login = async (username, password) => {
    const response = await fetch(`${this.baseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })

    const json = await response.json()

    if (response.status != 200) {
      throw json
    }

    return json
  }

  refreshToken = async () => {
    const response = await fetch(`${this.baseUrl}/user/self`, {
      method: 'GET',
      headers: this.defaultHeaders
    })

    const json = await response.json()

    if (response.status != 200) {
      throw json
    }

    return json
  }

  signUp = async (username, password, confirmPassword, avatar) => {
    const response = await fetch(`${this.baseUrl}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        avatar: avatar,
      }),
    })

    const json = await response.json()

    if (response.status != 200) {
      throw json
    }

    return json
  }

  getGames = async () => {
    const response = await fetch(`${this.baseUrl}/game`, {
      method: 'GET',
      headers: this.defaultHeaders,
    })

    const json = await response.json()

    if (response.status != 200) {
      throw json
    }

    return json
  }

  createChallenge = async (username) => {
    const response = await fetch(`${this.baseUrl}/game/${username}`, {
      method: 'POST',
      headers: this.defaultHeaders,
    })

    const json = await response.json()

    if (response.status != 200) {
      throw json
    }

    return json
  }

  getGame = async (id) => {
    const response = await fetch(`${this.baseUrl}/game/${id}`, {
      method: 'GET',
      headers: this.defaultHeaders,
    })

    const json = await response.json()

    if (response.status != 200) {
      throw json
    }

    return json
  }

  makeMove = async (gameState, i, j) => {
    const response = await fetch(`${this.baseUrl}/move`, {
      method: 'POST',
      headers: this.defaultHeaders,
      body: JSON.stringify({
        gameId: gameState.id,
        moveNumber: gameState.moves.length,
        i: i,
        j: j,
      }),
    })

    const json = await response.json()

    if (response.status != 200) {
      throw json
    }

    return json
  }

}