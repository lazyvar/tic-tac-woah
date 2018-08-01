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
          <View style={styles.column}>
            <SmallBoard i={0}/>
          </View>
          <View style={styles.column}>
            <SmallBoard i={1}/>
          </View>
          <View style={styles.column}>
            <SmallBoard i={2}/>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <SmallBoard i={3}/>
          </View>
          <View style={styles.column}>
            <SmallBoard i={4}/>
          </View>
          <View style={styles.column}>
            <SmallBoard i={5}/>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <SmallBoard i={6}/>
          </View>
          <View style={styles.column}>
            <SmallBoard i={7}/>
          </View>
          <View style={styles.column}>
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

export default connect(mapStateToProps)(BigBoard)