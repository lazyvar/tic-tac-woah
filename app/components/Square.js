import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import GameLogic from '../game/GameLogic'

import { gameActionCreators } from '../redux'

const mapStateToProps = (state) => ({
  game: state.game.gameState,
  selectedSquare: state.game.selectedSquare,
  playableSmallBoards: state.game.playableSmallBoards,
})

const mapDispatchToProps = (dispatch) => {
  return {
    selectSquare: (i, j) => {
      dispatch(gameActionCreators.selectSquare(i, j))
    },
  }
}

class Square extends Component {

  configuration = (selection) => {
    const { selectSquare, selectedSquare, i, j, game } = this.props

    if (selectedSquare !== null && selectedSquare.i == i && selectedSquare.j == j) {

      if (game.iAmPlayer1) {
        return {selectionStyle: styles.player1}
      } else {
        return {selectionStyle: styles.player2}
      }
    }

    switch (selection) {
      case 0:
        return {selectionStyle: styles.empty, onPress: () => { selectSquare(i, j) }}
      case 1:
        return {selectionStyle: styles.player1}
      case 2:
        return {selectionStyle: styles.player2}
    }
  }

  render() {
    const { i, j, game, selectSquare, playableSmallBoards } = this.props

    const logic = new GameLogic(game)
    const board = logic.computeBoard()
    const { selectionStyle, onPress } = this.configuration(board[i][j])

    const isMyTurn = new GameLogic(game).isMyTurn()
    const playable = playableSmallBoards && playableSmallBoards.includes(i)

    return (
      <TouchableOpacity disabled={!isMyTurn || !playable} onPress={onPress} style={[styles.baseStyle, selectionStyle]}>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  baseStyle: {
    borderRadius: 4,
    borderWidth: 0.5,
    height: '90.5%',
    width: '90.5%',
  },
  empty: {
    backgroundColor: 'white',
    borderColor: 'white',
  },
  player1: {
    backgroundColor: 'steelblue',
    borderColor: 'steelblue',
  },
  player2: {
    backgroundColor: 'firebrick',
    borderColor: 'firebrick',
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Square)