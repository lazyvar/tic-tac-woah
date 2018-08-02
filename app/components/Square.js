import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import GameLogic from '../game/GameLogic'

const mapStateToProps = (state) => ({
  game: state.game.gameState
})

class Square extends Component {

  selectionStyle = (selection) => {
    switch (selection) {
      case 0:
        return styles.empty
      case 1:
        return styles.player1
      case 2:
        return styles.player2
    }
  }

  render() {
    const { i, j, game } = this.props

    const logic = new GameLogic(game)
    const board = logic.computeBoard()
    const selectionStyle = this.selectionStyle(board[i][j])

    return (
      <View style={[styles.baseStyle, selectionStyle]}>

      </View>
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

export default connect(mapStateToProps)(Square)