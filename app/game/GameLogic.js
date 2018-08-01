/*


*/
export default class GameLogic {

  constructor(gameState) {
    this.gameState = gameState
  }

  computeBoard = () => {
  	let board = new Array(81).fill(0)

  	this.gameState.moves.forEach((move, index) => {
  		board[move.location] = index % 2 == 0 ? 1 : 2
  	})

  	return board
  }

  makeMove = (location) => {

  }

}