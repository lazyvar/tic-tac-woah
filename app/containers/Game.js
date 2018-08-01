import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import BigBoard from '../components/BigBoard'

const mapStateToProps = (state) => ({

})

class Game extends Component {

  render() {
    const { game } = this.props

    return (
      <ScrollView>
        <Text> Hello </Text>
        <View style={styles.gameContainer}>
          <BigBoard style={styles.bigBoard}/>
        </View>
        <Text> Your move against </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  gameContainer: {
    width: "100%",
    height: Dimensions.get('window').width
  },
})

export default connect(mapStateToProps)(Game)