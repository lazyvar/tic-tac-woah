import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { gameActionCreators } from '../redux'

import FormButton from '../components/FormButton'
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
    const title = gameLogic.gameMessage(currentUser.id)
    const showButtons = potentialMove !== null

    return (
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
        <View style={styles.container}>
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  gameContainer: {
    width: "100%",
    height: Dimensions.get('window').width,
    marginTop: 24,
    marginBottom: 12,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)