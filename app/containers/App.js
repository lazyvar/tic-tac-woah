import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, Text, PanResponder } from 'react-native'

import TicTacWoahAPI from '../service/TicTacWoahAPI'

export default class App extends Component {

  api = new TicTacWoahAPI()

  state = {

  }

  componentDidMount() {
     // start up code 
  }

  render() {
    return (
      <View style={styles.container}>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

AppRegistry.registerComponent('App', () => App)
