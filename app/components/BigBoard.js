import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import GameLogic from '../game/GameLogic'
import SmallBoard from './SmallBoard'

const mapStateToProps = (state) => ({

})

class BigBoard extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={[styles.column, styles.rightBorder, styles.bottomBorder]}>
            <SmallBoard i={0}/>
          </View>
          <View style={[styles.column, styles.leftBorder, styles.bottomBorder, styles.rightBorder]}>
            <SmallBoard i={1}/>
          </View>
          <View style={[styles.column, styles.leftBorder, styles.bottomBorder]}>
            <SmallBoard i={2}/>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.column, styles.topBorder, styles.rightBorder, styles.bottomBorder]}>
            <SmallBoard i={3}/>
          </View>
          <View style={[styles.column, styles.topBorder, styles.rightBorder, styles.bottomBorder, styles.leftBorder]}>
            <SmallBoard i={4}/>
          </View>
          <View style={[styles.column, styles.leftBorder, styles.topBorder, styles.bottomBorder]}>
            <SmallBoard i={5}/>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.column, styles.topBorder, styles.rightBorder]}>
            <SmallBoard i={6}/>
          </View>
          <View style={[styles.column, styles.leftBorder, styles.topBorder, styles.rightBorder]}>
            <SmallBoard i={7}/>
          </View>
          <View style={[styles.column, styles.leftBorder, styles.topBorder]}>
            <SmallBoard i={8}/>
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
    borderTopWidth: 2,
    borderTopColor: 'darkgray',
  },
  leftBorder: {
    borderLeftWidth: 2,
    borderLeftColor: 'darkgray',
  },
  rightBorder: {
    borderRightWidth: 2,
    borderRightColor: 'darkgray',
  },
  bottomBorder: {
    borderBottomWidth: 2,
    borderBottomColor: 'darkgray',
  }
})

export default connect(mapStateToProps)(BigBoard)