import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import GameLogic from '../game/GameLogic'
import SmallBoard from './SmallBoard'

const mapStateToProps = (state) => ({
  playableSmallBoards: state.game.playableSmallBoards
})

class BigBoard extends Component {

  styleForSmallBoard = (i) => {
    const { playableSmallBoards } = this.props

    if (playableSmallBoards && playableSmallBoards.includes(i)) {
      return styles.playable
    } else {
      return null
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={[styles.column, styles.rightBorder, styles.bottomBorder, this.styleForSmallBoard(0)]}>
            <SmallBoard i={0}/>
          </View>
          <View style={[styles.column, styles.leftBorder, styles.bottomBorder, styles.rightBorder, this.styleForSmallBoard(1)]}>
            <SmallBoard i={1}/>
          </View>
          <View style={[styles.column, styles.leftBorder, styles.bottomBorder, this.styleForSmallBoard(2)]}>
            <SmallBoard i={2}/>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.column, styles.topBorder, styles.rightBorder, styles.bottomBorder, this.styleForSmallBoard(3)]}>
            <SmallBoard i={3}/>
          </View>
          <View style={[styles.column, styles.topBorder, styles.rightBorder, styles.bottomBorder, styles.leftBorder, this.styleForSmallBoard(4)]}>
            <SmallBoard i={4}/>
          </View>
          <View style={[styles.column, styles.leftBorder, styles.topBorder, styles.bottomBorder, this.styleForSmallBoard(5)]}>
            <SmallBoard i={5}/>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.column, styles.topBorder, styles.rightBorder, this.styleForSmallBoard(6)]}>
            <SmallBoard i={6}/>
          </View>
          <View style={[styles.column, styles.leftBorder, styles.topBorder, styles.rightBorder, this.styleForSmallBoard(7)]}>
            <SmallBoard i={7}/>
          </View>
          <View style={[styles.column, styles.leftBorder, styles.topBorder, this.styleForSmallBoard(8)]}>
            <SmallBoard i={8}/>
          </View>
        </View>
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

export default connect(mapStateToProps)(BigBoard)