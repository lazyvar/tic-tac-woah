/*
  GamesLogic.js
  
  Handles all game state logic
*/
export default class GameLogic {

  /* created from a gameState object which primarily contains an array of moves */
  constructor(gameState) {
    this.gameState = gameState
  }

  isPlayer1 = (playerId) => {
    return this.gameState.player1.id === playerId
  }

  /* it's my turn if I am player 1 and the move count is even */
  isMyTurn = (playerId) => {
    const { moves } = this.gameState

    return this.isPlayer1(playerId) && moves.length % 2 === 0 ||
           !this.isPlayer1(playerId) && moves.length % 2 === 1
  }

  /* creates a 2D array represnting the board state given the gameState move list */
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

  /* 
    calculates a 1D array for the state of the big board 
    Grid position goes like
    0 | 1 | 2
    3 | 4 | 5
    6 | 7 | 8
  */
  bigBoardSquares = (board) => {
    let bigBoardState = []

    for (let i = 0; i < 9; i++) {
      bigBoardState.push(GameLogic.boardState(board[i]))
    }

    return bigBoardState
  }

  /* returns an array of small boards where moves are allowed to be made */ 
  playableSmallBoards = (bigBoardSquares) => {
    const lastMove = this.gameState.moves.slice(-1)[0]
    const j = lastMove.j
    const smallBoardState = bigBoardSquares[j]

    if (smallBoardState == 0) {
      return [j]
    } else {
      let playableBoards = []
      
      for (let index = 0; index < 9; index++) {
        if (bigBoardSquares[index] === 0) {
          playableBoards.push(index)
        }
      }

      return playableBoards
    }
  }

  /* 
    determines the current state of affairs i.e. calculating a win 
    board state enum defined as
      0: no winner
      1: player1
      2: player2
    :)
  */
  static boardState = (squares) => {
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

  /* communication is 🔑 */
  gameMessage = (currentUserId) => {
    const iAmPlayer1 = this.isPlayer1(currentUserId)
    const isMyTurn = this.isMyTurn(currentUserId)
    const game = this.gameState

    let opponent
    if (iAmPlayer1) {
      opponent = game.player2
    } else {
      opponent = game.player1
    }

    if (isMyTurn) {
      return `${opponent.avatar} Your move against ${opponent.username}`
    } else {
      return `${opponent.avatar} ${opponent.username} is thinking...`
    }
  } 

}