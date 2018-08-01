import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Router, Stack, Scene, Modal, ActionConst } from 'react-native-router-flux'
import { Actions } from 'react-native-router-flux'

import { gameListActionCreators, authActionCreators } from '../redux'

import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import Game from './Game'
import ProfileSettings from './ProfileSettings'

const mapStateToProps = (state) => ({
  currentUser:  state.auth.currentUser
})

const mapDispatchToProps = (dispatch) => {
  return {
    gotoProfileSettings: () => {
      Actions.profileSettings()
    },
    exitGameScreen: () => {
      dispatch(gameListActionCreators.exitGameScreen())
    }
  }
}

class App extends Component {

  render() {
    const { gotoProfileSettings, currentUser, exitGameScreen } = this.props

    return (
      <Router>
        <Stack key="root">
          <Scene 
            key="game" 
            component={Game} 
            backTitle=' '
            onBack={exitGameScreen}
          /> 
        </Stack>
      </Router>
    )
  }

}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)