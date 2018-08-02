import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import PropTypes from 'prop-types'

import GameLogic from '../game/GameLogic'
import SmallBoard from './SmallBoard'

export default class BigBoard extends Component {

  static propTypes = {
    potentialMove: PropTypes.any,
    board: PropTypes.array.isRequired,
    bigBoardSquares: PropTypes.array.isRequired,
    isMyTurn: PropTypes.bool.isRequired,
    playableSmallBoards: PropTypes.array.isRequired,
    selectSquare: PropTypes.func.isRequired,
  }

  boardStyle = (i) => {
    const baseStyle = [styles.column]
    const borderStyle = this.borderStyle(i)
    const playableStyle = this.playableStyle(i)

    return baseStyle.concat(borderStyle).concat(playableStyle)
  }

  borderStyle = (i) => {
    switch (i) {
      case 0: {
        return [styles.rightBorder, styles.bottomBorder]
      }
      case 1: {
        return [styles.leftBorder, styles.bottomBorder, styles.rightBorder]
      }
      case 2: {
        return [styles.leftBorder, styles.bottomBorder]
      }
      case 3: {
        return [styles.topBorder, styles.rightBorder, styles.bottomBorder]
      }
      case 4: {
        return [styles.topBorder, styles.rightBorder, styles.bottomBorder, styles.leftBorder]
      }
      case 5: {
        return [styles.leftBorder, styles.topBorder, styles.bottomBorder]
      }
      case 6: {
        return [styles.topBorder, styles.rightBorder]
      }
      case 7: {
        return [styles.leftBorder, styles.topBorder, styles.rightBorder]
      }
      case 8: {
        return [styles.leftBorder, styles.topBorder]
      }
      default: {
        return []
      }
    }
  }

  playableStyle = (i) => {    
    const { playableSmallBoards } = this.props

    return playableSmallBoards.includes(i) ? [styles.playable] : []
  }

  renderRow = (r) => {
    const { potentialMove, selectSquare, board, isMyTurn, playableSmallBoards } = this.props

    return (
       <View style={styles.row} key={`bigBoard ${r}`}>
        { 
          [0, 1, 2].map((index) => {
            const i = 3 * r + index
            const boardStyle = this.boardStyle(i)
            const squareStates = board[i]
            const boardState = GameLogic.boardState(squareStates)
            const enabled = isMyTurn && playableSmallBoards.includes(i)

            return ( 
              <View style={boardStyle} key={`bigBoard ${r} smallBoard ${i}`}>
                <SmallBoard 
                  i={i}
                  potentialMove={potentialMove}
                  selectSquare={selectSquare}
                  boardState={boardState}
                  squareStates={squareStates}
                  enabled={enabled}
              />
              </View>
            )
          })
        }
       </View>
    )
  }

  render() {
    const { gameState, potentialMove } = this.props

    return (
      <View style={styles.container}>
        {[0, 1, 2].map(this.renderRow)}
      </View>
    )
  }
}

const borderWidth = 1.5
const borderColor = 'darkgray'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 6
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    padding: 6,
  },
  topBorder: {
    borderTopWidth: borderWidth,
    borderTopColor: borderColor,
  },
  leftBorder: {
    borderLeftWidth: borderWidth,
    borderLeftColor: borderColor,
  },
  rightBorder: {
    borderRightWidth: borderWidth,
    borderRightColor: borderColor,
  },
  bottomBorder: {
    borderBottomWidth: borderWidth,
    borderBottomColor: borderColor,
  },
  playable: {
    backgroundColor: 'rgba(255, 225, 0, 0.33)',
  },
})
