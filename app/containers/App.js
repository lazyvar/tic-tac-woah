import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Router, Stack, Scene, Modal, ActionConst } from 'react-native-router-flux'

import Login from './Login'

import TicTacWoahAPI from '../service/TicTacWoahAPI'

const mapStateToProps = (state) => ({

})

class App extends Component {

  api = new TicTacWoahAPI()

  render() {
    return ( 
      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} title="Welcome"/>
        </Stack>
      </Router>   
    )
  }

}

export default connect(mapStateToProps)(App)