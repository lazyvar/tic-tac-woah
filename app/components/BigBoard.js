import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import GameLogic from '../game/GameLogic'

import SmallBoard from './SmallBoard'

export default class BigBoard extends Component {

  state = {
    
  }

  componentWillReceiveProps(nextProps) {
    const { gameLogic } = nextProps

    this.setState({gameLogic})
  }

  componentDidMount() {
    const gameLogic = new GameLogic({
      moves: [{move: 0, location: 2}, {move: 1, location: 8}],
      player1: "mack",
      player2: "kcam",
    })

    this.setState({gameLogic})
  }

  render() {
    const { gameLogic } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.column}>
            <SmallBoard />
          </View>
          <View style={styles.column}>
            <SmallBoard />
          </View>
          <View style={styles.column}>
            <SmallBoard />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <SmallBoard />
          </View>
          <View style={styles.column}>
            <SmallBoard />
          </View>
          <View style={styles.column}>
            <SmallBoard />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <SmallBoard />
          </View>
          <View style={styles.column}>
            <SmallBoard />
          </View>
          <View style={styles.column}>
            <SmallBoard />
          </View>
        </View>
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
})
