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
        return {
          ...baseStyle,
          ...empty
        }
      case 1:
        return {
          ...baseStyle,
          ...player1
        }
      case 2:
        return {
          ...baseStyle,
          ...player2
        }
    }
  }

  render() {
    const { i, j, game } = this.props

    const logic = new GameLogic(game)
    const board = logic.computeBoard()
    const squareStyle = this.selectionStyle(board[i][j])

    return (
      <View style={squareStyle}>
        <Text> {i} {j} </Text>
      </View>
    )
  }
}

const baseStyle = {
    borderRadius: 4,
    borderWidth: 0.5,
    height: '90.5%',
    width: '90.5%',
}

const empty = {
  backgroundColor: 'white',
  borderColor: 'white',
}

const player1 = {
  backgroundColor: 'steelblue',
  borderColor: 'steelblue',
}

const player2 = {
  backgroundColor: 'firebrick',
  borderColor: 'firebrick',
}

export default connect(mapStateToProps)(Square)