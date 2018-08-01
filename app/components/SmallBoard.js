import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Square from './Square'

export default class SmallBoard extends Component {

  render() {
    return (
            <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Square />
          </View>
          <View style={styles.column}>
            <Square />
          </View>
          <View style={styles.column}>
            <Square />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Square />
          </View>
          <View style={styles.column}>
            <Square />
          </View>
          <View style={styles.column}>
            <Square />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Square />
          </View>
          <View style={styles.column}>
            <Square />
          </View>
          <View style={styles.column}>
            <Square />
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