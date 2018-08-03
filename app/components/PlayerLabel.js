import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class PlayerLabel extends Component {

  render() {
    const { player1, player2 } = this.props

    return (
      <View style={styles.container}>
        <View style={[styles.rounded, styles.player1]}/>
        <Text style={styles.textStyle}> {`${player1.avatar} ${player1.username}`} </Text>
        <View style={[styles.rounded, styles.player2]}/>
        <Text style={styles.textStyle}>  {`${player2.avatar} ${player2.username}`} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 12,
    backgroundColor: 'white',
  },
  rounded: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    marginLeft: 12,
    marginRight: 4,
  },
  textStyle: {
    height: 24,
    marginTop: 1
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