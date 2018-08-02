import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import PropTypes from 'prop-types'

import Square from './Square'

export default class SmallBoard extends Component {

  static propTypes = {
    potentialMove: PropTypes.any,
    selectSquare: PropTypes.func.isRequired,
    i: PropTypes.number.isRequired,
    squareStates: PropTypes.array.isRequired,
    boardState: PropTypes.number.isRequired,
    enabled: PropTypes.bool.isRequired,
  }

  configuration = (squareState, i, j) => {
    const { potentialMove, selectSquare } = this.props

    /* if a potential move has been made, display that instead of game state */
    if (potentialMove !== null && potentialMove.i == i && potentialMove.j == j) {
      const iAmPlayer1 = potentialMove.moveNumber % 2 === 0

      if (iAmPlayer1) {
        return {selectionStyle: styles.player1}
      } else {
        return {selectionStyle: styles.player2}
      }
    }

    switch (squareState) {
      case 0:
        return {selectionStyle: styles.empty, onPress: () => { selectSquare(i, j) }}
      case 1:
        return {selectionStyle: styles.player1}
      case 2:
        return {selectionStyle: styles.player2}
    }
  }

  renderRow = (r) => {
    const { i, squareStates, enabled } = this.props

    return (
       <View style={styles.row} key={`smallBoard ${r}`}>
        { 
          [0, 1, 2].map((index) => {
            const j = 3 * r + index
            const { selectionStyle, onPress } = this.configuration(squareStates[j], i, j)

            return ( 
              <View style={styles.column} key={`smallBoard ${r} square ${j}`}>
                <Square i={i} j={j} selectionStyle={selectionStyle} onPress={onPress} enabled={enabled}/>
              </View>
            )
          })
        }
       </View>
    )
  }

  render() {
    const { boardState } = this.props

    /* if boardState has finished render a single full square */
    if (boardState !== 0) {
      const playerStyle = boardState === 1 ? styles.player1 : styles.player2

      return (
        <View >
          <View style={[styles.finished, playerStyle]} />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        {[0, 1, 2].map(this.renderRow)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  finished: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    borderWidth: 1,
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
