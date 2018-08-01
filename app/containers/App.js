import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Router, Stack, Scene, Modal, ActionConst } from 'react-native-router-flux'

import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'

const mapStateToProps = (state) => ({

})

class App extends Component {

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} title="Welcome" />
          <Scene key="signUp" component={SignUp} title="Sign Up" />
          <Scene key="home" component={Home} title="Tic-Tac-Woah" />
        </Stack>
      </Router>
    )
  }

}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps)(App)