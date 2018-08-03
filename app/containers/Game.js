import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { gameActionCreators } from '../redux'

import FormButton from '../components/FormButton'
import PlayerLabel from '../components/PlayerLabel'
import BigBoard from '../components/BigBoard'
import GameLogic from '../game/GameLogic'

const mapStateToProps = (state) => ({
  gameState: state.game.gameState,
  potentialMove: state.game.potentialMove,
  currentUser: state.auth.currentUser,
})

const mapDispatchToProps = (dispatch) => {
  return {
    selectSquare: (i, j) => {
      dispatch(gameActionCreators.selectSquare(i, j))
    },
    confirmSelectedSquare: (gameState, i, j) => {
      dispatch(gameActionCreators.confirmSelectedSquare(gameState, i, j))
    },
    cancelSelectedSquare: () => {
      dispatch(gameActionCreators.cancelSelectedSquare())
    }
  }
}

class Game extends Component {

  confirmSelectedSquare = () => {
    const { gameState, potentialMove, confirmSelectedSquare } = this.props
    
    confirmSelectedSquare(gameState, potentialMove.i, potentialMove.j)
  }

  render() {
    const { gameState, currentUser, potentialMove, selectSquare, cancelSelectedSquare} = this.props

    /* compute things given gameState */
    const gameLogic = new GameLogic(gameState)
    const board = gameLogic.computeBoard()
    const bigBoardSquares = gameLogic.bigBoardSquares(board)
    const playableSmallBoards = gameLogic.playableSmallBoards(bigBoardSquares)
    const isMyTurn = gameLogic.isMyTurn(currentUser.id)
    const showButtons = potentialMove !== null

    let title
    if (isMyTurn) {
      title = "Choose wisely."
    } else {
      title = "Drink some kombucha while you wait."
    }

    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.gameContainer}>
          <BigBoard 
            style={styles.bigBoard} 
            board={board} 
            bigBoardSquares={bigBoardSquares}
            isMyTurn={isMyTurn} 
            playableSmallBoards={playableSmallBoards} 
            potentialMove={potentialMove}
            selectSquare={selectSquare}
          />
        </View>
        <Text style={styles.textStyle}> {title} </Text>
        <PlayerLabel player1={gameState.player1} player2={gameState.player2} />
          { showButtons &&
          <FormButton backgroundColor='firebrick' onPress={cancelSelectedSquare}>
            Cancel
          </FormButton>
          }
          { showButtons &&
          <FormButton
            backgroundColor='green'
            onPress={this.confirmSelectedSquare}
            >
            Submit
          </FormButton>
          }
        }
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  gameContainer: {
    width: "100%",
    height: Dimensions.get('window').width,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: 'white',
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)