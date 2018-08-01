import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import Square from './Square'

const mapStateToProps = (state) => ({

})

class SmallBoard extends Component {

  render() {
    const { i } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Square i={i} j={0} styles={{backgroundColor: 'firebrick'}}/>
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
  square: {

  }
})

export default connect(mapStateToProps)(SmallBoard)