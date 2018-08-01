/*


*/
export default class GameLogic {

  constructor(gameState) {
    this.gameState = gameState
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

  makeMove = (i, j) => {

  }

}