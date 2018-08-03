export default class TicTacWoahAPI {

  sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  constructor(token) {
    this.baseUrl = 'http://api.tic-tac-woah.com'
  }

  setToken = (token) => {
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

      if (response.status != 200) {
        throw response.json()
      }

      return response.json()
  }

  refreshToken = (token) => (
      new Promise((resolve, reject) => {
        this.sleep(200)
          .then(() => {
            resolve({
              username: "mack",
              avatar: "😋",
              token: "8675309",
              }
            )
          })
    })
  )

  signUp = (username, password, confirm_password) => (
    new Promise((resolve, reject) => {
      resolve({token: "8675309"})
    })
  )

  getGames = () => (
    new Promise((resolve, reject) => {
      this.sleep(600)
          .then(() => {
            resolve({
                games: [
                  {
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
                    }],
                    player: {
                      username: "outsider",
                      avatar: "😡" 
                    },
                    myTurn: true
                  }
                ]
            })
          })
    })
  )

  createChallenge = (username) => (
    new Promise((resolve, reject) => {
      resolve({})
    })
  )

  gameStatus = (id) => (
    new Promise((resolve, reject) => {
      resolve({
        state: [
          [0, 0, 0, 0, 0, 0, 0, 0, 2],
          [0, 1, 0, 0, 2, 0, 0, 0, 2],
          [0, 0, 0, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 2, 0, 0, 1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 2, 0],
          [0, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0, 2, 0, 0]
        ]
      })
    })
  )

}