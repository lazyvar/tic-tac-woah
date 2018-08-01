import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import BigBoard from '../components/BigBoard'

const mapStateToProps = (state) => ({
  game: state.gameList.selectedGame
})

class Game extends Component {

  render() {
    const { game } = this.props

    return (
      <ScrollView>
        <Text> Hello </Text>
        <View style={styles.gameContainer}>
          <BigBoard game={game} style={styles.bigBoard}/>
        </View>
        <Text> Your move against </Text>
      </ScrollView>
    )
  }
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  gameContainer: {
    width: width,
    height: width
  },
})

export default connect(mapStateToProps)(Game)