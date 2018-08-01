import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Router, Stack, Scene, Modal, ActionConst } from 'react-native-router-flux'

import Login from './Login'
import SignUp from './SignUp'

import TicTacWoahAPI from '../service/TicTacWoahAPI'

const mapStateToProps = (state) => ({

})

class App extends Component {

  api = new TicTacWoahAPI()

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Stack key="welcome">
            <Scene key="login" component={Login} title="Welcome" />
            <Scene key="signUp" component={SignUp} title="Sign Up" />
          </Stack>
        </Scene>
      </Router>
    )
  }

}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps)(App)