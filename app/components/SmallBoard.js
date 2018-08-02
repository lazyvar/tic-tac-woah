import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import Square from './Square'

const mapStateToProps = (state) => ({
  smushed: state.game.smushed
})

class SmallBoard extends Component {

  render() {
    const { i, smushed } = this.props

    if (smushed && smushed[i] !== 0) {
      const playerStyle = smushed[i] === 1 ? styles.player1 : styles.player2

      return (
        <View >
          <View style={[styles.finished, playerStyle]}>  </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Square i={i} j={0} />
            </View>
            <View style={styles.column}>
              <Square i={i} j={1}/>
            </View>
            <View style={styles.column}>
              <Square i={i} j={2}/>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Square i={i} j={3}/>
            </View>
            <View style={styles.column}>
              <Square i={i} j={4}/>
            </View>
            <View style={styles.column}>
              <Square i={i} j={5}/>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Square i={i} j={6}/>
            </View>
            <View style={styles.column}>
              <Square i={i} j={7}/>
            </View>
            <View style={styles.column}>
              <Square i={i} j={8}/>
            </View>
          </View>
        </View>
      )
    }
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
  player1: {
    backgroundColor: 'steelblue',
    borderColor: 'steelblue',
  },
  player2: {
    backgroundColor: 'firebrick',
    borderColor: 'firebrick',
  }
})

export default connect(mapStateToProps)(SmallBoard)