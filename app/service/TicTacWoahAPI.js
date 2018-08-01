export default class TicTacWoahAPI {

  sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  constructor(token) {
    this.baseUrl = 'https://api.tic-tac-woah.com/'
    this.defaultHeaders = {
        'Authorization': `bearer ${token}`,
    }
  }

  login = (username, password) => (
    new Promise((resolve, reject) => {
        this.sleep(200)
          .then(() => {
            resolve({token: "8675309"})
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
                    player: {
                      username: "outsider",
                      avatar: "😡" 
                    },
                    myTurn: true
                  },{
                    player: {
                      username: "bean",
                      avatar: "🙂",
                    },
                    myTurn: false
                  }, {
                    player: {
                      username: "suarjio",
                      avatar: "🤗",
                    },
                    myTurn: false
                  }, {
                    player: {
                      username: "coulder",
                      avatar: "🤩",
                    },
                    myTurn: true
                  }, {
                    player: {
                      username: "jellybean",
                      avatar: "🤔",
                    },
                    myTurn: false
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