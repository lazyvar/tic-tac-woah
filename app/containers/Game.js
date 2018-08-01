import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  game: state.gameList.selectedGame
})

class Game extends Component {

  render() {
    const { game } = this.props
    
    return (
      <ScrollView>
        <Text> {game.player.username} </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps)(Game)