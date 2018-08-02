/*


*/
export default class GameLogic {

  constructor(gameState) {
    this.gameState = gameState
  }

  isMyTurn = () => {
    const { moves } = this.gameState

    return this.gameState.iAmPlayer1 && moves.length % 2 == 0
  }

  computeBoard = () => {
    const board = []
    for (let i = 0; i < 9; i++) {
      board.push(new Array(9).fill(0))
    }

  	this.gameState.moves.forEach((move) => {
  		board[move.i][move.j] = move.moveNumber % 2 == 0 ? 1 : 2
  	})

  	return board
  }

  playableBigBoardSquares = (bigBoardsSmushed) => {
    const lastMove = this.gameState.moves.slice(-1)[0]
    const j = lastMove.j
    const smallBoardState = bigBoardsSmushed[j]

    if (smallBoardState == 0) {
      return [j]
    } else {
      let playableBoards = []
      
      for (let a = 0; a < 9; a++) {
        if (bigBoardsSmushed[a] === 0) {
          playableBoards.push(a)
        }
      }

      return playableBoards
    }
  }

  bigBoardsSmushed = (board) => {
    let smushed = []

    for (let i = 0; i < 9; i++) {
      smushed.push(this.boardState(board[i]))
    }

    return smushed
  }

  boardState = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]

      if (squares[a] !== 0 && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }

    return 0
  }

  makeMove = (i, j) => {

  }

}